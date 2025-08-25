import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

export default function EndSection() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Explore */}
        <div>
          <h3 className="text-white font-semibold mb-3">Explore</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Articles
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sitemap
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Gifts
              </a>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-white font-semibold mb-3">About</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Diversity, Equity, and Inclusion
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Newsroom
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Security
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Social Impact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                MasterClass at Work
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Social</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaTwitter />{" "}
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram />{" "}
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaFacebook />{" "}
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaYoutube />{" "}
              <a href="#" className="hover:underline">
                YouTube
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin />{" "}
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Download */}
        <div>
          <h3 className="text-white font-semibold mb-3">Download</h3>
          <div className="flex flex-col space-y-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Amazon Appstore"
              className="h-10"
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm flex flex-col md:flex-row justify-between items-center text-gray-400">
        <p>© 2025 CBirajdar</p>
        <p className="flex items-center gap-2 mt-2 md:mt-0">
          <span>🔒 Secured with SSL</span>
        </p>
      </div>
    </footer>
  );
}
