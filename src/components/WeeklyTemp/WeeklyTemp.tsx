import React, { useState, FC } from 'react';
import styles from './WeeklyTemp.module.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type TChartData = {
  name: string,
  temp: number,
}

type TTempChart = {
  chartData: Array<TChartData>
}

const TempChart: FC<TTempChart> = ({ chartData }) => {
  return (
    <ResponsiveContainer width='80%' height='100%'>
      <AreaChart
        data={chartData}
        margin={{
          top: 50,
          right: 50,
          left: 0,
          bottom: 50,
        }}
      >
      <defs>
        <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
          <stop offset="40%" stopColor="#CAD1DC" stopOpacity={1}/>
          <stop offset="95%" stopColor="#F5F8F7" stopOpacity={0}/>
        </linearGradient>
      </defs>
        <CartesianGrid 
          strokeDasharray="1 0"
          vertical={false}
        />
        <XAxis 
          dataKey="name"
          axisLine={false}
          tickLine={false}
          style={{
            fontSize: '18px',
            fontWeight: '500'
          }}
          dy={30}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          dx={-30}
          style={{
            fontSize: '18px',
            fontWeight: '500'
          }}
        />
        <Tooltip
          cursor={{ stroke: '#617BAE', strokeWidth: 3 }}
        />
        <Area 
          type="monotone" 
          dataKey="temp"
          stroke="#2B436F"
          activeDot={{ stroke: '#FFFFFF', fill: '#3169FC', strokeWidth: 4, r: 10}}
          strokeWidth={5}
          fillOpacity={1} 
          fill="url(#colorTemp)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

const WeeklyTemp = () => {
  const [chartData, setChartData] = useState([
    {
      name: 'Week 1',
      temp: 10,
    },
    {
      name: 'Week 2',
      temp: 15,
    },
    {
      name: 'Week 3',
      temp: 13,
    },
    {
      name: 'Week 4',
      temp: 23,
    },
    {
      name: 'Week 5',
      temp: 25,
    },
  ]);

  return (
    <section className={styles.weeklyTemp}>
      <h2 className={styles.weeklyTemp__title}>Average Weekly Temperature</h2>

      <div className={styles.chart}>
        <TempChart chartData={chartData} />
      </div>
    </section>
  )
}

export default WeeklyTemp