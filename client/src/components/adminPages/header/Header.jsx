// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";

// const Header = () => {
//   const [authenticated, setAuthenticated] = useState(false);
//   useEffect(() => {
//     const value =
//       JSON.parse(sessionStorage.getItem("UserDetails"))?.token || "";
//     if (value) setAuthenticated(true);
//   }, [sessionStorage.getItem("UserDetails")]);
//   const [click, setClick] = useState(false);

//   return (
//     <>
//       <header className="header_admin">
//         <nav className="flexSB">
//           <ul
//             className={click ? "mobile-nav" : "flexSB "}
//             onClick={() => setClick(false)}
//           >
//             <h3 className="headerTitle">Coachify</h3>
//             <li>
//               <Link to="/queries">Queries</Link>
//             </li>
//             <li>
//               <Link to="/announcements">Announcements</Link>
//             </li>
//             <li>
//               <Link to="/studyMaterial">Study Material</Link>
//             </li>
//             <li>
//               <Link to="/blog">Journal</Link>
//             </li>
//             <li>
//               <Link to="/feedbackdisplay">View Feedbacks</Link>
//             </li>
//             <li>
//               <Link to="/announcementForm">Add Announcement</Link>
//             </li>
//             <li>
//               <Link to="/studyMaterialForm">Add StudyMaterial</Link>
//             </li>
//             <li>
//               <Link to="/blogForm">Add Blogs</Link>
//             </li>
//           </ul>
//           {authenticated && (
//             <Link to="/Auth">
//               <button
//                 className="button1 ps-button1"
//                 onClick={() => sessionStorage.removeItem("UserDetails")}
//               >
//                 Logout
//               </button>
//             </Link>
//           )}
//           {!authenticated && (
//             <Link to="/Auth">
//               <button className="button1 ps-button1">Register!</button>
//             </Link>
//           )}
//           <button className="toggle" onClick={() => setClick(!click)}>
//             {click ? (
//               <i className="fa fa-times"> </i>
//             ) : (
//               <i className="fa fa-bars"></i>
//             )}
//           </button>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Header;
