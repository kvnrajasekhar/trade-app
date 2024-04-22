import React from 'react';
import './Policy.css';
import text_logo from './sources/text_logo.png'

function Policy() {
    return (
        <div>
            <div className='text-logo'>
                <img className='logo-img' src={text_logo} alt='text-logo' />
            </div>
            {/* <div className='policy'>
                <h3>We're the most trusted place for people and businesses to buy, sell, and manage crypto</h3>
                <div className='policy-list'>
                    <div class="item-1">
                        <h5>Support</h5>
                    </div>
                    <div class="item-2">
                        <h5>Quality</h5>
                    </div>
                    <div class="item-3">
                        <h5>Protected</h5>
                    </div>
                    <div class="item-4">
                        <h5>Secured</h5>
                    </div>
                </div>
            </div> */}
            <div className='start-btn-div'>
                    <button className='start-button' type='submit' onClick={() => window.location = 'Homecrypto'} ><span>Explore</span> </button>
            </div>
        </div>
    );
}
export default Policy; 