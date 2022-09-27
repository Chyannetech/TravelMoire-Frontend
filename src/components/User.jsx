import React from "react";

function Users(props) {
  return (
    <div>
      <div className="userPost">
        <div className="userBox">
          <img className="userPic" src={props.image} />
          <div className="name">{props.name}</div>
          <div className="city">{props.city}</div>
          <div className="view">View Media</div>
          <div className="location">{props.location}</div>
          <div className="reviews">{props.reviews}</div>
        </div>
      </div>
      <div className="viewPost">View {props.location}</div>
    </div>
  );
}

export default Users;
