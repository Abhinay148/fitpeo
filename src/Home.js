import React,{useState} from "react";
import logo from './logo.svg'
import { RiMoneyDollarCircleLine, RiListOrdered2,RiMoneyCnyBoxFill,RiShoppingBagFill}from 'react-icons/ri'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,PieChart, Pie, Sector } from 'recharts';
function Home(){


  const [selectedInterval, setSelectedInterval] = useState("Monthly");
    const data = [
        {
          name: 'Jan',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Feb',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Mar',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Apr',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Jun',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Jul',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Aug',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Sep',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Oct',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Nov',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Dec',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

      const intervals = ["Monthly", "Quarterly", "Yearly"];

  const handleIntervalChange = (e) => {
    setSelectedInterval(e.target.value);
  };
      const data1 = [
        { name: 'Group A', value: 500 },
        { name: 'Group B', value: 200 },
        { name: 'Group C', value: 300 },
      ];
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
      const onPieEnter = (data, index) => {
        // Handle pie chart hover events here
        // You can update the state or perform any other actions as needed
      };

    return(
        <main className="main-container">
            <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                  <RiMoneyDollarCircleLine className='card_icon'/>   
                </div>
                <div className="card-details">
                  <h3>Earning</h3>
                  <h1>$198k</h1>
                  <h5>37.8% this month</h5>
 	              </div>  
            </div>
            <div className='card'>
                <div className='card-inner'>
                  <RiListOrdered2 className='card_icon'/>   
                </div>
                <div className="card-details">
                  <h3>Orders</h3>
                  <h1>$2.4k</h1>
                  <h5>2% this month</h5>
 	              </div>  
            </div>
            <div className='card'>
                <div className='card-inner'>
                  <RiMoneyCnyBoxFill className='card_icon'/>   
                </div>
                <div className="card-details">
                  <h3>Balance</h3>
                  <h1>$2.4k</h1>
                  <h5>2% this month</h5>
 	              </div>  
            </div>
            <div className='card'>
                <div className='card-inner'>
                  <RiShoppingBagFill className='card_icon'/>   
                </div>
                <div className="card-details">
                  <h3>Total Sales</h3>
                  <h1>$89k</h1>
                  <h5>11% this week</h5>
 	              </div>  
            </div>
        </div>

        <div className="charts">
        <div className="bar-chart-box">
        <select className="interval" value={selectedInterval} onChange={handleIntervalChange}>
            {intervals.map((interval) => (
              <option key={interval} value={interval}>
                {interval}
              </option>
            ))}
          </select>
          <h3>Overview</h3>
          <h5>Monthly Earning</h5>
          
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <Bar dataKey="uv" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="pie-chart-box">
          <h3>Customers</h3>
          <h6>Customers that buy products</h6>
          <ResponsiveContainer width="100%" height={400}>
            <div className="round">
            <PieChart width={800} height={400} onMouseEnter={onPieEnter}>
              <Pie
                data={data1}
                cx={170}
                cy={170}
                innerRadius={90}
                outerRadius={110}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                 {data1.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
              </Pie>
               <text x={170} y={170} textAnchor="middle" dominantBaseline="middle">
                  <tspan fontSize="26" >65%</tspan>
                  <tspan fontSize="12" dy="1em">New Customers</tspan>
                </text>
            </PieChart>
            </div>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="table">
        <h3>Product Sell</h3>
        <div className="table-options">
        <div className="header-right">
                <form className='search'>
                    <input className='submit' type='search' placeholder='Search...'></input>
                </form>
          
          <select className="interval" value={selectedInterval} onChange={handleIntervalChange}>
            {intervals.map((interval) => (
              <option key={interval} value={interval}>
                {interval}
              </option>
            ))}
          </select>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Total Sales</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>
                <div class="product-info">
                  <div>
                  <img src={logo} alt="Product Image" width="50" height="50" /> 
                  </div>
                  <div className="info">
                  <h3>Product Name</h3>
                  <h6>Short Detail</h6>
                  </div>
                </div>
              </td>
              <td>32 in stock</td>
              <td>$45.99</td>
              <td>20</td>
          </tr>
          <tr>
              <td>
                <div class="product-info">
                  <div>
                  <img src={logo} alt="Product Image" width="50" height="50" /> 
                  </div>
                  <div className="info">
                  <h3>Product Name</h3>
                  <h6>Short Detail</h6>
                  </div>
                </div>
              </td>
              <td>32 in stock</td>
              <td>$45.99</td>
              <td>20</td>
          </tr>
          </tbody>
        </table>
      </div>

        </main>
    )
}

export default Home;