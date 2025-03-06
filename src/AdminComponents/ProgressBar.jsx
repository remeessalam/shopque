/*eslint-disable */
const ProgressBar = ({ value }) => {
  return (
    <div className="w-full bg-blue-100 rounded-full h-2">
      <div
        className="bg-blue-500 h-2 rounded-full"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default ProgressBar;
