"use client";
import { useState } from "react";
import Head from "next/head";
import ListingCard from "@/components/listingCard";
import { useQuery, useQueryClient } from "@tanstack/react-query";
const listingsData = [
  // Array of listing objects with id, title, price, beds, baths, sqft, address, images
  {
    id: 1,
    title: "Beautiful Family House",
    price: "$1,200,000",
    beds: 4,
    baths: 3,
    sqft: 2500,
    address: "123 Maple Street, Springfield, IL 62704",
    images: ["/images/house1.jpg"],
  },
  {
    id: 2,
    title: "Modern Apartment",
    price: "$850,000",
    beds: 2,
    baths: 2,
    sqft: 1200,
    address: "456 Oak Avenue, Sunnyvale, CA 94086",
    images: ["/images/house2.jpg"],
  },
  // Add more listings as needed
];

const PAGE_SIZE = 6;

async function getData() {
  const response = await fetch("http://localhost:3000/api/properties", {
    headers: {
      Authorization: `users API-Key c82452e7-d035-45e6-870e-ff2cb62a03fb`,
    },
  });
  return await response.json(); // Add this line
}

export default function Listings() {
  // const queryClient = useQueryClient();
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: getData,
  });

  const [currentPage, setCurrentPage] = useState(1);
  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const allProperties = data.docs;

  const totalPages = Math.ceil(listingsData.length / PAGE_SIZE);

  const paginatedListings = listingsData.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <div className="min-h-screen bg-graObject.prototype.toString.call(obj).slice(8, -1).toLowerCase();y-100">
      <Head>
        <title>Real Estate Listings</title>
        <meta
          name="description"
          content="Browse all available real estate listings."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center p-6">
          <h1 className="text-2xl font-bold text-gray-800">Real Estate</h1>
          <nav>
            <a href="/" className="text-gray-600 hover:text-gray-800 ml-4">
              Home
            </a>
            <a
              href="/listings"
              className="text-gray-600 hover:text-gray-800 ml-4"
            >
              Listings
            </a>
            <a href="/about" className="text-gray-600 hover:text-gray-800 ml-4">
              About
            </a>
            <a
              href="/contact"
              className="text-gray-600 hover:text-gray-800 ml-4"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">All Listings</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {allProperties.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            className={`px-4 py-2 mx-1 ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`px-4 py-2 mx-1 ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={`px-4 py-2 mx-1 ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto p-6 flex justify-between">
          <p className="text-gray-600">
            &copy; 2024 Real Estate. All rights reserved.
          </p>
          <div>
            <a href="#" className="text-gray-600 hover:text-gray-800 ml-4">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 ml-4">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
