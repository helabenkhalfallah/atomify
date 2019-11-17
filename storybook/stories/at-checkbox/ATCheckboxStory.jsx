import React from 'react';
import Readme from './README.md';
import {
  ATCheckbox,
} from '../../../src/lib';
import './ATCheckboxStory.less';

const ATCheckboxStory = () => (
  <div className="atomify-stories-atcheckbox__container">
    <ATCheckbox
      className="atomify-stories-atcheckbox__checkbox"
      onChange={(event) => console.log('isChecked : ', event.target.checked)}
    >
      Checkbox
    </ATCheckbox>
    <ATCheckbox
      className="atomify-stories-atcheckbox__checkbox"
      disabled
    >
      Checkbox Disabled
    </ATCheckbox>
    <ATCheckbox
      className="atomify-stories-atcheckbox__checkbox"
      defaultChecked
    >
      Checkbox Default Checked
    </ATCheckbox>
  </div>
);

export default [Readme, ATCheckboxStory];
