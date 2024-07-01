import Head from "next/head";

const Hero = () => {
  return (
    <section className="mb-12 bg-[url('/2.webp')] bg-cover bg-center h-">
      <div className="flex flex-col items-center justify-center w-full h-full gap-y-12">
        <div>
          <h2 className="font-bold text-gray-800 text-7xl">
            Find Your Dream Home
          </h2>
          <p className="mt-4 text-3xl text-gray-600">
            Explore our listings and find the perfect property for you.
          </p>
        </div>
        <form className="flex justify-center w-full mt-8">
          <input
            type="text"
            placeholder="Search by city, neighborhood, or address"
            className="w-2/3 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-r-md hover:bg-blue-600"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Real Estate Listings</title>
        <meta
          name="description"
          content="Find your dream home with our real estate listings."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <main className="container px-6 py-12 mx-auto">
        <section className="p-6 mb-12 rounded-lg bg-blue-50">
          <h3 className="mb-6 text-3xl font-bold text-gray-800">
            Why Choose Us?
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center">
              <img
                src="/images/icon1.png"
                alt="Icon"
                className="w-16 h-16 mr-4"
              />
              <div>
                <h4 className="text-xl font-bold text-gray-800">
                  Wide Range of Properties
                </h4>
                <p className="text-gray-600">
                  We offer a diverse selection of properties to fit every need
                  and budget.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="/images/icon2.png"
                alt="Icon"
                className="w-16 h-16 mr-4"
              />
              <div>
                <h4 className="text-xl font-bold text-gray-800">
                  Experienced Agents
                </h4>
                <p className="text-gray-600">
                  Our team of professional agents are here to guide you through
                  the process.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="/images/icon3.png"
                alt="Icon"
                className="w-16 h-16 mr-4"
              />
              <div>
                <h4 className="text-xl font-bold text-gray-800">
                  Customer Satisfaction
                </h4>
                <p className="text-gray-600">
                  We prioritize our clients' satisfaction above all else.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="mb-6 text-2xl font-bold text-gray-800">
            Featured Listings
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <img
                src="/images/house1.jpg"
                alt="House"
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800">
                  Beautiful Family House
                </h4>
                <p className="text-gray-600">
                  $1,200,000 • 4 Beds • 3 Baths • 2,500 sqft
                </p>
                <p className="mt-4 text-gray-600">
                  Located in a serene environment with all amenities...
                </p>
                <a
                  href="#"
                  className="inline-block mt-4 text-blue-500 hover:underline"
                >
                  View Details
                </a>
              </div>
            </div>
            {/* Add more listings as needed */}
          </div>
        </section>

        <section className="mt-12">
          <h3 className="mb-6 text-2xl font-bold text-gray-800">
            Recent Blog Posts
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <img
                src="/images/blog1.jpg"
                alt="Blog post"
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800">
                  Tips for First-Time Home Buyers
                </h4>
                <p className="mt-4 text-gray-600">
                  Learn what to expect during the home buying process and how to
                  prepare.
                </p>
                <a
                  href="#"
                  className="inline-block mt-4 text-blue-500 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
            {/* Add more blog posts as needed */}
          </div>
        </section>

        <section className="mt-12">
          <h3 className="mb-6 text-2xl font-bold text-gray-800">
            Testimonials
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600">
                "The team at Real Estate was fantastic! They helped us find the
                perfect home and made the process so easy."
              </p>
              <p className="mt-4 font-bold text-gray-800">- John Doe</p>
            </div>
            {/* Add more testimonials as needed */}
          </div>
        </section>

        <section className="mt-12">
          <h3 className="mb-6 text-2xl font-bold text-gray-800">
            Subscribe to Our Newsletter
          </h3>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-2/3 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded-r-md hover:bg-blue-600"
            >
              Subscribe
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
