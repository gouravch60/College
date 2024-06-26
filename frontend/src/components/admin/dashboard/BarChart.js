import React, { useEffect } from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getFeedbackCount } from '../../../state/actions/feedbackAction'; // Assuming this action is available

const BarChart = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFeedbackCount()) // Update to getFeedbackCount action
  }, [])

  const { loading, feedbackCount, error } = useSelector(globalState => globalState.feedbackCount) // Update to feedbackCount
  const data = feedbackCount ? feedbackCount.feedbackCount : []; // Update to feedbackCount

  return (
    <Container>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && data.length > 0 &&
        <RechartsBarChart width={600} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis label={{ value: 'Month wise data', angle: -90, position: 'insideLeft' }} /> {/* Display label for y-axis */}
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" name="Feedback Count" />
        </RechartsBarChart>
      }
      {data && data.length === 0 && <p>No data available</p>}
    </Container>
  );
};

export default BarChart;
