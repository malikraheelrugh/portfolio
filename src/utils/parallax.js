// Lightweight parallax utility.
// Usage: give elements `data-parallax-speed="0.2"` (positive moves slower, negative inverse).
export function initParallax() {
  if (typeof window === "undefined") return;
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
    return;

  const nodes = Array.from(
    document.querySelectorAll("[data-parallax-speed]")
  ).map((el) => ({
    el,
    speed: parseFloat(el.getAttribute("data-parallax-speed")) || 0.2,
    current: 0,
    target: 0,
  }));

  if (!nodes.length) return { destroy: () => {} };

  let ticking = false;

  const onScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    nodes.forEach((n) => {
      // smaller speed => element moves less (background-like)
      n.target = scrollY * n.speed;
    });
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  const update = () => {
    nodes.forEach((n) => {
      n.current += (n.target - n.current) * 0.08;
      // Use translate3d for GPU acceleration
      n.el.style.transform = `translate3d(0, ${-n.current}px, 0)`;
      n.el.style.willChange = "transform";
    });
    ticking = false;
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  // initialize positions
  onScroll();

  return {
    destroy() {
      window.removeEventListener("scroll", onScroll);
      nodes.forEach((n) => {
        n.el.style.transform = "";
        n.el.style.willChange = "";
      });
    },
  };
}
