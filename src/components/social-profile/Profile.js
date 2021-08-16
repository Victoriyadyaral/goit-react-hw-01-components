import PropTypes from "prop-types";
import defaultImage from "./default/default-image.jpg";
import s from "./Profile.module.css";

function Profile({ avatar = defaultImage, name, tag, location, stats }) {
  return (
    <>
      <h2>Профиль социальной сети</h2>
      <div className={s.profile}>
        <div className={s.description}>
          <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
          <p className={s.name}>{name}</p>
          <p className={s.tag}>@{tag}</p>
          <p className={s.location}>{location}</p>
        </div>

        <ul className={s.stats}>
          <li className={s.statsItem}>
            <span className={s.label}>Followers</span>
            <span className={s.quantity}>{stats.followers}</span>
          </li>
          <li className={s.statsItem}>
            <span className={s.label}>Views</span>
            <span className={s.quantity}>{stats.views}</span>
          </li>
          <li className={s.statsItem}>
            <span className={s.label}>Likes</span>
            <span className={s.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
