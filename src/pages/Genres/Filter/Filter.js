import "./Filter.scss";
import { useState } from "react";
import SearchIcon from "../../../assets/search.svg";
import Select from "react-select";

function Filter() {
    const [selectedGenres, setSelectedGenres] = useState([]);
    const data = [
        { label: "Romance", value: 355 },
        { label: "Comedy", value: 54 },
        { label: "Action", value: 43 },
        { label: "Adventure", value: 61 },
        { label: "Slice of Life", value: 965 },
        { label: "Thriller", value: 46 },
        { label: "Horror", value: 58 },
    ];

    const handleSelectChange = (e) => {
        setSelectedGenres(e);
    };
    return (
        <section className="genresHeader">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 selectedGenres">
                        {selectedGenres.map((g, idx) => (
                            <span key={idx}>{g.label}</span>
                        ))}
                    </div>
                    <div className="col-md-4 genresFilter">
                        <div className="searchBox">
                            <input type="text" placeholder="Search Title..." />
                            <img src={SearchIcon} alt="search" />
                        </div>
                        <div className="filterBox">
                            <Select
                                options={data}
                                isMulti
                                closeMenuOnSelect={false}
                                onChange={handleSelectChange}
                                className="react-select"
                            />
                        </div>
                        <button className="filterButton">Filter</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Filter;
