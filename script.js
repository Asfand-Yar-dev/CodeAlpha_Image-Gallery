const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(image => {
    image.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = image.src;
    });
});

document.getElementById("lightbox").addEventListener("click", (event) => {
    if (event.target !== lightboxImg) {
        closeLightbox();
    }
});

function closeLightbox() {
    lightbox.style.animation = "fadeOut 0.3s ease-in-out";
    setTimeout(() => {
        lightbox.style.display = "none";
        lightbox.style.animation = "";
    }, 300);
}
