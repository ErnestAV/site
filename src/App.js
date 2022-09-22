import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import Footer from './components/Footer';
import Contact from './components/pages/Contact'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Projects' component={Projects} />
          <Route path='/Contact' component={Contact} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
