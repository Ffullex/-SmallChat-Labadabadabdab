import React from 'react';
import Message from './Message';

class MessagesList extends React.Component {
  render() {
    const { messages } = this.props;

    return (
      <ul className="message-list">
        {messages.map((message, index) => (
          <Message user={message.user} message={message.message} key={index} />
        ))}
      </ul>
    );
  }
}
export default MessagesList;
