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

        <Route exact path="/tv/genre/action" component={GenreComponent}>
          <GenreComponent />
          <GenreAction />
        </Route>
        <Route exact path="/tv/genre/adultanimation" component={GenreComponent}>
          <GenreComponent />
          <GenreAdultAnimation />
        </Route>
        {/* <Route path="/trending" component={Trending} /> */}
      </Switch>
    </Router>
  );
}

export default App;
