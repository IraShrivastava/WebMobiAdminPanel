import Navbar from "./Navbar/Navbar";
import PageContent from "./PageContent/PageContent";
import styles from "./AdminDashboard.module.css";

function AdminDashboard() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.page}>
        <PageContent />
      </div>
    </div>
  );
}

export default AdminDashboard;
