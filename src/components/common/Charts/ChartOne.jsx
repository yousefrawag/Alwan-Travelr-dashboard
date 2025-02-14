import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const ChartOne = () => {
  const [timeRange, setTimeRange] = useState('day');
  const [chartData, setChartData] = useState({
    series: [{ name: 'Clients Added', data: [] }],
    categories: [],
  });

  // Generate Fake Data
  const generateFakeData = (range) => {
    const data = [];
    const categories = [];
    const today = new Date();

    if (range === 'day') {
      for (let i = 0; i < 24; i++) {
        categories.push(`${i}:00`);
        data.push(Math.floor(Math.random() * 10)); // Random count between 0-10
      }
    } else if (range === 'week') {
      for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - (6 - i));
        categories.push(date.toISOString().split('T')[0]);
        data.push(Math.floor(Math.random() * 50)); // Random count between 0-50
      }
    } else if (range === 'month') {
      const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
      for (let i = 1; i <= daysInMonth; i++) {
        categories.push(`${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`);
        data.push(Math.floor(Math.random() * 100)); // Random count between 0-100
      }
    }

    return { categories, data };
  };

  useEffect(() => {
    const { categories, data } = generateFakeData(timeRange);
    setChartData({
      series: [{ name: 'Clients Added', data }],
      categories,
    });
  }, [timeRange]);

  const options = {
    legend: { show: false },
    colors: ['#3C50E0'],
    chart: { type: 'area', toolbar: { show: false } },
    xaxis: {
      categories: chartData.categories,
    },
    stroke: { width: 2, curve: 'smooth' },
    grid: { xaxis: { lines: { show: true } }, yaxis: { lines: { show: true } } },
    dataLabels: { enabled: false },
  };

  return (
    <div className="chart-container">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setTimeRange('day')}
          className={`py-1 px-3 rounded ${timeRange === 'day' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          يومى
        </button>
        <button
          onClick={() => setTimeRange('week')}
          className={`py-1 px-3 rounded ${timeRange === 'week' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          اسبوعى
        </button>
        <button
          onClick={() => setTimeRange('month')}
          className={`py-1 px-3 rounded ${timeRange === 'month' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          شهرى
        </button>
      </div>
      <ReactApexChart options={options} series={chartData.series} type="area" height={350} />
    </div>
  );
};

export default ChartOne;
