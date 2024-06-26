import React, { useEffect } from 'react';
import { PieChart as RechartsPieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getEnquiryCount } from '../../../state/actions/enquiryAction';

const PieChart = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getEnquiryCount())
  },[])

  let {loading,enquiryCount,error} = useSelector(globalState=>globalState.enquiryCount)
  let data=enquiryCount.enquiryCount;

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    data&&
    <Container>
      <RechartsPieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
        <Tooltip />
        <Legend />
      </RechartsPieChart>
    </Container>
  );
};

export default PieChart;
