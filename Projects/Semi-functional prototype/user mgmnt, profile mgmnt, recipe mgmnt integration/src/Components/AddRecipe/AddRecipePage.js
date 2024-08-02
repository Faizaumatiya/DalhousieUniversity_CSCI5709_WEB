import React, { useState } from "react";
import "./AddRecipe.css";
import 'react-dropdown/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'


const AddRecipePage = () => {

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    alert("Reciped Added Successfully");
    document.getElementById("add-recipe-form").reset();
    navigate("/profilepage");
  };


  return (
    <div className="add-recipe">
      <form onSubmit={submitHandler} id="add-recipe-form">
        <h2 className="text-light">Add New Recipe</h2>
        <div className="form-group row mt-2">
          <label className="text-light col-sm-4 col-form-label" htmlFor="title">
            Title
          </label>
          <div className="col-sm-8">
            <input className="form-control" type="text" id="title" required />
          </div>
        </div>

        <div className="form-group row mt-2">
          <label className="text-light col-sm-4 col-form-label" htmlFor="upload-image">
            Upload Image
          </label>
          <div className="col-sm-8">
            <input className="form-control" type="file" id="upload-image" />
          </div>
        </div>

        <div className="form-group row mt-2">
          <label className="text-light col-sm-4 col-form-label" htmlFor="description">
            Description
          </label>
          <div className="col-sm-8">
            <input className="form-control" type="text" id="description" />
          </div>
        </div>

        <div className="form-group row mt-2">
          <label className="text-light col-sm-4 col-form-label" htmlFor="ingredients">
            Ingredients
          </label>
          <div className="col-sm-8">
            <input className="form-control" type="text" id="ingredients" required />
          </div>
        </div>

        <div className="form-group row mt-2">
          <label className="text-light col-sm-4 col-form-label" htmlFor="instructions">
            Instructions
          </label>
          <div className="col-sm-8">
            <input className="form-control" type="text" id="instructions" required />
          </div>
        </div>

        <div className="form-group row mt-2">
          <label className="text-light col-sm-4 col-form-label" htmlFor="servings">
            Servings
          </label>
          <div className="col-sm-8">
            <input className="form-control" type="text" id="servings" required />
          </div>
        </div>

        <div className="form-group row mt-2">
          <label className="text-light col-sm-4 col-form-label" htmlFor="servings">
            Servings
          </label>
          <div className="col-sm-8">
            <input className="form-control" type="text" id="servings" required />
          </div>
        </div>

        <div>
          <button className="btn btn-light mt-2" type="submit">
            Submit
          </button>

        </div>
      </form>
    </div>


  );
};

export default AddRecipePage;