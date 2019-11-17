import React from 'react';
import { Input } from 'antd';
import 'antd/es/input/style';
import './ATInput.less';

const { Search } = Input;


const ATInputSearch = (props) => (
  <Search
    {...props}
  />
);

export default ATInputSearch;
