'use client'

import { useEffect, useState } from 'react'

interface ClientOnlyEmojiProps {
  emoji: string
  fallback?: string
}

export function ClientOnlyEmoji({ emoji, fallback = '' }: ClientOnlyEmojiProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{fallback}</>
  }

  return <>{emoji}</>
}