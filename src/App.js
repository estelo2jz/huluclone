import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './styles/main.scss';
import Header from './components/Header';
import Nav from './components/Nav';
import Results from './components/Results';
import requests from './requests';
import Home from './components/Category/Home';
import Trending from './components/Category/Trending';
import Verified from './components/Category/Verified';
import Collections from './components/Category/Collections';
import Account from './components/Category/Account';

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
        <Route path="/trending" component={Trending} />
        <Route path="/verified" component={Verified} />
        <Route path="/collections" component={Collections} />
        <Route path="/account" component={Account} />
        {/* <Route path="/trending" component={Trending} /> */}
      </Switch>
    </Router>
  );
}

export default App;
