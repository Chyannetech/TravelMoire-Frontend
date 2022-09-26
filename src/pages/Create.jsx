import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../style/create.css";


const Create = () => {

const [entry, setEntry] = useState({
  category:"",
  location:"",
  place:""
})

const handleChange = (event) => {
  const name = event.target.name
  const value = event.target.value
  setEntry ({...entry,[name]:value})
} 
console.log(entry)

  const handleSubmit = async () => {
 try {
  await axios.post("http://localhost:8000/travelmoire/entries/create-entry",entry)
  console.log("data sent to backend")
 } catch (error) {
  console.log("error message", error.message)
 }
  }


  return (
    <div className="createform">
     <Link style={{textDecoration: 'none'}} to="/Home">
      <div className="title">travel | moire</div>
      </Link>
      <div></div>
      <div className="categories2">
        <ul>Art</ul>
        <ul>National Parks</ul>
        <ul>Beaches</ul>
        <ul>Restaurants</ul>
      </div>
      <form>
        <div className="categoryForm">
          <div className="addCategory">Add Category</div>
          <input
            className="categoryInput"
            type="text"
            name="category"
            required
            placeholder=""
            onChange={handleChange}
          ></input>
        </div>
        <div className="locationForm">
          <div className="addLocation">Add Location</div>
          <input
            className="locationInput"
            type="text"
            name="location"
            required
            placeholder=""
            onChange={handleChange}
          ></input>
        </div>

        <div className="placeForm">
          <div className="addPlace">Place Visited</div>
          <input
            className="placeInput"
            type="text"
            name="place"
            required
            placeholder=""
            onChange={handleChange}
          ></input>
        </div>
      
      </form>
      <div className="photodiv">
        <div className="sharePic">Share a photo</div>
        <div className="travelPic">
          <div className="cameraimg"> </div>
          <div className="createNew2"onClick={()=>handleSubmit()} >Create New Post</div>
          <Link style={{textDecoration: 'none'}} to="/Show">
      <div className="viewMore">View All</div>
      </Link>
        </div>
      </div>
    </div>
  );
};

export default Create;
