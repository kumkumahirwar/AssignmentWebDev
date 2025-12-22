function calculateBill() {
  let km = Number(document.getElementById("km").value);
  if (isNaN(km) || km < 0) {
    document.getElementById("result").innerHTML =
      "<p class='text-danger'>Please enter a non-negative number of kilometres</p>";
    return;
  }
  let slab1 = Math.min(km, 10);
  let slab2 = Math.min(Math.max(km - 10, 0), 40);
  let slab3 = Math.max(km - 50, 0);

  let charge1 = slab1 * 11;
  let charge2 = slab2 * 10;
  let charge3 = slab3 * 9;

  let total = charge1 + charge2 + charge3;
  function format(x) {
    return x.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  document.getElementById("result").innerHTML = `
        <div class="card mt-3 p-3">
          <h6>Bill Details</h6>
          <p>First 10 km: ${slab1} × ₹11 = ₹${format(charge1)}</p>
          <p>Next 40 km: ${slab2} × ₹10 = ₹${format(charge2)}</p>
          <p>Above 50 km: ${slab3} × ₹9 = ₹${format(charge3)}</p>
          <hr>
          <h5>Total Bill: ₹${format(total)}</h5>
        </div>
      `;
}
function resetBill() {
  document.getElementById("km").value = "";
  document.getElementById("result").innerHTML = "";
}
