import React from 'react'
import Mynav from './Mynav'
import Main from './Main'
import Policy from './Policy'
import Footer from './Footer'
import './Home.css'

export default function Home() {
    return (
        <div className='home-div'>
            <Mynav />
            <Main />
            <Policy />
            <Footer />
        </div>
    )
}
