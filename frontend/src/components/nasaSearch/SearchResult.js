import React from 'react';
import { Link } from "react-router-dom";

const SearchResult = () => {

    return (
        <div>
            <div className="nasa-total-hits">Total Hits: {totalHits}</div>
            <div className="nasa-collection-list">
            </div>
            Pages
        </div>
    );
};

export default SearchResult;