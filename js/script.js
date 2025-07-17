//SCRPT KONTEN PERSENTASE
document.addEventListener('DOMContentLoaded', function () {
  Highcharts.chart('grafik-polling', {
    chart: {
      type: 'pie',
      backgroundColor: {
        linearGradient: [0, 0, 0, 400],
        stops: [
          [0, '#0f172a'],
          [1, '#1e3a8a']
        ]
      },
    },
    title: {
      text: 'Bola Persentase',
      style: {
        color: '#ffffff',
        fontSize: '18px'
      }
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        innerSize: '50%',
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: 'white',
            textOutline: '0px'
          }
        }
      }
    },
    legend: {
      itemStyle: {
        color: '#ffffff'
      }
    },
    series: [{
      name: 'Pengunjung',
      colorByPoint: true,
      data: [
       { name: 'Sangat Senang 😊', y: 71.4 },
       { name: 'Senang 🙂', y: 28.6 },
       { name: 'Biasa saja 😐', y: 0 },
       { name: 'Kurang senang 🙁', y: 0 },
      { name: 'Tidak Senang 😡', y: 0 }
      ]
    }]
  });
});


  // Tampilkan notifikasi 

document.getElementById("form-tamu").addEventListener("submit", function(e) {
  e.preventDefault(); 

  Swal.fire({
    title: 'Berhasil!',
    text: 'Data berhasil disimpan.',
    icon: 'success',
    confirmButtonText: 'OK'
  });

  this.reset(); 
});

