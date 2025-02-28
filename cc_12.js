// Task 1
const dashboardContainer = document.getElementById("dashboard");
const dashboardContainerQuery = document.querySelector("#dashboard");

const revenueCard = document.createElement("div");
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");

revenueCard.innerHTML = `
  <h3>Revenue</h3>
  <p>$0</p>
`;

dashboardContainer.appendChild(revenueCard);

// Task 2 
const metricCards = document.querySelectorAll(".metric-card");
const metricCardsArray = [...metricCards];

metricCardsArray.forEach((card) => {
  const title = card.querySelector("h3");
  if (title) {
    title.textContent += " - Updated";
  }

  card.style.backgroundColor = "#e0f7fa"; // Light blue background
});

// Task 3
function addProduct(){
  const productItem = document.createElement("li");
  productItem.setAttribute("class", "product-item");
  productItem.setAttribute("data-product-id", Date.now());

  productItem.textContent = `Product ${document.querySelectorAll(".product-item").length +1}`

  const inventoryList = document.getElementById("inventoryList")
  inventoryList.appendChild(productItem);
}

function removeProduct(){
  const inventoryList = document.getElementById("inventoryList");
  inventoryList.removeChild(productItem);
}
const addProductButton = document.getElementById("addProductButton");
addProductButton.addEventListener("click", addProduct);