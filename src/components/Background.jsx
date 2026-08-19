import styles from '../styles/Background.module.css'

export default function Background() {
  return (
    <div className={styles.background} aria-hidden="true">
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={styles.grid} />
    </div>
  )
}
