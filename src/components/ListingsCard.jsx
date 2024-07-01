import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

async function getImage({ queryKey }) {
  const [, url] = queryKey;
  if (url == "/img-not-found.jpg") return "/img-not-found.jpg";
  const response = await fetch("http://localhost:3000" + url, {
    headers: {
      Authorization: `users API-Key d27a8b28-e035-46d5-9185-add63eb82a0e`,
    },
  });
  const blob = await response.blob();
  const objectUrl = URL.createObjectURL(blob);
  return objectUrl;
}

export default function ListingCard({ listing }) {
  const property = listing.property;
  const imgUrl =
    listing.images?.[0]?.propertyImage?.url ?? "/img-not-found.jpg";
  console.log("imgUrl", typeof imgUrl);

  const { isPending, error, data } = useQuery({
    queryKey: ["img", imgUrl],
    queryFn: getImage,
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md">
      <Image
        src={data ? data : ""}
        alt={listing.title}
        width={600}
        height={400}
        className="object-cover w-full h-48"
      />
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-800">{property.name}</h4>
        <p className="text-gray-600">
          ${property.price} • {property.beds} Beds • {property.baths} Baths •{" "}
          {property.sqft} sqft
        </p>
        <p className="mt-4 text-gray-600">{property.address}</p>
        <Link
          href={`/listings/${listing.id}`}
          className="inline-block mt-4 text-blue-500 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
