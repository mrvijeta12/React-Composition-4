import React, { useState } from 'react';

const Tabs = ({ tabs, key }) => {
  const [activeTab, setActiveTab] = useState(0);
  // console.log(activeTab)

  const handleTabClick = (index) => {
    console.log(index)
    setActiveTab(index);
  };

  return (
    <div 
    // className={`tabs-container ${key || ''}`}
    >
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div key={index} onClick={() => handleTabClick(index)}>
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
