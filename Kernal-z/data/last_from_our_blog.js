let blogs = [
  {
    imgName: "post-01.jpg",
    date: "April 16, 2018",
    title: "Kernelz1",
    paragraph:
      "orem ipsum dolor sit amet, consectetur quam justo, pretium adipiscing elit. Vestibulum quam justo, pretium eu tempus ut, .. ",
  },
  {
    imgName: "post-02.jpg",
    date: "April 16, 2018",
    title: "Kernelz1",
    paragraph:
      "orem ipsum dolor sit amet, consectetur quam justo, pretium adipiscing elit. Vestibulum quam justo, pretium eu tempus ut, .. ",
  },
  {
    imgName: "post-03.jpg",
    date: "April 16, 2018",
    title: "Kernelz1",
    paragraph:
      "orem ipsum dolor sit amet, consectetur quam justo, pretium adipiscing elit. Vestibulum quam justo, pretium eu tempus ut, .. ",
  },
  {
    imgName: "post-04.jpg",
    date: "April 16, 2018",
    title: "Kernelz1",
    paragraph:
      "orem ipsum dolor sit amet, consectetur quam justo, pretium adipiscing elit. Vestibulum quam justo, pretium eu tempus ut, .. ",
  },
  {
    imgName: "post-05.jpg",
    date: "April 16, 2018",
    title: "Kernelz1",
    paragraph:
      "orem ipsum dolor sit amet, consectetur quam justo, pretium adipiscing elit. Vestibulum quam justo, pretium eu tempus ut, .. ",
  },
  {
    imgName: "post-06.jpg",
    date: "April 16, 2018",
    title: "Kernelz1",
    paragraph:
      "orem ipsum dolor sit amet, consectetur quam justo, pretium adipiscing elit. Vestibulum quam justo, pretium eu tempus ut, .. ",
  },
];

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
