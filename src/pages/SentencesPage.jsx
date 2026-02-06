import { useState } from 'react'
import sentences from '../data/sentences.json'

function SentencesPage({ onPronounce }) {
  const [showChinese, setShowChinese] = useState(true)

  return (
    <section className="panel">
      <h2>💬 每日 5 句</h2>
      <button className="theme-btn" onClick={() => setShowChinese((prev) => !prev)}>
        {showChinese ? '切换到仅英文' : '切换到双语'}
      </button>

      <div className="sentence-list">
        {sentences.map((item) => (
          <article key={item.id} className="panel nested">
            <p className="sentence-en">{item.en}</p>
            {showChinese ? <p className="sentence-zh">{item.zh}</p> : null}
            <button onClick={() => onPronounce(item.en)}>🔊 跟读提示</button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SentencesPage
