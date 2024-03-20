import React from 'react'
import { Link } from 'react-router-dom'
import homeStore from '../stores/homeStore'

export default function Home() {
    const store = homeStore()
    React.useEffect(() => {
        store.fetchCoins()
    }, [])

    return (
        <div>
            <input type="text" value={store.query} onChange={(e) => store.setQuery(e.target.value)} />
            {store.coins.map(coin => (
                    <div key={coin.id}>

                        <Link to={`/${coin.id}`} >
                            {coin.name}
                        </Link>
                    </div>
                )
            )}

        </div>
    )
}