import React from "react";
import styled from "styled-components";
import user from "../../reducers/user";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import { searchNasaImagesByPage } from "../../apis/nasa-api";
import ImageDetails from "./ImageDetails";
import Pagination from "@mui/material/Pagination";
import communityImg from "../../assets/Rocket.png";
import { Title } from "../../styles/GlobalStyle";

const SearchForm = () => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({ images: [] });
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

	useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

	useEffect(() => {
    dispatch(user.actions.setUsername(localStorage.getItem("username")));
    dispatch(user.actions.setUserId(localStorage.getItem("userId")));
    dispatch(user.actions.setAccessToken(localStorage.getItem("accessToken")));
  });


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

    setPage(value);
  };

  return (
		<>
		{loading === false ? (
    <ContainerSearch className="search-container">
			<Title>Start Investigate the Space with Us!</Title>
				<CommunityImage>
        <img width = "300" height="300" src={communityImg} alt="backgroundImg" />{" "}
      </CommunityImage>
        <Form onSubmit={onFormSubmit}>
          <InputSearch
            className="search-input"
            placeholder="Search for moon, supernova..."
            type="text"
            value={query}
            onChange={updateQuery}
          />
          <ButtonSearch onClick={onClickSearch}>Search</ButtonSearch>
        </Form>
        <ResultSearch className="result-search">
          {result.images.length > 0 && (
            <Pagination
              count={totalPages}
              variant="outlined"
              color="secondary"
              onChange={handleChangePage}
              sx={{ display: "flex", justifyContent: "center" }}
            />
          )}
          {result.images.map((image) => (
            <ImageDetails key={image.id} image={image} />
          ))}
        </ResultSearch>
    </ContainerSearch>
		    ) : (
				<Loading />
				)}
				</>	
  );

};

export default SearchForm;

export const CommunityImage = styled.div`
  z-index: -1;
	overflow: hidden;
`;

export const ContainerSearch = styled.div`
  width: 100%;
  height: 100px;
  display: block;
  margin-top: 20px;
  @media (min-width: 1440px) {
    display: block;
    width: 100%;
    height: 100px;
    padding: 10px 0px;
  }
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
  border: 3px solid #00b4cc;
  border-right: none;
  padding: 5px;
  height: 50px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #3a4f7a;
`;

export const ButtonSearch = styled.button`
  width: 150px;
  height: 50px;
  border: 1px solid #00b4cc;
  background: #00b4cc;
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
  @media (max-width: 667px) {
    grid-template-columns: 1fr;
  }
`;
