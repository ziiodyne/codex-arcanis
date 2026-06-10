import styles from './Flashcard.module.css'

const TYPE_META = {
  monster: { badge: styles.badgeMonster, icon: 'ti-skull', label: 'Monster' },
  spell:   { badge: styles.badgeSpell,   icon: 'ti-wand',  label: 'Spell' },
  deity:   { badge: styles.badgeDeity,   icon: 'ti-sun',   label: 'Deity' },
  plane:   { badge: styles.badgePlane,   icon: 'ti-universe', label: 'Plane' },
  item:    { badge: styles.badgeItem,    icon: 'ti-sword', label: 'Item' },
}

export default function Flashcard({ card, isFlipped, onFlip }) {
  const meta = TYPE_META[card.type] || TYPE_META.monster

  return (
    <div className={styles.scene} onClick={onFlip}>
      <div className={`${styles.inner} ${isFlipped ? styles.flipped : ''}`}>
        <div className={`${styles.face} ${styles.front}`}>
          <span className={`${styles.badge} ${meta.badge}`}>
            <i className={`ti ${meta.icon}`} aria-hidden="true" />
            {meta.label}
          </span>
          <div className={styles.question}>{card.question}</div>
          <div className={styles.hint}>Tap card to reveal answer</div>
        </div>
        <div className={`${styles.face} ${styles.back}`}>
          <div className={styles.answerLabel}>Answer</div>
          <div className={styles.answer}>{card.answer}</div>
        </div>
      </div>
    </div>
  )
}
