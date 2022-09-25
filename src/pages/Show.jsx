import React, { useEffect, useState } from "react";
import EntryList from "../components/EntryList";
import axios from "axios";
import "../style/show.css"

function Show() {

    // useEffect calls getAllEntries() when this show.jsx component mounts
  useEffect(() => {
    getAllEntries();
  }, []); // []---> argument to prevent infinite loop. (Only runs on render).

    // initializes state
  const [entries, setEntries] = useState([]);

    // creates a function to store our axios request
  const getAllEntries = async () => {

    // handles the promise by fulfilling and catching errors
    try {
      const respond = await axios.get(
        "http://localhost:8000/travelmoire/entries/get-entry"
      );

    // adds the data retrieved from GET request to state
      setEntries(respond.data);

    } catch (err) {
      alert(err.message);
    }
  };
    // pass data to child component (EntryList) as a prop(entries) to be displayed
  return (
    <div>
    <div className="titleShow">travel | moire</div>
      <EntryList entries={entries} />
    </div>
  );
}

export default Show;
