import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom"
import "../style/home.css";
import User from "../components/User.jsx";
import users from "./data/users";

// import the user const/data
// create user component 
function newUser(newbie) {
  return (
    <User
      key={newbie.id}
      name={newbie.name}
      city={newbie.city}
      location={newbie.location}
      reviews={newbie.reviews}
      image={newbie.image}
    />
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <div className="homePage">
    <Link style={{textDecoration: 'none'}} to="/">
      <div className="titleHome">travel | moire</div>
      </Link>
      <div className="searchContainer">
        <input className="searchBox" placeholder="Atlanta, GA"></input>
        <div className="searchIcon"></div>
      </div>
      <div className="trending">
        <div className="travelBuds"></div>
        <div className="popular">Popular</div>
      </div>
      <div className="categories">
        <div className="art">Art</div>
        <div className="np">National Parks</div>
        <div className="lakes">Lakes</div>
        <div className="rest">Restaurants</div>
        <div className="cafe">Cafes</div>
      </div>
      
      {/* calls newUser function to map through user data */}
      <div className="map">{users.map(newUser)}</div>
       {/* use hook in button to navigate to other pages */}
      <div className="createNewButton" onClick={() => navigate("/create")}>
        Create A New Post
      </div>
      <div className="viewPostButton" onClick={() => navigate("/show")}>
        View All Posts
      </div>
    </div>
  );
}

export default Home;


