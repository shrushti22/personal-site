import './App.css';
import profilephoto from './shrushti.jpg'

function Avatar() {
    return(
            <div class="profile">
                <img class="rounded-circle mx-auto" src={profilephoto} />
                <h4>Shrushti Vasaniya</h4>
                <p class="text-muted">@shrushti22</p>
                <ul class="list-inline social-buttons">
                    <li class="list-inline-item"><a href="#"><i class="fa fa-github fa"></i></a></li>
                    <li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li class="list-inline-item"><a href="#"><i class="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
    );
}

export default Avatar;
