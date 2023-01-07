let container = document.querySelector(".main-container");
let loginPageLink = document.querySelector("#login");
let registerPageLink = document.querySelector("#register");

loginPageLink.addEventListener("click", function () {
loadContent(this.id); // let link = this.id

return false;
});

registerPageLink.addEventListener("click", function () {
loadContent(this.id);

return false;
});

function loadContent(pageName) {
let xhr = new XMLHttpRequest();

xhr.onload = function () {
if (xhr.status !== 200) return;
container.innerHTML = xhr.responseXML.querySelector("main").innerHTML;
};

xhr.open("GET", pageName + ".html");
xhr.responseType = "document";
xhr.send();
}


let body = document.querySelector('body')

body.onload = function() {
startTime();
startMilliseconds();
}
// body.onload(startMilliseconds())



function startTime() {
const today = new Date();
let h = today.getHours();
let m = today.getMinutes();
let s = today.getSeconds();
m = checkTime(m);
s = checkTime(s);

document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
setTimeout(startTime, 1);
}

function startMilliseconds(){
let ms = Date.now()

document.getElementById('ms-div').innerHTML = `${ms.toString().slice(-3)}`

setTimeout(startMilliseconds, 1)
}

function checkTime(i) {
if (i < 10) {i = "0" + i}; // add zero in front of numbers < 10
return i;
}




// let altindiv= document.getElementById("altin")
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f77a21e473msh0537b1c0041afeap182dd2jsn9dc42909c58e',
// 		'X-RapidAPI-Host': 'live-metal-prices.p.rapidapi.com'
// 	}
// };

// fetch('https://live-metal-prices.p.rapidapi.com/v1/latest/XAU,XAG,PA,PL,GBP,EUR/EUR', options)
// 	.then(response => response.json())
//     .then(response => {console.log(response)
//       altindiv.innerHTML= `${"Gold Preis / Ons " + Math.ceil(response.rates.XAU)+ "<br>"}`
//     })

// 	.catch(err => console.error(err));

let kurdiv= document.getElementById("kur")
const host = 'api.frankfurter.app';
fetch(`https://${host}/latest`)
  .then(resp => resp.json())
  .then((data) => {
    console.log(data)
   // alert(`10 GBP = ${data.rates.USD} USD`);
   kurdiv.innerHTML=`Euro/Dollar  ${data.rates.USD}<br> Euro/Turkisch Lira ${data.rates.TRY}`
  });

  window.addEventListener('DOMContentLoaded', (event) => {
    const d = new Date().toDateString();
    tarih.innerHTML = d
});
// 
// fetch(`http://dataservice.accuweather.com/forecasts/v1/minute?q=53.551086%2C9.993682&apikey=6yj5KOs9aHdvOf45lbd4RCJTUgIY17MG&language=de-DE`)
// .then(resp => resp.json())
// .then((data) =>{
//   console.log(data)
//   //hava.innerHTML =`minutetext`
// })

//curl -X GET "http://dataservice.accuweather.com/forecasts/v1/minute?q=53.551086%2C9.993682&apikey=6yj5KOs9aHdvOf45lbd4RCJTUgIY17MG&language=de-DE"

let hava=document.getElementById("hava")

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=53.551086&lon=9.993682&appid=722e77a1b976ac4f5047f74820faec29&units=metric`)
.then(resp => resp.json())
.then((data) =>{
  console.log(data);
 hava.innerHTML =`Hamburg Temperatur ${data.main.temp} °C <br> Hamburg Luftfeuchtigkeit % ${data.main.humidity}<br> Hamburg Luftdruck ${data.main.pressure} bar <br> Hamburg Wetterlage ist  ${data.weather[0].description} <br> Hamburg wind geschwindigkeit ist ${data.wind.speed} km/h <br> Hamburg wind winkel ist ${data.wind.deg}°`
});