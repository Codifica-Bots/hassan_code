// import  Navbar  from "./NavBar"
import "../styles/style.css"
function HeroSection() {
    return (
      <section className="hero_Section">
         {/* <Navbar />   */}
        <div className="grid main_Hero">
          <div className="grid_1">
            <h1>
              Custom ChatGPT for <br />
              <span className="span_primary">your data</span>
            </h1>
            <p>
              Just upload your documents or add a link to your website and get a ChatGPT-like chatbot for your
              data. Then add it as a widget to your website or chat with it through the API.
            </p>
            <div className="grid botUsed">
              <div className="used_col">
                <span className="used_span_1">Projects</span>
                <span className="used_span_2">233+</span>
              </div>
              <div className="used_col">
                <span className="used_span_1">Projects</span>
                <span className="used_span_2">233+</span>
              </div>
            </div>
            <a href="">
              <div className="button">Try It out now</div>
            </a>
          </div>
          <div className="grid_2">
            <div className="image_1"></div>
            <div className="image_2"></div>
          </div>
        </div>
      </section>
    );
  }

  export default HeroSection;