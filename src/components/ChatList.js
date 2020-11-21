import React from 'react';
import PropTypes from 'prop-types';
import Chat from '../components/Chat';

class ChatList extends React.Component {
  render() {
    const { list, clickHandle } = this.props;

    return (
      <>
        {list.length ? (
          <ul>
            {list.map((chat) => (
              <Chat id={chat.id} title={chat.title} clickHandle={clickHandle} key={chat.id} />
            ))}
          </ul>
        ) : (
          <span> Пока нет никаких чатов </span>
        )}
      </>
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
