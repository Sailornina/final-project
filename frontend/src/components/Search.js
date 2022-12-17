import React from "react";
import { useState } from "react";

const Search = ({ setQueryText, queryText }) => {
    const [input, setInput] = useState("");
    return (
        <div>
            <input
                type="text"
                id="search"
                placeholder="Search for nasa images and videos"
                onChange={(e) => {
                    setInput(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        setQueryText(input);
                    }
                }}
            />
            {input.length > 0 && (
                <button
                    className="IAVL-submit"
                    type="button"
                    onClick={(e) => {
                        setQueryText(input);
                    }}
                >
                </button>
            )}
        </div>
    );
};

export default Search;