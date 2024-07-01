import React from "react";

const PaginationControls = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center mt-8">
    <button
      className={`px-4 py-2 mx-1 ${
        currentPage === 1
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-blue-500 text-white hover:bg-blue-600"
      }`}
      onClick={() => onPageChange(currentPage - 1)}
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
        onClick={() => onPageChange(index + 1)}
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
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Next
    </button>
  </div>
);

export default PaginationControls;
