
import React from 'react';
import Readme from './README.md';
import {
  ATContent,
  ATFooter,
  ATHeader,
  ATLayout,
  ATSider,
} from '../../../src';
import './ATLayoutStory.scss';

const ATLayoutStory = () => (
  <div>
    <ATLayout
      className="atomify-stories-atlayout__layout"
    >
      <ATHeader
        className="atomify-stories-atlayout__header"
      >
        Header
      </ATHeader>
      <ATContent
        className="atomify-stories-atlayout__content"
      >
        Content
      </ATContent>
      <ATFooter
        className="atomify-stories-atlayout__footer"
      >
        Footer
      </ATFooter>
    </ATLayout>

    <ATLayout
      className="atomify-stories-atlayout__layout"
    >
      <ATHeader
        className="atomify-stories-atlayout__header"
      >
        Header
      </ATHeader>
      <ATLayout>
        <ATSider
          className="atomify-stories-atlayout__sider"
        >
          Sider
        </ATSider>
        <ATContent
          className="atomify-stories-atlayout__content"
        >
          Content
        </ATContent>
      </ATLayout>
      <ATFooter
        className="atomify-stories-atlayout__footer"
      >
        Footer
      </ATFooter>
    </ATLayout>

    <ATLayout
      className="atomify-stories-atlayout__layout"
    >
      <ATHeader
        className="atomify-stories-atlayout__header"
      >
        Header
      </ATHeader>
      <ATLayout>
        <ATContent
          className="atomify-stories-atlayout__content"
        >
          Content
        </ATContent>
        <ATSider
          className="atomify-stories-atlayout__sider"
        >
          Sider
        </ATSider>
      </ATLayout>
      <ATFooter
        className="atomify-stories-atlayout__footer"
      >
        Footer
      </ATFooter>
    </ATLayout>

    <ATLayout
      className="atomify-stories-atlayout__layout"
    >
      <ATSider
        className="atomify-stories-atlayout__sider"
      >
        Sider
      </ATSider>
      <ATLayout>
        <ATHeader
          className="atomify-stories-atlayout__header"
        >
          Header
        </ATHeader>
        <ATContent
          className="atomify-stories-atlayout__content"
        >
          Content
        </ATContent>
        <ATFooter
          className="atomify-stories-atlayout__footer"
        >
          Footer
        </ATFooter>
      </ATLayout>
    </ATLayout>
  </div>
);

export default [Readme, ATLayoutStory];
