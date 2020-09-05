import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          format: "json",
          list: "search",
          srsearch: debouncedTerm,
          origin: "*",
        },
      });
      setResults(data.query.search);
    };
    if (debouncedTerm) {
      search();
    } else {
      setResults([]);
    }
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="content">
          <div className="right floated content">
            <a
              className="ui button"
              href={`https://en.wikipedia.org?curid=${result.pageid}`}>
              Go
            </a>
          </div>
          <div className="header">{result.title}</div>

          <div className="description">
            <div dangerouslySetInnerHTML={{ __html: result.snippet }} />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="ui container">
      <div className="ui form">
        <div className="field">
          <label>Enter your Search Term</label>
          <input
            className="input"
            value={term}
            onChange={(e) => handleChange(e)}></input>
        </div>
      </div>
      <div className="ui celled list" style={{ marginTop: "2em" }}>
        {renderedResults}
      </div>
    </div>
  );
};

export default Search;
