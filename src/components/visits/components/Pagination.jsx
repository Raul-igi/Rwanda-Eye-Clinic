import React from 'react';

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  // Calculate total pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Render the page numbers
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          disabled={currentPage === i}
          style={{
            margin: '0 5px',
            backgroundColor: currentPage === i ? '#4CAF50' : '#f0f0f0',
            padding: '8px',
            borderRadius: '5px',
          }}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      <div>
        {/* Previous Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{
            margin: '0 5px',
            padding: '8px',
            borderRadius: '5px',
            backgroundColor: '#f0f0f0',
          }}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {renderPageNumbers()}

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{
            margin: '0 5px',
            padding: '8px',
            borderRadius: '5px',
            backgroundColor: '#f0f0f0',
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
