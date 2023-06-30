
import "../styles/style.css"
function VideoDemoSection() {
    return (
      <section className="video_Demo">
        <div className="grid">
          <div className="grid_1 flex_last">
            <div className="grid_Gap">
              <h1>
                Video <span className="span_primary">Demo</span>
              </h1>
              <p>
                Creating a chatbot for Product Hunt by crawling the website and training the AI on its content. I
                can then embed the chatbot on the website
              </p>
            </div>
            <div>
              <div className="button mb">Watch</div>
            </div>
          </div>
          <div className="grid_2">
            <div className="video">
              <div className="play"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  export default VideoDemoSection