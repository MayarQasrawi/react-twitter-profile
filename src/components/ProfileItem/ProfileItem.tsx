import { useState } from "react";
import styles from "./ProfileItem.module.css";

const ProfileItem = ({ item, ...rest }) => {
  // Track follow state internally
  const [isFollowing, setIsFollowing] = useState(item.isFollowing);

  const handleFollowClick = () => {
    const newState = !isFollowing;
    setIsFollowing(newState);
  };

  return (
    <section className={styles.profileItem} {...rest}>
      <div className={styles.profileInfo}>
        <img
          src={item.avatar}
          alt={`${item.displayName}'s avatar`}
          className={styles.avatar}
        />
        <div className={styles.userInfo}>
          <div className={styles.usernameContainer}>
            <span className={styles.username}>{item.displayName}</span>
            {item.verified && (
              <span className={styles.verificationBadge}>✓</span>
            )}
          </div>
          <div className={styles.handle}>@{item.username}</div>
        </div>
      </div>

      <button className={styles.followButton} onClick={handleFollowClick}>
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </section>
  );
};

export default ProfileItem;
