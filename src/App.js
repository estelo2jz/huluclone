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
import Hubs from './components/Category/Hubs';

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
        <Route path="/home" component={Home} />
        <Route path="/mystuff" component={MyStuff} />
        <Route path="/tv" component={TV} />
        <Route path="/movies" component={Movies} />
        <Route path="/hubs" component={Hubs} />
        {/* <Route path="/trending" component={Trending} /> */}
      </Switch>
    </Router>
  );
}

export default App;
