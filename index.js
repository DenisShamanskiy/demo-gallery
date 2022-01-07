const arrSlides = [
  {
    id: 1,
    name: "BMW",
    img: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3615&q=80",
  },
  {
    id: 2,
    name: "Mercedes",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 3,
    name: "AUDI",
    img: "https://images.unsplash.com/photo-1592847902295-c87f74e6a7f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  },
  {
    id: 4,
    name: "Porsche",
    img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 5,
    name: "Chevrolet",
    img: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2737&q=80",
  },
];

const container = document.querySelector(".container");

window.addEventListener("DOMContentLoaded", function () {
  diplaySlidesItems(arrSlides);
  const slides = document.querySelectorAll(".slide");
  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses();
      slide.classList.add("active");
    });
  }
  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
});

function diplaySlidesItems(arr) {
  let displaySlides = arr.map(function (item) {
    if (item.id === 2) {
      return `<div class="slide active"
      style="background-image: url(${item.img});"
  >
  <h3>${item.name}</h3>
  </div>`;
    } else
      return `<div class="slide" style="background-image: url(${item.img})">
  <h3>${item.name}</h3>
</div>`;
  });
  displaySlides = displaySlides.join("");

  container.innerHTML = displaySlides;
}
