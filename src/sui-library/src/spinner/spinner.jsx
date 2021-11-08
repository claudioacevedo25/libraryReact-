import React from "react";
import srcSpinner from "./assets/spinner.gif";
import "./spinner.css";

const Spinner = ({className, size}) => {
    return (
        <div className="spinner__component">
            <img 
            className={`${className} spinner__${size}`}
            src={srcSpinner} 
            alt=''
        />
        </div>
    );
}

Spinner.defaultProps = {
    className: "",
    size: "md",
}

export default Spinner;