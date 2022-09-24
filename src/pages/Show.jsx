import React, { useEffect, useState } from "react";
import EntryList from "../components/EntryList";
import axios from "axios";

function Show() {
  useEffect(() => {
    getAllEntries();
  }, []);

  const [entries, setEntries] = useState([]);

  const getAllEntries = async () => {
    try {
      const respond = await axios.get(
        "http://localhost:8000/travelmoire/entries/get-entry"
      );
      setEntries(respond.data);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <EntryList entries={entries} />
    </div>
  );
}

export default Show;
