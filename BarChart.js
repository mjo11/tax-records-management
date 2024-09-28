// src/components/BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const BarChart = ({ records }) => {
  const taxTypes = ['Income Tax', 'Sales Tax', 'Property Tax', 'Capital Gains Tax'];
  const dataCounts = taxTypes.map(type => records.filter(record => record.name === type).length);
  const totalAmount = taxTypes.map(type => 
    records
      .filter(record => record.name === type)
      .reduce((sum, record) => sum + parseFloat(record.amount || 0), 0)
  );

  const data = {
    labels: taxTypes,
    datasets: [
      {
        label: 'Number of Records',
        data: dataCounts,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Total Amount',
        data: totalAmount,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Tax Records Overview',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
