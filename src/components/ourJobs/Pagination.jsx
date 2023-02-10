import React from 'react';

const Pagination = ({disabledPrevBtn,disabledNextBtn,handlePrevBtn,handleNextBtn,pageDecrementBtn,pageInrementBtn,renderPageNumbers}) => {

    return (
        <nav className='paginationNav'>
            <ul className='paginationUl'>
                <button disabled={disabledPrevBtn} onClick={handlePrevBtn} className='PaginateBtn'>Prev</button>
                {pageDecrementBtn}
                {renderPageNumbers}
                {pageInrementBtn}
                <button disabled={disabledNextBtn} onClick={handleNextBtn} className='PaginateBtn'>Next</button>
            </ul>
        </nav>
    );
};


export default Pagination;