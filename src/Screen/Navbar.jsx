

// import React from 'react';
// import './Navbar.css'; // Assuming the CSS file is here
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <ul className="nav-list">
//         <li className="nav-item "><Link className='hell' to="/" >Home</Link></li> 
//         <li className="nav-item"><Link  className='hell' to="/history">History</Link></li>
//         <li className="nav-item"><Link  className='hell'  to="/instruments">Instruments</Link></li>
//         <li className="nav-item"><Link  className='hell'  to="/gallery">Gallery</Link></li>
//         <li className="nav-item"><Link  className='hell'  to="/visit">Visit</Link></li>
//         <li className="nav-item"><Link  className='hell'  to="/heritage">Preserving Heritage</Link></li>

   
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import './Navbar.css'; // Assuming the CSS file is here
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to manage which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to toggle dropdown visibility
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link className='hell' to="/" onMouseEnter={() => toggleDropdown(0)}>Home</Link>
          {openDropdown === 0 && (
            <ul className="dropdown">
              <li><Link to="/home">Introduction to jantar mantar</Link></li>
             
              <li><Link to="/home">sawai jai singh</Link></li>
              <li><Link to="/home">About us</Link></li>

            </ul>
          )}
        </li>
        
        <li className="nav-item">
          <Link className='hell' to="/history"   onMouseEnter={() => toggleDropdown(1)}>History</Link>
          {openDropdown === 1 && (
            <ul className="dropdown">
              <li><Link to="/history/early">Jaipurs Royal Heritage</Link></li>
              <li><Link to="/history/recent">The Reighn of Mughals</Link></li>
              <li><Link to="/history/recent">Cosmic Chronicles</Link></li>

            </ul>
          )}
        </li>
        
        <li className="nav-item">
          <Link className='hell' to="/instruments" onMouseEnter={() => toggleDropdown(2)}>Instruments</Link>
          {openDropdown === 2 && (
            <ul className="dropdown">
              <li><Link to="/instruments/string">19 marvels of jantar mantar</Link></li>
              {/* <li><Link to="/instruments/wind">Wind</Link></li> */}
            </ul>
          )}
        </li>

         <li className="nav-item">
          <Link className='hell' to="/gallery" onMouseEnter={() => toggleDropdown(3)}>Gallery</Link>
          {openDropdown === 3 && (
            <ul className="dropdown">
              <li><Link to="/gallery/modern">Photographs</Link></li>
              <li><Link to="/gallery/classical">Indian stamps / philately</Link></li>
              <li><Link to="/gallery/classical">Miniature Paintings</Link></li>

            </ul>
          )}
        </li> 
        
        <li className="nav-item">
          <Link className='hell' to="/visit" onMouseEnter={() => toggleDropdown(4)}>Visit</Link>
          {openDropdown === 4 && (
            <ul className="dropdown">
              <li><Link to="/visit/tickets">Ticketing Hours</Link></li>
              <li><Link to="/visit/tours">Visiting Hours</Link></li>
            </ul>
          )}
        </li>
        
        <li className="nav-item">
          <Link className='hell' to="/heritage" onMouseEnter={() => toggleDropdown(5)}>Preserving Heritage</Link>
          {openDropdown === 5 && (
            <ul className="dropdown2">
              <li><Link to="/">Ar</Link></li>
              <li><Link to="/heritage/conservation">Conservation</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


