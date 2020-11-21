import React from 'react';
import ChatList from '../components/ChatList';
import { action } from '@storybook/addon-actions';

export default {
  title: 'ChatList',
  component: ChatList
};

const Template = (args) => <ChatList {...args} />;

export const Common = () => Template.bind({});
Common.args = {
  list: [
    {
      id: '123',
      title: 'Эх, чатик мой, чатик('
    },
    {
      id: '1234',
      title: 'Эх, чатик('
    },
    {
      id: '1235',
      title: 'Эх, чатик мой, чатик 1235('
    },
    {
      id: '1236',
      title: 'Эх, чатик мой, чатик 1236('
    }
  ],
  clickHandle: action('Chat clicked')
};
