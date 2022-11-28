// const ctx = document.getElementById('myChart').getContext('2d');
// const myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
   
    type: 'bar', 
    data: {
        labels: ['container','tanker','gas-chain','dril rig','Production- Facility','Ohter Vessel'],
        datasets: [{
            axis: 'y', 
            label: 'Delevered',
            backgroundColor: [
              '#039'
            ],
            borderColor: 'rgb(255, 99, 132)',
            data: [355, 330, 255,200,400,320]
        },{
            axis: 'y', 
            label: 'under-construction',
            backgroundColor: [
              '#06c'
            ],
            borderColor: 'rgb(255, 99, 132)',
            data: [270,260,140,90,85,94]
        }]
    },
  options: {
   indexAxis: 'y', 
   responsive: true,
   scales : {
    yAxes: [{
        ticks: {
            beginAtZero:true
        }
    }]
   }
   }
});
