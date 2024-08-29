import './index.css';
import Sidebar from '../Sidebar';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell, } from 'recharts';



const data = [
    { name: '6/30/2024 - 7/6/2024', orders: 4, sales: 1404 },
    { name: '7/7/2024 - 7/13/2024', orders: 2, sales: 800 },
    { name: '7/21/2024 - 7/27/2024', orders: 2, sales: 500 },
];

const data2 = [
    { name: 'WooCommerce Store', value: 44.2 },
    { name: 'Shopify Store', value: 55.8 },
];
  
const COLORS = ['rgb(31, 196, 199)', 'rgb(243, 130, 149)'];


const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${data2[index].value}%`}
        </text>
    );
};


const Home = () => {

    return (
        <div className='home-bg'>
            <Sidebar />
            <div className='home-cont'>
                <div className='home-cont-top'>
                    <h2 className='top-head'>Dashboard</h2>
                </div>
                <div className='home-cont-bottom'>
                    <div className='home-cont-1'>
                        <div className='cont-1'>
                            <h1 className='bottom-head'>Sales vs Orders</h1>
                            <IoIosInformationCircleOutline className='cont-icon' />
                        </div>
                        <LineChart width={650} height={300} data={data}  margin={{top: 50, right: 30, left: 20, bottom: 5, }}> 
                            <CartesianGrid strokeDasharray="1 1" />
                            <XAxis dataKey="name" />
                            <YAxis yAxisId="left" />
                            <YAxis yAxisId="right" orientation="right" />
                            <Tooltip />
                            <Legend />
                            <Line yAxisId="left" type="monotone" dataKey="sales" stroke="rgb(31, 196, 199)" activeDot={{ r: 8 }} />
                            <Line yAxisId="right" type="monotone" dataKey="orders" stroke="Orange" activeDot={{ r: 8 }} />  
                        </LineChart>    
                    </div>
                    <div className='home-cont-2'>
                        <div className='cont-1'>
                            <h1 className='bottom-head'>Portion of Sales</h1>
                            <IoIosInformationCircleOutline className='cont-icon' />
                        </div>
                        <ResponsiveContainer width="100%" height={400}>
                            <PieChart>
                            <Pie
                                data={data2}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                fill="#8884d8"
                                label={renderCustomizedLabel}
                                labelLine={false}

                            >
                                {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )

}

export default Home