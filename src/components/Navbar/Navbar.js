import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import bell_icon from '../../assets/bell_icon.svg'; 
import profile_img from '../../assets/profilePic.png';
import caret_icon from '../../assets/caret_icon.svg';
import { logout } from '../../firebase';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    });
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = () => {
    console.log('Search term:', searchTerm);
    
  };

  return (
    <div ref={navRef} className='navbar'>
      <div className='navbar-left'>
        <img src={logo} alt='logo' />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className='navbar-right'>
        <div className='search-container'>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit()}
          />
          <i className="fas fa-search search-icon"></i> {/* Search icon inside input */}
        </div>
        <p>Children</p>
        <img src={bell_icon} alt='bell_icon' className='icons' />
        <div className='navbar-profile'>
          <img src={profile_img} alt='profile_icon' className='profile' />
          <img src={caret_icon} alt='caret_icon' className='carret'/>
          <div className='dropdown'>
            <p onClick={() => { logout(); }}>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
