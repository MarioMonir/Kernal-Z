
const clientsDiv = document.querySelector(".brand_list");



clientsImages.map((clientImg) => {
    let clientDiv = document.createElement("li");

    clientDiv.innerHTML = `
    <li><img height="200" width="200" src="images/clients/${clientImg}" alt="#" /></li>
              `;
    clientsDiv.appendChild(clientDiv);
});
