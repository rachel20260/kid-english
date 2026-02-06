import { useMemo, useState } from 'react'
import vocabularyData from '../data/vocabulary.json'

function buildQuestion(words) {
  const target = words[Math.floor(Math.random() * words.length)]
  const options = [...words]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map((item) => item.chinese)

  if (!options.includes(target.chinese)) {
    options[0] = target.chinese
  }

  return { target, options: options.sort(() => Math.random() - 0.5) }
}

function GamesPage({ onPronounce }) {
  const words = useMemo(
    () => Object.values(vocabularyData).flatMap((theme) => theme.items),
    [],
  )
  const [question, setQuestion] = useState(() => buildQuestion(words))
  const [result, setResult] = useState('')

  const choose = (value) => {
    if (value === question.target.chinese) {
      setResult('答对啦！👏')
    } else {
      setResult(`再试试～ 正确答案：${question.target.chinese}`)
    }
  }

  return (
    <section className="panel">
      <h2>🎮 小游戏：看英文选中文</h2>
      <p className="sentence-en">{question.target.word}</p>
      <div className="row">
        <button onClick={() => onPronounce(question.target.word)}>🔊 听单词</button>
        <button
          onClick={() => {
            setQuestion(buildQuestion(words))
            setResult('')
          }}
        >
          下一题
        </button>
      </div>

      <div className="theme-grid">
        {question.options.map((option) => (
          <button key={option} className="theme-btn" onClick={() => choose(option)}>
            {option}
          </button>
        ))}
      </div>
      {result ? <p className="feedback">{result}</p> : null}
    </section>
  )
}

export default GamesPage
