import { useEffect, useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import VocabularyPage from './pages/VocabularyPage'
import PhonicsPage from './pages/PhonicsPage'
import SentencesPage from './pages/SentencesPage'
import GamesPage from './pages/GamesPage'
import ParentPage from './pages/ParentPage'
import { loadProgress, saveProgress } from './utils/storage'
import { markWordMastered, recordStudySession } from './utils/progress'
import { speakText } from './utils/speech'

const pageTitle = {
  home: '首页',
  vocabulary: '词汇',
  phonics: '自然拼读',
  sentences: '句子',
  games: '小游戏',
  parent: '家长区',
}

function App() {
  const [page, setPage] = useState('home')
  const [progress, setProgress] = useState(() => loadProgress())

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  const goPage = (nextPage) => {
    setPage(nextPage)
    setProgress((prev) => recordStudySession(prev))
  }

  const handleMasterWord = (wordId) => {
    setProgress((prev) => markWordMastered(recordStudySession(prev), wordId))
  }

  const handlePronounce = (text) => {
    speakText(text)
    setProgress((prev) => recordStudySession(prev))
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <button className="back-btn" onClick={() => setPage('home')}>
          🏠 首页
        </button>
        <h2>{pageTitle[page]}</h2>
      </header>

      {page === 'home' ? <HomePage onNavigate={goPage} progress={progress} /> : null}
      {page === 'vocabulary' ? (
        <VocabularyPage onPronounce={handlePronounce} onMasterWord={handleMasterWord} />
      ) : null}
      {page === 'phonics' ? <PhonicsPage onPronounce={handlePronounce} /> : null}
      {page === 'sentences' ? <SentencesPage onPronounce={handlePronounce} /> : null}
      {page === 'games' ? <GamesPage onPronounce={handlePronounce} /> : null}
      {page === 'parent' ? <ParentPage /> : null}
    </main>
  )
}

export default App
