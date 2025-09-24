

/// DOM ( Document Object Model)


/**
 * 1) Selectors
 * 2) Style 
 * 3) Event
 */
 
// 1) getElementById
// var elm=document.getElementById('container');
// console.log(elm);
// elm.innerHTML = "hello"
// 2) getElementsByClassName (HTMLCollection)
// var items = document.getElementsByClassName('item');
// console.log(items); 

// items.push("<span>test</span>")
// console.log(items); // error

// for (var i=0 ;i<items.length; i++){
//     items[i].innerHTML = 1+ i;
// }
//  var itemsArr=Array.from(items);
// itemsArr.push("<span>test</span>");
// console.log(itemsArr);

// 3) getElementsByTagName (HTMLCollection)
// var items=document.getElementsByTagName('div');
// console.log(items);

// 4) getElementsByName (NodeList)
// var inputs=document.getElementsByName('fname');
// console.log(inputs);

// console.log("inner html >> ",document.getElementById('container').innerHTML);
// console.log("inner text >> ",document.getElementById('container').innerText);

// 5) querySelector

// var item =document.querySelector('.item');
// console.log(item);

// 6) querySelectorAll  >> NodeList 
// var items = document.querySelectorAll('.item');
// console.log(items);

// var indexEl = items.length-1;
// console.log(items[indexEl]);

// 7) document.body
// var body =  document.body ;
// console.log(body);

// 8) document.title
// console.log( document.title);
// document.title = "about us"


//////////////////////// 2 STYLES ////////////////////

// var subTitleEl = document.getElementById('subTitle');

// subTitleEl.style.background = "red" ;
// subTitleEl.style.color = "#fab";
// subTitleEl.style.textAlign ="center";
// subTitleEl.style.padding = "20px";

// subTitleEl.style.cssText = `
//     color : #fff;
//     font-size : 40px;
//     background-color : #09e;
//     padding: 25px;

// `
// subTitleEl.classList.add('product','productTwo');

// subTitleEl.classList.remove('product');
// function toggleClassByJs(){
//     subTitleEl.classList.toggle('product');
// }

// var elm =document.getElementById("subTitle");
// elm.classList.replace('productTwo','product')
// subTitleEl.classList.replace('product','productTwo')

// var flag =true

// function fun1(name){
//     if(flag){
//         elm.classList.replace('product','productTwo');
//     }else{
//         elm.classList.replace('productTwo','product');
//     }
//     flag = ! flag ;
//     console.log(name);
    
// }

// var btnn1 =document.querySelector("#bbtn");

// btnn1.addEventListener('click',function(e){
//     fun1("mo")
// });




///////////////

// ========== 1. Click Event ==========
// function showMessage(name ){
//     console.log(`welcome ${name}`);
    
// }
// var clickButton = document.getElementById("clickButton");

// clickButton.addEventListener("dblclick", function(){
//     showMessage("samy")
// });

// ========== 2. Mouse Events ==========
// let hoverDiv = document.getElementById("hoverDiv");

// hoverDiv.addEventListener("mouseover", function() {
//   hoverDiv.style.backgroundColor = "yellow";  // Change color on hover
// });

// hoverDiv.addEventListener("mouseout", function() {
//   hoverDiv.style.backgroundColor = "lightblue";  // Revert color
// });

// ========== 3. Keydown Event ==========
// let inputField = document.getElementById("myInput");

// inputField.addEventListener("keydown", function(event) {
//   console.log(`You pressed the key: ${event.key}`);
//   if (event.key == 'Alt') {
//     console.log("test");
//   }
// });

// ========== 4. Submit Event ==========
// var form = document.getElementById("myForm");
// var userName = document.getElementById("username");

// form.addEventListener("submit", function(event) {

//     event.preventDefault();  // Prevent form submission
//     //   alert("Form Submitted!");
//     console.log(userName.value);

// });

// ========== 5. Change Event ==========
let selectElement = document.getElementById("mySelect");

selectElement.addEventListener("change", function() {
//   alert(`You selected: ${selectElement.value}`);
console.log(selectElement.value);

});


// ========== 6. Focus and Blur Events ==========
// var usernameField = document.getElementById("usernameField");

// usernameField.addEventListener("focus", function() {
//   console.log("Input field focused");
// });

// usernameField.addEventListener("blur", function() {
//   console.log("Input field lost focus");
// });

