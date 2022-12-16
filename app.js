const imageContainer = document.querySelector("#image-container");
const loader = document.querySelector("#loader");

const photosArray = [];

const count = 30;
const apiurl = `https://jsonplaceholder.typicode.com/photos/?_limit=${count}`;

// loader
function loading() {
  loader.hidden = false;
  imageContainer.hidden = true;
}
function complete() {
  loader.hidden = true;
  imageContainer.hidden = false;
}
// loader

async function getPics() {
  loading();
  const response = await fetch(apiurl);
  let photosArray = await response.json();

  photosArray.forEach((photo) => {
    let image = document.createElement("img");
    image.setAttribute("src", photo.url);
    imageContainer.appendChild(image);
    complete();
  });
}

// scroll
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 1000
  ) {
    getPics();
  }
});
// scroll

getPics();
