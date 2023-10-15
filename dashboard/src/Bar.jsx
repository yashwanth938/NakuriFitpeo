import React from "react";
import { Bar } from "@nivo/bar";
// import "./BarChart.css"; // Import the CSS file

const styles = {
  fontFamily: "sans-serif",
  fontSize: "14px",
  textAlign: "center",
};

const sampleData = [
  {
    id: "Jan",
    value: 200,
    color: "#8a39d342",
  },
  {
    id: "Feb",
    value: 300,
    color1: "green",
  },
  {
    id: "Mar",
    value: 150,
    color: "green",
  },
  {
    id: "Apr",
    value: 200,
    color: "orange",
  },
  {
    id: "May",
    value: 100,
    color: "purple",
  },
  {
    id: "Jun",
    value: 128,
    color: "teal",
  },
  {
    id: "Jul",
    value: 146,
    color: "yellow",
  },
  {
    id: "Aug",
    value: 200,
    color: "pink",
  },
  {
    id: "Sep",
    value: 150,
    color: "lime",
  },
  {
    id: "Oct",
    value: 180,
    color: "cyan",
  },
  {
    id: "nov",
    value: 150,
    color: "magenta",
  },
  {
    id: "dec",
    value: 180,
    color: "blue",
  },
];

const commonProperties = {
  width: 800,
  height: 400,
  data: sampleData,
  keys: ["value"],
  indexBy: "id",
  margin: {
    top: 35,
    right: 10,
    bottom: 30,
    left: 0,
  },
  borderRadius: 5, // Add border radius to the bars
  enableGridX: false, // Remove vertical grid lines
  enableGridY: false,
  enableLabel: false,
  axisLeft: {
    tickValues: [], // Set tickValues to an empty array to remove Y-axis values
  }, // Remove horizontal grid lines
};

const BarChart = () => (
  <div className="bar-chart">
    <h1 className="monthbar1">Overview</h1>
    <p className="monthbar2">Monthly Earning</p>
    <Bar
      {...commonProperties}
      colors={sampleData.map((d) => d.color)}
      axisLeft={{ format: ".2s" }}
    />
  </div>
);

export default BarChart;
