import React from 'react';
import {
  Input
} from 'antd';
import '../at-input/style';

const { Search } = Input;

const ATInputSearch = (props) => (
  <Search
    {...props}
  />
);

export default ATInputSearch;
