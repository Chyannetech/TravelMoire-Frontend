import React from "react";
import "../style/create.css";

const Create = () => {
  return (
    <div className="createform">
      <div className="title">travel | moire</div>
      <div className="caption">Popular nearby / Create new post</div>
      <div></div>
      <div className="cat-caption">Select a Category</div>
      <div className="categories2">
        <ul>Art</ul>
        <ul>National Parks</ul>
        <ul>Beaches</ul>
        <ul>Restaurants</ul>
      </div>
      <div className="userImg"></div>

      <form>
        <div className="categoryForm">
          <div className="addCategory">Add Category</div>
          <input
            className="categoryInput"
            type="text"
            name="text"
            required
            placeholder=""
          ></input>
        </div>
        <div className="locationForm">
          <div className="addLocation">Add Location</div>
          <input
            className="locationInput"
            type="text"
            name="text"
            required
            placeholder=""
          ></input>
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
      <div className="photodiv">
        <div className="sharePic">Share a photo</div>
        <div className="travelPic">
          <div className="cameraimg"> </div>

          <div className="createNew2">Create New Post</div>
        </div>
      </div>
    </div>
  );
};

export default Create;
