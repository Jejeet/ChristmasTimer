import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function CountDown(){
  // <h1>countDown to christmas 2022</h1>
  //the date we are counting down to
  var countDownDate= new Date("Dec 24, 2022 23:59:01").getTime();

// fucttion to countdown every seconds
var x = setInterval(function(){
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance /(1000 * 60 * 60 * 24));
  var hours = Math.floor((distance %(1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var  minutes = Math.floor((distance%(1000 * 60 * 60))/(1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("root").innerHTML = days + "days" + hours + "hours" + minutes + "minutes" + seconds + "seconds";

  if (distance < 0) {
    clearInterval (x);
    document.getElementById("root").innerHTML = "EXPIRED";
  }


},1000);

  CountDown();


}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CountDown />
  </React.StrictMode>
);

