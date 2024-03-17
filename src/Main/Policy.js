import React from 'react';
import './Policy.css';
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import policy_img1 from './worldwide-2.jpg';
import policy_img2 from './safe-2.jpg';
import policy_img3 from './support.png';
import policy_img4 from './best.jpeg'

function Policy() {
    return (
        <div className='policy'>
            <h3>We're the most trusted place for people and businesses to buy, sell, and manage crypto</h3>
            {/* <h3>We're the most trusted place for people and businesses to buy, sell, and manage crypto</h3>
            <div className='pollicy-cards'>
                <div className='policy-1'>
                    <img src="#" alt='policy-1' />
                    <h2>The largest public crypto company</h2>
                    <p>We operate with financial transparency.</p>
                </div>
                <div className='policy-2'>
                    <img src="#" alt='policy-1' />
                    <h2>Your assets are protected</h2>
                    <p>Our risk management measures are designed to protect your assets.</p>
                </div>
                <div className='policy-3'>
                    <img src="#" alt='policy-1' />
                    <h2>Get the help you need, when you need it</h2>
                    <p>You can always contact our support team for quick solutions to common problems.</p>
                </div>

                <div className='policy-4'>
                    <img src="#" alt='policy-1' />
                    <h2>Industry best practices</h2>
                    <p>Coinbase supports a variety of the most popular digital currencies.</p>
                </div>
            </div> */}
            {/* <CardGroup>
                <Card className='card-1 ms-3' border="success" style={{ width: '10rem' }}>
                    <Card.Img className='card-img' variant="top" src={policy_img1}    />
                    <Card.Body>
                        <Card.Title>The  public crypto company</Card.Title>
                        <Card.Text>
                        We operate with financial transparency.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        
                    </Card.Footer>
                </Card>
                <Card  className='card-2 ms-3' border="success">
                    <Card.Img className='card-img' variant="top" src={policy_img2} />
                    <Card.Body>
                        <Card.Title>Your assets are protected</Card.Title>
                        <Card.Text>
                        Our risk management measures are designed to protect your assets.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        
                    </Card.Footer>
                </Card>
                <Card className='card-3 ms-3' border="success">
                    <Card.Img className='card-img' variant="top" src={policy_img3}   />
                    <Card.Body>
                        <Card.Title>Get the help you need, when you need it</Card.Title>
                        <Card.Text>
                        You can always contact our support team for quick solutions to common problems.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>
                </Card>
                <Card className='card-4 ms-3' border="success">
                    <Card.Img className='card-img' variant="top" src={policy_img4} />
                    <Card.Body>
                        <Card.Title>Industry best practices</Card.Title>
                        <Card.Text>
                        Coinbase supports a variety of the most popular digital currencies.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>
                </Card>
            </CardGroup> */}
            <div class="cards-list">

                <div class="card 1">
                    <div class="card_image image1"> <img src={policy_img1}  alt = 'policy-img'/> </div>
                    <div class="card_title ">
                        <p>
                            Public Policy
                        </p>
                    </div>
                </div>

                <div class="card 2">
                    <div class="card_image image2">
                        <img src={policy_img2}  alt = 'policy-img'/>
                    </div>
                    <div class="card_title ">
                        <p>Card Title</p>
                    </div>
                </div>

                <div class="card 3">
                    <div class="card_image image3">
                        <img src={policy_img3} alt = 'policy-img'/>
                    </div>
                    <div class="card_title">
                        <p>Card Title</p>
                    </div>
                </div>

                <div class="card 4">
                    <div class="card_image image4">
                        <img src={policy_img4} alt = 'policy-img' />
                    </div>
                    <div class="card_title title-black">
                        <p>Card Title</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Policy; 