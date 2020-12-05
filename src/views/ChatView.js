import React from 'react';
import MessageForm from '../components/MessageForm';
import MessagesList from '../components/MessageList';
import apiService from '../apiService';

class ChatView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      users: []
    };

    this.timer = null;
    /* setInterval(this.getMessages.bind(this), 1000); */
  }

  componentDidMount() {
    this.timer = setInterval(this.getMessages.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  postMessage(content) {
    // метод отправки сообщения
    apiService.message
      .create({ content, chatId: this.props.match.params.id })
      .then(() => this.getMessages());
  }

  getMessages() {
    // метод получения сообщений
    apiService.message
      .getMessages(this.props.match.params.id)
      .then((response) => response.data)
      .then((messages) => this.setState({ messages }))
      .then(() => this.getUsers())
      .then(() => {
        const newMessages = this.state.messages.map((message) => {
          const user = this.state.users.find((user) => user.id === message.userId);
          message.nickname = user.nickname;
          return message;
        });
        this.setState({ messages: newMessages });
      });
  }

  getUsers() {
    const oldUsers = this.state.users;
    const oldUsersIds = oldUsers.map((user) => user.id);
    const newUsersIds = [...new Set(this.state.messages.map((message) => message.userId))];
    const toLoad = newUsersIds.filter((id) => !oldUsersIds.includes(id));

    if (!toLoad.length) return;

    return Promise.all(toLoad.map((id) => apiService.user.getById(id)))
      .then((responses) => responses.map((response) => response.data))
      .then((newUsers) => this.setState({ users: [...oldUsers, ...newUsers] }));
  }

  render() {
    const { messages } = this.state;
    return (
      <div className="chat-view">
        <h1>Чатик</h1>
        <MessageForm postMessage={(data) => this.postMessage(data)} />
        <MessagesList messages={messages} />
      </div>
    );
  }
}
export default ChatView;
