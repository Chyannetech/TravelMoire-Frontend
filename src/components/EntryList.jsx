import React from "react";
import "../style/entryList.css";

function EntryList(props) {
  const displayEntries = (props) => {
    const {entries} = props;
    // this conditional statement delays mapping to make sure data has been updated in state before rendering
    // otherwise props will be undefined
    if (entries.length > 0) {
      return entries.map((entry, index) => {
        return (
          <div>
            <div key={entry._id}>
            <div className="city2"></div>
              <div className="listLocation">{entry.location}</div>
              <div className="listPlace">{entry.place}</div>
              <div className="editButton"></div>
              <div className="deleteButton"></div>
              <div className="listCategory">{entry.category}</div>
             
            </div>
          </div>
        );
      });
    } else {
      return <h3>No entries yet</h3>;
    }
  };
  return <div>{displayEntries(props)}</div>;
}
export default EntryList;