import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Page, PageProps } from './Page';
import * as HeaderStories from './Header.stories';

const pageStories: ComponentMeta<
  ({ user, onLogin, onLogout, onCreateAccount }: PageProps) => JSX.Element
> = {
  title: 'Example/Page',
  component: Page
} as ComponentMeta<typeof Page>;

export default pageStories;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args
};
