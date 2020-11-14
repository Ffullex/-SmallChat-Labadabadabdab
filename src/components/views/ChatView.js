import Form from './components/Form';
import React from 'react';
import MessagesList from './components/MessagesList';

const URL = 'http://localhost:3000';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serverMessages: []
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

  postMessage(newMessage) {
    // метод отправки сообщения
    const xhr = new XMLHttpRequest();
    xhr.open('POST', URL);
    xhr.send(
      JSON.stringify({
        nick: newMessage.nick,
        message: newMessage.message
      })
    );
    xhr.onload = () => this.onloadHandler(xhr);
    xhr.onerror = function () {
      console.log('Запрос не удался');
    };
  }

  getMessages() {
    // метод получения сообщений
    const xhr = new XMLHttpRequest();
    xhr.open('GET', URL);
    xhr.send();
    xhr.onload = () => this.onloadHandler(xhr);
  }

  onloadHandler(xhr) {
    if (xhr.status !== 200) {
      console.error('Ошибка!');
    } else {
      this.drawMessages(xhr.response);
    }
  }

  drawMessages(response) {
    // метод отрисовки сообщений
    this.setState({ serverMessages: JSON.parse(response) });
  }

  render() {
    return (
      <>
        <Form postMessage={(newMessage) => this.postMessage(newMessage)} />
        <MessagesList messages={this.state.serverMessages} />
      </>
    );
  }
}
export default App;
