import React from "react";
import profile from "../../assets/user.png";
import "./ProfileCard.css";

const ProfileCard = (props) => {
  return (
    <div className="card p-3 my-5 profile-card">
      <div className="d-flex align-items-center">
        <div className="image">
          <img src={profile} className="rounded" width="155" />
        </div>
        <div className="ml-3 w-100">
          <h4 className="mb-0 mt-0">
            {props.FirsName} {props.LastName}
          </h4>
          <span>{props.Email}</span>

          <div className="button mt-2 d-flex flex-row align-items-center">
            <button
              className="btn btn-outline-primary w-100"
              onClick={props.logout}
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
