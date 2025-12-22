function calculateTip() {
  let bill = document.getElementById("bill").value;
  let service = document.getElementById("service").value;
  let people = document.getElementById("people").value;

  if (bill === "" || service === "" || people === "" || people <= 0) {
    document.getElementById("result").innerHTML =
      "Please enter all values correctly";
    return;
  }

  bill = Number(bill);
  service = Number(service);
  people = Number(people);

  let tip = bill * service;
  let total = bill + tip;
  let perPerson = total / people;

  document.getElementById("result").innerHTML =
    "Each person should pay: ₹ " + perPerson.toFixed(2);
}
