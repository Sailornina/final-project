import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { getNasaImagesByPage } from "../../utils/nasa-api";


const SearchForm = () => {

    return (
        <div>
            <div className="search-div">
                <form className='search-form'>
                    <input
                        className='search-input'
                        placeholder='Search for moon, supernova...'
                        type="text"
                        value={q}
                        onChange={onQueryChange} />
                    <button className='search-button' type='onSubmit'>Search</button>
                </form>
            </div>
        </div>
    );
};

export default SearchForm;