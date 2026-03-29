import React from "react";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content  p-10">
        <aside>
          <a className="flex items-center gap-2 font-bold text-2xl">
            {" "}
            <img className="w-10" src={Logo} alt="Logo" /> Ai Hub
          </a>
          <p className="text-zinc-400 text-lg max-w-md">
            One subscription. Access to all frontier AI
            <br />
            models in a single powerful platform.
          </p>
        </aside>
        <nav>
          <h6 className="text-red-400 font-semibold mb-6 text-lg">Product</h6>
          <a className="text-zinc-400  hover:text-white hover:font-bold">
            Models
          </a>
          <a className="text-zinc-400  hover:text-white hover:font-bold">
            Pricing
          </a>
          <a className="text-zinc-400  hover:text-white hover:font-bold">
            Features
          </a>
          <a className="text-zinc-400  hover:text-white hover:font-bold">API</a>
        </nav>
        <nav>
          <h6 className="text-red-400 font-semibold mb-6 text-lg">Company</h6>
          <a className="text-zinc-400  hover:text-white hover:font-bold">
            About Us
          </a>
          <a className="text-zinc-400  hover:text-white hover:font-bold">
            Blog
          </a>
          <a className="text-zinc-400  hover:text-white hover:font-bold">
            Careers
          </a>
          <a className="text-zinc-400  hover:text-white hover:font-bold">
            Contact
          </a>
        </nav>

        <nav>
          <h6 className="text-red-400 font-semibold mb-6 text-lg">Legal</h6>
          <a className="text-zinc-400  hover:text-white hover:font-bold">
            Privacy Policy
          </a>
          <a className="text-zinc-400  hover:text-white hover:font-bold">
            Terms of Service
          </a>
          <a className="text-zinc-400  hover:text-white hover:font-bold">
            Cookie Settings
          </a>
        </nav>
      </footer>
      <footer className="pt-8 border-t border-zinc-800 bg-neutral text-neutral-content p-4">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
          <p className="text-zinc-400">
            © {new Date().getFullYear()} Kabya. All right reserved
          </p>

          <h6 className="hover:text-red-400 transition">
            Made with ❤️ for AI enthusiasts
          </h6>
        </div>
      </footer>
    </>
  );
};

export default Footer;
