import React from 'react';
import {
  ATCol,
  ATRow,
} from '../../../src';
import Readme from './README.md';
import './ATColorPalette.scss';

const ATColorPalette = () => (
  <div>
    <ATRow className="atomify-stories-colors__container">
      <ATCol
        className="atomify-stories-colors__colors--box-primary"
        span={2}
      >
        #f52220
      </ATCol>
      <ATCol
        className="atomify-stories-colors__colors--box-info"
        span={2}
      >
        #4ebac
      </ATCol>
      <ATCol
        className="atomify-stories-colors__colors--box-processing"
        span={2}
      >
        #faad14
      </ATCol>
      <ATCol
        className="atomify-stories-colors__colors--box-warning"
        span={2}
      >
        #e74c3c
      </ATCol>
    </ATRow>

    <ATRow className="atomify-stories-colors__container">
      <ATCol
        className="atomify-stories-colors__colors--box-error"
        span={2}
      >
        #e82d50
      </ATCol>
      <ATCol
        className="atomify-stories-colors__colors--box-disabled"
        span={2}
      >
        #d9d9d9
      </ATCol>
      <ATCol
        className="atomify-stories-colors__colors--box-text-color"
        span={2}
      >
        #000000
      </ATCol>
      <ATCol
        className="atomify-stories-colors__colors--box-border-color"
        span={2}
      >
        #d3d3d3
      </ATCol>
    </ATRow>
  </div>
);

export default [Readme, ATColorPalette];
