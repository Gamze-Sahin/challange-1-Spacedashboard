window.onload=function(){

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
            text: "Do you like dougnuts?",
            display: false
        }
    }
});

}