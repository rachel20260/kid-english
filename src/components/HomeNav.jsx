const modules = [
  { key: 'vocabulary', title: '词汇', emoji: '🧠' },
  { key: 'phonics', title: '自然拼读', emoji: '🔤' },
  { key: 'sentences', title: '句子', emoji: '💬' },
  { key: 'games', title: '小游戏', emoji: '🎮' },
  { key: 'parent', title: '家长区', emoji: '👨‍👩‍👦' },
]

function HomeNav({ onNavigate }) {
  return (
    <div className="home-nav-grid">
      {modules.map((module) => (
        <button
          key={module.key}
          className="big-nav-btn"
          onClick={() => onNavigate(module.key)}
        >
          <span className="emoji">{module.emoji}</span>
          <span>{module.title}</span>
        </button>
      ))}
    </div>
  )
}

export default HomeNav
