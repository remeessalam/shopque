import ourmission from "../assets/images/ourmission.jpeg";
const OurMission = () => {
  return (
    <div className="paddingTop paddingBottom">
      <div className="wrapper ">
        <div className="grid md:grid-cols-2 items-center justify-items-center min-h-[40vh]">
          <div>
            <h1 className="title-heading">Our Mission</h1>
            <p className="mt-3 leading-8">
              Our mission is clear: to provide pet owners with top-notch pet
              care products that meet the needs of both pets and their humans.
              We believe in offering more than just great products; we aim to
              create a shopping experience that gives you peace of mind, knowing
              that you&apos;re providing the best for your pets. Everything we
              offer is handpicked to ensure your pets’ health, comfort, and
              well-being.
            </p>
          </div>
          <div className="w-full h-full">
            <img
              src={ourmission}
              alt="ourmission"
              className="h-full object-cover w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
