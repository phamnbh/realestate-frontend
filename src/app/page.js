import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Real Estate Listings</title>
        <meta name="description" content="Find your dream home with our real estate listings." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center p-6">
          <h1 className="text-2xl font-bold text-gray-800">Real Estate</h1>
          <nav>
            <a href="#" className="text-gray-600 hover:text-gray-800 ml-4">Home</a>
            <a href="/listings" className="text-gray-600 hover:text-gray-800 ml-4">Listings</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 ml-4">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 ml-4">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Find Your Dream Home</h2>
          <p className="mt-4 text-gray-600">Explore our listings and find the perfect property for you.</p>
          <form className="mt-8 flex justify-center">
            <input type="text" placeholder="Search by city, neighborhood, or address" className="w-2/3 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">Search</button>
          </form>
        </section>

        <section className="bg-blue-50 p-6 rounded-lg mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Us?</h3>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center">
              <img src="/images/icon1.png" alt="Icon" className="w-16 h-16 mr-4" />
              <div>
                <h4 className="text-xl font-bold text-gray-800">Wide Range of Properties</h4>
                <p className="text-gray-600">We offer a diverse selection of properties to fit every need and budget.</p>
              </div>
            </div>
            <div className="flex items-center">
              <img src="/images/icon2.png" alt="Icon" className="w-16 h-16 mr-4" />
              <div>
                <h4 className="text-xl font-bold text-gray-800">Experienced Agents</h4>
                <p className="text-gray-600">Our team of professional agents are here to guide you through the process.</p>
              </div>
            </div>
            <div className="flex items-center">
              <img src="/images/icon3.png" alt="Icon" className="w-16 h-16 mr-4" />
              <div>
                <h4 className="text-xl font-bold text-gray-800">Customer Satisfaction</h4>
                <p className="text-gray-600">We prioritize our clients' satisfaction above all else.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Featured Listings</h3>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/images/house1.jpg" alt="House" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800">Beautiful Family House</h4>
                <p className="text-gray-600">$1,200,000 • 4 Beds • 3 Baths • 2,500 sqft</p>
                <p className="mt-4 text-gray-600">Located in a serene environment with all amenities...</p>
                <a href="#" className="mt-4 inline-block text-blue-500 hover:underline">View Details</a>
              </div>
            </div>
            {/* Add more listings as needed */}
          </div>
        </section>

        <section className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Recent Blog Posts</h3>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/images/blog1.jpg" alt="Blog post" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800">Tips for First-Time Home Buyers</h4>
                <p className="mt-4 text-gray-600">Learn what to expect during the home buying process and how to prepare.</p>
                <a href="#" className="mt-4 inline-block text-blue-500 hover:underline">Read More</a>
              </div>
            </div>
            {/* Add more blog posts as needed */}
          </div>
        </section>

        <section className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Testimonials</h3>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600">"The team at Real Estate was fantastic! They helped us find the perfect home and made the process so easy."</p>
              <p className="mt-4 text-gray-800 font-bold">- John Doe</p>
            </div>
            {/* Add more testimonials as needed */}
          </div>
        </section>

        <section className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Subscribe to Our Newsletter</h3>
          <div className="flex justify-center">
            <input type="email" placeholder="Enter your email" className="w-2/3 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">Subscribe</button>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="container mx-auto p-6 flex justify-between">
          <p className="text-gray-600">&copy; 2024 Real Estate. All rights reserved.</p>
          <div>
            <a href="#" className="text-gray-600 hover:text-gray-800 ml-4">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 ml-4">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}