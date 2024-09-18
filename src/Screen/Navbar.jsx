// import React from "react";
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-black" style={{height:'90px'}}>
//       <div className="container">
 
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
//           <ul className="navbar-nav mx-auto w-100 d-flex justify-content-between">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">HOME</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/history">HISTORY</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/instruments">INSTRUMENTS</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/heritage">PRESERVING HERITAGE</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="#gallery">GALLERY</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="#visit">VISIT</Link>
//             </li>
            
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import './Navbar.css'; // Assuming the CSS file is here
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item "><Link className='hell' to="/" >Home</Link></li> 
        <li className="nav-item"><Link  className='hell' to="/history">History</Link></li>
        <li className="nav-item"><Link  className='hell'  to="/instruments">Instruments</Link></li>
        <li className="nav-item"><Link  className='hell'  to="/gallery">Gallery</Link></li>
        <li className="nav-item"><Link  className='hell'  to="/visit">Visit</Link></li>
        <li className="nav-item"><Link  className='hell'  to="/heritage">Preserving Heritage</Link></li>

   
      </ul>
    </nav>
  );
};

export default Navbar;


