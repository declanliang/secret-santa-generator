'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleManageCookies = () => {
    // Clear cookie consent to show banner again
    localStorage.removeItem('cookie-consent');
    window.location.reload();
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Secret Santa Generator</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Free online tool to organize Secret Santa gift exchanges. No registration required.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <button
                  onClick={handleManageCookies}
                  className="hover:text-white transition-colors text-left"
                >
                  Cookie Settings
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:service@secret-santa-generator.net" className="hover:text-white transition-colors">
                  service@secret-santa-generator.net
                </a>
              </li>
              <li>
                <a href="tel:+12132101344" className="hover:text-white transition-colors">
                  +1 (213) 210-1344
                </a>
              </li>
              <li className="pt-2">
                131 Continental Dr, Suite 305<br />
                Newark, DE 19713, USA
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Secret Santa Generator. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Made with ❤️ for the holiday season
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
