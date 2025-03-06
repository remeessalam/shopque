import { useEffect, useRef } from "react";
/*eslint-disable */
const DonutChart = ({ data }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const total = data.reduce((sum, item) => sum + item.value, 0);
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) * 0.8;
    const innerRadius = radius * 0.6; // Donut hole size

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let startAngle = -0.5 * Math.PI; // Start at top

    // Draw segments
    data.forEach((segment) => {
      const segmentAngle = (segment.value / total) * 2 * Math.PI;
      const endAngle = startAngle + segmentAngle;

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.arc(centerX, centerY, innerRadius, endAngle, startAngle, true);
      ctx.closePath();

      ctx.fillStyle = segment.color;
      ctx.fill();

      startAngle = endAngle;
    });

    // Draw center circle (white hole)
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
  }, [data]);

  return (
    <canvas
      ref={canvasRef}
      width="100"
      height="100"
      className="w-full h-full"
    />
  );
};

export default DonutChart;
