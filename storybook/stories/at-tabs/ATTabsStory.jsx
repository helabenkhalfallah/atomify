
import React from 'react';
import Readme from './README.md';
import {
  ATTabs,
  ATTabPane,
} from '../../../src';
import './ATTabsStory.scss';

const ATTabsStory = () => (
  <div className="atomify-stories-attabs__container">
    <ATTabs
      className="atomify-stories-attabs__tabs"
      animated={false}
      defaultActiveKey="1"
      onChange={(key) => console.log('selected tab : ', key)}
    >
      <ATTabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </ATTabPane>
      <ATTabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </ATTabPane>
      <ATTabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </ATTabPane>
    </ATTabs>
    <ATTabs
      animated={false}
      defaultActiveKey="1"
      tabPosition="top"
      className="atomify-stories-attabs__tabs"
    >
      {[...Array(30).keys()].map((i) => (
        <ATTabPane tab={`Tab-${i}`} key={i}>
          Content of tab
          {i}
        </ATTabPane>
      ))}
    </ATTabs>
  </div>
);

export default [Readme, ATTabsStory];
