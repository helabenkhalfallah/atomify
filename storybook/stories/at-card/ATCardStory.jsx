
import React from 'react';
import {
  Icon,
} from 'antd';
import Readme from './README.md';
import {
  ATCard,
  ATCardMeta,
  ATCardGrid,
} from '../../../src';
import './ATCardStory.less';

const ATCardStory = () => (
  <div className="atomify-stories-atcard__container">
    <ATCard
      className="atomify-stories-atcard__card"
      title="Default size card"
      extra={<a href="#">More</a>}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </ATCard>
    <ATCard
      className="atomify-stories-atcard__card"
      size="small"
      title="Small size card"
      actions={[
        <Icon type="setting" key="setting" />,
        <Icon type="edit" key="edit" />,
        <Icon type="ellipsis" key="ellipsis" />,
      ]}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </ATCard>
    <ATCard
      className="atomify-stories-atcard__card"
      title="Card title without border"
      bordered={false}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </ATCard>
    <ATCard
      className="atomify-stories-atcard__card"
      hoverable
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <ATCardMeta
        title="Europe Street beat"
        description="www.instagram.com"
      />
    </ATCard>
    <ATCard
      className="atomify-stories-atcard__card-grid--container"
      title="Card Title With Grid"
    >
      <ATCardGrid
        className="atomify-stories-atcard__card-grid"
      >
        Content1

      </ATCardGrid>
      <ATCardGrid
        className="atomify-stories-atcard__card-grid"
        hoverable={false}
      >
        Content
      </ATCardGrid>
      <ATCardGrid
        className="atomify-stories-atcard__card-grid"
      >
        Content2

      </ATCardGrid>
      <ATCardGrid
        className="atomify-stories-atcard__card-grid"
      >
        Content3

      </ATCardGrid>
      <ATCardGrid
        className="atomify-stories-atcard__card-grid"
      >
        Content4

      </ATCardGrid>
      <ATCardGrid
        className="atomify-stories-atcard__card-grid"
      >
        Content5

      </ATCardGrid>
      <ATCardGrid
        className="atomify-stories-atcard__card-grid"
      >
        Content6

      </ATCardGrid>
    </ATCard>
  </div>
);

export default [Readme, ATCardStory];
