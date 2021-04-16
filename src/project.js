import Navbar from './navbar.js';
import Card from './card.js';
import './App.css';
import Footer from './footer.js';

function Project() {
    return (
        <div>
            <Navbar />
            <div className="quotediv">
                <p className="quoteHeading">Projects</p>
                <p className="quote">The Best Way To Get Started Is To Quit Talking And Begin Doing.</p>
                <hr/>
                <p className="writer">Walt Disney</p>
            </div>
            <div className="container projects">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Card link="https://github.com/shrushti22/Meet-Script" icon="https://img.icons8.com/nolan/64/script-listener.png" title="Meet-Script"
                            description="A Chrome Extension that gives you transcript of google meet. Helps you keep a record of all the conversation that took place on GOOGLE MEET."
                            noOfTools={3} tools={["Javascript"]}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Card link="https://github.com/shrushti22/Mellowbite-Restro" icon="https://img.icons8.com/bubbles/64/000000/restaurant.png" title="Mellowbite"
                            description="A fully functional restaurant website that allows users to signup and order food online or pre-booking table."
                            noOfTools={3} tools={["Node","MongoDB","Javascript"]}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Card link="https://github.com/shrushti22/schudle" icon="https://img.icons8.com/dusk/64/000000/school.png" title="Schudle"
                            description="Schudle is an Online Learning Management website for schools. The platform helps schools to manage schools online."
                            noOfTools={3} tools={["Node","MongoDB","Drive API","Calendar API","Javascript"]}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Card link="https://github.com/RuntimeTerror-Plotify/plotify" icon="https://img.icons8.com/cotton/48/000000/graph-report--v3.png" title="Plotify"
                            description="A web app which facilitates user to visualize data and perform statistical operation without any need to write code in machine learning and data science domain."
                            noOfTools={3} tools={["Node","MongoDB","Javascript","Plotly"]}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Card link="https://github.com/shrushti22/event_manager" icon="https://img.icons8.com/cute-clipart/64/000000/tear-off-calendar.png" title="Event Manager"
                            description="It is a basic functioning event management website with security and authentication."
                            noOfTools={3} tools={["Javascript"]}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
    
}

export default Project;