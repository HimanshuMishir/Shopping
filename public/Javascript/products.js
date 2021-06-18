/* fetch("https://adminfilesupload.herokuapp.com/api/getproductinfo")
  .then((res) => res.json())
  .then((products) => {
    console.log(products);
  }); */

// console.log("Hello");
fetch("https://adminfilesupload.herokuapp.com/api/getproductinfo")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })

  .then((response) => {
    //console.log(respons);
    response.forEach((element) => {
      console.log(element);
      const productDivContainer = document.querySelector(".row");
      const productDiv = document.createElement("div");
      productDiv.className = "col-1";
      const productLink = document.createElement('a');
      productLink.href = `./productPage.html?_id=${element._id}`
      const productImage = document.createElement("img");
      productImage.src = `https://adminfilesupload.herokuapp.com/images/${element.product_images_path[0]}`;
      productImage.className = "productImage";
      productLink.appendChild(productImage);
      productDiv.appendChild(productLink);
      const productInfo = document.createElement("div");
      productInfo.className = "productInfo";
      const productTitle = document.createElement("h1");
      productTitle.innerHTML = element.product_name;
      productInfo.appendChild(productTitle);
      const productPrice = document.createElement("p");
      productPrice.innerHTML = `₹ ${element.product_specific.product[0].price}`;
      productInfo.appendChild(productPrice);
      //console.log();
      const productAddToCart = document.createElement("div");
      productAddToCart.innerHTML = "Add to Cart";
      productAddToCart.className = "addToCart";
      productAddToCart.id = element._id;
      const product_id = document.createElement('input');
      product_id.type = 'hidden';
      product_id.value= 'element._id';
      productAddToCart.appendChild(product_id);
      // console.log(element._id);

      productDiv.appendChild(productInfo);
      productDiv.appendChild(productAddToCart);
      productDivContainer.appendChild(productDiv);
    });
  })
  .catch((err) => console.log(err));
