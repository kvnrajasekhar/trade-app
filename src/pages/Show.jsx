import React from 'react'
import { useParams } from 'react-router-dom'
import showStore from '../stores/showStore'
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Show() {
    const store = showStore()
    const params = useParams()
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        const fetchData = async () => {
            await store.fetchData(params.id);
            setLoading(false);
        }
        fetchData();
    }, [params.id, store])
    if (loading) return <div> Loading......</div>;
    return (
        <div>
            <header className='show-header'>
                <img src={store.dataRes.data.image.large} alt="crypto-logo" />
                <h2>
                    {store.dataRes.data.name} ({store.dataRes.data.symbol})
                </h2>
            </header>
            <div className='width'>
                <div className='show-graph' >
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
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
                    </ResponsiveContainer>
                </div>
            </div>
            <div className='show-details'>
                <h2>Details</h2>
                <div className='show-details-row'>
                    <h3>Market kap rank</h3>
                    <span>${store.dataRes.data.market_cap_rank}</span>
                </div>
                <div className='show-details-row'>
                    <h3>24 high </h3>
                    <span>${store.dataRes.data.market_data.high_24h.inr}</span>
                </div>
                <div className='show-details-row'>
                    <h3>24 low</h3>
                    <span>${store.dataRes.data.market_data.low_24h.inr}</span>
                </div>
                <div className='show-details-row'>
                    <h3>Circulating Supply</h3>
                    <span>${store.dataRes.data.market_data.current_price.inr}</span>
                </div>
                <div className='show-details-row'>
                    <h3>1Y change</h3>
                    <span>${store.dataRes.data.market_data.price_change_percentage_1y.toFixed(2)}%</span>
                </div>
            </div>
        </div>
    );
}