import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const key = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";
  const [debouncedTerm, setDebouncedTerm] = useState(text);
  const [convertedText, setConvertedText] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const translate = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedTerm,
            target: language.value,
            key: key,
          },
        }
      );

      setConvertedText(data.data.translations[0].translatedText);
    };
    if (debouncedTerm) {
      translate();
    } else {
      setConvertedText("");
    }
  }, [language, debouncedTerm]);

  return <div className="ui header">{convertedText}</div>;
};

export default Convert;
