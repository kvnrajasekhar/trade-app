import axios from 'axios'
import { create } from 'zustand'

const debounce = (func, wait, immediate) => {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args); // Only execute func if not immediate
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args); // Execute func immediately if immediate and no timeout
    };
};

const homeStore = create((set) => ({
    coins: [],
    trending: [],
    query: '',
    searching : false,
    searched  : false,
    setQuery: debounce((value) => {
        set({ query: value });
        homeStore.getState().searchCoins();
    }, 500),
    searchCoins: async () => {
        set({ searching :true})
        const { query, trending } = homeStore.getState();
        if (query.length > 2) {
            try {
                const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`);
                const coins = res.data.coins.map((coin) => ({
                    name: coin.name,
                    image: coin.large,
                    id: coin.id,
                }));
                set({ coins,searching : false ,searched : true});
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        } else {
            set({ coins: trending,searching : false , searched: false});
        }
    },
    fetchCoins: async () => {
        try {
            const [res, btcRes] = await Promise.all([
                axios.get('https://api.coingecko.com/api/v3/search/trending'),
                axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr')
            ]);
            const btcprice = btcRes.data.bitcoin.inr;
            const coins = res.data.coins.map(coin => ({
                name: coin.item.name,
                image: coin.item.large,
                id: coin.item.id,
                priceBtc: coin.item.price_btc.toFixed(10),
                priceInr: (coin.item.price_btc * btcprice).toFixed(10),
            }));
            set({ coins, trending: coins });
        } catch (error) {
            console.error("Error fetching coins:", error);
        }
    }
}));

export default homeStore;