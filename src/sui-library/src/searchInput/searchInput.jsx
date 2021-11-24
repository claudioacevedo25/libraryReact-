import React, { useState } from "react";
import { Search } from "akar-icons";
import "./searchInput.css";

const SearchInput = ({ className, onChange, disabled, width, placeholder }) => {
  const [openSearch, setOpenSearch] = useState(false);

  const onChangeData = (e) => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <div className={`search ${className}`} style={{ width: `${width}px` }}>
      <div
        onClick={() => setOpenSearch(true)}
        className={`search__content ${
          !!disabled && "search__content--disabled"
        } ${!openSearch && "search__closed"} `}
      >
        <Search className="search__icon" />
        {!!openSearch && !disabled && (
          <input
            style={{ width: `${width - 50}px` }}
            type="text"
            className="search__input"
            onKeyUp={onChangeData}
            placeholder={placeholder}
          />
        )}
      </div>
    </div>
  );
};

SearchInput.defaultProps = {
  onChange: () => {},
  placeholder: "Buscar",
  className: "",
  disabled: false,
};

export default SearchInput;
