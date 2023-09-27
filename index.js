const precio = 400000;

function formatNumber(number) {
  // Check if the input is not a number
  if (isNaN(number)) {
    return "Invalid Input";
  }

  // Convert the number to a string
  let numberString = number.toString();

  // Split the string into integer and decimal parts (if any)
  const parts = numberString.split(",");

  // Format the integer part with commas
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Join the integer and decimal parts with a dot (if there's a decimal part)
  const formattedNumber = parts.length === 2 ? parts.join(".") : parts[0];

  return formattedNumber;
}

let cantidad = 0;

precioSpan = document.querySelector(".precio-inicial");
cantItem = document.querySelector(".cantidad");
btnadd = document.querySelector(".btn-add");
btnsubstract = document.querySelector(".btn-substract");
valorTotalItem = document.querySelector(".valor-total");

precioSpan.innerHTML = formatNumber(precio);

btnadd.addEventListener("click", () => {
  cantidad++;
  cantItem.innerHTML = cantidad;
  valorTotalItem.innerHTML = formatNumber(cantidad * precio);
  console.log("Se sumo un item");
});

btnsubstract.addEventListener("click", () => {
  cantidad--;
  if (cantidad < 0) cantidad = 0;
  cantItem.innerHTML = cantidad;
  valorTotalItem.innerHTML = formatNumber(cantidad * precio);
  console.log("Se restó un item");
});
