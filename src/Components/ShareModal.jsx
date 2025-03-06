import { BiShare, BiX } from "react-icons/bi";
import { BsCopy, BsSendFill, BsWhatsapp } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
//eslint-disable-next-line
const ShareModal = ({ showShare, setShowShare }) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://Shopque.io/ecommerce/prod...");
  };
  console.log(showShare, "asdfsadfsdf");

  if (!showShare) return null;

  return (
    <>
      {showShare && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          {/* Share Section */}
          <div className="max-w-md mx-auto w-full bg-white rounded-lg p-5 mb-6">
            <div className="flex justify-between items-center p-2 border-b">
              <p className="text-sm font-medium mb-2">Copy Link</p>
              <button
                onClick={() => setShowShare(!showShare)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <CgClose size={20} />
              </button>
            </div>

            {/* Copy Link Section */}
            <div className="mb-6">
              <div className="flex items-center gap-2 border rounded-lg p-2">
                <input
                  type="text"
                  value="https://Shopque.io/ecommerce/prod..."
                  className="flex-1 text-sm text-gray-500 outline-none"
                  readOnly
                />
                <button
                  onClick={handleCopyLink}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <BsCopy size={18} />
                </button>
              </div>
            </div>

            {/* Share Options */}
            <div>
              <p className="text-sm font-medium mb-3">Share</p>
              <div className="flex gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <FaFacebook size={24} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <BiX size={24} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <BsSendFill size={24} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <BiShare size={24} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <BsWhatsapp size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShareModal;
