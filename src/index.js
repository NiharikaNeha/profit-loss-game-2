import "./styles.css";

var init = document.querySelector("#init");
var quan = document.querySelector("#quan");
var curr = document.querySelector("#curr");
var btn = document.querySelector("#btn");
var output = document.querySelector("#output");

function btnHandler() {
  var initialPrice = init.value;
  var quantity = quan.value;
  var currentPrice = curr.value;
  var net;
  var netPercentage;

  console.log(initialPrice, currentPrice);

  if (initialPrice === "" || quantity === "" || currentPrice === "") {
    setMessage("Please fill out all fields!!");
    output.style.backgroundColor = "white";
  } else if (initialPrice < 0 || quantity < 0 || currentPrice < 0) {
    setMessage("Please enter positive numbers!!");
    output.style.backgroundColor = "white";
  } else {
    if (initialPrice < currentPrice) {
      net = (currentPrice - initialPrice) * quantity;
      console.log("net is ", net);
      netPercentage = setPercentage(net);
      setMessage(
        "The net profit is Rs. " +
          net +
          " and the profit percentage is " +
          netPercentage +
          "%"
      );
      output.style.backgroundColor = "green";
    } else if (initialPrice > currentPrice) {
      net = (initialPrice - currentPrice) * quantity;
      console.log("net is ", net);
      netPercentage = setPercentage(net);
      setMessage(
        "The net loss is Rs. " +
          net +
          " and the loss percentage is " +
          netPercentage +
          "%"
      );
      output.style.backgroundColor = "red";
    } else {
      setMessage("No Pain No Gain and No Gain No Pain!!");
      output.style.backgroundColor = "yellow";
    }
  }
}

function setPercentage(net) {
  return ((net / init.value) * 100).toFixed(2);
}

function setMessage(message) {
  output.innerText = message;
}

btn.addEventListener("click", btnHandler);
