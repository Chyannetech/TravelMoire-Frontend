import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom"
import EntryList from "../components/EntryList";
import axios from "axios";
import "../style/show.css"

function Show() {

    // uses the useEffect hook to fetch GETdata 
  useEffect(() => {
    getAllEntries();
  }, []); // []---> argument to prevent infinite loop. (only runs on render).


    // initializes state to store incomming data 
  const [entries, setEntries] = useState([]);

    // creates a function to store our axios request in useEffect()
  const getAllEntries = async () => {

    // handles the promise by fulfilling and catching errors
    // uses axios.get to send the GET request to the API
    // if request is fulfilled, sets the response data in state
    try {
      const respond = await axios.get(
        "http://localhost:8000/travelmoire/entries/get-entry"
      );

    // adds the data retrieved from GET request to state
      setEntries(respond.data);
console.log(respond.data);
    } catch (err) {
      alert(err.message);
    }
  };
 
    // passes data to child component (EntryList) as a prop(entries) 
  return (
    
    <div>
    <Link style={{textDecoration: 'none'}} to="/Home">
    <div className="titleShow">travel | moire</div>
    </Link>
    <EntryList entries={entries} />
    <Link style={{textDecoration: 'none'}} to="/Create">
    <div className="newPostButton">Create Another Post</div>
    </Link>
    </div>
  );
}

export default Show;
