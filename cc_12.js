// Task 1
//Selects the <div> and <p> nodes
const dashboardContainer = document.getElementById("dashboard");
const dashboardContainerQuery = document.querySelector("#dashboard");

const revenueCard = document.createElement("div");// Creates the div element for metric card

//Sets the attributes for the metric card
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");

revenueCard.innerHTML = `
  <h3>Revenue</h3>
  <p>$0</p>
`;//Populates the card and title with a placeholder value

dashboardContainer.appendChild(revenueCard);// Appends the new metric to the dashboard container

// Task 2 
const metricCards = document.querySelectorAll(".metric-card");
const metricCardsArray = [...metricCards];// Converts nodelist to array by spread operator

metricCardsArray.forEach((card) => {
  const title = card.querySelector("h3");
  if (title) {
    title.textContent += " - Updated";
  }
  // Changes the style (background color)
  card.style.backgroundColor = "#e0f7fa"; // Light blue background
});// Changes the card's content and style with .forEach()

// Task 3
// Function to add a new product to inventorty list
function addProduct(){
  const productItem = document.createElement("li");//Creates new <li> element
  productItem.setAttribute("class", "product-item");
  productItem.setAttribute("data-product-id", Date.now());//Unique ID based on time

  productItem.textContent = `Product ${document.querySelectorAll(".product-item").length +1}`;// Sets the text content ("Product 1")

  productItem.addEventListener("click", () => removeProduct(productItem));// Removes the item when clicked

  // Adds new product item to inventory list
  const inventoryList = document.getElementById("inventoryList")
  inventoryList.appendChild(productItem);
}

// Removes a specific product item from inventory list
function removeProduct(productItem){
  const inventoryList = document.getElementById("inventoryList");
  inventoryList.removeChild(productItem);
}
const addProductButton = document.getElementById("addProductButton");//Adds a button to html file
addProductButton.addEventListener("click", addProduct);// Function for the button to work

// Task 4
const customerSection = document.getElementById("customerSection");
customerSection.addEventListener("click", () => {
  console.log("Customer section clicked");
});

//Adds event listeners to each customer card
const customerCards = document.querySelectorAll(".customer-card");
customerCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    console.log("Customer card clicked");

    // Prevent event handler from triggering
    event.stopPropagation();
  });
});