export default function Pagination({ pageIndex, totalPage, setPageIndex }) {
  return (
    <>
      <div className="space-x-2 space-y-2 mt-8">
        <button
          className={`text-black text-white px-6 py-2  text-sm ${pageIndex === 1 ? "bg-gray-300" : "bg-blue-400"}`}
          disabled={pageIndex === 1}
          onClick={() => setPageIndex(pageIndex - 1)}
        >
          Previous
        </button>
        <span>{`${pageIndex} of ${totalPage}`}</span>
        <button
          className={`text-black text-white px-6 py-2 text-sm ${
            pageIndex === totalPage ? "bg-gray-300" : "bg-blue-400"
          }`}
          disabled={pageIndex === totalPage}
          onClick={() => setPageIndex(pageIndex + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}
