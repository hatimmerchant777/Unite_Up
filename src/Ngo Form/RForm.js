import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RForm.css";
import rbanner from "./image/register_bg.jpeg";

function RForm() {
  const navigate = useNavigate();
  const [data, setdata] = useState({});

  return (
    <>
      {/* <h1 className="headingnew">Registration Form</h1> */}
      <div className="row mb-2">
        <div className="col">
        <img src={rbanner} alt="banner" className="img-fluid rimage"></img>
        </div>
      </div>
      
      <form class="rform">
        <div className="row">
          <div className="col-md">
            <h3 className="heading-inter">About NGO</h3>

            <label for="exampleInputEmail1" class="form-label">
              NGO's id
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setdata({ ...data, id: e.target.value });
              }}
            />

            <label for="exampleInputEmail1" class="form-label">
              NGO's Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setdata({ ...data, name: e.target.value });
              }}
            />

            <label for="exampleFormControlTextarea1" class="form-label">
              Key Issues
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>

            <h3 className="heading-inter">Members</h3>

            <div class="input-group mb-3">
              <span class="input-group-text">Member-1</span>
              <div class="form-floating">
                <input
                  type="username"
                  class="form-control"
                  id="floatingInputGroup1"
                  placeholder="Username"
                />
                <label for="floatingInputGroup1">Username</label>
              </div>
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text">Member-2</span>
              <div class="form-floating">
                <input
                  type="username"
                  class="form-control"
                  id="floatingInputGroup1"
                  placeholder="Username"
                />
                <label for="floatingInputGroup1">Username</label>
              </div>
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text">Member-3</span>
              <div class="form-floating">
                <input
                  type="username"
                  class="form-control"
                  id="floatingInputGroup1"
                  placeholder="Username"
                />
                <label for="floatingInputGroup1">Username</label>
              </div>
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text">Member-4</span>
              <div class="form-floating">
                <input
                  type="username"
                  class="form-control"
                  id="floatingInputGroup1"
                  placeholder="Username"
                />
                <label for="floatingInputGroup1">Username</label>
              </div>
            </div>
          </div>
          <div className="col-md">
            <h3 className="heading-inter"> Contact Information</h3>

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

            <div class="col-12">
              <label for="inputAddress2" class="form-label">
                Address 2
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>

            <div class="col-md-12">
              <label for="inputCity" class="form-label">
                City
              </label>
              <input type="text" class="form-control" id="inputCity" />
            </div>

            <div class="col-md-12">
              <label for="inputState" class="form-label">
                State
              </label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>

            <div class="col-md-12">
              <label for="inputZip" class="form-label">
                Zip
              </label>
              <input type="text" class="form-control" id="inputZip" />
            </div>

            <label for="inputZip" class="form-label">
              Email
            </label>
            <div class="input-group mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="NGO's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span class="input-group-text" id="basic-addon2">
                @example.com
              </span>

              <div class="col-md-12">
                <label for="inputZip" class="form-label">
                  Telephone NO.
                </label>
                <input type="text" class="form-control" id="inputZip" />
              </div>

              <div class="col-md-12">
                <label for="inputZip" class="form-label">
                  Mobile No.
                </label>
                <input type="text" class="form-control" id="inputZip" />
              </div>

              <div class="col-md-12">
                <label for="inputZip" class="form-label">
                  Website Url
                </label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 buttonclass">
            <button
              type="button"
              class="btn btn-primary buttonsumit "
              onClick={() => {
                console.log(data);
                var formBody = [];
                for (var property in data) {
                  var encodedKey = encodeURIComponent(property);
                  var encodedValue = encodeURIComponent(data[property]);
                  formBody.push(encodedKey + "=" + encodedValue);
                }
                formBody = formBody.join("&");

                fetch("/edu", {
                  method: "POST",
                  // body:JSON.stringify(data),
                  headers: {
                    "Content-Type":
                      "application/x-www-form-urlencoded;charset=UTF-8",
                  },
                  body: formBody,
                }).then(() => {
                  navigate("/education");
                });
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
export default RForm;
