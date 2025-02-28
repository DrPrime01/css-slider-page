const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const carousel = document.querySelector(".carousel");
const listItem = document.querySelector(".carousel .list");
const thumbnail = document.querySelector(".carousel .thumbnail");

nextBtn.onclick = function () {
  console.log("next");
  showSlider("next");
};
prevBtn.onclick = function () {
  showSlider("prev");
};

const timeRunning = 3000;
const timeAutoNext = 7000;
let runTimeout;
let runAutoRun = setTimeout(() => {
  nextBtn.click();
}, timeAutoNext);

function showSlider(type) {
  const itemsSlider = listItem.querySelectorAll(".carousel .list .item");
  const itemsThumbnail = document.querySelectorAll(
    ".carousel .thumbnail .item"
  );

  if (type === "next") {
    listItem.appendChild(itemsSlider[0]);
    thumbnail.appendChild(itemsThumbnail[0]);
    carousel.classList.add("next");
  } else {
    const lastItemPosition = itemsSlider.length - 1;
    listItem.prepend(itemsSlider[lastItemPosition]);
    thumbnail.prepend(itemsThumbnail[lastItemPosition]);
    carousel.classList.add("prev");
  }

  clearTimeout(runTimeout);
  runTimeout = setTimeout(() => {
    carousel.classList.remove("next");
    carousel.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() => {
    nextBtn.click();
  }, timeAutoNext);
}
