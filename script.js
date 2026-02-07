// SLIDER
let slides = document.querySelectorAll(".slide");
let index = 0;

document.getElementById("next").onclick = () => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
};

document.getElementById("prev").onclick = () => {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
};

// CART
let total = 0;

function addToCart(price){
  total += price;
  document.getElementById("total").innerText = total;
}
