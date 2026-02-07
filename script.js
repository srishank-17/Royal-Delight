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
