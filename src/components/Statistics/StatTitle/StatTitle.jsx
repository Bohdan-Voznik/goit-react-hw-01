import PropTypes from 'prop-types';
import css from './StatTitle.module.css';

export const StatTitle = ({ title }) => {
  return <h2 className={css.title}>{title}</h2>;
};

StatTitle.propTypes = {
  title: PropTypes.string,
};
