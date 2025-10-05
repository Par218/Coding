/* data */

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const datas_array=[65, 59, 80, 81, 56, 55];

/* chart creation */
const myChart = new Chart('myChart',{
    type : 'bar',
    data: {
        labels: months,
        datasets: [{
            label: 'Sales',
            backgroundColor: 'blue',
            data
        }]
    }

})