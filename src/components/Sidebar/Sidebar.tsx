import {Home,Search,Bell,  MessageSquare,List,Bookmark,Users,User,MoreHorizontal,} from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./sidebar.module.css"; // Import styles object
import profileImage from "../../assets/profile-image.jpg";

const navItems = [
  { id: 1, title: "Home", icon: Home, path: "/home" },
  { id: 2, title: "Explore", icon: Search, path: "/explore" },
  { id: 3, title: "Notifications", icon: Bell, path: "/notifications" },
  { id: 4, title: "Messages", icon: MessageSquare, path: "/messages" },
  { id: 5, title: "Lists", icon: List, path: "/lists" },
  { id: 6, title: "Bookmarks", icon: Bookmark, path: "/bookmarks" },
  { id: 7, title: "Communities", icon: Users, path: "/communities" },
  { id: 8, title: "Profile", icon: User, path: "/profile" },
  { id: 9, title: "More", icon: MoreHorizontal, path: "/more" },
];

const Sidebar = () => {
  return (
   <aside className={styles.sidebar} role="navigation" aria-label="Main navigation">
  
  <header className={styles.sidebarHeader}>
    <h1 >
      <Link className={styles.logo} to="/" aria-label="Go to homepage">
      X
      </Link>
    </h1>
  </header>

  <nav>
    <ul className={styles.navList}>
      {navItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <li key={item.id} className={styles.navItem}>
            <Link to={item.path} className={styles.navLink}>
              <IconComponent className={styles.navIcon} />
              <div >{item.title}</div>
            </Link>
          </li>
        );
      })}
    </ul>

    <button className={styles.postBtn} aria-label="Create a new post">
      Post
    </button>
  </nav>

  <footer className={styles.sidebarFooter}>

    <button className={styles.accountBtn} aria-label="Account menu">
      <img src={profileImage} alt="" className={styles.avatar} />
      
      <div className={styles.userInfo}>
        <div className={styles.username}>Mayar Yaser Qasrawi</div>
        <div className={styles.handle}>@MayarYaserQasrawi</div>
      </div>

      <div className={styles.moreIcon} aria-hidden="true">...</div>
    </button>

  </footer>
</aside>
  );
};

export default Sidebar;
