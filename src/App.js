import React, { useState } from "react";
//eslint-disable-next-line
import Accordion from "./component/Accordion";
import Search from "./component/Search";
import DropDown from "./component/DropDown";
import Translate from "./component/Translate";
import Route from "./component/Route";
import Header from "./component/Header";

//eslint-disable-next-line
const items = [
  {
    title: "React Framework",
    content: "This is a really good framework",
  },
  {
    title: "React Framework",
    content: "This is a really good framework",
  },
  {
    title: "React Framework",
    content: "This is a really good framework",
  },
];

const options = [
  { label: "The Color Red", value: "Red" },
  { label: "The Color Blue", value: "Blue" },
  { label: "The Color Green", value: "Green" },
];

const App = () => {
  // const [showDropdown, setShowDropdown] = useState(true);
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <DropDown
          label="Select a Color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
