import axios from 'axios';

// base url to make requests to the movie database
const instance = axios.create({
  // what this means is when we make those requests that is inside requests.js file,
  // were basicly appending the baseURL to the beginning of reauests,
  // EX. https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US
  baseURL: 'https://api.themoviedb.org/3',
});

export default instance;