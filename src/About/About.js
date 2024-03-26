// About.js
import ngoImage from "./images/aboutImage6.jpg";
import React from 'react';
import './About.css'; // Import your CSS file with styles for the About component

function About() {
  return (
    <div className="about-container">
      <section className="about-section text-center">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget turpis consequat, vitae rutrum magna posuere
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget turpis consequat, vitae rutrum magna posuere.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget turpis consequat, vitae rutrum magna posuere..</p>
      </section>
      <section className="image-section img-fluid aboutImage5">
        <img src={ngoImage} alt="About Us" />
      </section>
      <section className="aim-section text-center">
        <h2>Aim of the Project</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget turpis consequat, vitae rutrum magna posuere.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget turpis consequat, vitae rutrum magna posuere.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget turpis consequat, vitae rutrum magna posuere.
        </p>
      </section>
      <section className="mission-section text-center">
        <h2>Mission of the Project</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget turpis consequat, vitae rutrum magna posuere.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget turpis consequat, vitae rutrum magna posuere.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget turpis consequat, vitae rutrum magna posuere.
        </p>
      </section>
      <section className="how-to-use-section text-center">
        <h2>How to Use Website</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget turpis consequat, vitae rutrum magna posuere.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget turpis consequat, vitae rutrum magna posuere.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget turpis consequat, vitae rutrum magna posuere.
        </p>
      </section>
    </div>
  );
}

export default About;


// import React, { useEffect, useState } from "react";
// import "../Education/Education.css";
// import { Link } from "react-router-dom";
// import DataTable from "react-data-table-component";
// import "./About.css";

// function About({ category }) {
  
//   const [ngoList, setNgoList] = useState([]);
//   const [flag, setFlag] = useState(false);
//   const [filterNgoList, setfilterNgoList] = useState([]);

//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetch(`/edu?category=${category}`)
//       .then((res) => res.json())
//       .then((res) => setNgoList(res));
//   }, [category]);

//   const handleCitySelect = (city) => {
    
//     if(city=="Select District" || city=="N/A"){
//       setFlag(false);
//     }
//     else{
//       setFlag(true);
//       filterNgo(city);
//     } 
//   };
//   const filterNgo = (city) => {
//     var data = ngoList;
//     const filteredNgo = data.filter((ngo) => {
//       return ngo.contacts?.City == city;
//     });
//     setfilterNgoList([...filteredNgo]);
//   };

//   const formattedCity=ngoList.map((district) =>{
//     return (
//       <>
//         <option value={district.contacts?.City}>{district.contacts?.City || "N/A"}</option>
//       </>
//     );
//   })
//   const filteredData = flag ? filterNgoList : ngoList;
 
//   const columns = [
//     {
//       name: "No",
//       selector: (_, index) => index + 1,
//       sortable: true,
//       width: "8%",
//       style: {
//         fontSize: "16px",
//         maxWidth: "10px",
//       },
//     },
//     {
//       name: "Name",
//       selector: (row) => row.name,
//       wrap: true,
//       width: "30%",
//       style: {
//         fontSize: "16px",
//         // maxWidth: "40%",
//       },
//     },
//     {
//       name: "Address",
//       selector: (row) => row.contacts?.Address || "N/A",
//       wrap: true,
//       width: "35%",
//       style: {
//         fontSize: "16px",
//         maxWidth: "50%",
//       },
//     },
//     {
//       name: "View Details",
//       cell: (row) => (
//         <Link
//           className="btn btn-primary buttonVD"
//           to={`/education/detailPage/${row._id}`}
//         >
//           View Detail
//         </Link>
//       ),
//       style: {
//         maxWidth: "15%",
//       },
//     },
//     {
//       name: "Donate",
//       width: "150px",
//       cell: () => (
//         <a className="btn btn-success" href="detailPage.html">
//           Donate
//         </a>
//       ),
//     },
//   ];

//   const customStyles = {
//     headRow: {
//       style: {
//         backgroundColor: "#182848",
//         color: "white",
//         border: "none",
//         fontSize: "20px",
//       },
//     },
//     headCells: {
//       style: {
//         paddingLeft: "14px",
//         paddingRight: "8px",
//         justifyContent: "start",
//       },
//     },

//     rows: {
//       style: {
//         minHeight: "56px",
//       },
//     },

//     rowsPerPage: {
//       style: {
//         marginTop: "20px",
//       },
//     },
//     pagination: {
//       style: {
//         display: "flex",
//         justifyContent: "center",
//         marginTop: "20px",
//       },

//       pageButton: {
//         borderRadius: "50%",
//         padding: "6px 12px",
//         margin: "0 5px",
//         background: "#fff",
//         border: "1px solid #dee2e6",
//         color: "#007bff",
//         cursor: "pointer",
//       },
//     },

//     pageButtonActive: {
//       background: "#007bff",
//       color: "#fff",
//       border: "1px solid #007bff",
//     },
//   };

//   return (
//     <>
//       <form>
//         <div className="row">
//           <div className="col-md-9">
//             <input
//               className="form-control searchBar"
//               id="exampleDataList"
//               placeholder="Type to search..."
//               onChange={(e) => {
//                 setSearch(e.target.value);
//               }}
//             />
//           </div>
//           <div className="col-md-3">
//             <select
//               className="form-select selectDis"
//               aria-label="Default select example"
//               onChange={(e) => {
//                 return handleCitySelect(e.target.value);
//               }}
//             >
//               <option selected>
//                 <b value="all" >Select District</b>
//               </option>
//               {formattedCity}
//               {/* <option value="Mehsana">Mehsana</option> */}
//               {/* <option value="Ahmedabad">Ahemdabad</option>
//               <option value="Surat">Surat</option>
//               <option value="Varodara">Varodara</option> */}
//             </select>
//           </div>
//         </div>
//       </form>
//       <div className="row">
//         <div className="col colCSS2">
//           <DataTable
//             columns={columns}
//             data={
//               filteredData &&
//               filteredData.filter((ngo) =>
//               ngo.name.toLowerCase().includes(search.toLowerCase())
//             )
//             }
//             pagination
//             highlightOnHover
//             striped
//             responsive
//             wrap
//             customStyles={customStyles}
//           />
//         </div>
//       </div>
//     </>
//   );
// }
// export default About;
