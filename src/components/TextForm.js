import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Coverted to uppercase", "success");
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("Coverted to lowercase", "success")
    }
    const handleCuClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = "";
        setText(newText)
        props.showalert("Successfully clear text", "success")
    }
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showalert("Copied to clipboard", "success")
    }
    const handleCaClick = () => {
        let newText = text.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
        setText(newText)
        props.showalert("Coverted to camelcase", "success")
    }
    const handleOnChange = (event) => {
        // console.log("Uppercase was changed");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // setText("Enter here")
    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <label for="myBox" className="form-label"></label>
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? '#042743' : 'white' }} onChange={handleOnChange} id="myBox" rows="10" ></textarea>
                </div>
                <button className="btn btn-primary my-2" onClick={handleUpClick}>Covert to Uppercase</button>
                <button className="btn btn-primary mx-4" onClick={handleLoClick}>Covert to Lowercase</button>
                <button className="btn btn-primary " onClick={handleCaClick}>Covert to Camelcase</button>
                <button className="btn btn-primary mx-4" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary" onClick={handleCuClick}>Clear text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words an {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read this</p>
                <h2>Preview</h2>
                <p>{text.length >= 0 ? text : "Enter something to preview here"}</p>
            </div>
        </>
    )
}

