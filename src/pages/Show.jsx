import React, { useEffect, useState } from "react";
import axios from "axios";

function Show() {

    useEffect(() => {
        getEntries();
    }, [])

    const [entries, setEntries]= useState([])
    const [loading, setLoading]= useState(false)

    const getEntries = async () => {
        try{
            const res = await axios.get("http://localhost:8000/travelmoire/entries/get-entry")
            setEntries(res.data);
            setLoading(true);
        } catch (err) {
            alert(err.message);
        }
    }

    return (
   <div>
    
   </div>
    )
}

export default Show;