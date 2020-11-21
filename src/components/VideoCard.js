import React from 'react';
import TextTruncate from 'react-text-truncate';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

// base images url, they tell you this in the API very easily, so dig deep to find this.
const base_url = "https://image.tmdb.org/t/p/original/";

function VideoCard({ movie,  }) {
  return (
    <div className="videoCard">
      <img
        // some films has a backdrop_path,
        // some dont, so we do this movie.poster_path.
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="movie poster"
       />
       {/* TextTruncate can make long paragraph to have cetain line and able to have ... at the end for long sentences */}
       <TextTruncate 
         line={2}
         element="p"
         truncateText="..."
         textTruncateChild={<a target="_blank" href="https://console.firebase.google.com/u/0/">Read more</a>}
         text={movie.overview}
       />
       <h2>{movie.title || movie.original_name}</h2>
       <p className="videoCard__stats">
         {movie.media_type && `${movie.media_type}`}
         {movie.release_date || movie.first_air_date} &#8226;
         <ThumbUpIcon />{movie.vote_count}
       </p>
    </div>
  )
}

export default VideoCard
