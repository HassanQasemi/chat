import React from "react";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import { messageGenerator } from "./faker";
var uniqid = require("uniqid");

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Chat",

      chatList: [
        ...messageGenerator(5),
        {
          id: uniqid(),
          type: "recive",
          message: "Good morning, sir.What can I do for you?",
          time: "11:37:08 am",
        },
        {
          id: uniqid(),
          type: "sent",
          message: "Good morning, sir.What can I do for you?",
          time: "11:37:08 am",
        },
        {
          id: uniqid(),
          type: "sent",
          message: "Good morning, sir.What can I do for you?",
          time: "11:37:08 am",
        },
        {
          id: uniqid(),
          type: "recive",
          message: "Good morning, sir.What can I do for you?",
          time: "11:37:08 am",
        },
        {
          id: uniqid(),
          type: "recive",
          message: "Good morning, sir.What can I do for you?",
          time: "11:37:08 am",
        },
      ],

      avators: {
        user1: "https://bootdey.com/img/Content/avatar/avatar1.png",
        user2: "https://bootdey.com/img/Content/avatar/avatar2.png",
      },
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.fetchMessage = this.fetchMessage.bind(this);
  }

  onSubmit = (message) => {
    this.setState((state) => {
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            id: uniqid(),
            type: "sent",
            message,
            time: new Date().toLocaleTimeString(),
          },
        ],
      };
    });
    console.log(this.state.chatList);
  };
  handleScroll(event) {
    if (!event.target.scrollTop) {
      setTimeout(() => this.fetchMessage(10), 100);
    }
  }
  fetchMessage(count) {
    this.setState((state) => {
      return {
        chatList: [...messageGenerator(count), ...state.chatList],
      };
    });
  }
  render() {
    return (
      <>
        <div className="container bootstrap snippets">
          <div className="col-md-7 col-xs-12 col-md-offset-2">
            <div className="panel" id="chat">
              <Header title={this.state.title} />

              <Body
                onScroll={this.handleScroll}
                chatList={this.state.chatList}
                avators={this.state.avators}
              />
              <Footer onSubmit={this.onSubmit} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Chat;
