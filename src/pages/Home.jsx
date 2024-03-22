import React from 'react'
import homeStore from '../stores/homeStore'
import Listitems from '../components/Listitems'


export default function Home() {
    const classNames = require('classnames');
    const store = homeStore()
    React.useEffect(() => {
       if (store.trending.length === 0) store.fetchCoins()
    }, [])

    return (
        <div>
            <header className='home-search'>
                <h2>Search for a coin</h2>
                <div className={classNames("home-search-input", { searching: store.searching })} >
                    <input type="text" value={store.query} onChange={(e) => store.setQuery(e.target.value)} />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20">
                        <path fill="currentColor" d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
                    </svg>
                </div>
            </header>
            <div className='home-cryptos' >
                <div className='width'>
                    <h2> {store.searched ?'Search results' : 'Trending Coins' }</h2>
                    <div className='home-crypto-list'>
                        {store.coins.map(coin => (
                            <Listitems key={coin.id} coin={coin} />
                        )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}