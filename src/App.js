import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// styles
import './assets/normalize.css';
import './assets/general.css';

// pages
import IndexPage from './pages/main';
import AboutPage from './pages/about';
import StatesPage from './pages/states';

// components
import Menu from './components/Menu'
import Contributors from './components/Contributors';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Route path="/" exact component={IndexPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/states" component={StatesPage} />
        <Contributors />
      </Router>
    </div>
  );
}

export default App;
