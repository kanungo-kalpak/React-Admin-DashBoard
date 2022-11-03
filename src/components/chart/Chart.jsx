import "./chart.scss"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
  {
    name: 'January',
    Cost: 40,
    Rev_generated: 20,
    amt: 24,
  },
  {
    name: 'February',
    Cost: 30,
    Rev_generated: 18,
    amt: 22,
  },
  {
    name: 'March',
    Cost: 50,
    Rev_generated:23,
    amt: 22,
  },
  {
    name: 'April',
    Cost: 30,
    Rev_generated:12,
    amt: 20,
  },
  {
    name: 'May',
    Cost: 30,
    Rev_generated:15,
    amt: 21,
  },
  {
    name: 'June',
    Cost: 40,
    Rev_generated: 25,
    amt: 25,
  },
];
const Chart = () => { 
  
  return <div className="chart"><div
  className="title">{"Last 6 Months(Revenue)"}
  </div>
  <div className="data_type">
    <h6>In lakhs</h6>
  </div>
<ResponsiveContainer width="100%" height="85%">
<BarChart width={730} height={50} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="Cost" fill="#8884d8" />
  <Bar dataKey="Rev_generated" fill="#82ca9d" />
</BarChart>
      </ResponsiveContainer>
      </div>
  };


  
     

export default Chart;
