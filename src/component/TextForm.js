import React, {useState} from 'react'

export default function TextForm(props) {
    const handleClick =()=>{
        let newtext = text.toUpperCase();
        settext(newtext);
    }
    const handleChange =(event)=>{
        console.log("Changes were made");
        settext(event.target.value);
    }
    const [text, settext] = useState("Enter Your Text Here");
    return (
        <>
        <div>            
            <div className="mb-3 my-4">
  <label for="text" className="form-label"><h1>{props.title}</h1></label>
  <textarea className="form-control" id="text" rows="5" value={text} onChange={handleChange}></textarea>
</div>
<button className="btn btn-primary" onClick={handleClick}>Click To Upper</button>       
        </div>
        <div className="container">
            <h1>Summary</h1>
        </div>
        </>
    )
}
