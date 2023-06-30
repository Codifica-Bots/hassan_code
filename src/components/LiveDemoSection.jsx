/* eslint-disable react/jsx-no-duplicate-props */
// import React from 'react';
import "../styles/style.css";
import ChatBot from "./ChatBot";



function LiveDemoSection() {
  return (
    <section className="live_Demo">
      <div className="grid">
        <div className="live_Grid_1 flex_last">
          <div className="grid_Gap">
            <h1>
              Live <span className="span_primary">Demo</span>
            </h1>
            <p>
              Creating a chatbot for Product Hunt by crawling the website and
              training the AI on its content. I can then embed the chatbot on
              the website
            </p>
          </div>
          <div>
            <div className="button mb">Try it out</div>
          </div>
        </div>
        <div className="live_Grid_2">
          <div className="live">
            <ChatBot height={"100%"} width={"inherit"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiveDemoSection;
