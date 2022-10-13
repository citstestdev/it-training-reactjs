import React, { useState, useEffect } from "react";

function Pagination({ data, RenderComponent, pageLimit, dataLimit }) {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };
  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [currentPage]);

  return (
    <>
      <div>
        <div className="dataContainer">
          {getPaginatedData().map((d, idx) => (
            <RenderComponent key={idx} data={d} />
          ))}
        </div>

        <div className="pagination">
          <button
            onClick={goToPreviousPage}
            className={`prev ${currentPage === 1 ? "disabled" : ""}`}
          >
            <i class="fa-solid fa-arrow-left-long"></i>
          </button>

          {getPaginationGroup().map((item, index) => (
            <div>
              {item <= pages ? (
                <button
                  key={index}
                  onClick={changePage}
                  className={`paginationItem ${
                    currentPage === item ? "active" : null
                  }`}
                >
                  <span>{item}</span>
                </button>
              ) : (
                ""
              )}
            </div>
          ))}

          <button
            onClick={goToNextPage}
            className={`next ${currentPage === pages ? "disabled" : ""} `}
          >
            <i class="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Pagination;
