const StepSixReturnOrder = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg font-medium">
        Your return request has been successfully received.
      </h1>
      <p className="text-gray-600">
        We are currently reviewing your request to return your items. You can
        track the progress for updates.
      </p>
      <button className="w-fit font-medium text-[#7f56D9]">
        Track Return Status
      </button>
    </div>
  );
};

export default StepSixReturnOrder;
