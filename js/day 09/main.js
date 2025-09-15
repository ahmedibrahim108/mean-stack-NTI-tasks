let URL = "https://jsonplaceholder.typicode.com/posts";

// Instance
let xhr = new XMLHttpRequest();

//Open
xhr.open("GET", URL);

//Event
xhr.addEventListener("load", () => {
  try {
    if (xhr.status >= 200 && xhr.status < 300) {
      let data = JSON.parse(xhr.responseText);
      console.log(data);
    } else {
      console.log("Res failed", xhr.statusText);
    }
  } catch (error) {
    console.log("Loading error", error);
  }
});

//send
xhr.send();
