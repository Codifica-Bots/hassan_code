
// updated version 
import { useState } from 'react';
// import './App.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "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";
const ORGANIZATION_ID = "org-tXKSWPSVNVOLtvn8e1z8zmT5";

const systemMessage = {
  "role": "system",
  "content": "Explain things like you're talking to a software professional with 2 years of experience."
};

function ChatBot({height, width}) {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message }
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "OpenAI-Organization": ORGANIZATION_ID,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [
          systemMessage,
          ...apiMessages
        ],
        "temperature": 0.5
      }),
      redirect: 'follow'
    };

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", requestOptions);
      const data = await response.json();
      console.log(data.choices[0].message.content);
      console.log(data);

      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      }]);
      setIsTyping(false);
    } catch (error) {
      console.log('Error:', error);
    }
  }

  return (

            <div className="App" style={{ position:"relative", height: height, width: width, background: "black" }}>
              <div style={{ position:"relative", height: "100%", width: width, background: "black" }}>
                <MainContainer>
                  <ChatContainer>       
                    <MessageList 
                      scrollBehavior="smooth" 
                      typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
                    >
                      {messages.map((message, i) => {
                        console.log(message)
                        return <Message key={i} model={message} />
                      })}
                    </MessageList>
                    <MessageInput placeholder="Type message here" onSend={handleSend} />        
                  </ChatContainer>
                </MainContainer>
              </div>
            </div>
        
  );
}

export default ChatBot;