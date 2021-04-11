import Navbar from './navbar.js';
import Card from './card.js';
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
            <div className="container projects">
                <div className="row">
                    <div className="col-4">
                        <Card link="https://github.com/shrushti22/Meet-Script" title="Meet-Script"
                            description="A Chrome Extension that gives you transcript of google meet. Helps you keep a record of all the conversation that took place on GOOGLE MEET."
                            noOfTools={3} tools={["Javascript"]}
                        />
                    </div>
                    <div className="col-4">
                        <Card link="https://github.com/shrushti22/Mellowbite-Restro" title="Mellowbite"
                            description="A fully functional restaurant website that allows users to signup and order food online or pre-booking table."
                            noOfTools={3} tools={["Node","MongoDB","Javascript"]}
                        />
                    </div>
                    <div className="col-4">
                        <Card link="https://github.com/shrushti22/schudle" title="Schudle"
                            description="Schudle is an Online Learning Management website for schools. The platform helps schools to manage schools online."
                            noOfTools={3} tools={["Node","MongoDB","Drive API","Calendar API","Javascript"]}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <Card link="https://github.com/RuntimeTerror-Plotify/plotify" title="Plotify"
                            description="A web app which facilitates user to visualize data and perform statistical operation without any need to write code in machine learning and data science domain."
                            noOfTools={3} tools={["Node","MongoDB","Javascript","Plotly"]}
                        />
                    </div>
                    <div className="col-4">
                        <Card link="https://github.com/shrushti22/event_manager" title="Event-Manager"
                            description="It is a basic functioning event management website with security and authentication."
                            noOfTools={3} tools={["Javascript"]}
                        />
                    </div>
                </div>
            </div>
            
        </div>
    );
    
}

export default Project;