'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);

  // Cookie preferences state
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    advertising: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Load saved preferences
      try {
        const saved = JSON.parse(consent);
        setPreferences(saved);
      } catch (e) {
        // If parsing fails, show banner again
        setShowBanner(true);
      }
    }
  }, []);

  const savePreferences = (prefs: typeof preferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
    setShowCustomize(false);

    // Here you would initialize analytics/advertising based on preferences
    if (prefs.analytics) {
      // Initialize Google Analytics or other analytics tools
      console.log('Analytics cookies enabled');
    }
    if (prefs.advertising) {
      // Initialize AdSense or other advertising cookies
      console.log('Advertising cookies enabled');
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      advertising: true,
    };
    setPreferences(allAccepted);
    savePreferences(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      advertising: false,
    };
    setPreferences(onlyNecessary);
    savePreferences(onlyNecessary);
  };

  const handleSaveCustom = () => {
    savePreferences(preferences);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/20 z-40" />

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-2xl border border-gray-200">
          {!showCustomize ? (
            // Main Banner
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🍪</span>
                  <h2 className="text-2xl font-bold text-gray-900">Cookie Settings</h2>
                </div>
                <button
                  onClick={handleRejectAll}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Reject all cookies"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic.
                By clicking "Accept All", you consent to our use of cookies. Read our{' '}
                <a href="/privacy" className="text-violet-600 hover:underline font-medium">Privacy Policy</a> for more information.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-violet-700 hover:to-purple-700 transition-colors"
                >
                  Accept All Cookies
                </button>
                <button
                  onClick={handleRejectAll}
                  className="flex-1 bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Reject All
                </button>
                <button
                  onClick={() => setShowCustomize(true)}
                  className="flex-1 border-2 border-violet-600 text-violet-600 font-semibold px-6 py-3 rounded-lg hover:bg-violet-50 transition-colors"
                >
                  Customize
                </button>
              </div>
            </div>
          ) : (
            // Customize Panel
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Customize Cookie Preferences</h2>
                <button
                  onClick={() => setShowCustomize(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Back to main banner"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">Necessary Cookies</h3>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-3">Always Active</span>
                      <div className="w-12 h-6 bg-violet-600 rounded-full relative">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies are essential for the website to function properly. They enable basic features like page navigation and access to secure areas.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">Analytics Cookies</h3>
                    <button
                      onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                      className="relative"
                      aria-label="Toggle analytics cookies"
                    >
                      <div className={`w-12 h-6 rounded-full transition-colors ${preferences.analytics ? 'bg-violet-600' : 'bg-gray-300'}`}>
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${preferences.analytics ? 'right-1' : 'left-1'}`}></div>
                      </div>
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                </div>

                {/* Advertising Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">Advertising Cookies</h3>
                    <button
                      onClick={() => setPreferences({ ...preferences, advertising: !preferences.advertising })}
                      className="relative"
                      aria-label="Toggle advertising cookies"
                    >
                      <div className={`w-12 h-6 rounded-full transition-colors ${preferences.advertising ? 'bg-violet-600' : 'bg-gray-300'}`}>
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${preferences.advertising ? 'right-1' : 'left-1'}`}></div>
                      </div>
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies are used to display personalized advertisements based on your interests. They are set by our advertising partners like Google AdSense.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleSaveCustom}
                  className="flex-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-violet-700 hover:to-purple-700 transition-colors"
                >
                  Save Preferences
                </button>
                <button
                  onClick={() => setShowCustomize(false)}
                  className="flex-1 bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                You can change your preferences at any time. Visit our{' '}
                <a href="/privacy" className="text-violet-600 hover:underline">Privacy Policy</a> to learn more.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
