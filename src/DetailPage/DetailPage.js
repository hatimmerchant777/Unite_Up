import { useParams, Link, useHistory } from "react-router-dom";
// import swal from "react-swal";
import Swal from "sweetalert2";

import { useState } from "react";
import { useEffect } from "react";
import "./DetailPage.css";
import PopupButton from "../pop-up Form/popForm";

function DetailPage() {
  const [showContactForm, setShowContactForm] = useState(false);
  
  const handleContactClick = () => {
    setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  const { id } = useParams();
  // const history = useHistory();
  const [ngoObject, setNgoObject] = useState({});

  useEffect(() => {
    fetch("/edu/" + id)
      .then((res) => res.json())
      .then((res) => setNgoObject(res));
  }, []);

  const handlePrint = () => {
    window.print();
  };

  // const handleGoBack = () => {
  //     history.goBack();
  // };

  return (
    <>
      <div class="container">
        {/* <div class="pageHeadingDP">
          <h4>NGO DETAILS</h4>
          <i class="fa-solid fa-print" onClick={handlePrint}></i>
          <Link
            to="../education"
            type="button"
            class="btn-close"
            aria-label="Close"
          ></Link>
        </div> */}
        <div class="row ngoDetail">
          <div className="col-8">
            <h4>NGO DETAILS</h4>
          </div>
          <div className="col-2 printIcon">
            <i class="fa-solid fa-print printIcon" onClick={handlePrint}></i>
          </div>
          <div className="col-2 closeIcon">
            <Link
              to="../education"
              type="button"
              class="btn-close "
              aria-label="Close"
            ></Link>
          </div>
        </div>

        <div class="row">
          <div class="col namePanel">
            <h5>{ngoObject.name}</h5>
            {/* <h5>5 AL MOHAMADI EDUCATION AND CHARITABLE TRUST MANGROL</h5> */}
          </div>
        </div>
        <table class="table">
          <tr class="idbox">
            <td>
              <p>Unique Id of VO/NGO</p>
            </td>
            <td>
              <p> GJ/2023/0342994</p>
            </td>
          </tr>
        </table>
        <div class="row">
          <div class="col namePane2">
            <h5>Registration Details</h5>
          </div>
        </div>

        <table class="table table-striped table-hover">
          <tbody>
            <tr>
              <td>Registered With </td>
              <td>Charity Commissioner</td>
            </tr>
            <tr>
              <td>Type of NGO</td>
              <td>Trust (Non-Government)</td>
            </tr>
            <tr>
              <td>Registration No</td>
              <td>E/1479/SURAT</td>
            </tr>
            <tr>
              <td>Copy of Registration Certificate</td>
              <td>Available</td>
            </tr>
            <tr>
              <td>Copy of Pan Card</td>
              <td>Available</td>
            </tr>
            <tr>
              <td>Act name</td>
              <td>BOMBAY PUBLIC ACT.1950</td>
            </tr>
            <tr>
              <td>City of Registration </td>
              <td>SURAT</td>
            </tr>
            <tr>
              <td>Date of Registration</td>
              <td>21-07-1973</td>
            </tr>
          </tbody>
        </table>
        <div class="row">
          <div class="col namePane2">
            <h5>Members</h5>
          </div>
        </div>
        <table class="table table-striped table-hover">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th className="membersPan">Pan</th>
              <th className="membersAadhar">Aadhaar</th>
            </tr>
            {ngoObject.members &&
              ngoObject.members.Name.map((name, index) => (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{ngoObject.members.Designation[index]}</td>
                  <td className="membersPan">{ngoObject.members.Pan[index]}</td>
                  <td className="membersAadhar">
                    {ngoObject.members.Aadhaar[index]}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div class="row">
          <div class="col namePane2">
            <h5>Sector/ Key Issues</h5>
          </div>
        </div>
        <table class="table table-striped table-hover">
          <tbody>
            <tr>
              <td className="keyIssues">Key Issues </td>
              <td>{ngoObject.key_issue}</td>
            </tr>
            <tr>
              <td className="keyIssues">Operational Area-States</td>
              <td>GUJARAT</td>
            </tr>
            <tr>
              <td className="keyIssues">Operational Area-District</td>
              <td>GUJARAT-Surat</td>
            </tr>
          </tbody>
        </table>
        <div class="row">
          <div class="col namePane2">
            <h5>FCRA details</h5>
          </div>
        </div>
        <table class="table table-striped table-hover">
          <tbody>
            <tr>
              <th>FCRA Available</th>
              <th>FCRA Registration no.</th>
            </tr>
            <tr>
              <td>Not Available</td>
              <td>Not Available</td>
            </tr>
          </tbody>
        </table>
        <div class="row">
          <div class="col namePane2">
            <h5>Details of Achievements</h5>
          </div>
        </div>
        <table class="table table-striped table-hover">
          <tbody>
            <tr>
              <td>
                RELIEF TO POOR MEDICAL HELP HELP FOR AGED AND ORPHANS PEOPLE
                HELP AT THE TIME OF NATURAL DISASTER
              </td>
            </tr>
          </tbody>
        </table>
        <div class="row">
          <div class="col namePane2">
            <h5>Source of Funds</h5>
          </div>
        </div>
        <table class="table table-striped table-hover">
          <tbody>
            <tr>
              <th>Department Name</th>
              <th>Source</th>
              <th>Finacial Year</th>
              <th>Amount Sanctioned</th>
              <th className="purpose">Purpose</th>
            </tr>
            <tr>
              <td>Not Specified</td>
              <td>Any Other</td>
              <td>2016-2017</td>
              <td>Not Specified</td>
              <td className="purpose">NOT AVAILABLE</td>
            </tr>
            <tr>
              <td>Not Specified</td>
              <td>Any Other</td>
              <td>2016-2017</td>
              <td>Not Specified</td>
              <td className="purpose">NOT AVAILABLE</td>
            </tr>
            <tr>
              <td>Not Specified</td>
              <td>Any Other</td>
              <td>2016-2017</td>
              <td>Not Specified</td>
              <td className="purpose">NOT AVAILABLE</td>
            </tr>
            <tr>
              <td>Not Specified</td>
              <td>Any Other</td>
              <td>2016-2017</td>
              <td>Not Specified</td>
              <td className="purpose">NOT AVAILABLE</td>
            </tr>
          </tbody>
        </table>
        <div class="row">
          <div class="col namePane2">
            <h5>Contact Details</h5>
          </div>
        </div>
        <table class="table table-striped table-hover ">
          <tbody>
            <tr>
              <td>Address</td>
              <td>{ngoObject.contacts?.Address || "N/A"}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{ngoObject.contacts?.City || "N/A"}</td>
            </tr>
            <tr>
              <td>State</td>
              <td>{ngoObject.contacts?.State || "N/A"}</td>
            </tr>
            <tr>
              <td>Telephone</td>
              <td>{ngoObject.contacts?.Telephone || "N/A"}</td>
            </tr>

            <tr>
              <td>Mobile No</td>
              <td>{ngoObject.contacts?.["Mobile No"] || "N/A"}</td>
            </tr>
            <tr>
              <td>Website Url </td>
              <td>
                <a href="">{ngoObject.contacts?.["Website Url"] || "N/A"}</a>
              </td>
            </tr>
            <tr>
              <td>E-mail </td>
              <td className="emailWidth">
                {ngoObject.contacts?.["E-mail"] || "N/A"}
              </td>
            </tr>
          </tbody>
        </table>
        <div class="row buttonDP">
          <div class="col-6 buttonDonate ">
            <a href="" class="btn btn-success">
              Donate
            </a>
          </div>
          <div class="col-6 ">
            <button
              // onClick={()=>{
              //   Swal.fire({
              //     title: "Auto close alert!",
              //     html: "<h1>hello</h1>",
              //   });
              // }}
              onClick={handleContactClick}
              class="btn btn-info buttonContact"
            >
              Contact
            </button>
          </div>
        </div>
        {showContactForm && (
          <div>
            <PopupButton onClose={handleCloseContactForm} />
          </div>
        )}
      </div>
    </>
  );
}
export default DetailPage;
