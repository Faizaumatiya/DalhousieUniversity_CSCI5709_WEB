import React, { useState } from "react";
import "./Profile.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'


const Profile = () => {

  const navigate = useNavigate();
  const options = [
    'Veg', 'Non-Veg', 'Other'
  ];
  const defaultOption = options[0];

  //https://blog.logrocket.com/react-onclick-event-handlers-guide/

  function deactivatemsg() {
    alert('Profile deactivated successfully');
    navigate('/feed')
  }
  function activatemsg() {
    alert('Profile activated successfully');
    navigate('/profilepage')
  }


  return (
    <div className="update-profile">
      <form id="update-details-form">
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
          <button className="btn btn-light mt-2" onClick={activatemsg} type="submit">
            Save
          </button>&nbsp; &nbsp; &nbsp;

          <button className="btn btn-light mt-2" onClick={deactivatemsg} type="submit">
            Deactivate Account
          </button>
        </div>
      </form>
    </div>



  );
};

export default Profile;