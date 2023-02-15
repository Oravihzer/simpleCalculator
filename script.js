function simpleCalculator() {
  alert(
    "enter 2 numbers on the next ALERTS and then choose what operator to use!"
  );
  let x = Number(prompt("enter first number:"));
  let y = Number(prompt("enter second number:"));

  if (isNaN(x && y)) {
    alert("numbers only!");
  } else if (x && y === 0) {
    alert("enter somthing!");
  }

  if (confirm("multiply?")) console.log(x * y), alert(x * y);
  else if (confirm("add numbers?")) console.log(x + y), alert(x + y);
  else if (confirm("minus numbers?")) console.log(x - y), alert(x - y);
}
d;
