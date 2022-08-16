const nextbtn = document.querySelector(".next");
const prevbtn = document.querySelector(".prev");
const imagecomp = document.querySelector(".image-container");
const imagesNum = document.querySelectorAll("img");
const backImage = document.querySelector("body");

let currentImage = 1;
let clickOut;
nextbtn.addEventListener("click", () => {
  currentImage++;
  clearTimeout(clickOut);
  updateImage();
});
prevbtn.addEventListener("click", () => {
  currentImage--;
  clearTimeout(clickOut);
  updateImage();
});
updateImage();
function updateImage() {
  if (currentImage > imagesNum.length) {
    currentImage = 1;
  } else if (currentImage < 1) {
    currentImage = imagesNum.length;
  }
  imagecomp.style.transform = `translateX(-${(currentImage - 1) * 500}px)`;
  backImage.style.backgroundImage = `url(${imagesNum[currentImage - 1].src})`;
  backImage.style.backgroundRepeat = "no-repeat";
  backImage.style.backgroundSize = "cover";

  clickOut = setTimeout(() => {
    currentImage++;
    updateImage();
  }, 4000);
}
