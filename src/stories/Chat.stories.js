import React from 'react';
import Chat from '../components/Chat';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Chat',
  component: Chat
};

const Template = (args) => <Chat {...args} />;

export const Common = Template.bind({});
Common.args = {
  id: '123',
  title: 'Эх, чатик мой, чатик(',
  clickHandle: action('Chat clicked')
};
