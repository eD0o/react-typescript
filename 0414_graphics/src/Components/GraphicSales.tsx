import React from 'react';
import { ISale } from '../Context/DataContext';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

type SaleDay = {
  data: string;
  pago: number;
  processando: number;
  falha: number
}

function transformData(data: ISale[]): SaleDay[] {

  const days = data.reduce((acc: { [key: string]: SaleDay }, item) => {
    const day = item.data.split(' ')[0];

    if (!acc[day]) {
      acc[day] = {
        data: day,
        pago: 0,
        processando: 0,
        falha: 0
      }
    }
    acc[day][item.status] += item.preco;
    return acc
  }, {})

  console.log(days);

  return Object.values(days).map(day => ({ ...day, data: day.data.substring(5) }))
}

const GraphicSales = ({ data }: { data: ISale[] }) => {

  const transformedData = transformData(data);

  return (
    <ResponsiveContainer width={"99%"} height={400}>
      <LineChart width={400} height={400} data={transformedData}>
        <XAxis dataKey="data" />
        <YAxis></YAxis>
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={3} />
        <Line type="monotone" dataKey="processando" stroke="#FBCB21" strokeWidth={3} />
        <Line type="monotone" dataKey="falha" stroke="#000" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default GraphicSales