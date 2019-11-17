import React from 'react';
import { Checkbox } from 'antd';
import ViewUtils from '../../utils/ViewUtils';

const {
  renderSubViews,
} = ViewUtils;


const ATCheckbox = (props) => {
  const {
    children,
  } = props || {};
  const checkBoxSubViews = renderSubViews(children);
  return (
    <Checkbox
      {...props}
    >
      {checkBoxSubViews && (checkBoxSubViews.map((view) => view))}
    </Checkbox>
  );
};

export default ATCheckbox;
