import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsItem ,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <StatisticsList>
        <StatisticsItem >Good: {good} </StatisticsItem >
        <StatisticsItem >Neutral: {neutral} </StatisticsItem >
        <StatisticsItem >Bad: {bad} </StatisticsItem >
        <StatisticsItem >Total: {total} </StatisticsItem >
        <StatisticsItem >Percentage: {percentage} %</StatisticsItem >
      </StatisticsList>
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default Statistics;
