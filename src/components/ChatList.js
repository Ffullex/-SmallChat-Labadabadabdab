import React, { Component } from 'react';
import PropTypes from 'react-types';
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

ChatList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ),
  clickHandle: PropTypes.string.isRequired
};

export default ChatList;
