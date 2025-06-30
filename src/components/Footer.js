
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
              <span className="text-xl font-bold">Cashless Karma</span>
            </div>
            <p className="text-gray-400 mb-4">
              Smart tools and smart talent for growing businesses. Your digital and hiring growth partner.
            </p>
            <div className="flex space-x-4">
              <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2">
                <span>💬</span>
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">SiteCtrl</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">DigitalPro</Link></li>
              <li><Link to="/recruitment" className="text-gray-400 hover:text-white transition-colors">Recruitment</Link></li>
              <li><Link to="/industries" className="text-gray-400 hover:text-white transition-colors">Industries</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Website Development</span></li>
              <li><span className="text-gray-400">Digital Marketing</span></li>
              <li><span className="text-gray-400">Talent Recruitment</span></li>
              <li><span className="text-gray-400">Virtual Tours</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📍</span>
                <span className="text-gray-400">Goa, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📞</span>
                <span className="text-gray-400">+91-XXXXXXXXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📧</span>
                <span className="text-gray-400">hello@cashlesskarma.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Cashless Karma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;