import React from 'react';
import './Policy.css';
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import policy_img1 from './sources/worldwide-2.jpg';
import policy_img2 from './sources/safe-2.jpg';
import policy_img3 from './sources/support.png';
import policy_img4 from './sources/best.jpeg'

function Policy() {
    return (
        <div className='policy'>
            <h3>We're the most trusted place for people and businesses to buy, sell, and manage crypto</h3>
            <div class="cards-list">
            
                <div class="card 1">
                    <div class="card_image image1"> <img src={policy_img1} alt='policy-img' /> </div>
                    <div class="card_title ">
                        <p>
                            Public Policy
                        </p>
                    </div>
                </div>

                <div class="card 2">
                    <div class="card_image image2">
                        <img src={policy_img2} alt='policy-img' />
                    </div>
                    <div class="card_title ">
                        <p>Secured</p>
                    </div>
                </div>

                <div class="card 3">
                    <div class="card_image image3">
                        <img src={policy_img3} alt='policy-img' />
                    </div>
                    <div class="card_title">
                        <p>Communicative</p>
                    </div>
                </div>

                <div class="card 4">
                    <div class="card_image image4">
                        <img src={policy_img4} alt='policy-img' />
                    </div>
                    <div class="card_title title-black">
                        <p>Quality</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Policy; 