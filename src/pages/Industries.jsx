
const Industries = () => {
  const industries = [
    {
      icon: '🏢',
      title: 'Hotels, Homestays & Villas',
      description: 'Booking management, website development, and digital marketing for hospitality businesses',
      color: 'blue'
    },
    {
      icon: '🍽️',
      title: 'Restaurants, Cafés & Bars',
      description: 'Online ordering systems, menu digitization, and customer engagement solutions',
      color: 'purple'
    },
    {
      icon: '✂️',
      title: 'Salons & Wellness Clinics',
      description: 'Appointment booking systems, customer management, and service promotion',
      color: 'pink'
    },
    {
      icon: '📍',
      title: 'Local Service Businesses',
      description: 'GMB optimization, local SEO, and community engagement strategies',
      color: 'green'
    },
    {
      icon: '🚀',
      title: 'Startups & Corporate Teams',
      description: 'Talent recruitment, digital infrastructure, and growth-focused solutions',
      color: 'orange'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-50 to-blue-100 bg-blue-600',
      purple: 'from-purple-50 to-purple-100 bg-purple-600',
      pink: 'from-pink-50 to-pink-100 bg-pink-600',
      green: 'from-green-50 to-green-100 bg-green-600',
      orange: 'from-orange-50 to-orange-100 bg-orange-600'
    };
    return colors[color];
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Who We Work With
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Cashless Karma serves a wide range of small and growing businesses that need digital support and recruitment services.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Specialized solutions for diverse business sectors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const colorClasses = getColorClasses(industry.color);
              const [gradientClass, iconBgClass] = colorClasses.split(' bg-');
              
              return (
                <div key={index} className={`bg-gradient-to-br ${gradientClass} p-8 rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105`}>
                  <div className={`w-12 h-12 bg-${iconBgClass} rounded-lg flex items-center justify-center mb-4`}>
                    <span className="text-white text-xl">{industry.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.title}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Across Industries</h2>
            <p className="text-xl text-gray-600">Real results for real businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Villa Booking Growth</h3>
              <p className="text-gray-600 mb-4">Helped a Goa villa increase bookings by 200% in 3 months through our SiteCtrl platform</p>
              <div className="text-blue-600 font-semibold">Hospitality Sector</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🍽️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Restaurant Digital Transformation</h3>
              <p className="text-gray-600 mb-4">Implemented online ordering and digital menu for a Mumbai restaurant chain</p>
              <div className="text-purple-600 font-semibold">Food & Beverage</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Startup Talent Acquisition</h3>
              <p className="text-gray-600 mb-4">Successfully placed 50+ candidates across various startups in tech and sales roles</p>
              <div className="text-green-600 font-semibold">Technology Sector</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have already grown with Cashless Karma
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 text-lg">
            Talk to an Expert
          </button>
        </div>
      </section>
    </div>
  );
};

export default Industries;