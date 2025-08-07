'use client'

import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'

export function MerriamWebster() {
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''

  return (
    <Button asChild>
      <a
        href={`https://www.merriam-webster.com/dictionary/${search}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        Merriam-Webster
      </a>
    </Button>
  )
}
