// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function Viewprduct() {
//   const [post, setPost] = useState([]);

//   const getapidata = async () => {
//     const fectdata = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const res = await fectdata.json();
//     setPost(res);
//   };

//   useEffect(() => {
//     getapidata();
//   }, []);

//   return (
//     <div>
//       {post?.map((index) => {
//         const { id, body } = index;
//         return (
//           <div>
//             <div key={id} className="">
//               <h2>{id}</h2>
//               <Link to={`/Singleproduct/${id}`}>
//                 {/* <img className="w-1/4 h-1/2" src={image}></img> */}
//                 <h2>{body}</h2>
//               </Link>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Viewprduct;
