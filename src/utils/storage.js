const STORAGE_KEY = 'kid-english-progress'

const defaultProgress = {
  studyCount: 0,
  masteredWords: [],
  streak: 0,
  lastStudyDate: null,
}

export function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultProgress
    return { ...defaultProgress, ...JSON.parse(raw) }
  } catch {
    return defaultProgress
  }
}

export function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

export function getTodayKey() {
  return new Date().toISOString().slice(0, 10)
}

export function getYesterdayKey() {
  const date = new Date()
  date.setDate(date.getDate() - 1)
  return date.toISOString().slice(0, 10)
}
