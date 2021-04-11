import Navbar from './navbar.js';
import Avatar from './avatar.js';
import './App.css';


function Aboutme() {
    return (
        <div>
            <Navbar />
            <div className="container about-me">
                <div className="row">
                    <div className="col-sm-4">
                        <Avatar />
                    </div>
                    <div className="col-8 text-left">
                        <p className="quoteHeading">About Me</p>
                        <p className="info">I am a Computer Science and Engineering Undergraduate with proficiency in Node, MongoDB
                        , Javascript, React, Tensorflow, and C++.I am A Full Stack Web Developer. I am keen about Artificial Intelligence and Machine Learning. I love to 
                        spend time googling about new stuffs. I have a good understanding of Data Structure, Algorithms, Machine Learning and Deep Learning.</p>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default Aboutme;