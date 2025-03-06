import { useEffect, useRef } from "react";

/*eslint-disable */
const LineChart = ({ data }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const maxValue = Math.max(...data);
    const minValue = Math.min(...data);
    const range = maxValue - minValue;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set dimensions
    const pointSpacing = canvas.width / (data.length - 1);
    const heightRatio = canvas.height / (range * 1.2); // Add some padding

    // Start drawing path
    ctx.beginPath();
    ctx.strokeStyle = "#4F46E5";
    ctx.lineWidth = 2;

    // Move to first point
    const firstY = canvas.height - (data[0] - minValue) * heightRatio;
    ctx.moveTo(0, firstY);

    // Draw lines to each point
    for (let i = 1; i < data.length; i++) {
      const x = i * pointSpacing;
      const y = canvas.height - (data[i] - minValue) * heightRatio;
      ctx.lineTo(x, y);
    }

    // Stroke the path
    ctx.stroke();
  }, [data]);

  return (
    <canvas ref={canvasRef} width="300" height="60" className="w-full h-full" />
  );
};

export default LineChart;
