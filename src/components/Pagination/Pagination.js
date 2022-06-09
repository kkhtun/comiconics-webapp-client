import ReactPaginate from "react-paginate";
import "./Pagination.scss";
function Pagination({
    onPageChange = () => {},
    count = 0,
    limit = 10,
    customClass = "",
}) {
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
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
                pageCount={Math.ceil(count / limit)}
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
