const ctx3 = document.getElementById('doughnut').getContext('2d');
const doughnut= new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['Temp1', 'Temp2', 'Hum1', 'Hum2', ],
        datasets: [{
            label: 'ค่าเท่ากับ',
            data: [24.6, 25, 58, 60,],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});