import React, { useState, useEffect } from "react";
import Search from "./Search";
import Pagination from "./Pagination";


const ImageandVideo = () => {
  const [queryText, setQueryText] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchAll();

    async function fetchAll() {
      const API_URL_SEARCH_NASA = `https://images-api.nasa.gov/search?q=${queryText}&page=${page}`
      await fetch(API_URL_SEARCH_NASA)
        .then((res) => res.json())
        .then((data) => {
          setData(data.collection.items)
          setLoading(false);
        });
    }
  }, [queryText, page]);

  return (
    <div className="nasa-search-container">
      <h1 className="title-search-nasa">NASA Image and Video Library</h1>
      <div className="nasa-search-pagination">
        <div>
          <Search queryText={queryText} setQueryText={setQueryText} />
          <Pagination page={page} setPage={setPage} />
        </div>
        <div id="nasa-search">
          {data.map((item) => {
            const hasLinks = item.links !== undefined;
            return (
              <div
                key={item.data[0].nasa_id}
                title={item.data[0].title}
                mediaType={item.data[0].media_type}
                dateCreated={item.data[0].date_created}
                description={item.data[0].description}
                hasLinks={hasLinks}
                links={item.links}
                resources={item.href}
              />
            );
          })}
        </div>
      </div>
      {/* <div>
        {hasLinks && links[0].render === "image" (
          <img src={links[0].href} alt={title} id="nasa-image" loading="loading" />
        )}
        <div className="nasa-info">
          <h1>{title}</h1>
          <p>Date Created: {dateCreated}</p>
          <p id="nasa-description">{description}</p>
        </div>
      </div> */}
    </div>
  );
};

export default ImageandVideo;

