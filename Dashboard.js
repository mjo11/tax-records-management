// src/components/Dashboard.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = ({ records }) => {
  // Group records by tax type and count occurrences
  const taxTypes = ['Income Tax', 'Sales Tax', 'Property Tax'];
  const data = taxTypes.map((type) => {
    return records.filter((record) => record.name === type).length;
  });

  const chartData = {
    labels: taxTypes,
    datasets: [
      {
        label: 'Number of Records',
        data: data,
        backgroundColor: ['#6482AD', '#7FA1C3', '#CAF4FF'],
      },
    ],
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="dashboard-graph">
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;
