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

  const fetchMessages = () => {
    getMessagesApi(requestId).then((res) => {
      if (res.messages.length !== messageList.length) {
        setMessageList(res.messages);
      }
    });
  };

  const onSend = async (innerHtml, textContent, innerText, nodes) => {
    // setMessageList((preVal) => [
    //   ...preVal,
    //   {
    //     message: textContent,
    //     direction: "outgoing",
    //     date: Date.now(),
    //   },
    // ]);
    await sendMessageApi(requestId, textContent);
    fetchMessages();
  };

  useEffect(() => {
    if (requestId) {
      fetchMessages();
      const intervalId = setInterval(fetchMessages, 2000);
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
            info={
              messageList?.length > 0
                ? "Last Seen " +
                  new Date(
                    messageList[messageList.length - 1].date
                  ).toLocaleString()
                : "Offline"
            }
            userName={`Request ID: ${requestId}`}
          />
          <ConversationHeader.Actions>
            <InfoButton />
          </ConversationHeader.Actions>
        </ConversationHeader>
        <MessageList>{renderMessages()}</MessageList>
        <MessageInput placeholder="Type message here" onSend={onSend} />
      </ChatContainer>
    </Box>
  );
}
