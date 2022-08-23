import React, { useState, useEffect, useRef } from 'react';


const entryPage = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.text : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = event => {
        setInput(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();

        props.onSubmit({
            text: input
        });
        
        setInput('');
    };

    return (
        <form className="entry-form" onSubmit={ handleSubmit } >
            <>
            <input 
                type="text" 
                placeholder="Atlanta, GA" 
                value={input} 
                name="text" 
                className="entry-input"
                onChange={handleChange}
                ref={inputRef}
                />
            <button className="createNew">Create New Post</button>
            </>  
        </form>
);
}

export default entryPage;