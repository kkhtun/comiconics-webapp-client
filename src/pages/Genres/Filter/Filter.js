import "./Filter.scss";
import { useEffect, useState } from "react";
import environment from "../../../environment";
import SearchIcon from "../../../assets/search.svg";
import Select from "react-select";
import { useFetchList } from "../../../hooks/fetch.hook";
import * as R from "ramda";

function Filter({ onFilter }) {
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [search, setSearch] = useState("");
    const { response } = useFetchList({
        url: `${environment.url}/api/v1/genres`,
        initialQueries: { limit: 0 },
    });

    useEffect(() => {
        response.data &&
            setGenres(
                R.map(
                    ({ _id, name }) => ({ label: name, value: _id }),
                    response.data
                )
            );
    }, [response]);

    const handleSelectChange = (e) => {
        setSelectedGenres(e);
    };

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
                            {genres && genres.length > 0 ? (
                                <Select
                                    options={genres}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    onChange={handleSelectChange}
                                    className="react-select"
                                />
                            ) : (
                                <></>
                            )}
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
