import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./popover.css";

const Popover = ({ displayLabel, position, children, className }) => {
  const ref = useRef();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isPopoverOpen && ref.current && !ref.current.contains(e.target)) {
        setIsPopoverOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isPopoverOpen]);

  return (
    <div
      ref={ref}
      className={`${className} popover ${isPopoverOpen && "popover--activo"}`}
    >
      <div
        className="popover__view"
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
      >
        {displayLabel}
      </div>
      <div
        className={`popover__content ${
          position === "left"
            ? "popover__content--left"
            : "popover__content--right"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

Popover.defaultProps = {
  displayLabel: {},
  position: "right",
  children: {},
};

Popover.propTypes = {
  displayLabel: PropTypes.object.isRequired,
  position: PropTypes.string,
  children: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default Popover;
