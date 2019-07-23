import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AboutPage from './pages/about'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={AboutPage} />
      </Router>
    </div>
  );
}

export default App;
