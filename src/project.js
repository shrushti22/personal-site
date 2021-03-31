import Navbar from './navbar.js';
import './App.css';

function Project() {
    return (
        <div>
            <Navbar />
            <div className="quotediv">
                <p className="quoteHeading">Faith</p>
                <p className="quote">You don’t  have  to  see  the  whole  staircase,  just  take  the  first  step.</p>
                <hr />
                <p className="writer">Martin Luther King Jr.</p>
            </div>
        </div>
    );
    
}

export default Project;