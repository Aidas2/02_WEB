const img = document.querySelectorAll("img");
const body = document.querySelector("body");
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "cover";

const randomImg = img[Math.floor(Math.random() * img.length)];
body.style.backgroundImage = "url('" + randomImg.attributes.src.value + "')";


for (let i of img) {
    i.addEventListener('click', (e) => {
        body.style.backgroundImage = "url('" + e.target.attributes.src.value + "')";
        //body.style.backgroundPosition = "center";

    });
}
