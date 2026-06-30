const NAV_OFFSET = 72; // height of fixed navbar
const DURATION = 750; // ms

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

interface SmoothScrollOptions {
  replaceHistory?: boolean;
}

/**
 * Smoothly scrolls to an in-page section (hash like "#about") with a custom
 * easing curve, navbar offset, and a brief highlight pulse on arrival —
 * creating a polished "page transition" feel on a single-page site.
 */
export function smoothScrollTo(hash: string, options?: SmoothScrollOptions) {
  if (typeof window === "undefined") return;
  const id = hash.replace("#", "");
  const target = document.getElementById(id);
  if (!target) return;

  const replaceHistory = options?.replaceHistory ?? true;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const startY = window.scrollY;
  const targetY =
    target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  const distance = targetY - startY;

  const finish = () => {
    if (replaceHistory) {
      history.replaceState(null, "", hash);
    }
    target.classList.add("section-arrive");
    window.setTimeout(() => target.classList.remove("section-arrive"), 900);
  };

  if (reduceMotion || Math.abs(distance) < 4) {
    window.scrollTo(0, targetY);
    finish();
    return;
  }

  let start: number | null = null;
  const step = (timestamp: number) => {
    if (start === null) start = timestamp;
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / DURATION, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      finish();
    }
  };
  requestAnimationFrame(step);
}

/** Click handler for anchor links that triggers the smooth transition. */
export function handleAnchorClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  hash: string,
  onDone?: () => void,
) {
  if (!hash.startsWith("#")) return;
  e.preventDefault();
  smoothScrollTo(hash);
  onDone?.();
}
