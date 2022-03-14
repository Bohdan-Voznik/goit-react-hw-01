import PropTypes from 'prop-types';
import css from './Profile.module.css';
import { Description } from 'components/Profile/Description/Description';
import { Stats } from 'components/Profile/Stats/Stats';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <div className={css.profile}>
      <Description
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
      />
      <Stats stats={stats} />
    </div>
  );
};

Profile.protoType = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
