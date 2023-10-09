let imgElements = [document.querySelector("#swapping-image"), document.querySelector("#swapping-image2")];
let wildSpaceImageCount = 6;

let imageCounter = 1, imageAlternate = 1;
setInterval(() => {
    imgElements[imageAlternate%2].src = `images/wildspace${imageCounter+1}.jpg`

    imgElements[imageAlternate%2].style.opacity = 1;
    imgElements[(imageAlternate+1)%2].style.opacity = 0;

    imageAlternate = ++imageAlternate % imgElements.length;
    imageCounter = ++imageCounter % wildSpaceImageCount;
}, 4000)