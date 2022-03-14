import PropTypes from 'prop-types';
import css from './StatItem.module.css';

export const StatItem = ({ label, percentage }) => {
  return (
    <li className={`${css.item} ${css[label.replace('.', '')]}`}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{`${percentage}%`}</span>
    </li>
  );
};

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
