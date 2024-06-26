import React, { useEffect } from 'react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getEnquiryCount } from '../../../state/actions/enquiryAction';

const LineChart = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getEnquiryCount())
  }, [])

  const { loading, enquiryCount, error } = useSelector(globalState => globalState.enquiryCount)
  const data = enquiryCount ? enquiryCount.enquiryCount : [];

  return (
    <Container>
      {data && data.length > 0 &&
        <RechartsLineChart width={400} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </RechartsLineChart>
      }
      {data && data.length === 0 && <p>No data available</p>}
    </Container>
  );
};

export default LineChart;
