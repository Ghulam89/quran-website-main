// components/ContactInfo.js
export default function ContactInfo() {
  return (
    <div className="bg-Assists w-full bg-cover py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Image Section */}
          <div className="col-span-1 text-center md:text-left">
            <img src="/avatars/topbar.png" width={100} alt="Logo" className="mx-auto md:mx-0" />
            <h2 className="text-3xl font-bold pt-4 text-gray-800 mb-6">
              We are always happy to assist you
            </h2>
          </div>

          {/* Middle Email Section */}
          <div className="text-center md:text-left col-span-1">
            <h3 className="text-lg font-semibold text-gray-800">Email Address</h3>
            <p className="text-orange-500 font-medium">help@info.com</p>
            <p className="text-gray-600 mt-2">
              Assistance hours: <br />
              Monday - Friday 6 am to 8 pm EST
            </p>
          </div>

          {/* Right Phone Number Section */}
          <div className="text-center md:text-left col-span-1">
            <h3 className="text-lg font-semibold text-gray-800">Number</h3>
            <p className="text-orange-500 font-medium">(808) 998-34256</p>
            <p className="text-gray-600 mt-2">
              Assistance hours: <br />
              Monday - Friday 6 am to 8 pm EST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
