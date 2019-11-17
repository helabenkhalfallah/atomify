/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Readme from './README.md';
import {
  ATButton,
} from '../../../src/lib';
import './ATButtonStory.less';

const ATButtonStory = () => (
  <div className="atomify-stories-atbutton__container">
    <ATButton
      className="atomify-stories-atbutton__button"
    >
      Default Button
    </ATButton>
    <ATButton
      className="atomify-stories-atbutton__button"
      type="primary"
      onClick={() => console.log('primary button clicked')}
    >
      Primary Button
    </ATButton>
    <ATButton
      className="atomify-stories-atbutton__button"
      type="danger"
    >
      Danger Button
    </ATButton>
    <ATButton
      className="atomify-stories-atbutton__button"
      type="dashed"
    >
      Dashed Button
    </ATButton>
    <div className="atomify-stories-atbutton__button--ghost-container">
      <ATButton
        className="atomify-stories-atbutton__button--ghost"
        ghost
      >
        Ghost
      </ATButton>
      <ATButton
        className="atomify-stories-atbutton__button--ghost"
        type="dashed"
        ghost
      >
        Dashed Ghost
      </ATButton>
    </div>
    <ATButton
      className="atomify-stories-atbutton__button"
      type="link"
    >
      Link Button
    </ATButton>
    <ATButton
      className="atomify-stories-atbutton__button"
      type="primary"
      shape="round"
      loading
    >
      Loading
    </ATButton>
    <ATButton
      className="atomify-stories-atbutton__button"
      type="primary"
      shape="round"
      icon="download"
      size="large"
    >
      Download Large
    </ATButton>
    <ATButton
      className="atomify-stories-atbutton__button"
      type="primary"
      icon="search"
    >
      Search
    </ATButton>
    <ATButton
      className="atomify-stories-atbutton__button"
      type="primary"
      disabled
    >
      Primary disabled
    </ATButton>
    <ATButton
      className="atomify-stories-atbutton__button"
      type="danger"
      shape="circle"
      icon="poweroff"
    />

  </div>
);

export default [Readme, ATButtonStory];
