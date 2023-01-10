import React from "react";
import { useState } from "react";
import { searchNasaImagesByPage } from "../../apis/nasa-api";
import ImageDetails from "./ImageDetails";
import Pagination from "@mui/material/Pagination";

const SearchForm = () => {
  const [result, setResult] = useState({ images: [] });
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const executeSearch = async (query, page) => {
    const imagesDetails = await searchNasaImagesByPage(query, page);
    console.log(`Result: ${JSON.stringify(imagesDetails)}`);
    setResult(imagesDetails);
    setTotalPages(imagesDetails.total_pages);
  };

  const onClickSearch = async (e) => {
    await executeSearch(query, page);
  };

  const updateQuery = (e) => {
    setQuery(e.target.value);
  };

  const onFormSubmit = (e) => e.preventDefault();

  const handleChangePage = async (e, value) => {
    await executeSearch(query, value);
    // console.log(`handleChangePage value: ${value}`)
    setPage(value);
  };

  return (
    <div className="search-container">
      <div className="search-div">
        <form onSubmit={onFormSubmit}>
          <input
            className="search-input"
            placeholder="Search for moon, supernova..."
            type="text"
            value={query}
            onChange={updateQuery}
          />
          <button onClick={onClickSearch}>Search</button>
        </form>
        <div>
          {result.images.length > 0 && (
            <Pagination
              count={totalPages}
              variant="outlined"
              color="secondary"
              onChange={handleChangePage}
            />
          )}
          {result.images.map((image) => (
            <ImageDetails key={image.id} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
