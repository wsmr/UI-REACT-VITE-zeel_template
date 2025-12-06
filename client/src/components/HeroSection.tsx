/**
 * HeroSection Component
 * Minimalist Brutalism Design
 * - Split layout with text on left (dark background) and images on right
 * - Bold typography with generous whitespace
 * - Dashed green borders for brutalist aesthetic
 * 
 * NOTE: Images are placeholders. Replace with actual image paths:
 * - /images/hero-interior-1.jpg (interior design photo)
 * - /images/hero-interior-2.jpg (interior design photo)
 * - /images/hero-interior-3.jpg (interior design photo)
 */
export default function HeroSection() {
  return (
    <section className="border-t-2 border-b-2 border-dashed border-green-400">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left Side - Text Content */}
        <div className="bg-gray-900 text-white flex flex-col justify-center items-start p-8 md:p-16">
          <div className="max-w-md">
            <h2 className="heading-md text-white mb-4 font-light">
              YS Art Gallery
            </h2>
            <h1 className="heading-xl text-white mb-8 font-bold tracking-tight">
              MORE 20 YEARS CREATE ORIGINAL PAINTING FOR INTERIOR
            </h1>
            <button className="px-8 py-4 border-2 border-white text-white font-bold text-sm tracking-wide hover:bg-white hover:text-gray-900 transition-colors duration-200">
              EXPLORE MORE
            </button>
          </div>
        </div>

        {/* Right Side - Images Grid */}
        <div className="bg-white grid grid-cols-2 gap-4 p-4 md:p-8">
          {/* Top Left - Large Image */}
          <div className="col-span-2 md:col-span-1 md:row-span-2 border-2 border-dashed border-green-400 bg-gray-100 flex items-center justify-center overflow-hidden">
            <img
              src="/images/hero-interior-1.jpg"
              alt="Interior design - YS Art Gallery"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"%3E%3Crect fill="%23e5e7eb" width="400" height="500"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="%23666" text-anchor="middle" dominant-baseline="middle"%3EInterior Image 1%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>

          {/* Top Right - Medium Image */}
          <div className="border-2 border-dashed border-green-400 bg-gray-100 flex items-center justify-center overflow-hidden">
            <img
              src="/images/hero-interior-2.jpg"
              alt="Interior design - Modern living room"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"%3E%3Crect fill="%23e5e7eb" width="300" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="14" fill="%23666" text-anchor="middle" dominant-baseline="middle"%3EInterior Image 2%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>

          {/* Bottom Right - Medium Image */}
          <div className="border-2 border-dashed border-green-400 bg-gray-100 flex items-center justify-center overflow-hidden">
            <img
              src="/images/hero-interior-3.jpg"
              alt="Interior design - Modern bedroom"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"%3E%3Crect fill="%23e5e7eb" width="300" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="14" fill="%23666" text-anchor="middle" dominant-baseline="middle"%3EInterior Image 3%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
