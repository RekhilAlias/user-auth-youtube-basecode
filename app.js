// 1 SignUp event function


const signupBtn = document.querySelector("#signup-btn");
signupBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //Selecting input

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  //create user firebase method

  auth.createUserWithEmailAndPassword(email, password).then((cred) => {
    alert("User signed up user account created!");
  });
});



// 2 Login event function

const loginBtn = document.querySelector("#login-btn");
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //Selecting input

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  //Login user firebase method

  auth
    .signInWithEmailAndPassword(email, password)
    .then((cred) => {
      alert("Logged in user!");
    })
    .catch((error) => {
      alert(error.message);
    });
});



//logout event function

const logoutBtn = document.querySelector("#logout-btn");
logoutBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //Firebase logout user method

  auth.signOut();
  alert("User signed out!");
});



//Checking user

auth.onAuthStateChanged((user) => {
  if (user) {
    alert(user.email + " is logged in!");
  } else {
    alert("User is logged out!");
  }
});