import React from "react";

const Pagination = ({ page, setPage }) => {
    return (
        <div>
            <div>
                <button
                    onClick={() => {
                        setPage((prev) => {
                            if (prev == 0) {
                                return 1;
                            }
                            return --prev;
                        });
                    }}
                >
                </button>
                <h3>{page}</h3>
                <button
                    onClick={() => {
                        setPage((prev) => {
                            return ++prev;
                        });
                    }}
                >
                </button>
            </div>
        </div>
    );
};

export default Pagination;