
// components/Footer.tsx
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
} from "react-icons/fa";

const Footer =()=> {
  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#" },
        { name: "Shop", href: "#" },
        { name: "About Us", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "FAQs", href: "#" },
        { name: "Returns", href: "#" },
        { name: "Shipping", href: "#" },
        { name: "Privacy Policy", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-100 px-4 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">GenChub</h3>
          <p className="text-sm">
            Your one-stop shop for everything. Great deals, fast delivery, and secure shopping experience.
          </p>
        </div>
        {footerSections.map((section, index) => (
          <div key={index}>
            <h4 className="text-lg font-semibold mb-3">{section.title}</h4>
            <ul className="space-y-2 text-sm">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:underline">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-lg font-semibold mb-3">Join Our Newsletter</h4>
          <p className="text-sm mb-3">
            Get exclusive offers and updates straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-red-500 text-sm rounded-md hover:bg-red-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6 gap-4 text-sm">
        <div className="flex space-x-4 text-xl">
          <a href="#"><FaFacebook/></a>
          <a href="#"><FaTwitter/></a>
          <a href="#"><FaInstagram/></a>
          <a href="#"><FaYoutube/></a>
        </div>

        <div className="flex space-x-4 text-2xl text-gray-400">
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcPaypal />
          <FaCcAmex />
        </div>
      </div>

      <div className="mt-6 text-center text-gray-500 text-xs">
        © 2050 GenChub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer