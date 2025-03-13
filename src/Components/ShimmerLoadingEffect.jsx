const ShimmerLoadingEffect = () => {
  return (
    <div className="bg-gray-200">
      <div className="wrapper  py-[4rem]">
        <div className="relative w-3/4 h-10 mb-6 bg-gray-300 rounded overflow-hidden">
          <div
            className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite]
          bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300"
          ></div>
        </div>

        <div className="space-y-3 mb-8">
          {[1, 2, 3].map((card) => (
            <div
              key={card}
              className="relative w-full h-4 bg-gray-300 rounded overflow-hidden"
            >
              <div
                className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite]
            bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 delay-75"
              ></div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((card) => (
            <div key={card} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="relative w-full h-40 bg-gray-200 rounded mb-4 overflow-hidden">
                <div
                  className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite]
                bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 delay-200"
                ></div>
              </div>
              <div className="relative w-3/4 h-5 bg-gray-200 rounded mb-3 overflow-hidden">
                <div
                  className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite]
                bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 delay-100"
                ></div>
              </div>
              <div className="space-y-2">
                <div className="relative w-full h-3 bg-gray-200 rounded overflow-hidden">
                  <div
                    className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite]
                  bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 delay-150"
                  ></div>
                </div>
                <div className="relative w-full h-3 bg-gray-200 rounded overflow-hidden">
                  <div
                    className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite]
                  bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 delay-200"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShimmerLoadingEffect;
