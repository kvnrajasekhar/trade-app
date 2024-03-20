// import axios from 'axios'
// import {create} from 'zustand'

// import debounce from '../helpers/debounce'

// const homeStore = create((set) => ({
//     coins: [],
//     trending: [],
//     query: '',

//     setQuery: (e) => {
//         set({ query: e.value });
//         homeStore.getState().searchCoins()
//     },


//     searchCoins: debounce(async () => {
//         const { query, trending } = homeStore.getState()
//         const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`);
//         if (query.length > 2) {
//             const coins = res.data.coins.map((coin) => {
//                 return {
//                     name: coin.name,
//                     image: coin.large,
//                     id: coin.id,
//                 };
//             });
//             set({ coins });
//         }
//         else {
//             set({ coins: trending })
//         }
//     }, 500),

//     fetchCoins: async () => {
//         const [res, btcRes] = await Promise.all([

//             axios.get('https://api.coingecko.com/api/v3/search/trending'),
//             axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr')
//         ])

// const btcprice = btcRes.data.bitcoin.inr;    

//         const coins = res.data.coins.map(coin => {
//             return {
//                 name: coin.item.name,
//                 image: coin.item.large,
//                 id: coin.item.id,
//                 priceBtc: coin.item.price_btc.toFixed(10),
//                 priceInr : coin.item.price_btc * btcprice.toFixed(10),
//             }
//         })
//         set({ coins, trending: coins })

//     }
// }))
// export default homeStore
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

    setQuery: debounce((value) => {
        set({ query: value });
        homeStore.getState().searchCoins();
    }, 500),

    searchCoins: async () => {
        const { query, trending } = homeStore.getState();
        if (query.length > 2) {
            try {
                const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`);
                const coins = res.data.coins.map((coin) => ({
                    name: coin.name,
                    image: coin.large,
                    id: coin.id,
                }));
                set({ coins });
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        } else {
            set({ coins: trending });
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

// const Home = () => {
//     const store = homeStore();

//     React.useEffect(() => {
//         store.fetchCoins();
//     }, []); // Run once on mount

//     return (
//         <div>
//             <input type="text" value={store.query} onChange={(e) => store.setQuery(e.target.value)} />
//             {store.coins.map(coin => (
//                 <div key={coin.id}>
//                     <img src={coin.image} alt={coin.name} />
//                     <p>{coin.name}</p>
//                     <p>ID: {coin.id}</p>
//                     <p>Price BTC: {coin.priceBtc}</p>
//                     <p>Price INR: {coin.priceInr}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

export default homeStore;
