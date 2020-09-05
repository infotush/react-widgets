import React, { useState, useEffect, useRef } from "react";

const DropDown = (props) => {
  const { options, selected, onSelectedChange, label } = props;
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const bodyClick = (e) => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", bodyClick);

    return () => {
      document.body.removeEventListener("click", bodyClick);
    };
  });

  const renderedOption = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOption}
          </div>
        </div>
      </div>

      {/* <h1 style={{ color: `${selected.value}` }}>
        This color is {selected.value}
      </h1> */}
    </div>
  );
};

export default DropDown;
