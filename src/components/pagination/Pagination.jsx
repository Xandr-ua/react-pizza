import React from 'react';
import ReactPaginate from 'react-paginate';

import './Pagination.scss';

function Pagination() {
  return (
    <div className="pagination">
      <div className="container">
        <ReactPaginate
          className="pagination__list"
          breakLabel="..."
          nextLabel=">"
          onPageChange={(event) => console.log(event)}
          pageRangeDisplayed={5}
          pageCount={3}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

export default Pagination;
