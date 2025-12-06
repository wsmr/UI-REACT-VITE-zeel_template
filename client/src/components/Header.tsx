import { Menu, Search, Globe, DollarSign, User } from 'lucide-react';
import { useState } from 'react';

/**
 * Header Component
 * Minimalist Brutalism Design
 * - Clean navigation with search bar
 * - Language and currency selectors
 * - User account menu
 * - Responsive mobile menu
 */
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-400 flex items-center justify-center">
              <span className="text-xs font-bold text-white">Z</span>
            </div>
            <span className="text-lg font-bold text-gray-900 hidden sm:inline">
              ZEEL PROJECT
            </span>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 mx-8 border-2 border-dashed border-green-400 bg-white">
            <select className="px-4 py-2 bg-transparent text-sm font-medium text-gray-900 border-r border-dashed border-green-400 focus:outline-none">
              <option>3D Models</option>
              <option>Scenes</option>
              <option>Textures</option>
            </select>
            <input
              type="text"
              placeholder="Search"
              className="flex-1 px-4 py-2 bg-transparent text-sm text-gray-900 placeholder-gray-500 focus:outline-none"
            />
            <button className="px-4 py-2 text-gray-900 hover:bg-gray-100 transition-colors">
              <Search size={18} />
            </button>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-4">
            {/* Language Selector - Hidden on mobile */}
            <button className="hidden sm:flex items-center gap-1 text-sm text-gray-900 hover:text-green-400 transition-colors">
              <Globe size={16} />
              <span>English</span>
            </button>

            {/* Currency Selector - Hidden on mobile */}
            <button className="hidden sm:flex items-center gap-1 text-sm text-gray-900 hover:text-green-400 transition-colors">
              <DollarSign size={16} />
              <span>USD</span>
            </button>

            {/* User Account */}
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 border-2 border-dashed border-green-400 text-sm font-medium text-gray-900 hover:bg-green-50 transition-colors">
              <User size={16} />
              <span>Sign in</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-4 mt-4">
              {/* Mobile Search */}
              <div className="flex border-2 border-dashed border-green-400 bg-white">
                <select className="px-3 py-2 bg-transparent text-sm font-medium text-gray-900 border-r border-dashed border-green-400 focus:outline-none">
                  <option>3D Models</option>
                  <option>Scenes</option>
                  <option>Textures</option>
                </select>
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 px-3 py-2 bg-transparent text-sm text-gray-900 placeholder-gray-500 focus:outline-none"
                />
              </div>

              {/* Mobile Options */}
              <div className="flex flex-col gap-2">
                <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 transition-colors">
                  <Globe size={16} />
                  <span>English</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 transition-colors">
                  <DollarSign size={16} />
                  <span>USD</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border-2 border-dashed border-green-400 text-sm font-medium text-gray-900 hover:bg-green-50 transition-colors">
                  <User size={16} />
                  <span>Sign in</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
