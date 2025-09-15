import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-bone pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">BrimHide</h3>
            <p className="mb-4">Handcrafted Leather Goods, Made to Last.</p>
            <div className="flex space-x-4">
              {/* Email */}
              <a href="mailto:info@brimhide.com" aria-label="Email">
                <svg
                  className="h-6 w-6 text-white hover:text-deep-brown transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 13.065l-11-7.065h22l-11 7.065zm0 2.935l-12-7.065v11h24v-11l-12 7.065z" />
                </svg>
              </a>

              {/* Store / Etsy / Custom Page */}
              <a
                href="https://your-store-link.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Store"
              >
                <img
                  src="/favicon.svg" // or "/favicon.ico"
                  alt="Store"
                  className="h-6 w-6 object-contain hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/shop"
                  className="hover:text-saddle-tan transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/bags"
                  className="hover:text-saddle-tan transition-colors"
                >
                  Bags
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/wallets"
                  className="hover:text-saddle-tan transition-colors"
                >
                  Wallets
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/belts"
                  className="hover:text-saddle-tan transition-colors"
                >
                  Belts
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/jackets"
                  className="hover:text-saddle-tan transition-colors"
                >
                  Jackets
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/accessories"
                  className="hover:text-saddle-tan transition-colors"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="hover:text-saddle-tan transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/custom"
                  className="hover:text-saddle-tan transition-colors"
                >
                  Custom Work
                </Link>
              </li>
              <li>
                <Link
                  to="/locations"
                  className="hover:text-saddle-tan transition-colors"
                >
                  Store Locations
                </Link>
              </li>
              {/* <li><Link to="/blog" className="hover:text-saddle-tan transition-colors">Blog</Link></li> */}
              <li>
                <Link
                  to="/contact"
                  className="hover:text-saddle-tan transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">
              Customer Service
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/shipping"
                  className="hover:text-saddle-tan transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-saddle-tan transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/care"
                  className="hover:text-saddle-tan transition-colors"
                >
                  Leather Care
                </Link>
              </li>
              <li>
                <Link
                  to="/warranty"
                  className="hover:text-saddle-tan transition-colors"
                >
                  Warranty
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-saddle-tan transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-saddle-tan transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-700 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>
              &copy; {currentYear} BrimHide Leather Co. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p>Handcrafted with pride in the USA</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
