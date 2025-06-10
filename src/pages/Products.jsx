
const Products = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              SiteCtrl – Your Own{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Booking-Ready Website
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              With SiteCtrl, you get a mobile-friendly website + a simple dashboard to manage your bookings, inquiries, reviews, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Features</h2>
            <p className="text-xl text-gray-600">Everything you need in one platform</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom-branded website</h3>
                <p className="text-gray-600">Your domain, your brand identity</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Booking form with WhatsApp integration</h3>
                <p className="text-gray-600">Seamless customer communication</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Review manager</h3>
                <p className="text-gray-600">Google & OTA reviews management</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Channel manager add-on</h3>
                <p className="text-gray-600">For homestays and hotels</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dashboard to track</h3>
                <p className="text-gray-600">Leads, orders, and messages</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter Plan</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">₹499<span className="text-lg text-gray-600">/month</span></div>
                <p className="text-gray-600 mb-6">Perfect for small businesses starting their digital journey</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <span className="text-green-600">✓</span>
                  <span>Custom-branded website</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-600">✓</span>
                  <span>Basic dashboard</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-600">✓</span>
                  <span>WhatsApp chat integration</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-600 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Popular</span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro Plan</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">₹1,499<span className="text-lg text-gray-600">/month</span></div>
                <p className="text-gray-600 mb-6">Complete solution for growing businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <span className="text-green-600">✓</span>
                  <span>All Starter features</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-600">✓</span>
                  <span>Review manager</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-600">✓</span>
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-600">✓</span>
                  <span>Priority support</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                Get Started
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>💬</span>
                <span>Request Demo</span>
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
