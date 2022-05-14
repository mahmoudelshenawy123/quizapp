import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as ProfileIcon } from '../assets/imgs/profileIcon.svg';
import { ReactComponent as TodoIcon } from '../assets/imgs/todoIcom.svg';
import { ReactComponent as LogoutIcon } from '../assets/imgs/logoutIcon.svg';
import  profile  from '../assets/imgs/profile.jpg';
function SideNavBar() {
  return (
    <div className='side-nav'>
        <div className='side-nav__profile-info'>
            <img src={profile} alt='Profile image' className='side-nav__image'/>
            <span className='side-nav__username'>Mahmoud Elshenawy</span>
        </div>
        <ul className='side-nav__list'>
            <li className='side-nav__item'>
                <Link to="/ToDo" className='side-nav__link'>
                    <ProfileIcon className='side-nav__svgs'/>
                    <span>ToDo</span>
                </Link>
            </li>
            <li className='side-nav__item'>
                <Link to="/Account" className='side-nav__link'>
                    <TodoIcon className='side-nav__svgs'/>
                    <span>Account</span>
                </Link>
            </li>
            <li className='side-nav__item'>
                <Link to="/logOut" className='side-nav__link'>
                    <LogoutIcon className='side-nav__svgs'/>
                    <span>LogOut</span>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default SideNavBar