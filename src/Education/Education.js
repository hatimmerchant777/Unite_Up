import React, { useEffect, useState } from "react";
import "./Education.css";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import "../About/About.css";

function Education({ category }) {
  const [ngoList, setNgoList] = useState([]);
  const [flag, setFlag] = useState(false);
  const [filterNgoList, setfilterNgoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    console.log("new hello " + category);
    fetch(`/edu?category=${category}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("data  received", res);
        setNgoList(res);
        setLoading(false);
      });
  }, [category]);

  console.log("data  received", ngoList);

  const handleCitySelect = (city) => {
    if (city == "Select District" || city == "N/A") {
      setFlag(false);
    } else {
      setFlag(true);
      filterNgo(city);
    }
  };
  const filterNgo = (city) => {
    var data = ngoList;
    const filteredNgo = data.filter((ngo) => {
      return ngo.contacts?.City == city;
    });
    setfilterNgoList([...filteredNgo]);
  };

  const formattedCity = ngoList.map((district) => {
    return (
      <>
        <option value={district.contacts?.City}>
          {district.contacts?.City || "N/A"}
        </option>
      </>
    );
  });
  const filteredData = flag ? filterNgoList : ngoList;

  const columns = [
    {
      name: "No",
      selector: (_, index) => index + 1,
      sortable: true,
      width: "8%",
      style: {
        fontSize: "16px",
        maxWidth: "10px",
      },
    },
    {
      name: "Name",
      selector: (row) => row.name,
      wrap: true,
      width: "30%",
      style: {
        fontSize: "16px",
        // maxWidth: "40%",
      },
    },
    {
      name: "Address",
      selector: (row) => row.contacts?.Address || "N/A",
      wrap: true,
      width: "35%",
      style: {
        fontSize: "16px",
        maxWidth: "50%",
      },
    },
    {
      name: "View Details",
      cell: (row) => (
        <Link
          className="btn btn-primary buttonVD"
          to={`/${category}/detailPage/${row._id}`}
        >
          View Detail
        </Link>
      ),
      style: {
        maxWidth: "15%",
      },
    },
    {
      name: "Donate",
      width: "150px",
      cell: () => (
        <a className="btn btn-success" href="detailPage.html">
          Donate
        </a>
      ),
    },
  ];

  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#182848",
        color: "white",
        border: "none",
        fontSize: "20px",
      },
    },
    headCells: {
      style: {
        paddingLeft: "14px",
        paddingRight: "8px",
        justifyContent: "start",
      },
    },

    rows: {
      style: {
        minHeight: "56px",
      },
    },

    rowsPerPage: {
      style: {
        marginTop: "20px",
      },
    },
    pagination: {
      style: {
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      },

      pageButton: {
        borderRadius: "50%",
        padding: "6px 12px",
        margin: "0 5px",
        background: "#fff",
        border: "1px solid #dee2e6",
        color: "#007bff",
        cursor: "pointer",
      },
    },

    pageButtonActive: {
      background: "#007bff",
      color: "#fff",
      border: "1px solid #007bff",
    },
  };

  return (
    <>
      <form>
        <div className="row">
          <div className="col-md-9">
            <input
              className="form-control searchBar"
              id="exampleDataList"
              placeholder="Type to search..."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <div className="col-md-3">
            <select
              className="form-select selectDis"
              aria-label="Default select example"
              onChange={(e) => {
                return handleCitySelect(e.target.value);
              }}
            >
              <option selected>
                <b value="all">Select District</b>
              </option>
              {formattedCity}
              {/* <option value="Mehsana">Mehsana</option> */}
              {/* <option value="Ahmedabad">Ahemdabad</option>
              <option value="Surat">Surat</option>
              <option value="Varodara">Varodara</option> */}
            </select>
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col colCSS2">
          <DataTable
            columns={columns}
            data={
              filteredData &&
              filteredData.filter((ngo) =>
                ngo.name.toLowerCase().includes(search.toLowerCase())
              )
            }
            pagination
            highlightOnHover
            striped
            responsive
            wrap
            customStyles={customStyles}
            progressPending={loading}
            progressComponent={
              <div class="text-center mt-2 mb-4">
                <div class="spinner-border" role="status">
                  <span class="sr-only ">Loading...</span>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </>
  );
}
export default Education;

// import { useEffect, useState } from "react";
// import "./Education.css";
// import { Link } from "react-router-dom";
// import DataTable from "react-data-table-component";

// function Education() {
//   const [currentInt, setcurrentInt] = useState(1);

//   // function nextInterger() {
//   //   return setcurrentInt(currentInt+1);
//   // }
//   const [ngoList, setNgoList] = useState([]);
//   const [search, setSearch] = useState("");
//   // console.log(search);
//   // const columns = [
//   //   {
//   //     name: "No",
//   //     selector: (row = row.currentInt),
//   //   },
//   //   {
//   //     name: "Name",
//   //     selector: (row = row.name),
//   //   },
//   //   {
//   //     name: "Address",
//   //     selector: (row = row.address),
//   //   },
//   // ];
//   useEffect(() => {
//     fetch("/edu")
//       .then((res) => res.json())
//       .then((res) => setNgoList(res));
//   }, []);

//   var formattedNgo = ngoList
//     .filter((ngo) => {
//       return search.toLowerCase() == ""
//         ? ngo
//         : ngo.name.toLowerCase().includes(search);
//     })
//     .map((ngo) => {
//       const address = ngo.contacts ? ngo.contacts.Address : "";
//       return (
//         <>
//           <tr key={ngo.id}>
//             <td>{currentInt}</td>
//             <td class="nameNgo">{ngo.name}</td>
//             <td class="nameNgo">
//               {address}
//             </td>
//             {/* <td> +91-11-26100228</td>
//                         <td>https://www.seedsindia.org
//                         </td> */}
//             <td>
//               <Link class="btn btn-primary buttonVD" to="/education/detailPage">
//                 View Detail
//               </Link>
//             </td>
//             <td>
//               <a class="btn btn-success" href="detailPage.html">
//                 Donate
//               </a>
//             </td>
//           </tr>
//         </>
//       );
//     });
//   return (
//     <>
//       <form>
//         <div class="row">
//           <div class="col-md-9">
//             <input
//               class="form-control searchBar"
//               id="exampleDataList"
//               placeholder="Type to search..."
//               onChange={(e) => {
//                 setSearch(e.target.value);
//               }}
//             />
//           </div>
//           <div className="col-md-3">
//             <select
//               class="form-select selectDis"
//               aria-label="Default select example"
//             >
//               <option selected>
//                 <b>Select District</b>
//               </option>
//               <option value="1">Rajkot</option>
//               <option value="2">Ahemdabad</option>
//               <option value="3">Surat</option>
//               <option value="3">Varodara</option>
//             </select>
//           </div>
//         </div>
//       </form>

//       <div class="row">
//         <div class="col colCSS2">
//           <table
//             class="table tableC
//             ss"
//           >
//             <tbody>
//               <tr>
//                 <th>No</th>
//                 <th>Name</th>
//                 <th>Address</th>
//                 <th>View Details</th>
//                 <th>Donate</th>
//                 {/* <th>Contact</th>
//                       <th>Website</th> */}
//               </tr>
//               {formattedNgo}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Education;
