import PropTypes from 'prop-types';
import { StatItem } from 'components/Statistics/StatList/StatItem/StatItem';
import css from './StatList.module.css';

export const StatList = ({ stats }) => {
  return (
    <ul className={css.stat_list}>
      {stats.map(({ id, label, percentage }) => {
        return <StatItem key={id} label={label} percentage={percentage} />;
      })}
    </ul>
  );
};

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
