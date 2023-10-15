import React from "react";
import { ResponsivePie } from "@nivo/pie";

const MyResponsivePie = ({ data }) => (
  <ResponsivePie
    // fill={[
    //   {
    //     match: {
    //       id: "New ",
    //     },
    //     color: "red",
    //   },
    // ]}
    data={data}
    margin={{ top: 70, right: 80, bottom: 80, left: 80 }}
    startAngle={-12}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeInnerRadiusOffset={6}
    activeOuterRadiusOffset={8}
    // colors={{ scheme: "pastel1" }}
    colors={({ id, data }) => {
      // Define custom color shades for each segment
      if (id === "New") {
        return "hsla(271.698, 78%, 40%, 0.7)"; // Adjust the color value to make it darker
      } else if (id === "Old") {
        return "hsla(309.048, 68%, 37%, 0.76)"; // Adjust the color value to make it even darker
      }
      // You can provide custom colors for other segments as needed
      return "hsl(0, 0%, 50%)"; // Default color for segments not specified
    }}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    arcLinkLabelsSkipAngle={12}
    arcLinkLabelsTextColor={{ theme: "background" }}
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ theme: "background" }}
    arcLabel="id"
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 2]],
    }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "rgba(154, 71, 71, 0.3)",
        rotation: -49,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    // fill={[
    //   {
    //     match: {
    //       id: "go",
    //     },
    //     id: "dots",
    //   },
    //   {
    //     match: {
    //       id: "python",
    //     },
    //     id: "dots",
    //   },
    //   {
    //     match: {
    //       id: "scala",
    //     },
    //     id: "lines",
    //   },
    //   {
    //     match: {
    //       id: "lisp",
    //     },
    //     id: "lines",
    //   },
    //   {
    //     match: {
    //       id: "elixir",
    //     },
    //     id: "lines",
    //   },
    //   {
    //     match: {
    //       id: "javascript",
    //     },
    //     id: "lines",
    //   },
    // ]}
    isInteractive={true} // Enable interactivity
    animate={true} // Enable animations
    motionStiffness={90}
    motionDamping={15}
    onMouseEnter={(data, event) => {
      // Add a custom hover effect for the "Old Customer" segment
      if (data.id === "Old Customer" || "New Customer") {
        event.target.style.transition = "transform 0.2s";
        event.target.style.transform = "scale(1.1)";
      }
    }}
    onMouseLeave={(data, event) => {
      // Remove the custom hover effect when leaving
      if (data.id === "Old Customer" || "New Customer") {
        event.target.style.transition = "transform 0.2s";
        event.target.style.transform = "scale(1)";
      }
    }}
    legends={[]}
  />
);

export default MyResponsivePie;
