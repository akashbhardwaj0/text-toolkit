
import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Upper case was clicked" + text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase", "success");
  }
  const handleLoClick = ()=>{
    // console.log("Upper case was clicked" + text);
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase", "success");
  }
// This is a boy
// ["This","is"]
const helpingVerbs = ["is","a","am"]
function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = (helpingVerbs.includes(str[i]) ? str[i].charAt(0) : str[i].charAt(0).toUpperCase())  + str[i].slice(1); 
  }
  return str.join(' ');
}

  const handleStClick = ()=>{
    // console.log("Upper case was clicked" + text);
    let newText=titleCase(text)
    setText(newText)
    props.showAlert("Converted to Sentence", "success");
  }
  const handleClearClick = ()=>{
    // console.log("Upper case was clicked" + text);
    let newText='';
    setText(newText)
    props.showAlert("Text Cleared", "success");
  }
  const handleOnChange = (event)=>{
    // console.log("on Change")
    setText(event.target.value)
  }
  const handleExtraSpace = ()=>{
    // console.log("Remove Extra Space")
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra space has been removed", "success");
  }
  const handleCopy = ()=>{
    // console.log("I am copy");
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "Success");
  }
  
  
  const [text, setText] = useState('' );
 
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3"> 
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', 
        color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleStClick}>Convert to Titlececase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p> Your Estimate time in to read above text is {text.split(" ").length*0.8} Minute </p>
      <h1>Preview</h1>
      <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
    </div>
    </>
  );
}

