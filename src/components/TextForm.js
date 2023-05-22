import React,{useState} from 'react'

export default function TextForm(props) {
  const handledownclick =() =>{
    console.log("Lowercase was clicked");
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Convert to Lowercase!","success ")
  }
  const handleExtraspaces=() =>{
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success ")

  }
  const handleUpclick =() =>{
    console.log("Uppercase was clicked");
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Convert to uppercase!","success ")
  }
  const handleOnchange =(event) =>{
    console.log("On change")
    setText(event.target.value);
  }
  const handleclrclick =() =>{
    let newtext = '';
    setText(newtext);
    props.showAlert("Text Cleared!","success ")
  }
  const [text, setText] = useState('Enter text here');
  return (
    <>
        <div style={{color : props.mode==='light'?'black':'white'}}>
        <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="myBOX" rows="8" value={text} onChange={handleOnchange} style={{backgroundColor : props.mode==='light'?'white':'grey',color : props.mode==='light'?'black':'white'}}></textarea>
        <button className={`btn btn-${props.bcolor} my-3`} onClick={handleUpclick}>Convert to uppercase</button>
        <button className={`btn btn-${props.bcolor} my-3 mx-3`} onClick={handledownclick}>Convert to Lowercase</button>
        <button className={`btn btn-${props.bcolor} my-3`} onClick={handleclrclick}>Clear Text</button>
        <button className={`btn btn-${props.bcolor} my-3 mx-3`} onClick={handleExtraspaces}>Remove Extra Spaces</button>
        </div>
        <div className='container my-3'>
        <h2>Your text summary</h2>
        <p>{text.length} characters and {text.split(" ").length} words</p>
        <p>{text.split(" ").length * 0.008} minutes for reading</p>
        <h3>Preview</h3>
        <p>{text}</p>
        <h3>Bold text</h3>
        <p><b>{text}</b></p>
        <h3>Italic text</h3>
        <p><i>{text}</i></p>
        <h3>Underlined text</h3>
        <p><u>{text}</u></p>
        </div>
        </div>
    </>
  )
}
