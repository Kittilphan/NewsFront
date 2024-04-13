import styles from "@/components/loading/styles.module.css";
export default function Loading() {
  return (
    <div className={styles["custom-loading-background"]}>
      <div className={styles["lds-dual-ring"]}></div>
    </div>
  );
}
