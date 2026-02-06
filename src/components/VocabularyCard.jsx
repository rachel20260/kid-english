function VocabularyCard({ item, onPronounce, onMaster }) {
  return (
    <article className="panel vocab-detail">
      <h3>
        {item.emoji} {item.word}
      </h3>
      <p className="chinese">中文：{item.chinese}</p>
      <p>
        例句：{item.sentenceEn}
        <br />
        {item.sentenceZh}
      </p>
      <div className="row">
        <button onClick={() => onPronounce(item.word)}>🔊 播放发音</button>
        <button onClick={() => onMaster(item.id)}>✅ 我学会了</button>
      </div>
    </article>
  )
}

export default VocabularyCard
