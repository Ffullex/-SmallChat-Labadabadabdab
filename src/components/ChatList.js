import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chat from '../components/Chat';

class ChatList extends Component {
  render() {
    const { list, clickHandle } = this.props;

    return (
      <ul>
        {list.map((chat) => (
          <Chat id={chat.id} title={chat.title} clickHandle={clickHandle} key={chat.id} />
        ))}
      </ul>
    );
  }
}

ChatList.PropTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ),
  clickHandle: PropTypes.string.isRequired
};

export default ChatList;
