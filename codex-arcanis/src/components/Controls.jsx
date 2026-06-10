import styles from './Controls.module.css'

export default function Controls({ onFlip, onNext, onShuffle }) {
  return (
    <div className={styles.controls}>
      <button
        className={`${styles.iconBtn} ${styles.flip}`}
        onClick={onFlip}
        aria-label="Flip card"
      >
        <i className="ti ti-refresh" aria-hidden="true" />
        <span>Flip</span>
      </button>
      <button
        className={`${styles.iconBtn} ${styles.next}`}
        onClick={onNext}
        aria-label="Next card"
      >
        <i className="ti ti-arrow-right" aria-hidden="true" />
        <span>Next</span>
      </button>
      <button
        className={`${styles.iconBtn} ${styles.shuffle}`}
        onClick={onShuffle}
        aria-label="Shuffle deck"
      >
        <i className="ti ti-arrows-shuffle" aria-hidden="true" />
        <span>Shuffle</span>
      </button>
    </div>
  )
}
