import "./Filter.scss";
import { useCallback, useEffect, useState } from "react";
import environment from "../../../environment";
import SearchIcon from "../../../assets/search.svg";
import Select from "react-select";

function Filter({ onFilter }) {
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [search, setSearch] = useState("");

    const handleSelectChange = (e) => {
        setSelectedGenres(e);
    };

    const fetchGenres = useCallback(async () => {
        const res = await fetch(`${environment.url}/api/v1/genres?limit=0`);
        const { data } = await res.json();
        setGenres(data.map((g) => ({ label: g.name, value: g._id })));
    }, []);

    useEffect(() => {
        fetchGenres().catch(console.error);
    }, [fetchGenres]);

    const onSubmitFilter = () => {
        onFilter({ genres: selectedGenres.map((g) => g.value), search });
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
                            <input
                                type="text"
                                placeholder="Search Title..."
                                value={search}
                                onKeyDown={(e) =>
                                    e.key === "Enter" ? onSubmitFilter() : ""
                                }
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <img src={SearchIcon} alt="search" />
                        </div>
                        <div className="filterBox">
                            <Select
                                options={genres}
                                isMulti
                                closeMenuOnSelect={false}
                                onChange={handleSelectChange}
                                className="react-select"
                            />
                        </div>
                        <button
                            className="filterButton"
                            onClick={onSubmitFilter}
                        >
                            Filter
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Filter;
