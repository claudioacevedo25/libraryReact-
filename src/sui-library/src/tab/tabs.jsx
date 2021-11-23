import React, { useState } from "react"
import Typography from "../typography/typography.jsx"
import "./tabs.css"

const Tabs = ({ children, width, lastElement, className }) => {
  const initialTab = children[0].props.label
  const [activeTab, setActiveTab] = useState(initialTab)

  const tabs = children.map(child => (
    <button
      className={
        `${child.props.disabled && "tabs__tab--disabled "}
         ${child.props.label === activeTab ? ["tabs__tab ", "tabs__tab--active "].join(" ") : "tabs__tab "}
         ${className}`
      }
      key={child.props.label}
      disabled={child.props.disabled ? true : false}
    >
      <Typography variant='h5' color='var(--color1), 0.5' onClick={() => {
        setActiveTab(child.props.label);
        child.props.onClick && child.props.label !== activeTab && child.props.onClick();
      }}>
        {child.props.tabName}
      </Typography>
    </button>
  ))

  const tabContent = children.filter(child => child.props.label === activeTab)

  return (
    <>
      <div className="tabs__box" style={{ width: width ? `${width}vw` : 'auto' }}>{tabs}  {lastElement}</div>
      <div>{tabContent}</div>
    </>
  );
}

export const Tab = ({ children, height, className }) => {
  return <div className={className} style={height && { height: `${height}vh` }}>{children}</div>;
}

Tabs.defaultProps = {
  lastElement: <></>,
  className: ''
};

Tab.defaultProps = {
  className: ''
};

export default Tabs
