import React from "react";
import Typography from "../typography/typography.jsx";
import "./selectLang.css";

const SelectLang = ({ className, languages, onClick, selectedLang }) => {
  return (
    <div className="selectLangComponent">
      {languages.map((lang, index) => (
        <button
          key={index}
          className={`${className} selectLangButton`}
          onClick={() => onClick(lang)}
        >
          <span
            className={`addPiped ${
              selectedLang.id === lang.id && "selectLangButton--active"
            }`}
          >
            <Typography variant="textButton" size={0.563}>
              {lang.name}
            </Typography>
          </span>
        </button>
      ))}
    </div>
  );
};

SelectLang.defaultProps = {
  selectedLang: { id: 1 },
  onClick: () => {},
  languages: [],
  className:''
};

export default SelectLang;
