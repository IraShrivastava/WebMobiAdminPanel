import RightSidebar from "../Sidebars/RightSidebar/RightSidebar";
import LeftSidebar from "../Sidebars/LeftSidebar/LeftSidebar";
import AdminDashboard from "../AdminDashboard/AdminDashboard";

import styles from "./PageLayout.module.css";

function PageLayout() {
  return (
    <div className={styles.pageBody}>
      <div className={styles.leftSidebar}>
        <LeftSidebar />
      </div>
      <div>
        <AdminDashboard />
      </div>
      <div className={styles.rightSidebar}>
        <RightSidebar />
      </div>
    </div>
  );
}

export default PageLayout;
