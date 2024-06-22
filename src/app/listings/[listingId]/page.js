"use client"
// import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';

const listing = {
  id: 1,
  title: "Beautiful Family House",
  price: "$1,200,000",
  beds: 4,
  baths: 3,
  sqft: 2500,
  description: "Located in a serene environment with all amenities nearby. Perfect for a family looking for comfort and style.",
  address: "123 Maple Street, Springfield, IL 62704",
  images: [
    "/images/house1.jpg",
    "/images/house2.jpg",
    "/images/house3.jpg"
  ],
  agent: {
    name: "Jane Doe",
    phone: "555-9876",
    email: "jane.doe@realestate.com"
  }
};

export default function ListingDetails() {
  
//   const router = useRouter();
//   const { id } = router.query;

  // In a real-world application, you would fetch the listing details using the id.
  // For simplicity, we're using the static listing data defined above.

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>{listing.title}</title>
        <meta name="description" content={`Details about ${listing.title}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center p-6">
          <h1 className="text-2xl font-bold text-gray-800">Real Estate</h1>
          <nav>
            <a href="/" className="text-gray-600 hover:text-gray-800 ml-4">Home</a>
            <a href="/listings" className="text-gray-600 hover:text-gray-800 ml-4">Listings</a>
            <a href="/about" className="text-gray-600 hover:text-gray-800 ml-4">About</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-800 ml-4">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{listing.title}</h2>
              <p className="text-gray-600">{listing.address}</p>
              <div className="mt-4 flex items-center">
                <span className="text-gray-600 mr-4">{listing.price}</span>
                <span className="text-gray-600 mr-4">{listing.beds} Beds</span>
                <span className="text-gray-600 mr-4">{listing.baths} Baths</span>
                <span className="text-gray-600">{listing.sqft} sqft</span>
              </div>
              <p className="mt-6 text-gray-600">{listing.description}</p>
              <div className="mt-6">
                {listing.images.map((image, index) => (
                  <Image key={index} src={image} alt={`House image ${index + 1}`} width={600} height={400} className="mb-4 rounded-lg" />
                ))}
              </div>
            </div>
            <div className="md:w-1/3 md:ml-6 mt-6 md:mt-0">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Agent</h3>
                <p className="text-gray-600">Name: {listing.agent.name}</p>
                <p className="text-gray-600">Phone: {listing.agent.phone}</p>
                <p className="text-gray-600">Email: {listing.agent.email}</p>
                <a href={`mailto:${listing.agent.email}`} className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Contact</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200">
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
