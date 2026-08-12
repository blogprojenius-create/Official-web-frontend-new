import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import "../assets/css/ChatBot.css";


// =========================================================
// CHAT API
// =========================================================

const CHAT_API_URL =
  import.meta.env.VITE_CHAT_API_URL ||
  "http://localhost:8787/api/chat";


// =========================================================
// PATTERNS
// =========================================================

const URL_PATTERN =
  /(https?:\/\/[^\s]+)/gi;

const PHONE_PATTERN =
  /(\+91\s?\d{5}\s?\d{5})/g;

const EMAIL_PATTERN =
  /([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi;


// =========================================================
// QUICK ACTIONS
// =========================================================

const quickActions = [
  {
    label: "Courses",
    type: "send_message",
    message: "What courses do you offer?",
  },

  {
    label: "Internship",
    type: "send_message",
    message: "What internships do you offer?",
  },

  {
    label: "WhatsApp",
    type: "open_url",
    url: "https://wa.me/918925450473",
  },

  {
    label: "Maps",
    type: "send_message",
    message:
      "Open company location on Google Maps",
  },
];


// =========================================================
// HELPER PROMPTS
// =========================================================

const helperPrompts = [
  "I'm here to help",
  "Need support?",
  "Ask me anything",
  "Courses, internships, services",
];


// =========================================================
// MESSAGE CONTENT RENDERER
// =========================================================

const renderMessageContent = (content) => {
  const tokenPattern =
    /(https?:\/\/[^\s]+)|(\+91\s?\d{5}\s?\d{5})|([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi;

  return content
    .split(tokenPattern)
    .filter(Boolean)
    .map((part, index) => {

      // URL
      if (URL_PATTERN.test(part)) {
        URL_PATTERN.lastIndex = 0;

        return (
          <a
            href={part}
            target="_blank"
            rel="noreferrer"
            key={`${part}-${index}`}
          >
            {part}
          </a>
        );
      }

      URL_PATTERN.lastIndex = 0;


      // PHONE
      if (PHONE_PATTERN.test(part)) {
        PHONE_PATTERN.lastIndex = 0;

        const tel = part.replace(/\s/g, "");

        return (
          <a
            href={`tel:${tel}`}
            key={`${part}-${index}`}
          >
            {part}
          </a>
        );
      }

      PHONE_PATTERN.lastIndex = 0;


      // EMAIL
      if (EMAIL_PATTERN.test(part)) {
        EMAIL_PATTERN.lastIndex = 0;

        return (
          <a
            href={`mailto:${part}`}
            key={`${part}-${index}`}
          >
            {part}
          </a>
        );
      }

      EMAIL_PATTERN.lastIndex = 0;


      return part;
    });
};


// =========================================================
// CHATBOT COMPONENT
// =========================================================

const ChatBot = () => {

  // =======================================================
  // CHAT OPEN/CLOSE
  // =======================================================

  const [pjChatOpen, setPjChatOpen] =
    useState(false);


  // =======================================================
  // MESSAGES
  // =======================================================

  const [messages, setMessages] =
    useState([
      {
        role: "assistant",
        content:
          "Hi, I am the ProJenius assistant. How can I help you?",
      },
    ]);


  // =======================================================
  // INPUT
  // =======================================================

  const [input, setInput] =
    useState("");


  // =======================================================
  // LOADING
  // =======================================================

  const [loading, setLoading] =
    useState(false);


  // =======================================================
  // HELPER TEXT
  // =======================================================

  const [helperIndex, setHelperIndex] =
    useState(0);


  // =======================================================
  // PAGE END STATE
  // =======================================================

  const [isNearPageEnd, setIsNearPageEnd] =
    useState(false);


  // =======================================================
  // MESSAGE REF
  // =======================================================

  const messageListRef =
    useRef(null);


  // =======================================================
  // HELPER TEXT ROTATION
  // =======================================================

  useEffect(() => {

    const interval =
      window.setInterval(() => {

        setHelperIndex(
          (currentIndex) =>
            (currentIndex + 1) %
            helperPrompts.length
        );

      }, 3500);


    return () => {
      window.clearInterval(interval);
    };

  }, []);


  // =======================================================
  // DETECT PAGE END
  // =======================================================

  useEffect(() => {

    const handleScroll = () => {

      const scrollTop =
        window.scrollY;

      const windowHeight =
        window.innerHeight;

      const documentHeight =
        document.documentElement.scrollHeight;

      const distanceFromBottom =
        documentHeight -
        (scrollTop + windowHeight);


      /*
        Normal position:
        bottom: 50px

        Near page end:
        bottom: 110px

        180px before the actual page end,
        chatbot moves upward.
      */

      if (distanceFromBottom <= 180) {

        setIsNearPageEnd(true);

      } else {

        setIsNearPageEnd(false);

      }
    };


    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );


    // Run once when component loads
    handleScroll();


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);


  // =======================================================
  // CHAT HISTORY
  // =======================================================

  const chatHistory =
    useMemo(
      () =>
        messages
          .filter(
            (message) =>
              message.role === "user" ||
              message.role === "assistant"
          )
          .map((message) => ({
            role: message.role,
            content: message.content,
          })),
      [messages]
    );


  // =======================================================
  // SCROLL CHAT MESSAGES
  // =======================================================

  const scrollToLatestMessage = () => {

    window.setTimeout(() => {

      const messageContainer =
        messageListRef.current;

      if (!messageContainer) {
        return;
      }

      messageContainer.scrollTo({
        top: messageContainer.scrollHeight,
        behavior: "smooth",
      });

    }, 50);
  };


  // =======================================================
  // SEND MESSAGE
  // =======================================================

  const sendMessageText =
    async (messageText) => {

      const message =
        messageText.trim();


      if (!message || loading) {
        return;
      }


      // Clear input
      setInput("");


      // Loading
      setLoading(true);


      // Add user message
      setMessages(
        (currentMessages) => [
          ...currentMessages,

          {
            role: "user",
            content: message,
          },
        ]
      );


      scrollToLatestMessage();


      try {

        const response =
          await fetch(
            CHAT_API_URL,
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                message,
                history: chatHistory,
              }),
            }
          );


        const data =
          await response.json();


        if (!response.ok) {

          throw new Error(
            data.error ||
              "Chat request failed."
          );

        }


        // Open URL action
        if (
          data.action?.type ===
            "open_url" &&
          data.action.url
        ) {

          window.open(
            data.action.url,
            "_blank",
            "noopener,noreferrer"
          );

        }


        // Assistant response
        setMessages(
          (currentMessages) => [
            ...currentMessages,

            {
              role: "assistant",

              content:
                data.reply ||
                "I couldn't generate a response.",

              actions:
                data.actions || [],
            },
          ]
        );

      } catch (error) {

        console.error(
          "Chatbot error:",
          error
        );


        setMessages(
          (currentMessages) => [
            ...currentMessages,

            {
              role: "assistant",

              content:
                "I cannot reach the ProJenius Innovation Technology assistant right now. Please make sure the chat server and Ollama are running.",
            },
          ]
        );

      } finally {

        setLoading(false);

        scrollToLatestMessage();

      }
    };


  // =======================================================
  // RUN ACTION
  // =======================================================

  const runAction = (action) => {

    if (
      action.type === "open_url" &&
      action.url
    ) {

      window.open(
        action.url,
        "_blank",
        "noopener,noreferrer"
      );

      return;
    }


    if (
      action.type === "send_message" &&
      action.message
    ) {

      sendMessageText(
        action.message
      );

    }
  };


  // =======================================================
  // FORM SUBMIT
  // =======================================================

  const sendMessage = async (event) => {

    event.preventDefault();

    await sendMessageText(input);

  };


  // =======================================================
  // CLASS NAMES
  // =======================================================

  const launcherClassName =
    `pj-chatbot-launcher ${
      isNearPageEnd
        ? "pj-chatbot-at-page-end"
        : ""
    }`;


  const wrapperClassName =
    `pj-chatbot-wrapper ${
      isNearPageEnd
        ? "pj-chatbot-at-page-end"
        : ""
    }`;


  // =======================================================
  // JSX
  // =======================================================

  return (
    <>

      {/* ===================================================
          CHATBOT CLOSED
          =================================================== */}

      {!pjChatOpen && (

        <div
          className={launcherClassName}
        >

          <div className="pj-chatbot-helper-bubble">

            {
              helperPrompts[
                helperIndex
              ]
            }

          </div>


          <button
            type="button"
            className="pj-chatbot-toggle-btn"
            onClick={() =>
              setPjChatOpen(true)
            }
            aria-label="Open ProJenius chat"
          >

            <i className="bi bi-chat-dots-fill"></i>

          </button>

        </div>
      )}


      {/* ===================================================
          CHATBOT OPEN
          =================================================== */}

      {pjChatOpen && (

        <div
          className={wrapperClassName}
        >

          {/* HEADER */}

          <div className="pj-chatbot-header">

            <div>

              <span>
                ProJenius Innovation Technology
              </span>

              <small>
                I am here to assist you
              </small>

            </div>


            <button
              type="button"
              className="pj-chatbot-close-btn"
              onClick={() =>
                setPjChatOpen(false)
              }
              aria-label="Close chatbot"
            >
              ×
            </button>

          </div>


          {/* MESSAGES */}

          <div
            className="pj-chatbot-messages"
            ref={messageListRef}
          >

            {messages.map(
              (message, index) => (

                <div
                  className={`pj-chatbot-message pj-chatbot-message-${message.role}`}
                  key={`${message.role}-${index}`}
                >

                  {renderMessageContent(
                    message.content
                  )}


                  {/* ACTIONS */}

                  {message.actions?.length >
                    0 && (

                    <div className="pj-chatbot-action-row">

                      {message.actions.map(
                        (action) => (

                          <button
                            type="button"
                            className="pj-chatbot-action-btn"
                            key={`${action.label}-${action.url || action.message}`}
                            onClick={() =>
                              runAction(action)
                            }
                          >

                            {action.label}

                          </button>

                        )
                      )}

                    </div>

                  )}

                </div>

              )
            )}


            {/* LOADING */}

            {loading && (

              <div className="pj-chatbot-message pj-chatbot-message-assistant">

                ProJenius is thinking...

              </div>

            )}

          </div>


          {/* QUICK ACTIONS */}

          <div className="pj-chatbot-quick-actions">

            {quickActions.map(
              (action) => (

                <button
                  type="button"
                  key={action.label}
                  onClick={() =>
                    runAction(action)
                  }
                >

                  {action.label}

                </button>

              )
            )}

          </div>


          {/* FORM */}

          <form
            className="pj-chatbot-form"
            onSubmit={sendMessage}
          >

            <input
              type="text"
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              placeholder="Ask about courses, services, workshops..."
              aria-label="Message"
            />


            <button
              type="submit"
              disabled={
                loading ||
                !input.trim()
              }
            >
              Send
            </button>

          </form>

        </div>

      )}

    </>
  );
};


export default ChatBot;