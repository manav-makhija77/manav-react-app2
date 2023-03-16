import React ,{useState} from 'react'

export default function TextForm(props) {
    function uppercase(){
        let newtxt=text.toUpperCase();
        setText(newtxt);
        props.salert(" Text Converted to Upper Case","success");
    }

    function change(event){
        
        setText(event.target.value);
    }

    function lowercase(){
        let newtext=text.toLowerCase();
        setText(newtext);
        props.salert(" Text Converted to Lower Case","success");
    }

    function clear(){
        let newtxt="";
        setText(newtxt);
        props.salert(" Text Cleared ","success");
    }

    const copy = ()=>{
        navigator.clipboard.writeText(text);
        props.salert(" Text Copied ","success");

    }

    const [text,setText]=useState("");
    // text="New manav"; //Wrong Way to change text
    // setText("New Text Updated");  //Correct Way to Update Text
    return (
        <>
        <div className="container" style={{color:props.mode==='light'?'black':'white'}}>

        <h1 className='mb-4 '>{props.heading}</h1>
        <div className="mb-3">
        <textarea style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'#b687ff'}} className="form-control" onChange={change} placeholder="Enter your Text Here" id='myBox' rows="8" aria-label="With textarea" value={text}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary" onClick={uppercase}>Upper Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={lowercase}>Lower Case</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={clear}>Clear text</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={copy}>Copy text</button>

        
        <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>You have {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters in Your Written Text</p>
        <p>It Takes Around {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Mins to Read full Article</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
        </div>
        </div>
        </>
    )
}
