import { useEffect, useRef } from 'react';

/**
 * Horizontal, curved branching line-growth animation.
 *
 * This replaces the earlier straight-segment port of `width-animation.astro`
 * with a smoother, sparser variant designed to echo the soft, rounded blob
 * shapes already used in the hero's decorative background SVG:
 *
 * - Curved instead of straight: each branch keeps a short trail of recent
 *   points and is rendered with `quadraticCurveTo` midpoint-smoothing
 *   (the standard "smooth a polyline" trick), so every stroke reads as a
 *   gentle arc rather than a jagged zig-zag.
 * - Continuously wavy: each branch's vertical drift follows a slow sine
 *   wave (with a random phase per branch) instead of moving in a straight
 *   line, so trunks curve gently on their own even before any fork happens.
 * - Ramifies less: forking is rarer (higher probability threshold), needs
 *   more distance between forks, and is capped at a much lower branch
 *   count than the previous version — a handful of calm, sweeping curves
 *   instead of a dense thicket of lines.
 * - When a fork does happen, the child branch inherits the parent's
 *   current direction and eases toward its new target angle over time
 *   (rather than snapping to it), so forks themselves look like smooth
 *   curls rather than sharp corners.
 * - Fills its own *parent element* via a ResizeObserver (works in any
 *   container) and starts drawing immediately on mount.
 * - Runs once per growth cycle: once every branch has grown off the right
 *   edge of the canvas, the animation stops and the final frame stays
 *   static — it does not reseed or loop on its own.
 * - Restarts on two triggers, so the moment feels fresh again instead of
 *   only ever playing once per full page load:
 *     1. Scrolling the hero section back into view (IntersectionObserver
 *        on the hero `<section>`), e.g. after scrolling down and back up.
 *     2. A `hero-animation-restart` custom window event, dispatched by
 *        the header logo/home link on click.
 */
export default function LineAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const ctx = canvas.getContext('2d');

    // ─── Configuration ──────────────────────────────
    const palette = [
      'rgba(203,195,227,0.55)', // --pink-rose
      'rgba(199,199,227,0.5)',  // --soft-lavender
      'rgba(227,217,195,0.55)', // --accent
      'rgba(159,152,136,0.4)',  // --earthy
      'rgba(140,140,159,0.32)', // --dark
    ];
    const lineWidth = 3;
    const speed = 3.2;                 // horizontal travel speed
    const waveAmplitude = 0.55;        // how strongly branches curve on their own
    const waveFrequency = 0.012;       // how tight the sine wave is
    const turnEase = 0.035;            // how gradually a branch eases toward its target angle
    const forkProbability = 0.985;     // per-frame chance check (higher = rarer forks)
    const maxBranches = 22;            // hard cap, keeps things sparse
    const minDistanceBeforeFork = 170; // px a branch must travel before it can fork again
    const forkAngleRange = 26;         // degrees, gentler than a sharp 45°
    const trailLength = 5000;          // generous cap, branches leave canvas long before this

    let branches = [];
    let animationId = null;
    let running = false;

    function randomColor() {
      return palette[Math.floor(Math.random() * palette.length)];
    }

    function makeBranch(x, y, dy, phase) {
      return {
        points: [{ x, y }],
        dy,
        targetDy: dy,
        phase,
        distanceSinceFork: 0,
        color: randomColor(),
      };
    }

    function seed() {
      const h = canvas.height;
      branches = [makeBranch(canvas.width * 0.01, h / 2, 0, Math.random() * Math.PI * 2)];
    }

    function resizeCanvas() {
      const { width, height } = parent.getBoundingClientRect();
      // Guard against a zero-size parent (e.g. mid-layout, display:none)
      if (width === 0 || height === 0) return;
      canvas.width = width;
      canvas.height = height;
      seed();
    }

    function smoothStroke(points) {
      if (points.length < 2) return;
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);

      for (let i = 1; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }

      const last = points[points.length - 1];
      ctx.lineTo(last.x, last.y);
      ctx.stroke();
    }

    function step() {
      if (!running) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      const newBranches = [];

      branches.forEach((branch) => {
        const last = branch.points[branch.points.length - 1];

        // Gentle self-curving: drift toward a slowly-shifting sine target,
        // eased in rather than snapped to, so the line arcs smoothly.
        const wave = Math.sin((last.x + branch.phase) * waveFrequency) * waveAmplitude;
        branch.targetDy = branch.targetDy * 0.985 + wave * 0.015; // slow wandering target
        branch.dy += (branch.targetDy - branch.dy) * turnEase;

        const x = last.x + speed;
        const y = last.y + branch.dy;
        branch.points.push({ x, y });
        if (branch.points.length > trailLength) branch.points.shift();

        branch.distanceSinceFork += speed;

        const withinCanvas = x < canvas.width - 4;
        const pastEdge = x > canvas.width * 0.06;
        const readyToFork = branch.distanceSinceFork > minDistanceBeforeFork;
        const roomForMore = branches.length + newBranches.length < maxBranches;

        if (
          withinCanvas &&
          pastEdge &&
          readyToFork &&
          roomForMore &&
          Math.random() > forkProbability
        ) {
          const angleDeg = (Math.random() * 2 - 1) * forkAngleRange;
          const angleRad = (angleDeg * Math.PI) / 180;
          const forkTarget = branch.dy + Math.tan(angleRad) * speed * 4;

          newBranches.push(
            Object.assign(makeBranch(x, y, branch.dy, branch.phase + Math.random() * 4), {
              targetDy: forkTarget,
              color: branch.color,
            })
          );

          branch.distanceSinceFork = 0;
        }
      });

      branches.push(...newBranches);

      branches.forEach((branch) => {
        ctx.strokeStyle = branch.color;
        smoothStroke(branch.points);
      });

      const stillGrowing = branches.some((b) => {
        const last = b.points[b.points.length - 1];
        return last.x < canvas.width;
      });

      if (!stillGrowing) {
        // Growth cycle complete: stop here and leave the final frame
        // static until something explicitly restarts it (see below).
        running = false;
        return;
      }

      animationId = requestAnimationFrame(step);
    }

    function restart() {
      if (animationId) cancelAnimationFrame(animationId);
      resizeCanvas(); // re-measures the container and reseeds
      running = true;
      animationId = requestAnimationFrame(step);
    }

    resizeCanvas();
    running = true;
    animationId = requestAnimationFrame(step);

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(parent);

    // Trigger 1: replay whenever the hero section scrolls back into view
    // (e.g. the visitor scrolled down and back up). Guarded by `!running`
    // so it doesn't double-fire while a cycle is already in progress.
    const heroSection = canvas.closest('section') || parent;
    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !running) {
            restart();
          }
        });
      },
      { threshold: 0.4 }
    );
    visibilityObserver.observe(heroSection);

    // Trigger 2: replay whenever the header logo / home link is clicked,
    // even if the hero was already in view (so clicking home always
    // feels like a fresh start, not just a no-op scroll).
    const handleRestartEvent = () => restart();
    window.addEventListener('hero-animation-restart', handleRestartEvent);

    return () => {
      running = false;
      if (animationId) cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener('hero-animation-restart', handleRestartEvent);
    };
  }, []);

  return <canvas className="intro-canvas" ref={canvasRef} aria-hidden="true" />;
}
