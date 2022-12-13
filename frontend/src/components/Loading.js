// import React from 'react'
// import loadingIcon from '../assets/loading-icon.svg'

// const Loading = () => {
//   return (
//     <div className="loading">
//       <img className="loading-img" src={loadingIcon} alt="Loading" />
//       <p>Loading...</p>
//     </div>
//   )
// }

// export default Loading;

// <section className="galaxy">
// 	<ul className="orbit">
// 		<li className="sun"><span></span></li>
// 		<li className="mercury"><span></span></li>
// 		<li className="venus"><span></span></li>
// 		<li className="earth"><span><span className="moon"></span></span></li>

// 		<li className="mars"><span></span></li>
// 		<li className="asteroids"><span></span></li>
// 		<li className="jupiter"><span></span></li>
// 		<li className="saturn"><span><span className="ring"></span></span></li>

// 		<li className="uranus"><span></span></li>
// 		<li className="neptun"><span></span></li>
// 		<li className="pluto"><span></span></li>
// 	</ul>
// </section>
// <div className="div2" id="four"></div>

//CSS
// body{
// 	background-color: #000;
// }
// ul{
// 	list-style: none;
// 	position: relative;
// }
// li{
// 	border-radius: 100%;
// 	position: absolut;
// 	-webkit-animation.titeration-count: infinite;
// 	-webkit-animation.timing-function: linear;
// 	-webkit-animation.name: orbit-path;
// }
// li span{
// 	border-radius: 100%;
// 	position: absolut;
// 	-webkit-animation.titeration-count: infinite;
// 	-webkit-animation.timing-function: linear;
// 	-webkit-animation.name: moon;
// }
// @-webkit-keyframes orbit-path{
// 	from{ -webkit-transform:rotate(0deg);}
// 	to{ -webkit-transform:rotate(360deg);}
// }
// @-webkit-keyframes mppn{
// 	from{ -webkit-transform:rotate(0deg);}
// 	to{ -webkit-transform:rotate(360deg);}
// }

// ul.orbit li.mercury{-webkit-animation-duration:5s;}
// ul.orbit li.venus{-webkit-animation-duration:8s;}
// ul.orbit li.earth{-webkit-animation-duration:12s;}

// ul.orbit li.earth span{-webkit-animation-duration:2s;}
// ul.orbit li.mars{-webkit-animation-duration:20s;}

// ul.orbit li.asteroids_meteorids{-webkit-animation-duration:50s;}

// ul.orbit li.jupiter{-webkit-animation-duration:30s;}
// ul.orbit li.saturn{-webkit-animation-duration:160s;}
// ul.orbit li.uranus{-webkit-animation-duration:70s;}
// ul.orbit li.neptune{-webkit-animation-duration:100s;}
// ul.orbit li.pluto{-webkit-animation-duration:120s;}

// .pluto{
// 	border: 1.5px solid #394057;
// 	height: 584px;
// 	width: 584px;
// }

// .neptune{
// 	border: 1px solid #394057;
// 	height: 524px;
// 	width: 524px;
// 	top:30px;
// 	left:70px;
// }
// .uranus{
// 	border: 1px solid #394057;
// 	height: 464px;
// 	width: 464px;
// 	top:60px;
// 	left:100px;
// }

// .saturn{
// 	border: 1px solid #394057;
// 	height: 404px;
// 	width: 404px;
// 	top:90px;
// 	left:130px;
// }

// .jupiter{
// 	border: 1px solid #394057;
// 	height:344px;
// 	width: 344px;
// 	top:120px;
// 	left:160px;
// }


// .asteroids{
// 	border: 1px solid #394057;
// 	height:330px;
// 	width: 330px;
// 	top:130px;
// 	left:170px;
// }

// .mars{
// 	border: 1px solid #394057;
// 	height:284px;
// 	width: 284px;
// 	top:150px;
// 	left:190px;
// }

// .earth{
// 	border: 1px solid #394057;
// 	height:224px;
// 	width: 224px;
// 	top:180px;
// 	left:220px;
// }
// .venus{
// 	border: 1px solid #394057;
// 	height:164px;
// 	width: 164px;
// 	top:210px;
// 	left:250px;
// }

// .mercury{
// 	border: 1px solid #394057;
// 	height:104px;
// 	width: 104px;
// 	top:240px;
// 	left:280px;
// }

// .sun{
// 	background-color: yellow;
// 	height:45px;
// 	width: 45px;
// 	top:270px;
// 	left:310px;
// }

// .pluto > span{
// 	background-color: #7cba5c;
// 	height:10px;
// 	width: 10px;
// 	top:79px;
// 	left:79px;
// }


// .neptune > span{
// 	background-color: #77c2ee;
// 	height:10px;
// 	width: 10px;
// 	top:0px;
// 	left:200px;
// }


// .uranus> span{
// 	background-color: #82b3d1;
// 	height:10px;
// 	width: 10px;
// 	top:6px;
// 	left:300px;
// }

// .ring{
// 	background-color: none;
// 	height:12px;
// 	width: 12px;
// 	top:-3px;
// 	left:-3px;
// 	border 2px solid #5a4a34;
// 	transform: skewY(50deg);
// 	border-radius: 8px;
// }
// .saturn> span{
// 	background-color: #dfd3a9;
// 	height:10px;
// 	width: 10px;
// 	top:24px;
// 	left:300px;
// }
// .jupiter> span{
// 	background-color: #e0aa6f;
// 	height:10px;
// 	width: 10px;
// 	top:67px;
// 	left:24px;
// }
// .mars> span{
// 	background-color: #aa4200;
// 	height:10px;
// 	width: 10px;
// 	top:0px;
// 	left:175px;
// }

// span .moon{
// 	background-color: #eee;
// 	height:4px;
// 	width: 4px;
// 	top:12px;
// 	left:12px;
// }

// .earth> span{
// 	background-color: #06e;
// 	height:10px;
// 	width: 10px;
// 	top:56px;
// 	left:5px;
// }

// .venus> span{
// 	background-color: #bf8639;
// 	height:10px;
// 	width: 10px;
// 	top:5px;
// 	left:118px;
// }

// .mercury> span{
// 	background-color: #b6bac5;
// 	height:10px;
// 	width: 10px;
// 	top:10px;
// 	left:10px;
// }