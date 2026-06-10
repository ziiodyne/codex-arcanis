import styles from './Header.module.css'

export default function Header({ title, description, total }) {
  return (
    <header className={styles.header}>
      <div className={styles.runes}>
        <span>&#10070;</span>
        <span>&#10070;</span>
        <span>&#10070;</span>
      </div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.sub}>Dungeons &amp; Dragons Lore Flashcards</p>
      <p className={styles.description}>{description}</p>
      <div className={styles.count}>
        <i className="ti ti-cards" aria-hidden="true" /> {total} cards in this codex
      </div>
    </header>
  )
}
