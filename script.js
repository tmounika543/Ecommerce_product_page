const sliderMainImage = document.getElementById("product-main-image");
const sliderImageList = document.getElementsByClassName("image-list");
const radioButtons = document.querySelectorAll('.radio-buttons input[type="radio"]');

for (let i = 0; i < sliderImageList.length; i++) {
    sliderImageList[i].onclick = function() {
        sliderMainImage.src = sliderImageList[i].src;
        console.log(sliderMainImage.src);
    }
}

radioButtons.forEach((radio, index) => {
    radio.onclick = function() {
        sliderMainImage.src = radio.value;
        console.log(sliderMainImage.src);
    }
});
