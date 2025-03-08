const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar', 
    data: {
        labels: ['Metal', 'Plastico', 'Vidro', 'Eletronicos', 'Madeira'],
        datasets: [{
            label: ' Tempo de Decomposição (anos)',
            data: [100, 450, 4000, 1000, 13], // Valores de tempo de decomposição
            backgroundColor: [
                'rgba(255, 0, 0.7)',   // Cores vivas
                'rgba(0, 139, 139, 0.9)',   // Azul mais escuro
                'rgba(255, 206, 86, 0.7)',
                'rgba(25,25,112)',
                'rgba(153, 102, 255, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255,255,255,0)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
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
