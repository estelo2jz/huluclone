import React, { forwardRef } from 'react';
import TextTruncate from 'react-text-truncate';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

// base images url, they tell you this in the API very easily, so dig deep to find this.
const base_url = "https://image.tmdb.org/t/p/original/";

// forwardRef means its like a big pointer, it what tell the browser that this is this item and this is this item,
// refer to this element
const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    // forwardRef, attach ref={ref} to the videoCard,
    //  NOW React has a way sayin, This is this VideoCard, This is this VideoCard. 
    <div ref={ref} className="videoCard">
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
         textTruncateChild={<a target="_blank" href="/">Read more</a>}
         text={movie.overview}
       />
       <h2>{movie.title || movie.original_name}</h2>
       <p className="videoCard__stats">
         <li>
          {movie.media_type && `${movie.media_type}`}
         </li>
         <li>
          {movie.release_date || movie.first_air_date} &#8226;
         </li>
         <li>
          <ThumbUpIcon />{movie.vote_count}
         </li>
       </p>
    </div>
  )
});

export default VideoCard
