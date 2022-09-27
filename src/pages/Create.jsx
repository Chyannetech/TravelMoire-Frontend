import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/create.css";


const Create = () => {

 // initializes state to store incomming data
const [entry, setEntry] = useState({
  category:"",
  location:"",
  place:"",
  image:""
})

const navigate = useNavigate()

// handles form input value
// update state with latest inputted value 
//  updates component with setState()
const handleChange = (event) => {
  const name = event.target.name
  const value = event.target.value
  setEntry ({...entry,[name]:value})
} 
console.log(entry)

//  pulls api data from post route using asynchronous HTTP request to REST endpoint
  const handleSubmit = async () => {
 try {
  await axios.post("http://localhost:8000/travelmoire/entries/create-entry",entry)
  navigate("/show")
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
        <label>Add your image URL</label>
        <input
        type="text"
            name="image"
            required
            placeholder=""
            onChange={handleChange}>
        </input>
      
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
