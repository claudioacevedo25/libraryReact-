import React, { useState, useCallback } from "react"
import "./tabs.css"

const Tabs = ({ children, width, height }) => {
  const initialTab = children[0].props.label
  const [activeTab, setActiveTab] = useState(initialTab)
  const handleActiveTab = useCallback(label => setActiveTab(label), [])

 const tabs = children.map(child => (
    <button
      onClick={e => {
        e.preventDefault();
        handleActiveTab(child.props.label);
      }}
      className={
        child.props.label === activeTab
          ? ["tabs__tab", "tabs__tab-active"].join(" ")
          : "tabs__tab"
      }
      key={child.props.label}
    >
      {child.props.tabName}
    </button>
  ))

  const tabContent = children.filter(child => child.props.label === activeTab)
  
  return (
    <div>
      <div className="tabs__box" style={{width: width ? width : 'auto'}}>{tabs}</div>
      <div>{tabContent}</div>
    </div>
  );
}

export const Tab = ({ children, height }) => {
  return <div style={{ height: height ? height : 'auto' }}>{children}</div>;
}

export default Tabs
