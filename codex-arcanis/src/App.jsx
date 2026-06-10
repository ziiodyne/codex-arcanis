import { useState } from 'react'
import Header from './components/Header'
import Flashcard from './components/Flashcard'
import Controls from './components/Controls'
import cards, { cardSet } from './data/cards'
import styles from './App.module.css'

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const currentCard = cards[currentIndex]

  function handleFlip() {
    setIsFlipped(prev => !prev)
  }

  function handleNext() {
    let nextIndex = currentIndex
    while (nextIndex === currentIndex && cards.length > 1) {
      nextIndex = Math.floor(Math.random() * cards.length)
    }
    setCurrentIndex(nextIndex)
    setIsFlipped(false)
  }

  function handleShuffle() {
    const randomIndex = Math.floor(Math.random() * cards.length)
    setCurrentIndex(randomIndex)
    setIsFlipped(false)
  }

  return (
    <div className={styles.app}>
      <Header
        title={cardSet.title}
        description={cardSet.description}
        total={cards.length}
      />
      <Flashcard card={currentCard} isFlipped={isFlipped} onFlip={handleFlip} />
      <Controls
        onFlip={handleFlip}
        onNext={handleNext}
        onShuffle={handleShuffle}
      />
    </div>
  )
}
