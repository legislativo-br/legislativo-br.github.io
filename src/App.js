import React from 'react';
import './assets/normalize.css';
import './assets/general.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutPage from './pages/about';
import MainPage from './pages/main';
import Menu from './components/Menu'

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Route path="/" exact component={MainPage} />
        <Route path="/about" component={AboutPage} />
      </Router>
    </div>
  );
}

export default App;
