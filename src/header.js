import './App.css';
import Background from './background.js';
import Bitmogi from './bitmogi.js';
import Navbar from './navbar.js';


function Header() {
    return (
        <header className="App-header">
            <Background />
            <Navbar />
            <Bitmogi />
        </header>
    )
}

export default Header;