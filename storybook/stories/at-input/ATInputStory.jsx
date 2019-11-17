import React from 'react';
import Readme from './README.md';
import {
  ATInput,
  ATInputSearch,
  ATInputPassword,
} from '../../../src/lib';
import './ATInputStory.less';

const ATInputStory = () => (
  <div className="atomify-stories-atinput__container">
    <ATInput
      className="atomify-stories-atinput__input"
      placeholder="Basic usage"
    />
    <ATInputSearch
      className="atomify-stories-atinput__input"
      allowClear
      enterButton=""
      placeholder="Recherche"
      onSearch={(value) => console.log('value : ', value)}
    />
    <ATInputPassword
      className="atomify-stories-atinput__input"
      placeholder="input password"
    />
  </div>
);

export default [Readme, ATInputStory];
