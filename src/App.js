import React from 'react'
import {  Route } from 'react-router-dom'
import './App.scss';
import Header from '././components/Header/Header';
import axios from 'axios';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';

import About from './pages/About/About';
import Sneakers from './pages/Sneakers/Sneakers';

export const GlobalContext = React.createContext({});

function App() {
  const [items, setItems] = React.useState([]);
  const [exItems, setExItems] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3001/info')
      .then((res) => {
        setItems(res.data);
      });
    axios.get('http://localhost:3001/exclusive')
      .then((res) => {
        setExItems(res.data);
      });
  }, [])


  return (
    <GlobalContext.Provider value={{items, exItems, setExItems}}>
      <div className='wrapper'>
        <Route path='/' exact>
          <Header />
          <Home />
        </Route>
        <Route path='/about' exact>
          <Header />
          <About />
        </Route>
        <Route path='/sneakers' exact>
          <Sneakers />
        </Route>
        <Footer/>
      </div>
    </GlobalContext.Provider>
  );
}
export default App;

