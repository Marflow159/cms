import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const DummyChart = () =>{
    const options = {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
          },
        },
      };
      
      const labels = ['Mon','Tue','Wen'];
      
      const data = {
        labels,
        datasets: [
          {
            label: '369',
            data: [3, 6, 9],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: '351',
            data: [3, 2, 1],
            backgroundColor: 'rgba(255, 19, 152, 0.5)',
          },
        ],
      };
    return(
        <div>
             <Bar options={options} data={data}/>
        </div>
    )
}

export default DummyChart