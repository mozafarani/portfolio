/** Smooth-scroll to a section by id without changing the URL. */
export function scrollToSectionId(id) {
  if (typeof document === "undefined") return;
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

/**
 * Open home and scroll to a section. On home already, only scrolls.
 * Returns a cleanup function to remove any pending route listener.
 */
export function navigateHomeAndScroll(router, sectionId) {
  if (router.pathname === "/") {
    scrollToSectionId(sectionId);
    return () => {};
  }

  const onComplete = () => {
    router.events.off("routeChangeComplete", onComplete);
    requestAnimationFrame(() => scrollToSectionId(sectionId));
  };

  router.events.on("routeChangeComplete", onComplete);
  void router.replace("/");

  return () => {
    router.events.off("routeChangeComplete", onComplete);
  };
}
