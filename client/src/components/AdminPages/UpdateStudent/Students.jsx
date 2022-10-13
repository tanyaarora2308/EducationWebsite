// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Student from "./Student";
// // import "./Questions.css";

// const Students = () => {
//   const [data, setData] = useState([]);

//   const getData = async () => {

//     const returnedData = await axios.get("http://localhost:5000/teachers/");
//     setData(returnedData.data);
//   };


//   useEffect(() => {
//     getData();
//   }, [data]);

//   return (
    
//     <div className="Questions">
//       {[...data].reverse().map((a) => {
//         return <Student data={a} />;
//       })}
//     </div>
//   );
// };

// export default Students;