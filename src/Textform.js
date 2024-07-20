import { useState } from 'react';
import React from 'react'
export default function Textform(props) {
    const    clearText=()=>{
        const newText =""   
        setText(newText)
    }
    const  handleUpClick=()=>{
        const newText =Text.toUpperCase()   
        setText(newText)
        props.showAlert(" Converted to uppercase", "success")

    }
    const    handleLowClick=()=>{
        const newText =Text.toLowerCase()   
        setText(newText)
        props.showAlert(" Converted to lowercase", "success")

    };
    const    copyText=()=>{
    navigator.clipboard.writeText(Text);
    props.showAlert(" Copy to clipboard", "success")
};
    const cleanText = () => {
        let newText = Text.split(/\s+/).filter(word => word !== '').join(' ');
        setText(newText);
        props.showAlert(" Extraspaces removed", "success")

      };
    const    handleOnChange = (event) =>{
        
        setText(event.target.value)
    }
    const [Text, setText] = useState("")
  return (
    <div>

         <div className="container my-3">
       <h2>{props.heading}</h2>
    <textarea className="form-control"  value={Text} onChange={handleOnChange} id="exampleFormControlTextarea1"placeholder='Enter text here' rows="8"></textarea>
</div>
<div className="container my-3">
<button className="btn btn-primary mx-1 my-1" onClick={clearText}>ClearText</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Uppercase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>lowercase</button>
<button className="btn btn-primary mx-1 my-1" onClick={copyText}>CopyText</button>
<button className="btn btn-primary mx-1 my-1" onClick={cleanText}>Remove extraspaces</button>

    </div>  

<div className="container my-3">
    <h2>Text summary</h2>
<p>{Text.split(" ").filter(word=> word !=='').length} words and {Text.length} characters</p>
<p>{0.008*Text.split(" ").filter(word=> word !=='').length}minutes to read </p>
</div>
<div className="container">
<h2>Preview</h2>
<p>{Text}</p>
</div>
    
    </div>
)
} 
