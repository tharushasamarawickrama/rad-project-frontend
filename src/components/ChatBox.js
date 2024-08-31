import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  InfoButton,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { Avatar, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ReactComponent as UserAvatar } from "../assets/avatar_1.svg";
import { getMessagesApi, sendMessageApi } from "../api/api";

export default function ChatBox({ requestId }) {
  const [messageList, setMessageList] = useState([]);

  const renderMessages = () =>
    messageList.map((item) => (
      <Message
        key={item._id}
        model={{
          direction: item.direction,
          message: item.message,
          position: "single",
        }}
      />
    ));

  const onSend = async (innerHtml, textContent, innerText, nodes) => {
    setMessageList((preVal) => [
      ...preVal,
      {
        message: textContent,
        direction: "outgoing",
      },
    ]);
    await sendMessageApi(requestId, textContent);
  };

  useEffect(() => {
    if (requestId) {
      const intervalId = setInterval(() => {
        getMessagesApi(requestId).then((res) => {
          //if message list empty set it otherwise push missing messages
          if (!messageList) {
            setMessageList(res.messages);
          } else {
            const newMessages = res.messages
              .filter((msg) => !messageList.includes(msg))
              .concat(messageList)
              .sort((a, b) => a.date - b.date);
            setMessageList(newMessages);
          }
        });
      }, 5000);
      return () => clearInterval(intervalId);
    }
  }, [requestId]);

  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "15px",
        width: "100%",
        height: "100%",
      }}
    >
      <ChatContainer
        style={{
          height: "500px",
          width: "100%",
        }}
      >
        <ConversationHeader>
          <ConversationHeader.Content
            info="Active 10 mins ago"
            userName="Kalpa Suraweera"
          />
          <ConversationHeader.Actions>
            <InfoButton />
          </ConversationHeader.Actions>
        </ConversationHeader>
        <MessageList
          typingIndicator={<TypingIndicator content="Kalpa is typing" />}
        >
          {renderMessages()}
        </MessageList>
        <MessageInput placeholder="Type message here" onSend={onSend} />
      </ChatContainer>
    </Box>
  );
}
