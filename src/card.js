import './App.css';

function Card(props) {
    var spanTags = [
        "tag text-danger is-danger",
        "tag text-info is-info",
        "tag text-success is-success",
        "tag text-warning is-warning",
        "tag text-primary is-primary",
    ]
    return (
        <a href={props.link} className="custom-card">
                            <div class="card">
                                <div class="card-body">
                                    <div className="container project-title">
                                        <div className="row">
                                            <div class="col-3">
                                                <img src={props.icon}/>
                                            </div>
                                            <div class="col-9">
                                                <h3>{props.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="project-content">
                                        <p class="card-text">{props.description}</p>
                                        <p>
                                            {props.tools.map((tool,i) => { 
                                                var k = Math.floor(Math.random()*5);
                                                return(<span className={spanTags[k]} >{tool}</span>);  
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
    );
}


export default Card;