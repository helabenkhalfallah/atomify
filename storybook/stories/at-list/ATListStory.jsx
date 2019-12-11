
import React from 'react';
import {
  Avatar,
  Icon,
} from 'antd';
import Readme from './README.md';
import {
  ATList,
  ATListItem,
  ATListItemMeta,
  // ATInfiniteList,
} from '../../../src';
import './ATListStory.less';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const listData = [
  {
    href: 'http://ant.design',
    title: 'ant design part 1',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
  {
    href: 'http://ant.design',
    title: 'ant design part 2',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
];

// eslint-disable-next-line react/prop-types
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const ATListStory = () => (
  <div className="atomify-stories-atlist__container">
    <ATList
      className="atomify-stories-atlist__list"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <ATListItem>
          {item}
        </ATListItem>
      )}
    />
    <ATList
      className="atomify-stories-atlist__list"
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <ATListItem>
          <ATListItemMeta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </ATListItem>
      )}
    />
    <ATList
      bordered
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 1,
      }}
      dataSource={listData}
      footer={(
        <div>
          <b>ant design</b>
          {' '}
          footer part
        </div>
      )}
      renderItem={(item) => (
        <ATListItem
          key={item.title}
          actions={[
            <IconText type="star-o" text="156" key="list-vertical-star-o" />,
            <IconText type="like-o" text="156" key="list-vertical-like-o" />,
            <IconText type="message" text="2" key="list-vertical-message" />,
          ]}
          extra={(
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          )}
        >
          <ATListItemMeta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </ATListItem>
      )}
    />
  </div>
);

export default [Readme, ATListStory];
