import React, { useState, useEffect, useRef } from "react";
import DropDown from "./DropDown";
import Convert from "./Convert";

const options = [
  { label: "Afrikan", value: "af" },
  { label: "Hindi", value: "hi" },
  { label: "Spanish", value: "es" },
  { label: "Arabic", value: "ar" },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div className="ui container">
      <div className="ui form" style={{ marginBottom: "2em" }}>
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)}></input>
        </div>
      </div>
      <DropDown
        label="Select a language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <br />
      <hr />
      <h2 className="ui header">Output</h2>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
