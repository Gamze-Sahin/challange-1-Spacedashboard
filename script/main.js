window.onload=function(){

//horizontale chart
let labels1 = ['Fruits', 'Nuts', 'Chicken', 'Beef', 'Peanut butter' ];
let data1 = [80, 99, 75, 80, 55];
let colors1 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF'];

let myChart1 = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myChart1, {
    type: 'horizontalBar',
    data: {
        labels: labels1,
        datasets: [ {
            barPercentage: 0.5,
            minBarLength: 2,
            data: data1,
            backgroundColor: colors1
        }]
    },
    options: {
        title: {
            text: "Food stock",
            display: false
        },
        legend: {
            display: false
        }
    }
});

//donut chart
let labels2 = ['Magnesium', 'Titanium', 'Lithium', 'Cobalt', 'Lanthanum'];
let data2 = [70, 81, 33, 42, 21];
let colors2 = ['#49A9EA', '#36CAAB'];

let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'doughnut',
    data: {
        labels: labels2,
        datasets: [ {
            data: data2,
            backgroundColor: colors1
        }]
    },
    options: {
        title: {
            text: "Minerals on Mars",
            display: false
        }
    }
});


//random nummers speed, fuel, distance
document.getElementById("demo").innerHTML =
Math.floor(Math.random() * (10000 - 5000)) + 5000;

document.getElementById("demo2").innerHTML =
Math.floor(Math.random() * (100000 - 30000)) + 30000;

document.getElementById("demo3").innerHTML =
Math.floor(Math.random() * (60 - 20)) + 20;

// Countdown reistijd
var countDownDate = new Date("Jul 7, 2021 18:48:33").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
 
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo4").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

}