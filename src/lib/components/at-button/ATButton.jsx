import React from 'react';
import { Button } from 'antd';
import 'antd/es/button/style';
import ViewUtils from '../../utils/ViewUtils';

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
