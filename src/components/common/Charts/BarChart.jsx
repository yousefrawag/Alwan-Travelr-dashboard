import React from "react";
import Chart from "react-apexcharts";

const BarChart = ({ data }) => {
  // Extract payment types and their totals
  const paymentTypes = data?.map((item) => item._id); // e.g., ["كاش", "تحويل", "شبكة"]
  const totalAmounts = data?.map((item) => item.totalAmount); // Total amounts for each payment type
  const totalArrivedCash = data?.map((item) => item.totalArrivedCash); // Arrived cash for each payment type
  const totalInProcessCash = data?.map((item) => item.totalInProcessCash); // In-process cash for each payment type

  const options = {
    chart: {
      id: "payment-type-totals",
    },
    xaxis: {
      categories: paymentTypes, // Payment types on the x-axis
    },
    colors: ["#008FFB", "#00E396", "#FEB019"], // Custom colors for each status
    plotOptions: {
      bar: {
        horizontal: false, // Vertical bars
        columnWidth: "45%", // Width of the bars
        endingShape: "rounded", // Rounded corners for bars
      },
    },
    dataLabels: {
      enabled: false, // Disable data labels on bars
    },
    legend: {
      position: "bottom", // Position of the legend
    },
  };

  const series = [
    {
      name: "إجمالى الرصيد",
      data: totalAmounts, // Total amounts for each payment type
    },
    {
      name: "إجمالى الرصيد المتاح",
      data: totalArrivedCash, // Arrived cash for each payment type
    },
    {
      name: "إجمالى الرصيد المتبقى",
      data: totalInProcessCash, // In-process cash for each payment type
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">إجمالى الرصيد حسب نوع الدفع</h2>
      <Chart options={options} series={series} type="bar" width="100%" />
    </div>
  );
};

export default BarChart;