import React, { useState } from "react";

// useState(setText) = update the text or update the state

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was Clicked" + text);

    let newText = text.toUpperCase();
    setText(newText);

    // setText("you have change the text");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClClick = () => {
    let newText = " ";
    setText(newText);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  //  handleOnChange : it use for you write the text

  const handleOnChange = (event) => {
    // console.log("on change");

    setText(event.target.value);
  };

  const [text, setText] = useState(" ");

  // setText("new Text");

  return (
    <>


      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>

        <div className="mb-3" >
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}

            // style={{ backgroundColor : props.mode === "light" ? "grey" : "white", 
            //          Color : props.mode === "light" ? "black" : "white" } }


            id="myBox"
            rows="8"
          ></textarea>

        </div>





        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClClick}>
          Clear Text
        </button>
      </div>




      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words & {text.length} characters
        </p>
        <p>{0.08 * text.split(" ").length} minutes for read</p>

        <h2>Preveiw</h2>
        <p>{text}</p>
      </div>


    </>
  );
}
