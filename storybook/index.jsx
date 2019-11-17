/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

// ui lib
import Components from './stories';

// stories
const stories = storiesOf('Atomify UI Kit', module);
const {
  ATButtonStory,
  ATCheckboxStory,
  ATInputStory,
  ATCardStory,
  ATGridStory,
  ATLayoutStory,
  ATListStory,
  /* ATTabsStory, */
} = Components;

// prepare story board
stories
  .addDecorator((story, context) => story(context))
  .add('ATButton', withReadme(...ATButtonStory))
  .add('ATCheckbox', withReadme(...ATCheckboxStory))
  .add('ATInput', withReadme(...ATInputStory))
  .add('ATCard', withReadme(...ATCardStory))
  .add('ATList', withReadme(...ATListStory))
  .add('ATGrid', withReadme(...ATGridStory))
  .add('ATLayout', withReadme(...ATLayoutStory));


/*
.add('ATTabs', withReadme(...ATTabsStory)) */
