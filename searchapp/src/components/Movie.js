import React from 'react';
import {Link } from 'react-router-dom';
import imageUrl from './imageUrl';

function Movie(props) {
	let info;
	for (let i = 0; i < props.datas.length; i++) {
		if (props.datas[i].id === parseInt(props.id)) {
			console.log(props, props.datas[0].overview);
			info = props.datas[i];
		}
	}
	return (
		<div style={{height:'800px',backgroundColor:'rgb(53, 53, 53)'}}>
			<div className='section-container'>
				<div className='movie-container'>
					<img
						src={imageUrl.largeImg + info.poster_path}
						alt={info.title}></img>

					{/* <img className ='backdrop' src={imageUrl.backDrop + info.backdrop_path}></img> */}

					<div className='info-container'>
						<h2>{info.original_title} </h2>
						<h4>Release Date: {info.release_date || info.first_air_date}</h4>
						<h4>Rating: {info.vote_average}/10</h4>
						<h4>
							<strong> Overview </strong>
						</h4>
						<p> {info.overview}</p>
						<Link to='/'>
							<button className='home-button'>Home</button>
						</Link>
						<button className='add-to-list'>Add to Watch Lists</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Movie;
