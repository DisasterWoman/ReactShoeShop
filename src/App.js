import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss';
import  Header from '././components/Header/Header';
import Content from './components/Content/Content';

export const GlobalContext = React.createContext({});

function App() {
  return (
    <GlobalContext.Provider>
       <div className='wrapper'>
          <Header />
          <Routes>
            <Route path='/' exact />
            <Route path='/about' exact />
            <Route path='/contacts' exact />
            <Route path='/sneakers' exact />
            <Route path='/accessories' exact />
            <Route path='/contacts' exact />
            <Route path='/delivery' exact />
            <Route path='/signup' exact />
          </Routes>
        <Content />
       </div>
      
    </GlobalContext.Provider>

  );
}

export default App;
