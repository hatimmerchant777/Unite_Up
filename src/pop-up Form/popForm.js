import React, { useState } from "react";
import "./popForm.css";

function PopupButton({ onClose }) {
  const [selectedOption, setSelectedOption] = useState("help");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <>
      <div className="popup-overlay">
        <div className="popup-content">
          <form class="row g-3" onSubmit={handleSubmit}>
          
            <div class="col-6 form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  checked={selectedOption === "help"}
                  value="help"
                  onChange={handleOptionChange}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  <b className="radioSelect">For Help</b>
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  value="volunteer"
                  checked={selectedOption === "volunteer"}
                  onChange={handleOptionChange}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  <b className="radioSelect">For Volunteer</b>
                </label>
              </div>
            </div>

            <div class="col-md-6">
              <label for="name" class="form-label">
                Name
              </label>
              <input type="email" class="form-control" id="name" />
            </div>
            <div class="col-md-6">
              <label for="number" class="form-label">
                Mobile No
              </label>
              <input type="number" class="form-control" id="number" />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            {selectedOption === "help" && (
              <>
                <div class="col-12">
                  <label for="inputAddress2" class="form-label">
                    Type of Help Needed
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputCity" class="form-label">
                    City
                  </label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-4">
                  <label for="inputState" class="form-label">
                    Category of Help
                  </label>
                  <select id="inputState" class="form-select">
                    <option selected>Type of Help</option>
                    <option>Education</option>
                    <option>Occupation</option>
                    <option>Health</option>
                  </select>
                </div>
              </>
            )}

            {selectedOption === "volunteer" && (
              <>
                <div class="col-12">
                  <label for="inputAddress2" class="form-label">
                    About Yourself in Brief
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress2"
                    placeholder="I am a member of NSS.."
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputCity" class="form-label">
                    City
                  </label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-4">
                  <label for="inputState" class="form-label">
                    Qualification
                  </label>
                  <select id="inputState" class="form-select">
                    <option selected>Select Hightest Degree</option>
                    <option>12th Pass</option>
                    <option>10th Pass</option>
                    <option>Graduate/Pursuing</option>
                  </select>
                </div>
              </>
            )}
            <div class="col-md-2 form-group">
              <label for="inputZip" class="form-label">
                Zip
              </label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
            <div className="row">
            <div class="col-6 pb-2 submitPop">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
            <div class="col-6 pb-2 closePop">
              <button type="close" class="btn btn-secondary" onClick={onClose}>
                Close
              </button>
            </div>
            </div>
  
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupButton;
