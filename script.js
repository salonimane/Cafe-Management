const exchangeRate = 83; // 1 USD ≈ ₹83 
 
const menuItems = [
  { name: "Espresso", price: 2.5, image: "images/espresso.jpg" },
  { name: "Latte", price: 3.5, image: "images/latte.jpg" },
  { name: "Cappuccino", price: 3.0, image: "images/cappuccino.jpg" },
  { name: "Mocha", price: 3.75, image: "images/mocha.jpeg" },
  { name: "Tea", price: 2.0, image: "images/tea.jpeg" },
  { name: "Croissant", price: 2.25, image: "images/croissant.jpeg" }
]; 
let order = []; 
 
function renderMenu() { 
  const menuDiv = document.getElementById("menu"); 
  menuDiv.innerHTML = ""; // Clear menu if already rendered 
 
  menuItems.forEach((item, index) => { 
    const itemDiv = document.createElement("div"); 
    itemDiv.className = "menu-item"; 
    const inrPrice = item.price * exchangeRate; 
 
    itemDiv.innerHTML = ` 
      <img src="${item.image}" alt="${item.name}" class="menu-img" /> 
      <h3>${item.name}</h3> 
      <p>₹${inrPrice.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</p> 
      <button onclick="addToOrder(${index})">Add</button> 
    `; 
    menuDiv.appendChild(itemDiv); 
  }); 
} 
 
function addToOrder(index) { 
  order.push(menuItems[index]); 
  updateOrderSummary(); 
} 
 
function updateOrderSummary() { 
  const summaryDiv = document.getElementById("order-summary"); 
  summaryDiv.innerHTML = ""; 
  let total = 0; 
 
  order.forEach(item => { 
    const inrPrice = item.price * exchangeRate; 
    const itemElement = document.createElement("p"); 
    itemElement.textContent = `${item.name} - ₹${inrPrice.toLocaleString("en-IN", { 
minimumFractionDigits: 2 })}`; 
    summaryDiv.appendChild(itemElement); 
    total += inrPrice; 
  }); 
 
  document.getElementById("total").textContent = total.toLocaleString("en-IN", { 
minimumFractionDigits: 2 }); 
} 
 
function clearOrder() { 
  order = []; 
  updateOrderSummary(); 
} 
 
// Initialize menu on load 
renderMenu();