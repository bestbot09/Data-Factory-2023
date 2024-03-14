const ctx2 = document.getElementById('barchart1').getContext('2d');
const barchart1 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['อุณหภูมิต่ำสุด', 'ความชื้นต่ำสุด', 'อุณหภูมิสูงสุด', 'ความชื้นสูงสุด', ],
        datasets: [{
            label: 'อุณหภุมิข้างในโรงงานเฉลี่ย',
            data: [25, 60, 30, 69,],
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