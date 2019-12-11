import React from 'react';
import {
  Button
} from 'antd';
import ViewUtils from '../utils/ViewUtils';
import './style';

const {
  renderSubViews,
} = ViewUtils;

const ATButton = (props) => {
  const {
    children,
  } = props || {};
  const buttonSubViews = renderSubViews(children);
  return (
    <Button
      {...props}
    >
      {buttonSubViews && (buttonSubViews.map((view) => view))}
    </Button>
  );
};

export default ATButton;


