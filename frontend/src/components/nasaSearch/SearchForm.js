import React from "react";
import { useState } from "react";
import { searchNasaImagesByPage } from "../../apis/nasa-api";
// import { Link } from "react-router-dom";

const SearchForm = () => {
    const [result, setResult] = useState(null);
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);

    const onClickSearch = async (e) => {
        const imagesDetails = await searchNasaImagesByPage(query, page);
        console.log(`Result: ${JSON.stringify(imagesDetails)}`)
        setResult(imagesDetails);
    };

    const updateQuery = (e) => {
        setQuery(e.target.value)
    };

    const onFormSubmit = (e) => e.preventDefault()

    return (
        <div className="search-container">
            <div className="search-div">
                <form onSubmit={onFormSubmit}>
                    <input
                        className='search-input'
                        placeholder='Search for moon, supernova...'
                        type="text"
                        value={query}
                        onChange={updateQuery}
                    />
                    <button onClick={onClickSearch}>Search</button>
                </form>

            </div>
        </div>
    );
};

export default SearchForm;