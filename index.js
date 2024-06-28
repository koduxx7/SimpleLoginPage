let button = document.getElementById("button");

button.addEventListener("click", () => {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  if (user == "" || pass == "") {
    console.log("Please fill in both fields");
    return;
  } else {
    let both = "username : " + user + " and password : " + pass;
    console.log(both);
  }
});
