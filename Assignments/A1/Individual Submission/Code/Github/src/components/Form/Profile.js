import React, { useState } from "react";
import "./Profile.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Profile = () => {
  const options = [
    'Veg', 'Non-Veg', 'Other'
  ];
  const defaultOption = options[0];

  const submitHandler = (event) => {
    event.preventDefault();

    alert("Profile information updated successfully");
    document.getElementById("update-details-form").reset();
  };

  return (
    <form onSubmit={submitHandler} id="update-details-form">
      <h2 className="text-light">User Information</h2>

      <div className="form-group row mt-2">
        <div className="logo">
          <img src="abby1.png" width="150" height="160" alt="displaypicture" />
        </div>
      </div>

      <div className="form-group row mt-2">
        <label className="text-light col-sm-4 col-form-label" htmlFor="First Name">
          First Name:
        </label>
        <div className="col-sm-8">
          <input className="form-control" type="text" id="title" defaultValue="Abby" required />
        </div>
      </div>

      <div className="form-group row mt-2">
        <label className="text-light col-sm-4 col-form-label" htmlFor="lastname">
          Last Name:
        </label>
        <div className="col-sm-8">
          <input className="form-control" type="text" id="lastname" defaultValue="Johns" required />
        </div>
      </div>

      <div className="form-group row mt-2">
        <label className="text-light col-sm-4 col-form-label" htmlFor="emailid">
          Email id:
        </label>
        <div className="col-sm-8">
          <input className="form-control" type="email" id="emailid" defaultValue="abby.johns@gmail.com" required />
        </div>
      </div>

      <div className="form-group row mt-2">
        <label className="text-light col-sm-4 col-form-label" htmlFor="preference">
          Preference:
        </label>

        <div className="col-sm-8">
          <Dropdown options={options} value={defaultOption} placeholder="Select an option" />
        </div>
      </div>

      <div className="form-group row mt-2">
        <label className="text-light col-sm-4 col-form-label" htmlFor="profile picture">
          Profile Picture:
        </label>
        <div className="col-sm-8">
          <input className="form-control" type="file" id="upload-image" />
        </div>
      </div>

      <div>
        <button className="btn btn-light mt-2" type="submit">
          Save
        </button>&nbsp; &nbsp; &nbsp;

        <button className="btn btn-light mt-2" type="submit">
          Deactivate Account
        </button>
      </div>
    </form>
  );
};

export default Profile;