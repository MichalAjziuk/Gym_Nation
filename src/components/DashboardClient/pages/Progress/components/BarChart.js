import React from 'react'
import { Bar } from 'react-chartjs-2'

const BarChart = () => {
    return (
        <div>
            <Bar
        data={{
          labels: ['20.06', '21.06', '22.06', '23.06', '24.06', '25.06'],
          datasets: [
            {
              label: 'Calories burned',
              data: [689, 320, 500, 483, 210, 800],
              backgroundColor: '#0C969C',
            },
            {
              label: 'Last Year',
              data: [498, 52, 200, 58, 950, 311],
              backgroundColor: '#ccc',
            },
          ],
        }}
        height={400}
        width={400}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
        </div>
    )
}

export default BarChart
