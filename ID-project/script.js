function openPopup(imageSrc, text) {
    document.getElementById("popup-img").src = imageSrc;
    document.getElementById("popup-text").textContent = text;
    document.getElementById("popup").style.display = "flex";
}

// Close popup when clicking outside the content box
document.getElementById("popup").addEventListener("click", function(e) {
    if (e.target === this) {
        this.style.display = "none";
    }
});
