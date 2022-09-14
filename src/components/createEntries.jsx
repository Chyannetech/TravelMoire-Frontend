import React, { useEffect } from "react";
// import entryPage from "./entryPage";


// connect backend
const createEntries = (props) => {
    const[entries, setEntries] = useState([]);

// backend url
const url = "http://localhost:8000/pomodoro/entries";

// gets data
const getEntries = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setEntries(data)
    console.log(data);
};

useEffect(() => {
    getEntries();
}, []);

// create route
const addEntry = async (entry) => {
    if (!entry.text.trim()) { // prevents empty inputs
        return;
    }
}
const res = await fetch(url, {
    method: "POST",
    headers: {
       "Content-Type": "application/json", 
    },
    body: JSON.stringify(entry),
});

const newEntry = await res.json();
const newEntries = [newEntry, ...entries];

setEntries(newEntries);
};

// update
const updateEntry = async (entryId, updatedEntry) => {
    if (!updatedEntry.text.trim()) {
        return;
    }
    await fetch (`${url}/${entryId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEntry),
    });
    setEntries((prev) => 
    prev.map((item) => (item._id === entryId ? updatedEntry : item))
    );
};

// delete
const removeEntry = async (id) => {
    await fetch (`${url}/${id}`, {
        method:"DELETE",
        headers: {
            "Content-type": "Application/json",
        },
    });
    const removeArr = [...entries].filter((entry) => entry.id !== id);

    setEntries(removeArr);
}

// display
const completeEntry = async(id, completedEntry) => {
    await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({...completedEntry, isComplete : !completedEntry.isComplete})
    });
    let updatedEntries = entries.map((entry) => {
        if (entry._id === id) {
            entry.isComplete = !entry.isComplete;
        }
        return entry;
    });
    setEntries(updatedEntries);
};

return (
    <div className="entryPage">
    <entryPage onSubmit={addEntry} />
    </div>

);

export default createEntries;