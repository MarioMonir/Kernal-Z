
const opnionsDiv = document.querySelector(".clients-opnion");

clientsOpinion.map((op, index) => {
    let opinionDiv = document.createElement("div");
    let active
    index == 0 ? active = 'active' : active = '';

    opinionDiv.setAttribute("class", `carousel-item  ${active}`)
    opinionDiv.innerHTML = `
                  <div class="testimonial-container">
                    <div class="testimonial-content"> ${op.opinion} </div>
                    <div class="testimonial-photo"> <img src="images/what_clients_says/${op.img}"
                        class="img-responsive" alt="#" width="150" height="150"> </div>
                    <div class="testimonial-meta">
                      <h4>${op.name}</h4>
                      <span class="testimonial-position">CFO, Tech NY</span>
                    </div>
                  </div>
              `;
    opnionsDiv.appendChild(opinionDiv);
});
