import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useState, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Beverages from './pages/Beverages';
import About from './pages/About'
import Contact from './pages/Contact'
import Reserve from './pages/Reserve';
import Footer from './components/Footer';

function App() {

  // force to scroll to top
  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname])

  

  const[isOpen, setIsOpen] =useState(false)

    const toggle=() => {
        setIsOpen(!isOpen) 
    } 

  return (
    <>
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path="/highend_restaurant" exact component={Home}/>
        <Route path="/menu" exact component={Menu}/>
        <Route path="/beverages" exact component={Beverages}/>
        <Route path="/about" exact component={About}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/reserve" exact component={Reserve}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;