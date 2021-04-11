import './App.css';
import Navbar from './navbar.js';
import ListTimeline from './listtimeline.js';

function Timeline(){
    return(
        <div>
            <Navbar />
            <div className="text-center">
                <p className="quoteHeading">Timeline</p>
                <p className="quote">You don’t  have  to  see  the  whole  staircase,  just  take  the  first  step.</p>
            </div>
            
            <section id="timeline">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <ul class="list-group timeline">
                                <ListTimeline inverted={false} />
                                <ListTimeline inverted={true} />
                                <ListTimeline inverted={false}/>
                                <li class="list-group-item timeline-inverted">
                                    <div class="timeline-image">
                                        <h4>Be Part<br />&nbsp;Of Our<br />&nbsp;Story!</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default Timeline;