const triggers = document.querySelectorAll("[data-lightbox-trigger]");
const lightbox = document.querySelector("[data-lightbox]");
const closeButton = document.querySelector("[data-lightbox-close]");
const lightboxImage = lightbox?.querySelector(".lightbox-image");

if (triggers.length && lightbox && closeButton && lightboxImage) {
  let activeTrigger = null;

  const openLightbox = (trigger) => {
    const sourceImage = trigger.querySelector("img");

    if (sourceImage) {
      lightboxImage.src = sourceImage.currentSrc || sourceImage.src;
      lightboxImage.alt = sourceImage.alt;
    }

    activeTrigger = trigger;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    closeButton.focus();
  };

  const closeLightbox = () => {
    lightbox.hidden = true;
    document.body.style.overflow = "";
    activeTrigger?.focus();
  };

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-lightbox-trigger]");

    if (trigger) openLightbox(trigger);
  });
  closeButton.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
  });
}
