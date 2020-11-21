import React, { Component } from 'react';
import PropTypes from 'react-types';

class Chat extends Component {
  innerClickHandle(e) {
    e.preventDefault();
    this.props.clickHandle(this.props.id);
  }

  render() {
    const { title } = this.props;
    return (
      <li>
        <a href="/" onClick={(e) => this.innerClickHandle(e)}>
          {title}
        </a>{' '}
      </li>
    );
  }
}
Chat.PropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  clickHandle: PropTypes.string.isRequired
};

export default Chat;