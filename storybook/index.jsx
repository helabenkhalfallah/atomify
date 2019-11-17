/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

// ui lib
import Components from './stories';

// stories
const stories = storiesOf('Atomify UI Kit', module);
const { ATButtonStory } = Components;

// prepare story board
stories
  .addDecorator((story, context) => story(context))
  .add('ATButton', withReadme(...ATButtonStory));
