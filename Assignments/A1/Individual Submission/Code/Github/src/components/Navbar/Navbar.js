import React from "react";

const Navbar = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <b>CookWithDal</b>
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" style={{ fontWeight: "450" }} href="#">
              Feed
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" style={{ fontWeight: "450" }} href="#">
              Planner
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style={{ fontWeight: "450" }} href="#">
              Shopping List
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style={{ fontWeight: "450" }} href="#">
              Search
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" style={{ fontWeight: "650" }} href="#">
              Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
