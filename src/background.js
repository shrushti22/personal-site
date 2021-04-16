import wave_lg from './timeline_images/wave-lg.svg';
import wave_md from './timeline_images/wave-md.svg';
import wave_sm from './timeline_images/wave-sm2.svg';
import './App.css';

function Background() {
    return (
        <div className="bgsvg">
            <img src={wave_lg} alt="wave" className="wave_lg"/>
            <img src={wave_md} alt="wave" className="wave_md"/>
            <img src={wave_sm} alt="wave" className="wave_sm"/>
        </div>
    )
}

export default Background;