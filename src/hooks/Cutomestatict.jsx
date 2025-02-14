import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ProcessCustomerData } from '../utils/helpers/processCustomerData';

const Cutomestatict = ({ data, seriesName, chartType }) => {
  const [timeRange, setTimeRange] = useState('day');
  const processedData = ProcessCustomerData(data);
  const [chartData, setChartData] = useState({
    series: [{ name: seriesName, data: [] }],
    categories: [],
  });

  useEffect(() => {
    const { categories, values } = processedData[timeRange];
    setChartData({
      series: [{ name: seriesName, data: values }],
      categories,
    });
  }, [timeRange]);

  const options = {
    legend: { show: false },
    colors: ['#3C50E0'],
    chart: { type: chartType, toolbar: { show: false } },
    xaxis: {
      categories: chartData.categories,
    },
    stroke: { width: 2, curve: 'smooth' },
    grid: { xaxis: { lines: { show: true } }, yaxis: { lines: { show: true } } },
    dataLabels: { enabled: false },
    tooltip: { enabled: true }, // Enable tooltips
  };

  return (
    <div className="chart-container mt-10">
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
          أسبوعى
        </button>
        <button
          onClick={() => setTimeRange('month')}
          className={`py-1 px-3 rounded ${timeRange === 'month' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          شهرى
        </button>
      </div>
      <ReactApexChart options={options} series={chartData.series} type={chartType} height={350} />
    </div>
  );
};

export default Cutomestatict;
