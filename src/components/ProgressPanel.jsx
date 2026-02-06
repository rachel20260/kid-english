function ProgressPanel({ progress }) {
  return (
    <section className="panel">
      <h3>🌟 我的学习进度</h3>
      <div className="stats-grid">
        <div className="stat-card">
          <strong>{progress.studyCount}</strong>
          <span>学习次数</span>
        </div>
        <div className="stat-card">
          <strong>{progress.masteredWords.length}</strong>
          <span>已掌握词汇</span>
        </div>
        <div className="stat-card">
          <strong>{progress.streak}</strong>
          <span>连续学习天数</span>
        </div>
      </div>
    </section>
  )
}

export default ProgressPanel
