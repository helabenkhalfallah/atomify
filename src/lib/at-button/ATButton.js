import React from 'react';
import classNames from 'classnames';
import {
  Button
} from 'antd';
import ViewUtils from '../utils/ViewUtils';

const {
  renderSubViews,
} = ViewUtils;

const ATButton = (props) => {
  const {
    children,
    className,
    kind,
    disabled,
    ...others
  } = props || {};
  console.log('kind : ', kind)
  const buttonClasses = classNames(className, {
    stl_btn: true,
    'stl_btn--primary': kind === 'primary',
    'stl_btn--secondary': kind === 'secondary',
    'stl_btn--ghost-light': kind === 'ghost light',
    'stl_btn--ghost-dark': kind === 'ghost dark',
    'stl_btn--tag': kind === 'tag',
    'is-disabled': disabled,
  });
  console.log('buttonClasses : ', buttonClasses);
  const buttonSubViews = renderSubViews(children);
  return (
    <Button
      className={buttonClasses}
      disabled={disabled}
      {...others}
    >
      {buttonSubViews && (buttonSubViews.map((view) => view))}
    </Button>
  );
};

export default ATButton;


