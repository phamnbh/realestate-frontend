import Image from "next/image";
import Link from "next/link";

export default function ListingCard({ listing }) {
  console.log(listing);
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={listing.images[0]}
        alt={listing.title}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-800">
          {listing.property.name}
        </h4>
        <p className="text-gray-600">
          {listing.price} • {listing.beds} Beds • {listing.baths} Baths •{" "}
          {listing.sqft} sqft
        </p>
        <p className="mt-4 text-gray-600">{listing.address}</p>
        <Link
          href={`/listings/${listing.id}`}
          className="mt-4 inline-block text-blue-500 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
