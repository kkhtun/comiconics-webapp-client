import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import "./Pagination.scss";
function Pagination({
    onPageChange = () => {},
    pageCount = 0,
    limit = 10,
    customClass = "",
}) {
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        console.log(`User requested page number ${event.selected}`);
        const skip = event.selected * limit;
        onPageChange({ page: event.selected, skip });
    };
    return (
        <div className={"paginationWrapper " + customClass}>
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName={"pagination"}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                activeClassName="active"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
            />
        </div>
    );
}

export default Pagination;
