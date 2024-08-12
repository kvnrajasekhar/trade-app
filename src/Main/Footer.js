import React from 'react';
import './Footer.css';
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="footer">

                    <div className="row">

                        <a className="social-link" href="https://www.facebook.com/kanagala.vnrajasekar/" >
                            <FaFacebook />
                        </a>
                        <a className="social-link" href="https://www.instagram.com/vnrajasekar_.rahul/" >
                            <CiInstagram />
                        </a>
                        <a className="social-link" href="https://github.com/kvnrajasekhar/kvnrajasekhar" >
                            <FaGithub />
                        </a>
                        <a className="social-link" href="https://twitter.com/vnrajasekar" >
                            <FaXTwitter />
                        </a>
                        <a className="social-link" href="https://www.linkedin.com/in/kvnrs23" >
                            <FaLinkedinIn />
                        </a>
                    </div>
                    <div className="row">
                        RS Copyright © 2024 :TradeIt - All rights reserved || Designed By: Rajasekhar
                    </div>
                </div>
            </footer>
        </div>
    );
}
