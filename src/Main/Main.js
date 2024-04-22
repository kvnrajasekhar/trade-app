import './Main.css';
//import img1 from './sources/action-img.jpg';
// import img2 from './sources/buy-and-sell.jpg';
// import img3 from './sources/earn.jpg';
// import img4 from './sources/send-.jpg';
// import img5 from './sources/all.png';
// import img6 from './sources/prime.png';
import logo_svg from './sources/logo-svg.gif';

function Main() {
    return (
        <div className="main" id='main'>
            <div className="container">
                <div className="main-container">
                <img className='logo_svg' src={logo_svg} alt='logo'/>
                    <h1 className='title-1'>Trade your Crypto seamlessly</h1>
                    <h5 className='sub-title'>
                        Tradeit is a decentralized perptual cryptro platform with best in class performance.
                    </h5>
                </div>
            </div>
        </div>
    );
}

export default Main;