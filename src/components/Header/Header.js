import React from 'react';
import MaterialIcon from 'material-icons-react';
import { Link } from "react-router-dom";
import './Header.scss';

function Header() {
  const [active, setActive] = React.useState(false);
  const showMenu = () => { setActive(!active) }
  return (
    <header className="header">
      <div className='logo cu-p'>
        <img className='logo mr-30' alt='logo' src='/images/logo.png' width={185} height={65} ></img>
      </div>
      <div className='menu-icon'>
        <MaterialIcon color='#fff' icon="menu" onClick={showMenu} /></div>
      <nav className={active ? 'slider active' : 'slider'}>
        <ul onClick={showMenu} >
          <div className='closed' onClick={showMenu} >
            <MaterialIcon icon="close" color='#fff' />
          </div>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/sneakers'>Sneakers</Link>
          </li>
          <li>
            <Link to='/accessories'>Accessories</Link>
          </li>
          <li>
            <Link to='/contacts'>Contacts</Link>
          </li>
          <li>
            <Link to='/delivery'>Delivery</Link>
          </li>
          <li className='green'>
            <Link to='/signup'>Sign Up</Link>
          </li>
      </ul>
      </nav>
      <div className='cartBtn'>
        <img src='/images/ccart.png' width={20} height={20}></img>
      </div>
    </header>
  )
}

export default Header;