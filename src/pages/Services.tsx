
import { Globe, Megaphone, MapPin, Camera, Settings, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Design & Development',
      description: 'Custom designs for hotels, restaurants, salons, and local businesses',
      color: 'blue'
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Google Ads, Meta Ads, Instagram/Facebook marketing, Content strategy and ad creatives',
      color: 'purple'
    },
    {
      icon: MapPin,
      title: 'GMB Optimization',
      description: 'Boost your presence on Google Maps with better visibility',
      color: 'green'
    },
    {
      icon: Camera,
      title: 'Virtual 360° Tours',
      description: 'Great for resorts, event venues, restaurants & showrooms',
      color: 'orange'
    },
    {
      icon: Settings,
      title: 'Custom Software / Dashboards',
      description: 'For internal tracking (e.g., vehicles, staff, leads, payments)',
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-50 to-blue-100 bg-blue-600',
      purple: 'from-purple-50 to-purple-100 bg-purple-600',
      green: 'from-green-50 to-green-100 bg-green-600',
      orange: 'from-orange-50 to-orange-100 bg-orange-600',
      red: 'from-red-50 to-red-100 bg-red-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Digital Services to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Grow Your Business
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Whether you're starting out or scaling up, our DigitalPro team helps you build your online presence and get more customers.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services We Offer</h2>
            <p className="text-xl text-gray-600">Comprehensive digital solutions for your business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const colorClasses = getColorClasses(service.color);
              const [gradientClass, iconBgClass] = colorClasses.split(' bg-');
              
              return (
                <div key={index} className={`bg-gradient-to-br ${gradientClass} p-8 rounded-xl hover:shadow-lg transition-shadow duration-200`}>
                  <div className={`w-12 h-12 bg-${iconBgClass} rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 mx-auto">
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we work with you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">We understand your business needs and goals</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600">We create a custom digital strategy for your business</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600">We execute the plan with precision and quality</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth</h3>
              <p className="text-gray-600">We monitor and optimize for continuous growth</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
