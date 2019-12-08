
import React from 'react';
import Readme from './README.md';
import {
  ATCol,
  ATRow,
} from '../../../src';
import './ATGridStory.scss';

const ATGridStory = () => (
  <div>
    <ATRow>
      <ATCol
        className="atomify-stories-atgrid__col--1"
        span={12}
      >
        col-12
      </ATCol>
      <ATCol
        className="atomify-stories-atgrid__col--2"
        span={12}
      >
        col-12
      </ATCol>
    </ATRow>
    <ATRow>
      <ATCol
        className="atomify-stories-atgrid__col--1"
        span={8}
      >
        col-8
      </ATCol>
      <ATCol
        className="atomify-stories-atgrid__col--2"
        span={8}
      >
        col-8
      </ATCol>
      <ATCol
        className="atomify-stories-atgrid__col--3"
        span={8}
      >
        col-8
      </ATCol>
    </ATRow>
    <ATRow>
      <ATCol
        className="atomify-stories-atgrid__col--1"
        span={6}
      >
        col-6
      </ATCol>
      <ATCol
        className="atomify-stories-atgrid__col--2"
        span={6}
      >
        col-6
      </ATCol>
      <ATCol
        className="atomify-stories-atgrid__col--3"
        span={6}
      >
        col-6
      </ATCol>
      <ATCol
        className="atomify-stories-atgrid__col--4"
        span={6}
      >
        col-6
      </ATCol>
    </ATRow>
  </div>
);

export default [Readme, ATGridStory];
