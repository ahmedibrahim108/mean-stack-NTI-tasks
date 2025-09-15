const para = document.getElementById("par1");
let storedData = " ";

function whenSubmited() {
  const productName = document.getElementById("Product_name").value;
  const productPrice = document.getElementById("Product_price").value;
  const productDescription = document.getElementById(
    "Product_description"
  ).value;

  storedData = `Name: ${productName} price: ${productPrice} description ${productDescription}`;
  console.log(storedData);

  para.innerText = storedData;

  // document.write(
  //   ` <h1>Name: ${productName} price: ${productPrice} description ${productDescription} </h1>`
  // );

  // window.alert(
  //   storedData
  // );
}
