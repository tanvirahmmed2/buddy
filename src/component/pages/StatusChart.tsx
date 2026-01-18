'use client';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface StatusChartProps {
  pending: number;
  completed: number;
  expired: number;
}

const StatusChart = ({ pending, completed, expired }: StatusChartProps) => {
  const data: ChartData<'doughnut'> = {
    labels: ['Pending', 'Completed', 'Expired'],
    datasets: [
      {
        label: 'Status Overview',
        data: [pending, completed, expired],
        backgroundColor: [
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(255, 99, 132, 0.8)',
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div className="w-full max-w-75 mx-auto">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default StatusChart;