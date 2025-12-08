/* Function to open the product popup with the image and text */
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
/* Array to store counts for each product (6 products in total) */
let counts = [0, 0, 0, 0, 0, 0];

// update a specific counter by index
function updateDisplay(index) {
    document.getElementById(`count${index}`).querySelector("h4").textContent = counts[index - 1];
}
/* Function to increase the count of a specific product */
function increase(index) {
    counts[index - 1]++;
    updateDisplay(index);
}

function decrease(index) {
    if (counts[index - 1] > 0) {
        counts[index - 1]--;
        updateDisplay(index);
    }
}
/* Event listener for the Order button in the cart page */
document.querySelector('.button-press').addEventListener('click', () => {
alert("Order Pending!\n your order will be approved in 4 to 7 business days.");
});



