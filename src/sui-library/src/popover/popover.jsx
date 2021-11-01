import React, { useState, useRef, useEffect } from "react";
import "./popover.css";

const Popover = ({ view, open, displayLabel, ...props }) => {
  const ref = useRef()
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const { children } = props;

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isPopoverOpen && ref.current && !ref.current.contains(e.target)) {
        setIsPopoverOpen(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isPopoverOpen])




  return (
    <div ref={ref} openPopover className={`popover ${isPopoverOpen && "popover--activo"}`}>
      <div id="toggleMenu"
        className="popover__view"
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
      >
        {displayLabel}
      </div>
      <div className={`popover__content`}>{children}</div>
    </div>
  );
};

export default Popover;
