function calculateBill() {
  let units = Number(document.getElementById("units").value);

  if (units <= 0 || isNaN(units)) {
    document.getElementById("result").innerHTML =
      "<p class='text-danger'>Please enter valid units</p>";
    return;
  }

  let slab1 = Math.min(units, 50);
  let slab2 = Math.min(Math.max(units - 50, 0), 150);
  let slab3 = Math.min(Math.max(units - 200, 0), 250);
  let slab4 = Math.max(units - 450, 0);

  let charge1 = slab1 * 0.5;
  let charge2 = slab2 * 0.75;
  let charge3 = slab3 * 1.2;
  let charge4 = slab4 * 1.5;

  let subtotal = charge1 + charge2 + charge3 + charge4;
  let surcharge = subtotal * 0.2;
  let total = subtotal + surcharge;

  document.getElementById("result").innerHTML = `
        <div class="card mt-3 p-3">
          <h6>Bill Details</h6>
          <p>First 50 units: ${slab1} × ₹0.50 = ₹${charge1.toFixed(2)}</p>
          <p>Next 150 units: ${slab2} × ₹0.75 = ₹${charge2.toFixed(2)}</p>
          <p>Next 250 units: ${slab3} × ₹1.20 = ₹${charge3.toFixed(2)}</p>
          <p>Above 450 units: ${slab4} × ₹1.50 = ₹${charge4.toFixed(2)}</p>
          <hr>
          <p>Subtotal: ₹${subtotal.toFixed(2)}</p>
          <p>Surcharge (20%): ₹${surcharge.toFixed(2)}</p>
          <h6>Grand Total: ₹${total.toFixed(2)}</h6>
        </div>`;
}
function resetBill() {
  document.getElementById("units").value = "";
  document.getElementById("result").innerHTML = "";
}
