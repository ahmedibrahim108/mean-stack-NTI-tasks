let userContainer = document.querySelector(".container-user");
let postsContainer = document.querySelector(".container-posts");
let headError = document.createElement("div");

async function getUserData() {
  try {
    let data = await fetch("https://jsonplaceholder.typicode.com/userss");
    // console.log(data);
    if (data.ok) {
      let users = await data.json();
      users.forEach((user) => {
        let h2 = document.createElement("h2");
        h2.innerHTML = user.username;
        userContainer.append(h2);
        h2.addEventListener("click", () => {
          getUserPosts(user.id);
        });
      });
    } else {
      throw new Error("no data founded");
    }
  } catch (err) {
    console.log(err);
  }

  // } else {
  //   throw new Error("no data founded");
  // }
}

getUserData();

async function getUserPosts(userId) {
  postsContainer.innerHTML = "";
  let data = await fetch(
    `https://jsonplaceholder.typicode.com/user/${userId}/posts`
  );
  if (data) {
    let posts = await data.json();
    posts.forEach((post) => {
      let p = document.createElement("p");
      p.innerHTML = post.body;
      postsContainer.append(p);
    });
  }
}

// getUserPosts(1);
