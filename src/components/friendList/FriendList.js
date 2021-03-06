import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import s from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <>
      <h2>Список друзей</h2>
      <ul className={s.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
