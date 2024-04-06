import React from 'react'
import './movieCard.css';
import './App.css';
import StarRating from './StarRating';
/* insert prop for (the movie) in the card  */
function MovieCard({movie}) {
    return (
    <div className='main'>
    <div class = "card">
    <img src={movie.poster} alt=" photos"/>
    <div class="card-content">
        <h2>
        {movie.title}
        <StarRating value={movie.rating}  filterRate={() => {}}/>
        </h2>
        <p>
        {movie.description}<br/>
        </p>
    </div>
    </div>
    </div>
    )
}

export default MovieCard
