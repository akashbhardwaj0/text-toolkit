import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btntext, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "#091856",
        backgroundColor: "white",
        border: "2pc solid white",
      });
      setBtnText("Enable dark mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "#091856",
      });
      setBtnText("Enable light mode");
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About The WebSite
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Enable users to perform a combination of text manipulations, such
              as converting to uppercase, converting to lowercase, converting to
              title case, and removing extra spaces. Provide a user-friendly
              interface for this feature and help users save the time.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Features
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>1. Upper Case Converter:</strong>
              Users can input or paste their text into a designated area and
              click a button to convert the text to uppercase.
              <br></br>
              <strong>2. Lower Case Converter:</strong>
              Similar to the upper case converter, users can input text and
              convert it to lowercase.
              <br></br>
              <strong>3. Title Case Converter:</strong>
              Allow users to input text and convert it to title case, where
              the first letter of each word is capitalized.
              <br></br>
              <strong>4. Extra Space Remover:</strong>
              Users can input text with extra spaces, and the tool will remove
              unnecessary spaces to improve readability and formatting. Detail
              the significance of removing extra spaces and how it enhances the
              overall appearance of the text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Usage Guidelines
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Offer guidelines on when to use uppercase, lowercase, and title
              case based on the context of the text (e.g., formal documents,
              social media, academic papers). Help users understand the
              appropriate scenarios for each type of text transformation.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">
          {btntext}
        </button>
      </div>
    </div>
  );
}
