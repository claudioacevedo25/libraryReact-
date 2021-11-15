import React, { useState, useCallback } from "react"
import Typography from "../typography"
import "./tabs.css"

const Tabs = ({ children, width, lastElement, className }) => {
  const initialTab = children[0].props.label
  const [activeTab, setActiveTab] = useState(initialTab)
  const handleActiveTab = useCallback(label => setActiveTab(label), [])

 const tabs = children.map(child => (
    <button
      className={
        `${child.props.disabled && "tabs__tab--disabled "}
         ${child.props.label === activeTab ? ["tabs__tab ", "tabs__tab--active "].join(" ") : "tabs__tab "}
         ${className}`       
      }
      key={child.props.label}
    >
      <Typography variant='h4' color='var(--color1), 0.5' onClick={e => {
        e.preventDefault();
        handleActiveTab(child.props.label);
      }}>
        {child.props.tabName}
      </Typography>
    </button>
  ))

  const tabContent = children.filter(child => child.props.label === activeTab)
  
  return (
    <div>
      <div className="tabs__box" style={{width: width ? `${width}vw` : 'auto'}}>{tabs}  {lastElement}</div>
      <div>{tabContent}</div>
    </div>
  );
}

export const Tab = ({ children, height, className }) => {
  return <div className={className} style={height && { height: `${height}vh`}}>{children}</div>;
}

Tabs.defaultProps ={
 lastElement: <></>,
 className: ''
};

Tab.defaultProps = {
  className: ''
};

export default Tabs
