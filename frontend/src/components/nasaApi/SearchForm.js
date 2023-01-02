// import React, { useState } from "react";
// import { useNavigate, useMatch } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { getNasaImagesByPage } from ".../utils/nasa-api";

// const SearchForm = () => {
//     const [query, setQuery] = useState('');

//     const accessToken = useSelector((store) => store.user.accessToken);

//     const navigate = useNavigate();
//     // const onCurrentRouteMatch = useMatch('/search');

//     useEffect(() => {
// 		if (accessToken) {
// 			navigate("/search");
// 		}
// 	}, [accessToken, navigate])

//     const onQueryChange = (e) => {
//         setQuery(e.target.value);
//     };

//     return (
//         <div>
//             <div className="search-div">
//                 <form className='search-form'>
//                     <input
//                     className='search-input'
//                     placeholder='Search for moon, supernova...'
//                     type="text"
//                     value={query}
//                     onChange={onQueryChange} />
//                     <button className='search-button' type='onSubmit'>Search</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default SearchForm;