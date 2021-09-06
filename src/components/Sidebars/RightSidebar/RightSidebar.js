import { IoNotificationsCircleSharp } from "react-icons/io5";
import { BiConversation } from "react-icons/bi";
import { RiSettings3Fill } from "react-icons/ri";

import styles from "./RightSidebar.module.css";

function ProfileAvatar() {

  const unreadProfileNotifications = true;

  return (
    <>
      <div className={styles.profileAvatarContainer}>
        <img
          src="https://media.altphotos.com/cache/images/2017/07/04/07/752/portrait-man-dark.jpg"
          className={styles.profileAvatar}
          alt="Avatar"
        />
      </div>
      {unreadProfileNotifications && <div className={styles.notificationDot}></div>}
    </>
  );
}

const IconNotifDot = () => <div className={styles.iconNotificationDot}></div>;


function RightIcons() {

  const iconNotifDots = {
    notif: true,
    messages: true,
    settings: false,
  }

  return (
    <div className={styles.iconsContainer}>
      <div>
        {iconNotifDots.notif && <IconNotifDot />}
        <IoNotificationsCircleSharp className={styles.iconStyles} />
      </div>
      <div>
        {iconNotifDots.messages && <IconNotifDot />}
        <BiConversation className={styles.iconStyles} />
      </div>
      <div>
        {iconNotifDots.settings && <IconNotifDot />}
        <RiSettings3Fill className={styles.iconStyles} />
      </div>
    </div>
  );
}

function RightSidebar() {
  return (
    <div className={styles.container}>
      <div>
        <ProfileAvatar />
      </div>
      <RightIcons />
    </div>
  );
}

export default RightSidebar;
