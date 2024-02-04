import React from 'react'
import { useData } from '../Context/DataContext';

const Summary = () => {

  const { data } = useData();

  console.log(data);
  

  return (
    <div>Summary</div>
  )
}

export default Summary