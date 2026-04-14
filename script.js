// SCROLL NAVIGATION
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({
    behavior:'smooth'
  });
}


// FOOD DATABASE
const foods = {
veg:[
{name:"Paneer Curry",price:120,img:"https://via.placeholder.com/150"},
{name:"Veg Biryani",price:100,img:"https://via.placeholder.com/150"}
],

nonveg:[
{name:"Chicken Biryani",price:150,img:"https://via.placeholder.com/150"},
{name:"Fish Fry",price:180,img:"https://via.placeholder.com/150"}
],

drinks:[
{name:"Coke",price:40,img:"https://via.placeholder.com/150"},
{name:"Coffee",price:30,img:"https://via.placeholder.com/150"}
],

dessert:[
{name:"Ice Cream",price:70,img:"https://via.placeholder.com/150"},
{name:"Cake",price:90,img:"https://via.placeholder.com/150"}
]
};


// SHOW MENU ITEMS
function showCategory(cat){
const container=document.getElementById("foodContainer");
container.innerHTML="";

foods[cat].forEach(item=>{
const card=document.createElement("div");
card.className="card";

card.innerHTML=`
<img src="${item.img}">
<h4>${item.name}</h4>
<p>₹ ${item.price}</p>
<button onclick="addToCart(${item.price})">Add</button>
`;

container.appendChild(card);
});
}


// CART
let total=0;

function addToCart(price){
total+=price;
document.getElementById("total").innerText=total;
}

const dots = document.querySelectorAll(".side-nav a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {
  const top = window.scrollY;
  const offset = section.offsetTop - 200;
  const height = section.offsetHeight;

  if(top >= offset && top < offset + height){
    current = section.getAttribute("id");
  }
});

dots.forEach(dot=>{
  dot.classList.remove("active");
  if(dot.getAttribute("href") === "#" + current){
    dot.classList.add("active");
  }
});

});

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){
      header.classList.add("header-hide");
  } else {
      header.classList.remove("header-hide");
  }

});

function openPage(page){
  window.location.href = page;
}

function checkAvailability(){

  let time = document.getElementById("time").value;

  if(time === ""){
    alert("Select time first!");
    return;
  }

  // Available slots
  let availableSlots = [
    "12:00",
    "13:00",
    "14:00",
    "18:00",
    "19:00",
    "20:00"
  ];

  if(availableSlots.includes(time)){
    showPopup();
  }else{
    alert("❌ Selected time not available. Try 12:00–14:00 or 18:00–20:00");
  }
}

/* SHOW POPUP */
function showPopup(){
  let popup = document.getElementById("popup");
  popup.style.display = "flex";
  popup.classList.add("show");
}

/* CLOSE POPUP */
function closePopup(){
  let popup = document.getElementById("popup");
  popup.style.display = "none";
  popup.classList.remove("show");
}

function makePayment(){
  alert("💳 Payment Successful!\nYour table is booked.");

  closePopup();
}

function openRegister(){
  window.location.href = "register.html";
}

window.onload = function(){

  let user = localStorage.getItem("loggedUser");

  let registerBtn = document.getElementById("registerBtn");
  let loginBtn = document.getElementById("loginBtn");
  let logoutBtn = document.getElementById("logoutBtn");

  if(user){

    registerBtn.style.display = "none";
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";

    typeEffect("Hi, " + user);

  }else{

    registerBtn.style.display = "inline-block";
    loginBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";

    document.getElementById("userDisplay").style.display = "none";
  }
};

/* TYPING EFFECT */
function typeEffect(text){
  let i = 0;
  let speed = 50;

  let userText = document.getElementById("userText");
  userText.innerHTML = "";

  function typing(){
    if(i < text.length){
      userText.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}
function openLogin(){
  window.location.href = "login.html";
}

function goProfile(){
  alert("Profile page coming soon 👤");
}

function logout(){
  localStorage.removeItem("loggedUser");
  alert("Logged out ✅");
  location.reload();
}