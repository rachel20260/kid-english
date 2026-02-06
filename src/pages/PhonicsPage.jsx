import { useMemo, useState } from 'react'
import phonicsData from '../data/phonics.json'

function randomQuestion(pool) {
  const target = pool[Math.floor(Math.random() * pool.length)]
  const options = [...pool]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map((item) => item.label)

  if (!options.includes(target.label)) {
    options[0] = target.label
  }

  return { target, options: options.sort(() => Math.random() - 0.5) }
}

function PhonicsPage({ onPronounce }) {
  const lessons = useMemo(() => [...phonicsData.vowels, ...phonicsData.blends], [])
  const [quiz, setQuiz] = useState(() => randomQuestion(lessons))
  const [feedback, setFeedback] = useState('')

  const checkAnswer = (choice) => {
    if (choice === quiz.target.label) {
      setFeedback('太棒了！答对了 🎉')
    } else {
      setFeedback(`再试一次，正确答案是 ${quiz.target.label}`)
    }
  }

  return (
    <section className="panel">
      <h2>🔤 自然拼读小关卡</h2>
      <p>先听音，再选正确字母/字母组合。</p>

      <article className="panel nested">
        <h3>关卡 1：听音选字母</h3>
        <p>提示音：{quiz.target.soundHint}</p>
        <div className="row">
          <button onClick={() => onPronounce(quiz.target.example)}>🔊 播放音频</button>
          <button
            onClick={() => {
              setQuiz(randomQuestion(lessons))
              setFeedback('')
            }}
          >
            下一题
          </button>
        </div>
        <div className="vocab-grid">
          {quiz.options.map((option) => (
            <button key={option} className="word-chip" onClick={() => checkAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
        {feedback ? <p className="feedback">{feedback}</p> : null}
      </article>

      <article className="panel nested">
        <h3>关卡 2：拼读跟读</h3>
        <p>点击卡片播放示例词，跟着读一读。</p>
        <div className="theme-grid">
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              className="theme-btn"
              onClick={() => onPronounce(`${lesson.label} ${lesson.example}`)}
            >
              {lesson.label} · {lesson.example}
            </button>
          ))}
        </div>
      </article>
    </section>
  )
}

export default PhonicsPage
