import './App.css';


function Footer(){
    var d = new Date();

    return(
        <div className="footer bg-light text-center p-3">
            <p className="m-1" style={{color: 'rgba(0,0,0,0.5)'}}>Made with React.</p>
        </div>
    )
}

export default Footer;