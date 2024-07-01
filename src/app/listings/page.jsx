import Head from "next/head";
import PaginatedPropertiesList from "./PaginatedPropertiesList";
import { useQuery } from "@tanstack/react-query";

export default function Listings() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Real Estate Listings</title>
        <meta
          name="description"
          content="Browse all available real estate listings."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container px-6 py-12 mx-auto">
        <h2 className="mb-6 text-3xl font-bold text-gray-800">All Listings</h2>
        <PaginatedPropertiesList />
      </main>
    </div>
  );
}
