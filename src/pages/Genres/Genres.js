import Grid from "../../components/Grid/Grid";
import Pagination from "../../components/Pagination/Pagination";
import Filter from "./Filter/Filter";
import "./Genres.scss";

function Genres() {
    const onPageChangeThunk = () => {
        return () => {
            console.log("page changed");
        };
    };
    return (
        <div className="genresWrapper">
            <Filter />
            <div className="container mt-5">
                <Grid />
                <Pagination pageCount={10} onPageChange={onPageChangeThunk()} />
            </div>
        </div>
    );
}

export default Genres;
