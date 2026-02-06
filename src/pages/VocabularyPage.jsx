import { useMemo, useState } from 'react'
import vocabularyData from '../data/vocabulary.json'
import VocabularyCard from '../components/VocabularyCard'

function VocabularyPage({ onPronounce, onMasterWord }) {
  const themes = useMemo(() => Object.entries(vocabularyData), [])
  const [activeTheme, setActiveTheme] = useState(themes[0][0])
  const [activeWord, setActiveWord] = useState(themes[0][1].items[0])

  const currentTheme = vocabularyData[activeTheme]

  return (
    <section className="panel">
      <h2>📚 词汇主题</h2>
      <div className="theme-grid">
        {themes.map(([key, theme]) => (
          <button
            key={key}
            className={key === activeTheme ? 'theme-btn active' : 'theme-btn'}
            onClick={() => {
              setActiveTheme(key)
              setActiveWord(theme.items[0])
            }}
          >
            {theme.emoji} {theme.label}
          </button>
        ))}
      </div>

      <div className="vocab-grid">
        {currentTheme.items.map((item) => (
          <button
            key={item.id}
            className={item.id === activeWord.id ? 'word-chip active' : 'word-chip'}
            onClick={() => setActiveWord(item)}
          >
            {item.emoji} {item.word}
          </button>
        ))}
      </div>

      <VocabularyCard
        item={activeWord}
        onPronounce={onPronounce}
        onMaster={onMasterWord}
      />
    </section>
  )
}

export default VocabularyPage
