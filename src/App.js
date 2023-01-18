import React from 'react'
import {  Route } from 'react-router-dom'
import './App.scss';
import Header from '././components/Header/Header';
import axios from 'axios';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';

import About from './pages/About/About';
import Sneakers from './pages/Sneakers/Sneakers';
import Accessories from './pages/Accessories/Accessories';
import Clothes from './pages/Clothes/Clothes';


export const GlobalContext = React.createContext({});

function App() {
  const [items, setItems] = React.useState([]);
  const [exItems, setExItems] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        axios.get('http://localhost:3001/info')
          .then((res) => {
            setItems(res.data);
          });
      }
      catch (error) {
    console.error('error making request')
   }
    }
     fetchData();

  }, [])


  return (
    <GlobalContext.Provider value={{ items, exItems, setExItems }}>
      <div className="wrapper">
        <Route path="/" exact>
          <Header />
          <Home />
        </Route>
        <Route path="/about" exact>
          <Header />
          <About />
        </Route>
        <Route path="/sneakers" exact>
          <Sneakers />
        </Route>
        <Route path="/accessories" exact>
          <Header />
          <Accessories />
        </Route>
        <Route path="/clothes" exact>
          <Header />
          <Clothes />
        </Route>
        <Route path="/delivery" exact>
          <Header />
        </Route>
        <Footer />
      </div>
    </GlobalContext.Provider>
  );
}
export default App;

