const signUp = (e) => {
  let fname = document.getElementById("fname").value,
    email = document.getElementById("email").value,
    number = document.getElementById("number").value,
    pwd = document.getElementById("pwd").value,
    cpwd = document.getElementById("cpwd").value,
    file = document.getElementById("file").value;
  let formData = JSON.parse(localStorage.getItem("formData")) || [];

  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) =>
        data.fname.toLowerCase() == fname.toLowerCase() &&
        data.email.toLowerCase() == email.toLowerCase()
    );

  let id = formData.length;
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var phoneno = /^\d{10}$/;
  if (fname == "") {
    alert("Please enter your name");
  } else if (email == "") {
    alert("Please enter your user email id");
  } else if (!filter.test(email)) {
    alert("Invalid email");
  } else if (number == "") {
    alert("Please enter your Mobile number");
  } else if (!phoneno.test(number)) {
    alert("Invalid Mobile Number");
  } else if (pwd == "") {
    alert("Please enter Password");
  } else if (cpwd == "") {
    alert("Enter Confirm Password");
  } else if (pwd != cpwd) {
    alert("Password not Matched");
  } else if (!exist) {
    formData.push({ id, fname, email, number, pwd, cpwd, file });
    // localStorage.setItem('formData', JSON.stringify(formData));
    setData(formData);
    document.querySelector("form").reset();
    alert("Account Created.\n\nPlease Sign In using the link below.");
    location.href = "index.html";
  } else {
    alert("Ooopppssss... Duplicate found!!!\nYou have already signed up");
  }
  e.preventDefault();
};
