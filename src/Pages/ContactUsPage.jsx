import dogImage from "../assets/images/contactuspageimage.png";
import SectionHeader from "../Components/SectionHeader";
function ContactUsPage() {
  return (
    <>
      <SectionHeader section="Contact Us" />
      <div className="wrapper paddingTop paddingBottom">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="">
            <h1 className="text-3xl font-bold text-indigo-900 mb-4">
              Get In Touch
            </h1>

            <div className="flex flex-col md:flex-row mb-6">
              <div className=" pr-4">
                <p className="text-gray-700 mb-4">
                  At Shopper Pets LLC we&apos;re all about making sure your
                  experience with us is as smooth and enjoyable as possible.
                  Whether you have questions about our products, need assistance
                  with an order, or just want to share some feedback, our
                  friendly customer service team is here for you.
                </p>
              </div>
            </div>

            <form className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="border border-gray-300 p-2 rounded-sm"
                  required
                />
                <input
                  type="email"
                  placeholder="Your E-mail"
                  className="border border-gray-300 p-2 rounded-sm"
                />
              </div>

              <input
                type="text"
                placeholder="Subject*"
                className="border border-gray-300 p-2 rounded-sm w-full mb-4"
                required
              />

              <textarea
                placeholder="Type Your Message*"
                className="border border-gray-300 p-2 rounded-sm w-full h-32 mb-4"
                required
              />

              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-6 rounded-sm"
              >
                Send Mail
              </button>
            </form>
          </div>

          {/* Right Section */}
          <div className=" mt-8 md:mt-0">
            <div className="">
              <img
                src={dogImage || "/placeholder.svg"}
                alt="Two beagle dogs"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-gray-100 p-6 rounded-sm">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6">
                Contact Way
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-amber-600 rounded-full w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700">Call Us</p>
                    <p className="text-gray-700">+91 7673977230</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-600 rounded-full w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700">E-Mail</p>
                    <p className="text-gray-700">shopperpets@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-600 rounded-full w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700">G-33/203/10/A, Khajpura,</p>
                    <p className="text-gray-700">Anisabad, Patna, Mithapur</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-600 rounded-full w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700">Support Forum</p>
                    <p className="text-gray-700">24/7 Support</p>
                  </div>
                </div>

                <div className="flex items-start md:col-span-2">
                  <div className="bg-amber-600 rounded-full w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700">Free standard shipping</p>
                    <p className="text-gray-700">on all orders.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsPage;
