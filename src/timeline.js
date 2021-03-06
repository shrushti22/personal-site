import './App.css';
import Navbar from './navbar.js';
import ListTimeline from './listtimeline.js';
import python from './timeline_images/python.webp';
import ML from './timeline_images/DL.webp';
import frontend from "./timeline_images/frontend.webp";
import iirs from "./timeline_images/iirs.webp";
import node from "./timeline_images/node.webp";
import develope from "./timeline_images/developing.webp";
import chrome from "./timeline_images/chrome.webp";
import Footer from './footer.js';
import reactimg from './timeline_images/react.webp';

function Timeline(){
    return(
        <div>
            <Navbar />
            <div className="quotediv">
                <p className="quoteHeading">Timeline</p>
                <p className="quote">You don’t have to see the whole staircase, just take the first step.</p>
                <hr/>
                <p className="writer">Martin Luther King Jr.</p>
            </div>
            
            <section id="timeline">
                <div class="container mt-5">
                    <div class="row">
                        <div class="col-lg-12">
                            <ul class="list-group timeline">
                                <ListTimeline inverted={false} timespan="Apr. 2021" imageUri={reactimg}
                                    subheading="Learning React" info="Learning React.js and implementing on a project - Personal Site."
                                />
                                <ListTimeline inverted={true} timespan="Mar. 2021" imageUri={chrome}
                                    subheading="Chrome Extension" info="Learnt making Chrome Extention and implemented on a Chrome Extension project - Meet-script."
                                 />
                                <ListTimeline inverted={false} timespan="Dec. 2020-Feb. 2021" imageUri={develope}
                                    subheading="Learning and Developing" info="Learning new stuff and making projects.Built Event-Manager, Restaurant website, Schudle - a learning management website. Participating in Hackathon and lots of competitive."
                                />
                                <ListTimeline inverted={true} timespan="Nov. 2020-Dec. 2020" imageUri={node}
                                    subheading="BackEnd Developement" info="Diving deeper into Backend Developement. Learnt Node.js, Express, API, Rest API, MongoDB, SQL, Security and Authentication using passport.js and many more."
                                />
                                <ListTimeline inverted={false} timespan="Sept. 2020-Nov. 2020" imageUri={iirs}
                                    subheading="Internship" info="Worked on a Project entitled ‘Object detection in satellite images using Single Shot Detection technique and classification using Fuzzy based modified Possibilistic C-Means’ under the guidance of Dr. Anil Kumar, Scientist/Engineer of IIRS-ISRO."
                                 />
                                <ListTimeline inverted={true} timespan="Aug. 2020-Sept. 2020" imageUri={frontend}
                                    subheading="FrontEnd Developement" info="Exploring Web Technology. Started with HTML, CSS, JavaScript and BootStrap."
                                />
                                <ListTimeline inverted={false} timespan="Apr. 2020-June 2020" imageUri={ML}
                                    subheading="Exploring Machine Learning" info="Started exploring Machine Learning and Deep Learning. Learnt concepts through online courses, implemented it and trained few models."
                                />
                                <ListTimeline inverted={true} timespan="Mar. 2020-Apr. 2020" imageUri={python} 
                                    subheading="Learning Python" info="Started with from basics of Python and the concept of Object-Oriented programming language and Interpreted language."
                                />
                                <li class="list-group-item timeline-inverted">
                                    <div class="timeline-image">
                                        <h4>Start<br />&nbsp;Of my<br />&nbsp;Journey!</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Timeline;