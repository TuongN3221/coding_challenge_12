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