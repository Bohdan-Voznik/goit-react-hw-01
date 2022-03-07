import PropTypes from 'prop-types';
import css from './FriendItem.module.css';

export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={`${css.status} ${isOnline ? css.status_online : ''}`}
      ></span>
      <img
        className={css.avatar}
        src={avatar}
        alt={`${name} avatar`}
        width="70"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
