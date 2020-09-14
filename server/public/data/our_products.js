let products = [
  { imgName: "1.jpg", productUrl: "#", productName: "Kernelz1" },
  { imgName: "2.jpg", productUrl: "#", productName: "Kernelz2" },
  { imgName: "3.jpg", productUrl: "#", productName: "Kernelz3" },
  { imgName: "4.jpg", productUrl: "#", productName: "Kernelz4" },
  { imgName: "5.jpg", productUrl: "#", productName: "Kernelz5" },
  { imgName: "6.jpg", productUrl: "#", productName: "Kernelz1" },
  { imgName: "7.jpg", productUrl: "#", productName: "Kernelz2" },
  { imgName: "8.jpg", productUrl: "#", productName: "Kernelz1" },
];

const productsDiv = document.querySelector(".products");

console.log(productsDiv);

products.map((product) => {
  let productDiv = document.createElement("div");
  productDiv.setAttribute(
    "class",
    "col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all",
  );
  productDiv.innerHTML = `
        <div class="product_list">
          <div class="product_img"> <img class="img-responsive" src="images/our_products/${product.imgName}" alt=""> </div>
          <div class="product_detail_btm">
            <div class="center">
              <h4><a href=""${product.productUrl}"></a>${product.productName}</h4>
            </div>
          </div>
        </div>
      </div> `;
  productsDiv.appendChild(productDiv);
});
