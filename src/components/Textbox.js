import React ,{useState} from 'react'


export default function Textbox(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase is clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleDownClick=()=>{
        // console.log("Uppercase is clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
    }
    const clearBox=()=>{
        // console.log("Uppercase is clicked"+text);
        let newText=""
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
        // console.log("onchange is done is clicked");

    }
    const [text,setText]=useState("");
    
  return (
    <>
    <div className='box'>
        <h1 className="heading">{props.heading}</h1>
        <label htmlFor='text'>
            <textarea className='text'   style={{backgroundColor:props.mode==='dark'?'grey': 'white',color:props.mode==='light'?'grey': 'white' }} value={text} onChange={handleOnChange}  ></textarea>
        </label>
        <button className="btnText" style={{border:props.mode==='dark'?'2px solid black':'none', color:props.mode==='dark'?'black':'white' }} onClick={handleUpClick}>
            change to Uppercase
        </button>
        <button className="btnText" style={{border:props.mode==='dark'?'2px solid black':'none', color:props.mode==='dark'?'black':'white' }} onClick={handleDownClick}>
            change to Lowercase
        </button>
        <button className="btnText" style={{border:props.mode==='dark'?'2px solid black':'none', color:props.mode==='dark'?'black':'white' }} onClick={clearBox}>
            Clear text
        </button>
    </div>
    <div className="container">
        <h1 style={{color:props.mode==='light'?'black': 'white' }}  >
            Your text summary!
        </h1>
        <p style={{color:props.mode==='light'?'black': 'white' }} >{text.split(" ").length - 1} words and {text.length} characters</p>
        <p style={{color:props.mode==='light'?'black': 'white' }} >{0.008 * text.split(" ").length} minutes to read</p>
        <h3 style={{color:props.mode==='light'?'black': 'white' }} >Preview</h3>
        <p style={{color:props.mode==='light'?'black': 'white' }} >{text}</p>
    </div>
    </>
  )
}
