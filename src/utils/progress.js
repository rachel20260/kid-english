import { getTodayKey, getYesterdayKey } from './storage'

export function recordStudySession(progress) {
  const today = getTodayKey()
  if (progress.lastStudyDate === today) {
    return { ...progress, studyCount: progress.studyCount + 1 }
  }

  const isStreak = progress.lastStudyDate === getYesterdayKey()

  return {
    ...progress,
    studyCount: progress.studyCount + 1,
    streak: isStreak ? progress.streak + 1 : 1,
    lastStudyDate: today,
  }
}

export function markWordMastered(progress, wordId) {
  if (progress.masteredWords.includes(wordId)) return progress
  return { ...progress, masteredWords: [...progress.masteredWords, wordId] }
}
