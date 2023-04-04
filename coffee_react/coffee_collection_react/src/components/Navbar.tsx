import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LogInButton from './LogInButton';
import LogOutButton from './LogOutButton';
import Background from '../assets/images/coffee_beans.jpg'

function Navbar() {
  const [ isVisible, setIsVisible ] = useState(false)

  const dropDown = () => {
    setIsVisible(!isVisible)
  }

  const clicked = () => {
    setIsVisible(false)
  }

  const { loginWithPopup, isAuthenticated } = useAuth0();

  return (
    <nav className='navbar1' style={{ backgroundImage: `url(${ Background })`}}>
      <div className='navbar2'>
        <Link to='/' className='navlink'>Coffeeeeeeeeeeee</Link>
      </div>
      <div className='navblock'>
        <button
          onClick = { dropDown }
          className = 'dropdownbutton'>
            Menu
          </button>
      </div>
  { isVisible ? (
    <div className='dropnav'>
      <button className='menubutton'>
        <div>
          <Link to='/' onClick={ clicked } className='menubuttonselect'>
            Home
          </Link>
        </div>
      </button>
      <button className='menubutton'>
        <div>
          <Link to='/cupboard' onClick={ clicked } className='menubuttonselect'>
            Cupboard
          </Link>
        </div>
      </button>
      {
        !isAuthenticated ?
        <LogInButton />
        :
        <LogOutButton />
      }
    </div>
  ) : (
    <></>
  )}
  </nav>
  )
}

export default Navbar