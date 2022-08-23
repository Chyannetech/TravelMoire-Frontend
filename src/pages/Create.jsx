import React from "react";
import "../style/create.css";
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const Create = () => {
    return (
    <div className="createform">
      <div className="title">travel | moire</div>
      <div className="caption">
        Popular nearby / Create new post
      </div>
      <div className="cat-caption">
        Select a Category
      </div>
      <form>
      <div className="createForm">
      <div className='userImg'></div>
        <div className="locationForm">
          <div className="addLocation">Add Location</div>
          <input
            className="locationInput"
            type="text"
            name="text"
            required
            placeholder="Ex: Atlanta, GA"
          ></input>
          </div>
        </div>
        

        <div className="placeForm">
          <div className="addPlace">Place Visited</div>
          <input
            className="placeInput"
            type="text"
            name="text"
            required
            placeholder=""
          ></input>
        </div>
        <div className="buddyForm">
          <div className="addBuddies">Travel Buddies</div>
          <input
            className="buddyInput"
            type="text"
            name="text"
            required
            placeholder=""
          ></input>
        </div>
      </form>

      <div className='createNew'>Create New Post</div>
     
    </div>
  );
};

export default Create;
