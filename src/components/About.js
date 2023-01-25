import React, { useState } from "react";

export default function About() {



  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setbtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
      });

      setbtnText("Enable light Mode");
    } else {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });

      setbtnText("Enable dark Mode");
    }




  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About us</h1>

      <div classname="accordion" id="accordionExample">
        <div classname="accordion-item">
          <h2 classname="accordion-header" id="headingOne">
            <button
              classname="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Information
            </button>
          </h2>
          <div
            id="collapseOne"
            classname="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div classname="accordion-body">
              <strong>Word Counter is a free and easy to use Web application for counting words, sentences, paragraphs and characters in your text as you type.</strong><br />
              This text tool is designed to boost your productivity and make your life easier.
              This is because counting words is the most efficient and easiest to quantify. Set a word count goal, type away, check how many words you’ve written, end your session. Done and done. If you make a note on a calendar or in your journal, it’s incredibly satisfying to go back and look over your progress.

            </div>
          </div>
        </div>

      </div>

      <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn-primary">
          {btnText}
        </button>
      </div>
    </div>
  );
}
