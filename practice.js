//---------------> NESTED PRACTICE <------------------
let username = prompt("Enter a username");

function authentication() {
  let message = "";
  let bgimage = "";

  if (username.toLowerCase() === "admin") {
    let password = prompt("Enter your password");
    if (password === "admin1234") {
      message = "Login successful!";
      bgimage = "images/login.jpg";
    } else {
      message = ("Incorrect Password");
      bgimage = "images/incorrect.jpg";
    }
  } else {
    message = "Invalid username.";
    bgimage = "images/invalid.jpg";
  }

  document.write(`
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">

    <div class="container-fluid p-0">
      <div class="d-flex justify-content-center vh-100" style="
        background-image: url('${bgimage}');
        background-size: cover;
        background-position: center;">

        <div class="text-center text-white mt-5">
        <h1 class="mb-3 font">${message}</h1>
        </div>
      </div>
    </div>
    `);
}

authentication();
