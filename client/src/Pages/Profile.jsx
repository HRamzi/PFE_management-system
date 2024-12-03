import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                  alt="Profile"
                />
                <div className="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>Kshiti Ghelani</h5>
                <h6>Student</h6>

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <button
                      type="button"
                      className={`nav-link ${
                        activeTab === "home" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("home")}
                    >
                      Personnal
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className={`nav-link ${
                        activeTab === "profile" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("profile")}
                    >
                      Academic
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-btn"
                name="btnAddMore"
                value="Edit Profile"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                {activeTab === "home" && (
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>First Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>Kshiti Ghelani</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Last Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>Kshiti Ghelani</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <p>kshitighelani@gmail.com</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div className="col-md-6">
                        <p>123 456 7890</p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "profile" && (
                  <div
                    className="tab-pane fade show active"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>University Major</label>
                      </div>
                      <div className="col-md-6">
                        <p>G.L</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Master 01 Average</label>
                      </div>
                      <div className="col-md-6">
                        <p>12</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Grade</label>
                      </div>
                      <div className="col-md-6">
                        <p>230</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Recruitment Date</label>
                      </div>
                      <div className="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
      <form>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="old password"
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="new password"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Change password
        </button>
      </form>
    </div>
  );
};

export default Profile;
