import Navbar from './navbar.js';
import Avatar from './avatar.js';
import './App.css';
import Footer from './footer.js';
import smiley from './timeline_images/smiley.svg';


function Aboutme() {
    return (
        <div>
            <Navbar />
            <div className="container about-me">
                <div className="text-center row">
                    <div className="col-lg-4 col-sm-12">
                    </div>
                    <div className="col-lg-8 col-sm-12 text-left">
                        <p className="quoteHeading">About Me</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <Avatar />
                    </div>
                    <div className="col-lg-8 col-sm-12 text-left">
                        <p className="info">I am a Computer Science and Engineering Undergraduate student at IIIT Surat with expertise in Node, MongoDB, JavaScript, React, TensorFlow, and C++. I work as a Full Stack Web Developer. I'm fascinated by Artificial Intelligence and Machine Learning. I enjoy researching new topics on the internet. I am well-versed in data structures, algorithms, machine learning, and deep learning.</p>
                        <p className="info">Thank You.<br /> Have a wonderful day!<br/><img src={smiley} alt=":)" height="100px" width="200px"></img></p>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
    
}

export default Aboutme;