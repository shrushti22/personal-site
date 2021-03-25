import wave from './wave.svg';
import './App.css';

function Background() {
    return (
        <div className="bgsvg">
            <img src={wave} alt="wave" className="wave"/>
            <svg height="200" width="250" className="circle">
                <circle cx="70" cy="100" r="40" fill="#f5b8ea" />
            </svg>
            <svg height="400" width="250" className="circle">
                <circle cx="70" cy="350" r="40" fill="#f5b8ea" />
            </svg>
            <svg height="300" width="50" className="circle">
                <circle cx="20" cy="220" r="20" fill="#f5b8ea" />
            </svg>
            <svg height="300" width="180" className="circle">
                <circle cx="150" cy="100" r="20" fill="#f5b8ea" />
            </svg>
            
            <svg height="400" width="400" className="circle">
                <circle cx="200" cy="300" r="40" fill="#f5b8ea" />
            </svg>
            <svg height="300" width="50" className="circle">
                <circle cx="20" cy="120" r="20" fill="#f5b8ea" />
            </svg>
            <svg height="400" width="250" className="circle">
                <circle cx="200" cy="320" r="40" fill="#f5b8ea" />
            </svg>
        </div>
    )
}

export default Background;