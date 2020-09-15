let clientsImages = [
    '1200px-Ministry_of_islamic_affairs_in_saudi_arabia_Logo.svg.png',
    '1200px-Ministry_of_islamic_affairs_in_saudi_arabia_Logo.svg.png',
    '1200px-Royal_Saudi_Air_Defense_Forces_Logo2.svg.png',
    '345110.jpg'
];

const clientsDiv = document.querySelector(".brand_list");



clientsImages.map((clientImg) => {
    let clientDiv = document.createElement("li");

    clientDiv.innerHTML = `
    <li><img width="300px" src="images/clients/${clientImg}" alt="#" /></li>
              `;
    clientsDiv.appendChild(clientDiv);
});
