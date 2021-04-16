import './App.css';
import typing from './timeline_images/typing.svg';
import Footer from './footer.js';



function Intro() {
    var iconstyle
    return (
    <div>
        <div className="hey-tag">
          <p>I'm Shrushti.</p>
      </div>
      <div className="intro">
        <p>Passionate Web Developer and Machine Learning Enthusiast.<br/> Creative, Ambitious, &#38; Jolly good Fellow.</p>
      </div>
      <div class="container mt-4">
            <div class="social-container effect amiens">
                <a href="https://www.linkedin.com/in/shrushti-vasaniya-16983b196/" className="linkedin" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin"></i></a>
                <a href="https://github.com/shrushti22" className="github"  target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i></a>
                <a href="https://www.facebook.com/srushti.vasaniya/" className="facebook" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook"></i></a>
                <a href="https://www.instagram.com/_.shizuuu._/" className="instagram" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram"></i></a>
                <a href="https://twitter.com/Shrushti22301" className="twitter" target="_blank" rel="noopener noreferrer"><i class="fa fa-twitter"></i></a>
            </div>
      </div>
      <div className="container mt-4">
        <div class="row">
          <img src={typing} alt="svg not found" width="100%"/>
        </div>
      </div>
      <Footer/>
    </div>
      
    );
}


export default Intro;