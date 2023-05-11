import React, { useState, useEffect } from "react";
import styles from "./styles.module.css"; 

const Pagination = ({ 
  pageChangeHandler, 
  numberOfElements, 
  elementsPerPage, 
  currentPage,
}) => {
  // number of pages needed for the table
  const numberOfPages = Math.ceil(numberOfElements / elementsPerPage);

  // array of page numbers
  const pages = [...new Array(numberOfPages)];

  // state variables for toggling button availability
  const [canGoPrev, setCanGoPrev] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);

  // event handling for button clicks
  const onPrevPageClick = () => pageChangeHandler(currentPage - 1);
  const onNextPageClick = () => pageChangeHandler(currentPage + 1);
  const onPageClick = (pageNumber) => pageChangeHandler(pageNumber);

  // disable buttons if action is out of bounds
  useEffect(() => {
    currentPage === 1 ? setCanGoPrev(false) : setCanGoPrev(true); 
    currentPage === numberOfPages ? setCanGoNext(false) : setCanGoNext(true);
  }, [numberOfPages, currentPage]);

  // identify new page number when page is changed 
  useEffect(() => {
    pageChangeHandler(currentPage); 
  }, [currentPage]); 

  return (
    <div className={styles.pagination}>
      <div className={styles.pagebuttons}>
        <button 
          className={styles.pageBtn}
          onClick={onPrevPageClick}
          disabled={!canGoPrev}
        >
          &#8249; 
        </button>
        {pages.map((_value, index) => (
          // array of page numbers to be rendered
          [index - 9, index, index + 1, index + 2, index + 10].includes(currentPage) &&
          <button
            onClick={() => onPageClick(index + 1)}
            className={`${styles.pageBtn}  ${
              index + 1 === currentPage ? styles.activeBtn : styles.pageBtn
            }`}
            key={index + 1}
          >
            {index + 1}
          </button>
        ))}
        <button 
          className={styles.pageBtn}
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