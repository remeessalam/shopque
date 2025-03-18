const CircularLoading = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="relative w-6 h-6">
        <div className="absolute w-6 h-6 border-2 border-gray-200 rounded-full"></div>
        <div className="absolute w-6 h-6 border-2 border-transparent border-t-primary rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default CircularLoading;
