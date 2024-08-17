export default function Pagination({ currentPage, setCurrentPage, totalPages }) {
  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handleFirstClick = () => {
    setCurrentPage(1);
  };

  const handleLastClick = () => {
    setCurrentPage(totalPages);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(
      <button key={i} onClick={() => handlePageClick(i)} className={i === currentPage ? "active" : ""}>
        {i}
      </button>
    );
  }

  return (
    <>
      <div>
        {currentPage > 1 && (
          <>
            <button onClick={handleFirstClick}>First</button>
            <button onClick={handlePrevClick}>Prev</button>
          </>
        )}
        {pageNumbers}
        {currentPage < totalPages && (
          <>
            <button onClick={handleNextClick}>Next</button>
            <button onClick={handleLastClick}>Last</button>
          </>
        )}
      </div>
    </>
  );
}
