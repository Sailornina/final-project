import React from "react";
import { useState } from "react";
import { searchNasaImagesByPage } from "../../apis/nasa-api";
import ImageDetails from "./ImageDetails";
import Pagination from '@mui/material/Pagination';

const SearchForm = () => {
    const [result, setResult] = useState({images: []});
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);

    const executeSearch = async (query, page) => {
        const imagesDetails = await searchNasaImagesByPage(query, page);
        console.log(`Result: ${JSON.stringify(imagesDetails)}`);
        setResult(imagesDetails);
    }

    const onClickSearch = async (e) => {
        await executeSearch(query, page);
    };

    const updateQuery = (e) => {
        setQuery(e.target.value)
    };

    const onFormSubmit = (e) => e.preventDefault();

    const handleChangePage = async (e, value) => {
        await executeSearch(query, page);
        // console.log(`handleChangePage value: ${value}`)
        setPage(value);
    };

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
                <Pagination count={5} 
                    variant="outlined" 
                    color="secondary"
                    onChange={handleChangePage}
                    />
                {result.images.map((image) => (
                   <ImageDetails
                   key={image.id}
                   image={image}
                   />
                ))}
            </div>
        </div>
    );
};

export default SearchForm;


