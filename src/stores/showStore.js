import axios from "axios";
import { create } from 'zustand'

const showStore = create((set) => ({
    graphData: [],
    dataRes:[],

    fetchData: async (id) => {
        const [graphRes, dataRes] = await Promise.all([
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=121`),
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`)
        ]);

        const graphData = graphRes.data.prices.map((price) => {
            const [timestamp, p] = price;
            const date = new Date(timestamp).toLocaleDateString('en-IN')
            return {
                Date: date,
                Price: p,
            };
        });
        set({ graphData:graphData ,dataRes:dataRes})
        console.log(dataRes);
    },

}));

export default showStore;
