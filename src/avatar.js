import './App.css';
import profilephoto from './shrushti.jpg';

function Avatar() {
    return(
            <div class="profile">
                <img class="rounded-circle mx-auto" src={profilephoto} alt="avatar" />
                <h4>Shrushti Vasaniya</h4>
                <p class="text-muted">@shrushti22</p>
                <ul class="list-inline social-buttons">
                    <li class="list-inline-item"><a href="https://github.com/shrushti22" target="_blank" rel="noopener noreferrer"><i class="fa fa-github fa"></i></a></li>
                    <li class="list-inline-item"><a href="https://www.facebook.com/srushti.vasaniya/" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook"></i></a></li>
                    <li class="list-inline-item"><a href="https://www.linkedin.com/in/shrushti-vasaniya-16983b196/" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
    );
}

export default Avatar;
