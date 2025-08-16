'use client';

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ChartComponent({ planets }) {
  const data = {
    labels: planets.map(p => p.englishName),
    datasets: [{
      label: 'Diameter (km)',
      data: planets.map(p => p.meanRadius * 2), // Diameter = 2 * radius
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }],
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Bar data={data} options={{ responsive: true }} />
    </div>
  );
}