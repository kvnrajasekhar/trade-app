import React from 'react'
import { useParams } from 'react-router-dom'
import showStore from '../stores/showStore'
import {Area,AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Show() {
    const store = showStore()
    const params = useParams()
    React.useEffect(() => {
        store.fetchData(params.id);
    }, [])

      if (!store.data) return <> <div> Loading......</div> </>;
    return (
        <div>
            <header>
                <img src={store.data.image.large} alt= ""/>
                <h2>
                    {store.data.name} ({store.data.symbol})
                </h2>
            </header>
            <AreaChart
                width={500}
                height={300}
                data={store.graphData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>

            <div>
                <h4>Market kap rank</h4>
                <span>${store.data.market_cap_rank}</span>
            </div>
            <div>
                <h4>24 high </h4>
                <span>${store.data.market_data.high_24h.inr}</span>
            </div>
            <div>
                <h4>24 low</h4>
                <span>${store.data.market_data.low_24h.inr}</span>
            </div>
            <div>
                <h4>Circulating Supply</h4>
                <span>${store.data.market_data.current_price.inr}</span>
            </div>
            <div>
                <h4>1Y change</h4>
                <span>${store.data.market_data.price_change_percentage_1y.toFixed(2)}%</span>
            </div>
        </div>

    );
}