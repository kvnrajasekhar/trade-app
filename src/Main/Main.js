import './Main.css';
import img1 from './action-img.jpg';
import img2 from './buy-and-sell.jpg';
import img3 from './earn.jpg';
import img4 from './send-.jpg';
import img5 from './all.png';
import img6 from './prime.png';

function Main() {
    return (
        <div className="main">
            <div className="container">
                <div className="main-container">
                    <h1>Buy Bitcoin, Ethereum, and other cryptocurrencies</h1>
                    <h5>
                        Purchase BTC, ETH, and other crypto easily with 20+ fiat currencies
                        Access, manage, and spend your funds anytime with the Crypto.com Visa Card.
                    </h5>
                </div>
                <div className='main-img'>
                    <img className='landing-image' src={img1} alt='image1' />
                </div>
            </div>
            <h1 className='buy-sell ms-3' >Buy and Sell</h1>
            <div className="container-1">
                <div className="title ms-3">
                    <h5>
                        Buy and sell 250+ cryptocurrencies using 20+ fiat currencies
                        Pay the lowest fees when you purchase with a credit/debit card or bank transfer
                    </h5>
                </div>
                <div className='main-img2'>
                    <img className='container-image' src={img2} alt='image2' />
                </div>
            </div>
            <h1 className='buy-sell ms-3' >Earn</h1>
            <div className="container-1">

                <div className="title ms-3">
                    <h5>
                        Get the most out of your assets, safely
                    </h5>
                </div>
                <div className='main-img2'>
                    <img className='container-image' src={img3} alt='image3' />
                </div>
            </div>
            <h1 className='buy-sell ms-3' >Explore crypto like Bitcoin, Ethereum, and Dogecoin</h1>
            <div className="container-1">
                <div className="title ms-3">
                    <h5>
                        Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
                    </h5>
                </div>
                <div className='main-img2'>
                    <img className='container-image' src={img4} alt='image4' />
                </div>
            </div>
            <div className="container-1">
                <h1 className='buy-sell ms-3' >Take control of your money</h1>
                <div className="title ms-3">
                    <h1>
                        Start your portfolio today and discover crypto
                    </h1>
                </div>
                <div className='main-img2'>
                    <img className='container4-image' src={img5} alt='image5' />
                </div>
            </div>
            <h1 className='buy-sell ms-3' >The financial institution for a digital asset future</h1>
            <div className="title ms-3">
                <h5>
                    Coinbase Prime is the first choice for sophisticated investors and institutions that want to invest in digital assets.
                </h5>
            </div>
            <div className='image-6'>
                <img className='container-image' src={img6} alt='image6' />
            </div>
        </div>
    );
}

export default Main 