import PropTypes from "prop-types";
import s from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      {isOnline ? (
        <span className={s.statusGreen}></span>
      ) : (
        <span className={s.statusRed}></span>
      )}
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.oneOf([true, false]),
};

export default FriendListItem;
