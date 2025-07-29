"use client";

import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
  FaPinterestP,
  FaYoutube,
  FaCcVisa,
  FaCcPaypal,
  FaCcApplePay,
  FaGoogle,
  FaStore,
  FaApple,
  FaMoneyBillWave,
} from "react-icons/fa";
const socialIcons = [
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
  FaPinterestP,
  FaYoutube,
];
const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 min-[1010px]:grid-cols-2 xl:grid-cols-5 gap-10 pb-10 border-b border-gray-200">
        {/* Column 1 */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">eStore</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            nibh vehicula, facilisis magna ut, consectetur lorem.
          </p>
          <div className="flex items-start gap-2">
            <FaMapMarkerAlt className="text-blue-700 mt-1" />
            <span>123 Fashion Street, New York, NY 10001</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-blue-700" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-700" />
            <span>hello@example.com</span>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-md font-semibold text-gray-800 mb-4">Shop</h4>
          <ul className="space-y-2">
            <li>New Arrivals</li>
            <li>Bestsellers</li>
            <li>Women's Clothing</li>
            <li>Men's Clothing</li>
            <li>Accessories</li>
            <li>Sale</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-md font-semibold text-gray-800 mb-4">Support</h4>
          <ul className="space-y-2">
            <li>Help Center</li>
            <li>Order Status</li>
            <li>Shipping Info</li>
            <li>Returns & Exchanges</li>
            <li>Size Guide</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="text-md font-semibold text-gray-800 mb-4">Company</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Affiliates</li>
            <li>Responsibility</li>
            <li>Investors</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h4 className="text-md font-semibold text-gray-800 mb-2">
            Download Our App
          </h4>
          <p className="mb-4">Shop on the go with our mobile app</p>
          <div className="flex gap-2 mb-6">
            <button className="bg-gray-100 px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium">
              <FaApple /> App Store
            </button>
            <button className="bg-gray-100 px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium">
              <FaGoogle /> Google Play
            </button>
          </div>
          <h5 className="font-semibold mb-2">Follow Us</h5>
          <div className="flex gap-3">
            {socialIcons.map((Icon, i) =>
              Icon ? (
                <a
                  key={i}
                  href="#"
                  className="bg-gray-200 p-2 rounded-full text-gray-700 hover:text-blue-600 transition"
                >
                  <Icon />
                </a>
              ) : null
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100 py-6 text-center text-sm mt-10">
        <div className="max-w-7xl mx-auto flex flex-col  items-center justify-between gap-4 px-4">
          <div className="flex items-center gap-2 text-gray-700">
            <span className="font-medium">We Accept:</span>
            {[
              FaCcVisa,
              FaCcPaypal,
              FaCcApplePay,
              FaGoogle,
              FaStore,
              FaMoneyBillWave,
            ].map((Icon, i) => (
              <Icon key={i} className="text-xl text-gray-700" />
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Cookies Settings
            </a>
          </div>
        </div>
        <p className="mt-4">
          &copy; Copyright <span className="font-semibold">eStore</span>. All
          Rights Reserved.
          <br />
          Designed by{" "}
          <a href="#" className="text-blue-600 hover:underline">
            BootstrapMade
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
