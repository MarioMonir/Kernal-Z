




const teamDiv = document.querySelector(".team");



team.map((member) => {
    let memberDiv = document.createElement("div");
    memberDiv.setAttribute("class", "col-md-3 col-sm-6")
    memberDiv.innerHTML = `
   
    <div class="full team_blog_colum">
      <div class="it_team_img"> <img class="img-responsive" src="images/team/${member.img}" alt="#"> </div>
      <div class="team_feature_head">
        <h4>${member.name}</h4>
      </div>
      <div class="team_feature_social">
        <div class="social_icon">
          <ul class="list-inline">
            <li><a class="fa fa-facebook" href="https://www.facebook.com/${member.facebook}" title="Facebook" target="_blank"></a></li>
            <li><a class="fa fa-twitter" href="https://twitter.com/${member.twitter}" title="Twitter" target="_blank"></a></li>
            <li><a class="fa fa-linkedin" href="https://www.linkedin.com/${member.linkedin}" title="LinkedIn" target="_blank"></a></li>
            <li><a class="fa fa-instagram" href="https://www.instagram.com/${member.instagram}" title="Instagram" target="_blank"></a></li>
          </ul>
        </div>
      </div>
    </div>

              `;
    teamDiv.appendChild(memberDiv);
});
