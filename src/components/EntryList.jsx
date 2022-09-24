export default function EntryList(props) {
  const displayEntries = (props) => {
    const {entries} = props;

    if (entries.length > 0) {
      return entries.map((entry, index) => {
        return (
          <div>
            <div key={entry._id}>
              <h3>{entry.location}</h3>
              <h3>{entry.category}</h3>
              <h3>{entry.place}</h3>
              
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
