import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// styles
import './assets/normalize.css';
import './assets/general.css';

// pages
import IndexPage from './pages/main';
import AboutPage from './pages/about';

// components
import Menu from './components/Menu'

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Route path="/" exact component={IndexPage} />
        <Route path="/about" component={AboutPage} />
      </Router>
    </div>
  );
}

export default App;
