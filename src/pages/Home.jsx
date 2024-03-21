import React from 'react'
import homeStore from '../stores/homeStore'
import Listitems from '../components/Listitems'

export default function Home() {
    const store = homeStore()
    React.useEffect(() => {
        store.fetchCoins()
    }, [])

    return (
        <div>
            <header className='home-search'>
                <h2>Search for a coin</h2>
                <input type="text" value={store.query} onChange={(e) => store.setQuery(e.target.value)} />
            </header>
            <div className='home-cryptos' >
                <div className='width'>
                    <h2> Trending Coins</h2>
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