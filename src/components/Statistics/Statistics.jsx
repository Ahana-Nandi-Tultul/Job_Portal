import React from 'react';
import { 
    Area, 
    AreaChart, 
    CartesianGrid, 
    ResponsiveContainer, 
    Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const data = [
        {
            id: 1,
            assignment: 'Assignment 1',
            mark: 29
        },
        {
            id: 2,
            assignment: 'Assignment 2',
            mark: 29
        },
        {
            id: 3,
            assignment: 'Assignment 3',
            mark: 30
        },
        {
            id: 4,
            assignment: 'Assignment 4',
            mark: 30
        },
        {
            id: 5,
            assignment: 'Assignment 5',
            mark: 30
        },
        {
            id: 6,
            assignment: 'Assignment 6',
            mark: 30
        },
        {
            id: 7,
            assignment: 'Assignment 6',
            mark: 30
        }
    ]
    return (
        <div className='w-full'>
            <h2 className='text-4xl text-center my-8'>Statistics of Assignments marks:</h2>
            <ResponsiveContainer width="90%" height={400} className={"mx-auto"}>
                <AreaChart data={data}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="assignment" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="mark" stroke="#8884d8" fillOpacity={1}/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;