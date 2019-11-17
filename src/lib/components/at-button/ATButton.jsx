import React from 'react';
import { Button } from 'antd';
import 'antd/es/button/style';
import './ATButton.less';

const subViews = (children) => {
  if (children) {
    if (Array.isArray(children)) {
      return children;
    }
    return [children];
  }
  return null;
};

const ATButton = (props) => {
  const {
    children,
  } = props || {};
  const buttonSubViews = subViews(children);
  return (
    <Button
      {...props}
    >
      {buttonSubViews && (buttonSubViews.map((view) => view))}
    </Button>
  );
};

export default ATButton;
