// "use client";
// import { useRouter } from 'next/router';
import Head from "next/head";
import Image from "next/image";
import ImageGallery from "./ImageGallery";
import PropertyDetails from "./PropertyDetails";
import TogglableDescription from "./ToggleableDescription";
import AgentInfo from "./AgentInfo";
import StatusIndicator from "./StatusIndicator";
import DatePicker from "./DatePicker";

const listing = {
  id: 1,
  title: "Beautiful Family House",
  price: "$1,200,000",
  beds: 4,
  baths: 3,
  sqft: 2500,
  description:
    "Located in a serene environment with all amenities nearby. Perfect for a family looking for comfort and style.",
  address: "123 Maple Street, Springfield, IL 62704",
  images: ["/images/house1.jpg", "/images/house2.jpg", "/images/house3.jpg"],
  agent: {
    name: "Jane Doe",
    phone: "555-9876",
    email: "jane.doe@realestate.com",
  },
};

const agent = {
  name: "John Doe",
  phone: "123-456-7890",
  email: "john.doe@example.com",
  image: "/agent.jpg", // Make sure this path points to the agent's picture
};

export default function ListingDetails() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>{listing.title}</title>
        <meta name="description" content={`Details about ${listing.title}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container max-w-6xl px-6 py-12 mx-auto">
        <ImageGallery />
        <div className="flex justify-between">
          <PropertyDetails />
          <StatusIndicator status={"FOR SALE - ACTIVE"} />
        </div>
        <section className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3">
              <h2 className="mb-4 text-3xl font-bold text-gray-800">
                {listing.title}
              </h2>
              <TogglableDescription />
            </div>
            {/* <div className="mt-6 md:w-1/3 md:ml-6 md:mt-0">
              <div className="p-6 rounded-lg shadow-md bg-gray-50">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  Contact Agent
                </h3>
                <p className="text-gray-600">Name: {listing.agent.name}</p>
                <p className="text-gray-600">Phone: {listing.agent.phone}</p>
                <p className="text-gray-600">Email: {listing.agent.email}</p>
                <a
                  href={`mailto:${listing.agent.email}`}
                  className="inline-block px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                >
                  Contact
                </a>
              </div>
            </div> */}
            <AgentInfo agent={agent} />
          </div>
          <DatePicker />
        </section>
      </main>
    </div>
  );
}
