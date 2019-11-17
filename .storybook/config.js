import { configure } from '@storybook/react';

configure(require.context('../storybook', true, /\.stories\.js$/), module);