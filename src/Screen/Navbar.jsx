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
//               <a className="nav-link" href="/">HOME</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/history">HISTORY</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/instruments">INSTRUMENTS</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/heritage">PRESERVING HERITAGE</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#gallery">GALLERY</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#visit">VISIT</a>
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

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="/">Home</a></li>
        <li className="nav-item"><a href="/history">History</a></li>
        <li className="nav-item"><a href="/instruments">Instruments</a></li>
        <li className="nav-item"><a href="/heritage">Preserving Heritage</a></li>
        <li className="nav-item"><a href="/visit">Visit</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;


