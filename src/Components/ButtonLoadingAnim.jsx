const ButtonLoadingAnim = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex space-x-2">
        <div
          className="w-2 h-2 bg-primary rounded-full animate-bounce"
          style={{ animationDelay: "0ms" }}
        ></div>
        <div
          className="w-2 h-2 bg-primary rounded-full animate-bounce"
          style={{ animationDelay: "300ms" }}
        ></div>
        <div
          className="w-2 h-2 bg-primary rounded-full animate-bounce"
          style={{ animationDelay: "600ms" }}
        ></div>
      </div>
    </div>
  );
};

export default ButtonLoadingAnim;
