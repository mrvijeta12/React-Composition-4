import React from 'react';
import Tabs from './Tabs';

const MyTabs = () => {
  const tabsSet1 = [
    { title: 'Tab 1', content: 'Content for Tab 1' },
    { title: 'Tab 2', content: 'Content for Tab 2' },
    { title: 'Tab 3', content: 'Content for Tab 3' },
  ];

  const tabsSet2 = [
    { title: 'Tab A', content: 'Content for Tab A' },
    { title: 'Tab B', content: 'Content for Tab B' },
    { title: 'Tab C', content: 'Content for Tab C' },
  ];

  return (
    <div>
      <h2>Tabs Set 1</h2>
      <Tabs tabs={tabsSet1} key="set1" />

      <h2>Tabs Set 2</h2>
      <Tabs tabs={tabsSet2} key="set2" />
    </div>
  );
};

export default MyTabs;
