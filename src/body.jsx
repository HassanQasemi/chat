import ChatMessage from "./chatMessage";
import React, { Component } from "react";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.chatListWrapper = React.createRef();
  }
  componentDidMount() {
    const wrapper = this.chatListWrapper.current;
    wrapper.scrollTop = wrapper.scrollHeight;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.chatList[0].id !== this.props.chatList[0].id) {
      return this.chatListWrapper.current.scrollHeight;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      const wrapper = this.chatListWrapper.current;
      wrapper.scrollTop = wrapper.scrollHeight - snapshot;
    } else {
      const wrapper = this.chatListWrapper.current;
      wrapper.scrollTop = wrapper.scrollHeight;
    }
  }
  render() {
    const chats = this.props.chatList.map((chat) => {
      const isLeft = "recive" === chat.type;
      return (
        <ChatMessage
          key={chat.id}
          message={chat.message}
          isLeft={isLeft}
          time={chat.time}
          avators={isLeft ? this.props.avators.user2 : this.props.avators.user1}
        />
      );
    });
    return (
      <div className="panel-body">
        <div
          onScroll={this.props.onScroll}
          ref={this.chatListWrapper}
          className="chats"
        >
          {chats}
        </div>
      </div>
    );
  }
}
