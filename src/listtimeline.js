import './App.css';

function ListTimeline(props){
    return (
        <li class={ props.inverted ? "list-group-item timeline-inverted" : "list-group-item"}>
            <div class="timeline-image"><img class="rounded-circle img-fluid" src={props.imageUri} alt="image not found"/></div>
            <div class="timeline-panel">
                <div class="timeline-heading">
                    <h6>{props.timespan}</h6>
                    <h4 class="subheading">{props.subheading}</h4>
                </div>
                <div class="timeline-body">
                    <p class="text-muted">{props.info}</p>
                </div>
            </div>
        </li>
    );
}


export default ListTimeline;