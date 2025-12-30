import React from "react";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-gray-100 mt-20 border-t">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-600">

        {/* Brand */}
        <div>
          <span className="font-bold text-black mb-2 text-lg">Unsplash</span>
      
          <p className="mb-3">
            Beautiful free images & videos shared by talented creators.
          </p>

          {/* Email */}
          <div className="flex items-center gap-2 text-gray-700">
            <FiMail />
            <a
              href="mailto:mdsamir13968@gmail.com"
              className="hover:text-black transition"
            >
              mdsamir13968@gmail.com
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-semibold text-black mb-2">Explore</h4>
          <ul className="space-y-1">
            <li className="hover:text-black cursor-pointer">Photos</li>
            <li className="hover:text-black cursor-pointer">Videos</li>
            <li className="hover:text-black cursor-pointer">Collections</li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="font-semibold text-black mb-2">Community</h4>
          <ul className="space-y-1">
            <li className="hover:text-black cursor-pointer">Contributors</li>
            <li className="hover:text-black cursor-pointer">Blog</li>
            <li className="hover:text-black cursor-pointer">Guidelines</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold text-black mb-2">Follow Me</h4>

          <div className="flex gap-4 text-gray-600">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FiGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FiLinkedin size={20} />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FiTwitter size={20} />
            </a>

            <a
              href="https://www.instagram.com/md_samir92/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FiInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} Unsplash. Built with ❤️ by Samir
      </div>
    </footer>
  );
}

export default Footer;
