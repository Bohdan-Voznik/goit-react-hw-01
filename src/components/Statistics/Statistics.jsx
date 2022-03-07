import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { StatTitle } from 'components/StatTitle/StatTitle';
import { StatList } from 'components/StatList/StatList';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <StatTitle title={title} />
      <StatList stats={stats} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
