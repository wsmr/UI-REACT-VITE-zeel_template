import { useState } from 'react';

/**
 * Footer Component
 * Minimalist Brutalism Design
 * - Branding and description
 * - App download section with QR code
 * - Cookie policy notification
 * - Clean typography with generous whitespace
 */
export default function Footer() {
  const [cookieAccepted, setCookieAccepted] = useState(false);

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Branding */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-green-400 flex items-center justify-center">
                <span className="text-xs font-bold text-white">Z</span>
              </div>
              <span className="text-lg font-bold text-gray-900">ZEEL PROJECT</span>
            </div>
            <p className="heading-md text-gray-900 font-bold mb-4">
              The first digital platform designed specifically for designers by designers.
            </p>
            <p className="body-md text-gray-600 mb-8 max-w-md">
              We unite interior designers, decorators, and architects around the world who create beautiful and functional spaces.
            </p>
            <button className="px-8 py-4 border-2 border-dashed border-green-400 text-gray-900 font-bold text-sm tracking-wide hover:bg-green-50 transition-colors duration-200">
              Join us!
            </button>
          </div>

          {/* Right Column - App Download */}
          <div className="flex flex-col justify-center">
            <h3 className="heading-md text-gray-900 font-bold mb-4">
              Download ZEEL PROJECT APP
            </h3>
            <p className="body-md text-gray-600 mb-8">
              Enjoy the benefits of our platform on your favorite mobile device. Explore new models, create mood boards and collections for your projects while accessing our platform on the go.
            </p>
            
            {/* App Store Badges - Placeholder */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="border-2 border-dashed border-green-400 px-6 py-3 bg-gray-50 flex items-center justify-center">
                <span className="text-sm font-bold text-gray-900">App Store</span>
              </div>
              <div className="border-2 border-dashed border-green-400 px-6 py-3 bg-gray-50 flex items-center justify-center">
                <span className="text-sm font-bold text-gray-900">Google Play</span>
              </div>
            </div>

            {/* QR Code - Placeholder */}
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 border-2 border-dashed border-green-400 bg-gray-100 flex items-center justify-center">
                <span className="text-xs text-gray-500 text-center px-2">QR Code</span>
              </div>
              <span className="text-sm text-gray-600">Scan to download</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <p className="body-sm text-gray-600 text-center">
            This site uses cookies from Zeel Project services. This is necessary for its stable operation.{' '}
            <a href="#" className="text-green-400 font-bold hover:underline">
              Cookie Policy
            </a>
          </p>
        </div>
      </div>

      {/* Cookie Banner */}
      {!cookieAccepted && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 md:p-6 border-t-2 border-dashed border-green-400 z-40">
          <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="body-sm text-gray-200">
              This site uses cookies from Zeel Project services. This is necessary for its stable operation.{' '}
              <a href="#" className="text-green-400 font-bold hover:underline">
                Cookie Policy
              </a>
            </p>
            <button
              onClick={() => setCookieAccepted(true)}
              className="px-6 py-2 bg-white text-gray-900 font-bold text-sm hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
            >
              Accept
            </button>
          </div>
        </div>
      )}

      {/* Spacer for cookie banner */}
      {!cookieAccepted && <div className="h-24" />}
    </footer>
  );
}
