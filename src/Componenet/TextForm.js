import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = () =>{
       // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () =>{
        // console.log("Lowercase was clicked");
         let newText = text.toLowerCase();
         setText(newText)
     }
     const handleClearClick = () => {
        let newText = " ";
        setText(newText)
     }
    const handleOnChange = (event)=>{
       // console.log("on Change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
    <>
<div className='container'>
    <h1>{props.heading}</h1> 
    <div className="mb-3">
    <label htmlFor="myBox" className="form-label"></label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    <button className="btn btn-primary mt-2 mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mt-2 mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
    <button className="btn btn-primary mt-2 mx-1" onClick={handleClearClick}>Clear Text</button>
    
    </div>
</div>
<div className="container">
    <h1>Your text summary</h1>
    <p>{text.split(" ").length}words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
</>

  )
}
