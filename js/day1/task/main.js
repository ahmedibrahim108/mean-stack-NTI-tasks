const para = document.getElementById("par1");

function whenSubmited() {
  const productName = document.getElementById("Product_name").value;
  const productPrice = document.getElementById("Product_price").value;
  const productDescription = document.getElementById(
    "Product_description"
  ).value;

  console.log(
    `Name: ${productName} price: ${productPrice} description ${productDescription}`
  );

  para.innerText = `Name: ${productName} price: ${productPrice} description ${productDescription}`;

  // document.write(
  //   ` <h1>Name: ${productName} price: ${productPrice} description ${productDescription} </h1>`
  // );

  // window.alert(
  //   `Name: ${productName} price: ${productPrice} description ${productDescription}`
  // );
}
