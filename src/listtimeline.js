import './App.css';
import imagesample from './imagesample.jpg';

function ListTimeline(props){
    return (
        <li class={ props.inverted ? "list-group-item timeline-inverted" : "list-group-item"}>
            <div class="timeline-image"><img class="rounded-circle img-fluid" src={imagesample} /></div>
            <div class="timeline-panel">
                <div class="timeline-heading">
                    <h4>2009-2011</h4>
                    <h4 class="subheading">Our Humble Beginnings</h4>
                </div>
                <div class="timeline-body">
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
            </div>
        </li>
    );
}


export default ListTimeline;