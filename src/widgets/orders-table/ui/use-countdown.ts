import { useTimer } from "react-timer-hook"
import { useState } from "react"

export const useCountdown = (
  createdAt: string,
  approveTimeLimit: string,
  isOpen: boolean,
) => {
  const storageKey = `deadline_${createdAt}`
  const expiredKey = `expired_${createdAt}`

  const [expiryTimestamp] = useState<Date>(() => {
    if (localStorage.getItem(expiredKey) === "true") return new Date(0)

    const saved = localStorage.getItem(storageKey)
    if (saved && Number(saved) > Date.now()) return new Date(Number(saved))

    const duration = new Date(approveTimeLimit).getTime() - new Date(createdAt).getTime()
    const deadline = Date.now() + duration
    localStorage.setItem(storageKey, String(deadline))
    return new Date(deadline)
  })

  const [isExpired, setIsExpired] = useState<boolean>(
    () => localStorage.getItem(expiredKey) === "true"
  )

  const { hours, minutes, seconds } = useTimer({
    expiryTimestamp,
    autoStart: isOpen && !isExpired,
    onExpire: () => {
      localStorage.setItem(expiredKey, "true")
      localStorage.removeItem(storageKey)
      setIsExpired(true)
    },
  })

  return { hours, minutes, seconds, isExpired }
}