import { useState, useEffect } from "react";

const Pagination = ({ pageChangeHandler, numberOfBlocks, blocksPerPage }) => {
    // number of pages needed for the table
    const numberOfPages = Math.ceil(numberOfBlocks / blocksPerPage);

    // array of page numbers
    const pages = [...new Array(numberOfBlocks)];

    // state variable for tracking the current page
    const [currentPage, setCurrentPage] = useState(1);

    // state variables for toggling button availability
    const [canGoPrev, setCanGoPrev] = useState(false);
    const [canGoNext, setCanGoNext] = useState(true);

    // event handling for button clicks
    const onPrevPageClick = () => setCurrentPage(currentPage - 1);
    const onNextPageClick = () => setCurrentPage(currentPage + 1);
    const onPageClick = (pageNumber) => setCurrentPage(pageNumber);

    // disable buttons if action is out of bounds
    useEffect(() => {
      currentPage === 1 ? setCanGoPrev(fasle) : setCanGoPrev(true); 
      currentPage === numberOfPages ? setCanGoNext(false) : setCanGoNext(true);
    }, [numberOfPages, currentPage]);

    // identify new page number when page is changed 
    useEffect(() => {
      pageChangeHandler(currentPage); 
    }, [currentPage]); 

    return (
      <div>
        <div>
          <button 
            onClick={onPrevPageClick}
            disabled={!canGoPrev}
          >
            &#8249; 
          </button>
          {pages.map((_value, index) => (
            <button
              onClick={() => onPageClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button 
            onClick={onNextPageClick}
            disabled={!canGoNext}
          >
            &#8250;
          </button>
        </div>
      </div>
    );
};

export default Pagination; 