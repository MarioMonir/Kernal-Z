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
