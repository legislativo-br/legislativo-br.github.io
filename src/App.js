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
import Menu from './components/Menu';
import Contributors from './components/Contributors';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <ScrollToTop>
          <Route path="/" exact component={IndexPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/states" component={StatesPage} />
        </ScrollToTop>
        <Contributors />
      </Router>
    </div>
  );
}

export default App;
