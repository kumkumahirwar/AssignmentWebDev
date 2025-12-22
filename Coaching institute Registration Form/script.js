document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  document
    .querySelectorAll(".text-danger")
    .forEach((el) => (el.innerHTML = ""));

  let nameRegex = /^[A-Za-z ]+$/;
  let cityRegex = /^[A-Za-z ]+$/;
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
  let mobileRegex = /^[6-9]\d{9}$/;
  let pinRegex = /^\d{6}$/;
  let percentRegex = /^([0-9]{1,2}(\.[0-9]+)?|100|[A-F])$/;

  let fields = {
    fullname: document.getElementById("fullname").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value,
    dob: document.getElementById("dob").value,
    qualification: document.getElementById("qualification").value,
    percentage: document.getElementById("percentage").value,
    course: document.getElementById("course").value,
    batch: document.getElementById("batch").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    pincode: document.getElementById("pincode").value,
    gname: document.getElementById("gname").value,
    gmobile: document.getElementById("gmobile").value,
    source: document.getElementById("source").value,
  };

  if (!nameRegex.test(fields.fullname)) {
    document.getElementById("nameError").innerHTML = "Enter a valid name.";
    valid = false;
  }

  if (!emailRegex.test(fields.email)) {
    document.getElementById("emailError").innerHTML = "Enter a valid email.";
    valid = false;
  }

  if (!mobileRegex.test(fields.mobile)) {
    document.getElementById("mobileError").innerHTML =
      "Enter a valid 10-digit mobile number.";
    valid = false;
  }

  if (!fields.dob) {
    document.getElementById("dobError").innerHTML =
      "Select your Date of Birth.";
    valid = false;
  } else {
    let age = new Date().getFullYear() - new Date(fields.dob).getFullYear();
    if (age < 15) {
      document.getElementById("dobError").innerHTML =
        "You must be at least 15 years old.";
      valid = false;
    }
  }

  if (fields.qualification === "") {
    document.getElementById("qualError").innerHTML =
      "Select your qualification.";
    valid = false;
  }

  if (!percentRegex.test(fields.percentage)) {
    document.getElementById("percentError").innerHTML =
      "Enter valid percentage or grade.";
    valid = false;
  }

  if (fields.course === "") {
    document.getElementById("courseError").innerHTML = "Select a course.";
    valid = false;
  }

  if (fields.batch === "") {
    document.getElementById("batchError").innerHTML = "Select a batch timing.";
    valid = false;
  }

  if (fields.address.trim() === "") {
    document.getElementById("addressError").innerHTML =
      "Enter your full address.";
    valid = false;
  }

  if (!cityRegex.test(fields.city)) {
    document.getElementById("cityError").innerHTML = "Enter a valid city name.";
    valid = false;
  }

  if (!pinRegex.test(fields.pincode)) {
    document.getElementById("pinError").innerHTML =
      "Enter a valid 6-digit pin code.";
    valid = false;
  }

  if (!nameRegex.test(fields.gname)) {
    document.getElementById("gnameError").innerHTML = "Enter guardian's name.";
    valid = false;
  }

  if (!mobileRegex.test(fields.gmobile)) {
    document.getElementById("gmobileError").innerHTML =
      "Enter a valid 10-digit guardian mobile number.";
    valid = false;
  }

  if (fields.source === "") {
    document.getElementById("sourceError").innerHTML = "Select an option.";
    valid = false;
  }

  if (valid) {
    alert("Registration Successful!");
    document.getElementById("regForm").reset();
  }
});
