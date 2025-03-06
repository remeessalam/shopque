import { useEffect, useRef } from "react";
/*eslint-disable */
const BarChart = ({ data }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const maxValue = Math.max(...data);

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set dimensions
    const barWidth = canvas.width / data.length - 2;
    const barHeightRatio = canvas.height / maxValue;

    // Draw bars
    data.forEach((value, index) => {
      const x = index * (barWidth + 2);
      const barHeight = value * barHeightRatio * 0.9; // 90% of max height to leave some space
      const y = canvas.height - barHeight;

      ctx.fillStyle = "#4F46E5";
      ctx.fillRect(x, y, barWidth, barHeight);
    });
  }, [data]);

  return (
    <canvas ref={canvasRef} width="300" height="60" className="w-full h-full" />
  );
};

export default BarChart;
