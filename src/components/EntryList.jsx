import React from "react";
import axios from "axios";
import "../style/entryList.css";
import { useNavigate } from "react-router";

function EntryList(props) {
  const navigate = useNavigate()
  // deletes entries dynamically
  const deleteEntries = async (id)  => {
    try {
      await axios.delete(
        `http://localhost:8000/travelmoire/entries/delete/${id}`
      );
      navigate("/show")
      } catch (error) {
        console.log("Alreay deleted")
      }
  }
  const displayEntries = (props) => {

    const {entries} = props;
    // this conditional statement delays mapping to make sure data has been updated in state before rendering
    // otherwise props will be undefined
    if (entries.length > 0) {
      return entries.map((entry) => { //iterates over the array to display data
        return (
          <div key={entry._id}>
            <div>
            <div className="city2"></div>
              <div className="listLocation">{entry.location}</div>
              <div className="listPlace">{entry.place}</div>
              <div className="listCategory">{entry.category}</div>
              <img className="userPic2" src={entry.image}></img>
              <button onClick={()=> deleteEntries(entry._id)} className="delete"></button>
            </div>
          </div>
        );
      });
    } else {
      return <h3>No entries yet</h3>;
    }
  };
  return <div className="showPage">{displayEntries(props)}</div>;
}
export default EntryList;