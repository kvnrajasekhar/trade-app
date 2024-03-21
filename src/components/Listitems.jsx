import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/style.scss';
import btc_img from './Bitcoin.svg.png';

export default function Listitems({ coin }) {
    return (
        <div className='home-crypto'>
            <Link to={`/${coin.id}`} className='link-style' >

                <span className='home-crypto-img'>
                    <img src={(coin.image)} alt="coin-img" />
                </span>
                <span className='home-crypto-name'>{coin.name} </span>
                {coin.priceBtc && (
                    <span className='home-crypto-price'>
                        <span className='home-crypto-btc'>
                            <img src={btc_img} alt='Bitcoin-svg' /> {coin.priceBtc} BTC</span>
                        <span className='home-crypto-inr'>({coin.priceInr} INR)</span>
                    </span>
                )}
            </Link>
        </div>
    )
}
