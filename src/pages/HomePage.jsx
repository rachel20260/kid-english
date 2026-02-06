import HomeNav from '../components/HomeNav'
import ProgressPanel from '../components/ProgressPanel'

function HomePage({ onNavigate, progress }) {
  return (
    <>
      <section className="hero panel">
        <h1>🐯 儿童英语乐园</h1>
        <p>给 6 岁小朋友的英语启蒙，每天轻松学一点。</p>
      </section>
      <HomeNav onNavigate={onNavigate} />
      <ProgressPanel progress={progress} />
    </>
  )
}

export default HomePage
