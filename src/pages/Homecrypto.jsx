import React, { useState, useEffect, memo } from 'react';
import homeStore from '../stores/homeStore';
import Listitems from '../components/Listitems';
import Mynav from '../Main/Mynav';
import classNames from 'classnames';

const debounce = (fn, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
};

const HomeSearchInput = memo(({ query, setQuery, searching }) => {
    return (
        <div className={classNames("home-search-input", { searching })}>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20">
                <path fill="currentColor" d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
            </svg>
        </div>
    );
});

export default function Home() {
    const store = homeStore();

    React.useEffect(() => {
        if (store.trending.length === 0) store.fetchCoins();
    }, []);
    const [searchQuery, setSearchQuery] = useState('');

    const handleQueryChange = debounce((value) => {
        store.setQuery(value);
    }, 300);

    useEffect(() => {
        handleQueryChange(searchQuery);
    }, [searchQuery]);

    
    return (
        <div className='homecrypto-body'>
            <Mynav />
            <header className='home-search'>
                <h2>Search for a coin</h2>
                <HomeSearchInput query={searchQuery} setQuery={setSearchQuery} searching={store.searching} />
            </header>
            <div className='home-cryptos' style={{ display: 'flex', justifyContent: 'center' }}>
                <div className='flex-container' style={{ background: '#FBFADA;', padding: '20px', borderRadius: '10px' }}>
                    <h2> {store.searched ? 'Search results' : 'Trending Coins'}</h2>
                    <div className='home-crypto-list' style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {store.coins.map(coin => (
                            <div className="coins-list" style={{ background: '#12372A', color: '#ADBC9F', margin: '10px', padding: '10px', borderRadius: '5px', flex: '1 0 200px', }}>
                                <Listitems className="coins-list" key={coin.id} coin={coin} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}