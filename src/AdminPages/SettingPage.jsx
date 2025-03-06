import { useState } from "react";
import AdminPageHeader from "../AdminComponents/AdminPageHeader";

const SettingPage = () => {
  const [settings, setSettings] = useState({
    siteName: "",
    supportEmail: "",
    monthlyOrderGoal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved Settings:", settings);
    alert("Settings saved successfully!");
  };

  return (
    <>
      <div className="w-full h-full mx-auto p-6 bg-gray-100 min-h-screen ">
        <AdminPageHeader />

        <div className=" bg-white ">
          <h2 className="text-xl font-medium mb-4 border-b p-5">Settings</h2>
          <form onSubmit={handleSubmit} className="p-8">
            <div className="mb-4 grid grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Site Name
                </label>
                <input
                  type="text"
                  name="siteName"
                  value={settings.siteName}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-md"
                  //   placeholder="Enter site name"
                />
              </div>
            </div>

            <div className="mb-4 grid grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Support Email
                </label>
                <input
                  type="email"
                  name="supportEmail"
                  value={settings.supportEmail}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-md"
                  //   placeholder="Enter support email"
                />
              </div>
            </div>

            <div className="mb-4 grid grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Monthly Order Goal
                </label>
                <input
                  type="number"
                  name="monthlyOrderGoal"
                  value={settings.monthlyOrderGoal}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-md"
                  //   placeholder="Enter order goal"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-fit px-5 text-black py-3 rounded-md font-medium hover:bg-black hover:text-white border border-black transition-colors mt-6"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default SettingPage;
