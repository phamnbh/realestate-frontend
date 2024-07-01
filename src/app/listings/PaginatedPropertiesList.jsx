// src/components/PaginatedPropertiesList.jsx
"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ListingsCard from "../../components/ListingsCard";
import PaginationControls from "./PaginationControls";
import { getData, PAGE_SIZE } from "../../utils/fetchProperties";

const PaginatedPropertiesList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData", currentPage],
    queryFn: getData,
    keepPreviousData: true,
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  const allProperties = data.docs;
  const totalPages = Math.ceil(data.totalDocs / PAGE_SIZE);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {allProperties.map((listing) => (
          <ListingsCard key={listing.id} listing={listing} />
        ))}
      </div>
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default PaginatedPropertiesList;
