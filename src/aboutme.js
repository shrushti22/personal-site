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
                        <p className="info">I am a Computer Science and Engineering Undergraduate at IIIT Surat with proficiency in Node, MongoDB
                        , Javascript, React, Tensorflow, and C++.I am A Full Stack Web Developer. I am keen about Artificial Intelligence and Machine Learning. I love to 
                        spend time googling about new stuffs. I have a good understanding of Data Structure, Algorithms, Machine Learning and Deep Learning.</p>
                        <p className="info">Thank You.<br /> Have a nice day.<br/><img src={smiley} alt=":)" height="100px" width="200px"></img></p>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
    
}

export default Aboutme;