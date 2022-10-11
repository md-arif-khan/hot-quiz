import React from 'react';
import {AreaChart,Tooltip ,ReferenceLine,Area, LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer} from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Chart = () => {
   const data =useLoaderData()
  const quiz=data.data;
    return (
        
    <div className='w-full mt-20'>
        <div className='ml-10 mr-20'>
        <ResponsiveContainer height={400} minWidth={200}>
    <LineChart  data={quiz}>
    <Line type="monotone" dataKey="total" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
  </ResponsiveContainer>
    </div>
    </div>
  
       
    );
};

export default Chart;