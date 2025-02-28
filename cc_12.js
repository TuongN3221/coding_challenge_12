// Task 1
const dashboardContainer = document.getElementById('dashboard');
const dashboardContainerSelect = document.querySelector('dashboard');

const revenueCard = document.createElement(`div`)

revenueCard.setAttribute('class', 'metric-card')
revenueCard.setAttribute('id', 'revenueCard')
revenueCard.innerHTML = `
    <h3>Revenue</h3>
    <p>$0</p>
`;

dashboardContainer.appendChild(revenueCard)

