import React from 'react';
import './assets/normalize.css';
import './assets/general.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutPage from './pages/about';
import SearchPage from './pages/search';
import Menu from './components/Menu'

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Route path="/" exact component={SearchPage} />
        <Route path="/about" component={AboutPage} />
      </Router>
    </div>
  );
}

export default App;
