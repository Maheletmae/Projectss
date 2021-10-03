function searching(event) {
  event.preventDefault();
  let inputs = document.querySelector("#inputid");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${inputs.value}`;
}
let formchange = document.querySelector("#formm");
formchange.addEventListener("submit", searching);

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wedneday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayss = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();
let rn = document.querySelector("#todaysdate");
rn.innerHTML = `${dayss} ${hour}:${minute}`;

function changedegreeC() {
  let number = document.querySelector(".temp");
  number.innerHTML = 19;
}
function changedegreeF() {
  let number = document.querySelector(".temp");
  number.innerHTML = 77;
}
let touchlinkC = document.querySelector(".celcius");
let touchlinkF = document.querySelector(".fahrenheit");
touchlinkC.addEventListener("click", changedegreeC);
touchlinkF.addEventListener("click", changedegreeF);
