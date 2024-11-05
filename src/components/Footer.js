import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white text-dark border-t border-gray-100 py-8">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <p className="mb-2">123 E-commerce St.</p>
            <p className="mb-2">Rahim Yar Khan, Punjab, Pakistan</p>
            <p className="mb-2">+92 (315) 047-0727</p>
            <p className="mb-2 break-words">azmatkhan0470727@gmail.com</p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="font-medium space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-600">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">
              Subscribe to our Newsletter
            </h3>
            <p className="mb-4">Get the latest updates and offers.</p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-2 mb-2 sm:mb-0 sm:mr-2 rounded-md focus:outline-none border border-gray-400"
              />
              <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition">
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF
                  className="text-gray-400 hover:text-blue-600"
                  size={24}
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter
                  className="text-gray-400 hover:text-blue-600"
                  size={24}
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className="text-gray-400 hover:text-blue-600"
                  size={24}
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn
                  className="text-gray-400 hover:text-blue-600"
                  size={24}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-8 border-t border-gray-200 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} ShopBiz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
