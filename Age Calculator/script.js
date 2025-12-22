function calculateAge() {
  let dob = document.getElementById("dob").value;
  let currentDate = document.getElementById("currentDate").value;

  if (dob === "" || currentDate === "")
 {
    document.getElementById("result").innerHTML = "Please select both dates";
    return;
  }

  let birthDate = new Date(dob);
  let today = new Date(currentDate);

  let age = today.getFullYear() - birthDate.getFullYear();

  let monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  )
 {
    age--;
}

  document.getElementById("result").innerHTML = "Your Age is: " + age + " years";
}
