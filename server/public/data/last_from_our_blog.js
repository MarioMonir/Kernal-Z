const blogsDiv = document.querySelector(".blogs");

console.log(productsDiv);

blogs.map((blog) => {
  let blogDiv = document.createElement("div");
  blogDiv.setAttribute("class", "col-md-4");
  blogDiv.innerHTML = `
  <div class="full blog_colum">
    <div class="blog_feature_img">
      <img src="images/it_service/${blog.imgName}" alt="#" />
    </div>
    <div class="post_time">
      <p><i class="fa fa-clock-o"></i>${blog.date}</p>
    </div>
    <div class="blog_feature_head">
      <h4>${blog.title}</h4>
    </div>
    <div class="blog_feature_cont">
      <p>${blog.paragraph}</p>
    </div>
  </div>
      `;
      blogsDiv.appendChild(blogDiv);
});

;
