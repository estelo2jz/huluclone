import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './styles/main.scss';
import Header from './components/Header';
import Nav from './components/Nav';
import Results from './components/Results';
import requests from './requests';
import Home from './components/Category/Home';
import MyStuff from './components/Category/MyStuff';
import TV from './components/Category/TV';
import Movies from './components/Category/Movies';
import Networks from './components/Category/Networks';

import TVTemplate from './components/Category/CategoryData/TVData/TVTemplate';

// TV GENRE COMPONENTS
import GenreComponent from './components/Category/CategoryData/TVData/GenreComponent';
import GenreAction from './components/Category/CategoryData/TVData/GenreComp/GenreAction';
import GenreAdultAnimation from './components/Category/CategoryData/TVData/GenreComp/GenreAdultAnimation';
import GenreAdventure from './components/Category/CategoryData/TVData/GenreComp/GenreAdventure';
import GenreAnimalsNature from './components/Category/CategoryData/TVData/GenreComp/GenreAnimalsNature';
import GenreAnime from './components/Category/CategoryData/TVData/GenreComp/GenreAnime';
import GenreBlackStories from './components/Category/CategoryData/TVData/GenreComp/GenreBlackStories';
import GenreBritish from './components/Category/CategoryData/TVData/GenreComp/GenreBritish';
import GenreComedy from './components/Category/CategoryData/TVData/GenreComp/GenreComedy';
import GenreCookingFood from './components/Category/CategoryData/TVData/GenreComp/GenreCookingFood';
import GenreCrime from './components/Category/CategoryData/TVData/GenreComp/GenreCrime';
import GenreDocumentary from './components/Category/CategoryData/TVData/GenreComp/GenreDocumentary';
import GenreDrama from './components/Category/CategoryData/TVData/GenreComp/GenreDrama';
import GenreFamily from './components/Category/CategoryData/TVData/GenreComp/GenreFamily';
import GenreFantasy from './components/Category/CategoryData/TVData/GenreComp/GenreFantasy';
import GenreGameShow from './components/Category/CategoryData/TVData/GenreComp/GenreGameShow';
import GenreHorror from './components/Category/CategoryData/TVData/GenreComp/GenreHorror';
import GenreInternational from './components/Category/CategoryData/TVData/GenreComp/GenreInternational';
import GenreKids from './components/Category/CategoryData/TVData/GenreComp/GenreKids';
import GenreLateNight from './components/Category/CategoryData/TVData/GenreComp/GenreLateNight';
import GenreLGBTQ from './components/Category/CategoryData/TVData/GenreComp/GenreLGBTQ';
import GenreLatino from './components/Category/CategoryData/TVData/GenreComp/GenreLatino';
import GenreLifestyleCulture from './components/Category/CategoryData/TVData/GenreComp/GenreLifestyleCulture';
import GenreMystery from './components/Category/CategoryData/TVData/GenreComp/GenreMystery';
import GenreNews from './components/Category/CategoryData/TVData/GenreComp/GenreNews';
import GenreReality from './components/Category/CategoryData/TVData/GenreComp/GenreReality';
import GenreRomance from './components/Category/CategoryData/TVData/GenreComp/GenreRomance';
import GenreScienceFiction from './components/Category/CategoryData/TVData/GenreComp/GenreScienceFiction';
import GenreSketchComedy from './components/Category/CategoryData/TVData/GenreComp/GenreSketchComedy';
import GenreSitcom from './components/Category/CategoryData/TVData/GenreComp/GenreSitcom';
import GenreTalkInterview from './components/Category/CategoryData/TVData/GenreComp/GenreTalkInterview';
import GenreTeen from './components/Category/CategoryData/TVData/GenreComp/GenreTeen';
import GenreThriller from './components/Category/CategoryData/TVData/GenreComp/GenreThriller';

// MOVIE Genre Components
import MovieGenreComponent from './components/Category/CategoryData/MovieData/GenreComponent';
import MovieGenreAction from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreAction';
import MovieGenreAdultAnimation from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreAdultAnimation';
import MovieGenreAdventure from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreAdventure';
import MovieGenreAnimalsNature from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreAnimalsNature';
import MovieGenreAnime from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreAnime';
import MovieGenreBlackStories from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreBlackStories';
import MovieGenreBritishTV from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreBritishTV';
import MovieGenreComedy from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreComedy';
import MovieGenreCookingFood from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreCookingFood';
import MovieGenreCrime from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreCrime';
import MovieGenreDocumentary from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreDocumentary';
import MovieGenreDrama from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreDrama';
import MovieGenreFamily from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreFamily';
import MovieGenreFantasy from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreFantasy';
import MovieGenreHorror from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreHorror';
import MovieGenreInternational from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreInternational';
import MovieGenreKids from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreKids';
import MovieGenreLatenight from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreLatenight';
import MovieGenreLatino from './components/Category/CategoryData/MovieData/GenreComp/MoviesGenreLatino';
import MovieGenreLGBTQ from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreLGBTQ';
import MovieGenreLifestyleCulture from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreLifestyleCulture';
import MovieGenreMystery from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreMystery';
import MovieGenreNews from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreNews';
import MovieGenreReality from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreReality';
import MovieGenreRomance from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreRomance';
import MovieGenreScienceFiction from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreScienceFiction';
import MovieGenreSitcom from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreSitcom';
import MovieGenreSketchComedy from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreSketchComedy';
import MovieGenreTalkInterview from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreTalkInterview';
import MovieGenreTeen from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreTeen';
import MovieGenreThriller from './components/Category/CategoryData/MovieData/GenreComp//MoviesGenreThriller';



function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  return (
    <Router>
        <Header />
        <div className="app">
          {/* <Nav setSelectedOption={setSelectedOption} /> */}
          {/* <Results selectedOption={selectedOption} />  */}
        </div>
        <Route exact path="/" component={Home} />
      <Switch>
        <Route exact path="/mystuff" component={MyStuff} />
        <Route exact path="/tv" component={TV} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/networks" component={Networks} />
        {/* <Route path="/trending" component={Trending} /> */}

        {/* TV Genre Routing */}
        <Route exact path="/tv/action" component={GenreComponent}>
          <GenreComponent />
          <GenreAction />
        </Route>
        <Route exact path="/tv/adultanimation" component={GenreComponent}>
          <GenreComponent />
          <GenreAdultAnimation />
        </Route>
        <Route exact path="/tv/adventure" component={GenreComponent}>
          <GenreComponent />
          <GenreAdventure />
        </Route>
        <Route exact path="/tv/animals&nature" component={GenreComponent}>
          <GenreComponent />
          <GenreAnimalsNature />
        </Route>
        <Route exact path="/tv/anime" component={GenreComponent}>
          <GenreComponent />
          <GenreAnime />
        </Route>
        <Route exact path="/tv/blackstories" component={GenreComponent}>
          <GenreComponent />
          <GenreBlackStories />
        </Route>
        <Route exact path="/tv/britishTV" component={GenreComponent}>
          <GenreComponent />
          <GenreBritish />
        </Route>
        <Route exact path="/tv/comedy" component={GenreComponent}>
          <GenreComponent />
          <GenreComedy />
        </Route>
        <Route exact path="/tv/cooking&food" component={GenreComponent}>
          <GenreComponent />
          <GenreCookingFood />
        </Route>
        <Route exact path="/tv/crime" component={GenreComponent}>
          <GenreComponent />
          <GenreCrime />
        </Route>
        <Route exact path="/tv/documentary" component={GenreComponent}>
          <GenreComponent />
          <GenreDocumentary />
        </Route>
        <Route exact path="/tv/drama" component={GenreComponent}>
          <GenreComponent />
          <GenreDrama />
        </Route>
        <Route exact path="/tv/family" component={GenreComponent}>
          <GenreComponent />
          <GenreFamily />
        </Route>
        <Route exact path="/tv/fantasy" component={GenreComponent}>
          <GenreComponent />
          <GenreFantasy />
        </Route>
        <Route exact path="/tv/gameshows" component={GenreComponent}>
          <GenreComponent />
          <GenreGameShow />
        </Route>
        <Route exact path="/tv/horror" component={GenreComponent}>
          <GenreComponent />
          <GenreHorror />
        </Route>
        <Route exact path="/tv/international" component={GenreComponent}>
          <GenreComponent />
          <GenreInternational />
        </Route>
        <Route exact path="/tv/kids" component={GenreComponent}>
          <GenreComponent />
          <GenreKids />
        </Route>
        <Route exact path="/tv/latenights" component={GenreComponent}>
          <GenreComponent />
          <GenreLateNight />
        </Route>
        <Route exact path="/tv/latino" component={GenreComponent}>
          <GenreComponent />
          <GenreLatino />
        </Route>
        <Route exact path="/tv/lgbtq+" component={GenreComponent}>
          <GenreComponent />
          <GenreLGBTQ />
        </Route>
        <Route exact path="/tv/lifestyle&culture" component={GenreComponent}>
          <GenreComponent />
          <GenreLifestyleCulture />
        </Route>
        <Route exact path="/tv/mystery" component={GenreComponent}>
          <GenreComponent />
          <GenreMystery />
        </Route>
        <Route exact path="/tv/news" component={GenreComponent}>
          <GenreComponent />
          <GenreNews />
        </Route>
        <Route exact path="/tv/reality" component={GenreComponent}>
          <GenreComponent />
          <GenreReality />
        </Route>
        <Route exact path="/tv/romance" component={GenreComponent}>
          <GenreComponent />
          <GenreRomance />
        </Route>
        <Route exact path="/tv/sciencefiction" component={GenreComponent}>
          <GenreComponent />
          <GenreScienceFiction />
        </Route>
        <Route exact path="/tv/sitcom" component={GenreComponent}>
          <GenreComponent />
          <GenreSitcom />
        </Route>
        <Route exact path="/tv/sketchcomedy" component={GenreComponent}>
          <GenreComponent />
          <GenreSketchComedy />
        </Route>
        <Route exact path="/tv/talk&interview" component={GenreComponent}>
          <GenreComponent />
          <GenreTalkInterview />
        </Route>
        <Route exact path="/tv/teen" component={GenreComponent}>
          <GenreComponent />
          <GenreTeen />
        </Route>
        <Route exact path="/tv/thriller" component={GenreComponent}>
          <GenreComponent />
          <GenreThriller />
        </Route>


        {/* Movie routing */}
        <Route exact path="/movies/action" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreAction />
        </Route>
        <Route exact path="/movies/adultanimation" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreAdultAnimation />
        </Route>
        <Route exact path="/movies/adventure" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreAdventure />
        </Route>
        <Route exact path="/movies/animals&nature" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreAnimalsNature />
        </Route>
        <Route exact path="/movies/anime" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreAnime />
        </Route>
        <Route exact path="/movies/blackstories" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreBlackStories />
        </Route>
        <Route exact path="/movies/britishTV" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreBritishTV />
        </Route>
        <Route exact path="/movies/comedy" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreComedy />
        </Route>
        <Route exact path="/movies/cooking&food" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreCookingFood />
        </Route>
        <Route exact path="/movies/crime" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreCrime />
        </Route>
        <Route exact path="/movies/documentary" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreDocumentary />
        </Route>
        <Route exact path="/movies/drama" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreDrama />
        </Route>
        <Route exact path="/movies/family" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreFamily />
        </Route>
        <Route exact path="/movies/fantasy" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreFantasy />
        </Route>
        <Route exact path="/movies/horror" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreHorror />
        </Route>
        <Route exact path="/movies/international" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreInternational />
        </Route>
        <Route exact path="/movies/kids" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreKids />
        </Route>
        <Route exact path="/movies/lifestyle&culture" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreLifestyleCulture />
        </Route>
        <Route exact path="/movies/latenight" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreLatenight />
        </Route>
        <Route exact path="/movies/latino" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreLatino />
        </Route>
        <Route exact path="/movies/lgbtq+" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreLGBTQ />
        </Route>
        <Route exact path="/movies/mystery" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreMystery />
        </Route>
        <Route exact path="/movies/news" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreNews />
        </Route>
        <Route exact path="/movies/reality" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreReality />
        </Route>
        <Route exact path="/movies/romance" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreRomance />
        </Route>
        <Route exact path="/movies/sciencefiction" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreScienceFiction />
        </Route>
        <Route exact path="/movies/sitcom" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreSitcom />
        </Route>
        <Route exact path="/movies/sketchcomedy" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreSketchComedy />
        </Route>
        <Route exact path="/movies/talk&interview" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreTalkInterview />
        </Route>
        <Route exact path="/movies/teen" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreTeen />
        </Route>
        <Route exact path="/movies/thriller" component={MovieGenreComponent}>
          <MovieGenreComponent />
          <MovieGenreThriller />
        </Route>

        {/* <Route exact path="/tv/americandad" component={TVTemplate}>
          <TVTemplate />
          <GenreThriller />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
