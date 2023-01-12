import React from "react";
import styled from "styled-components";
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
        <ContainerSearch className="search-container">
            <div className="search-div">
                <Form onSubmit={onFormSubmit}>
                    <InputSearch
                        className='search-input'
                        placeholder='Search for moon, supernova...'
                        type="text"
                        value={query}
                        onChange={updateQuery}
                    />
                    <ButtonSearch onClick={onClickSearch}>Search</ButtonSearch>
                </Form>
                <ResultSearch className="result-search">
                    {result.images.length > 0 &&
                        <Pagination
                            count={totalPages}
                            variant="outlined"
                            color="secondary"
                            onChange={handleChangePage}
                            sx={{display:"flex", justifyContent:"center"}}
                        />}
                    {result.images.map((image) => (
                        <ImageDetails
                            key={image.id}
                            image={image}
                        />
                    ))}
                </ResultSearch>
            </div>
        </ContainerSearch>
    );
};

export default SearchForm;

export const ContainerSearch = styled.div`
  width: 100%;
  height: 100px;
  display: block;
  /* display: flex;
  justify-content: center;
  place-items: center; */
  @media (min-width: 1440px) {
    display: block;
    width: 100%;
    height: 100px;
    padding: 10px 0px;}
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  place-items: center;
  text-align: center;
  background-size: cover;
`;

export const InputSearch = styled.input`
  display: flex;
  justify-content: center;
  place-items: center;
  width: 60%;
  border: 3px solid #00B4CC;
  border-right: none;
  padding: 5px;
  height: 50px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #3A4F7A;
`;

export const ButtonSearch = styled.button`
  width: 150px;
  height: 50px;
  border: 1px solid #00B4CC;
  background: #00B4CC;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
`;

export const ResultSearch = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  column-gap: 15px;
`;
