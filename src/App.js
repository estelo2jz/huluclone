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

// GENRE COMPONENTS
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

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  return (
    <Router>
        <Header />
      <div className="app">
        {/* <Nav setSelectedOption={setSelectedOption} /> */}
        {/* <Results selectedOption={selectedOption} />  */}
      </div>
      <Switch>
        <Route exact path="/home" component={Home} />
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
      </Switch>
    </Router>
  );
}

export default App;
