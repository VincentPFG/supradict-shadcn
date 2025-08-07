import { useSearchParams } from 'next/navigation'
import { Badge } from './ui/badge'

export function SearchResult() {
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''
  return (
    search && (
      <Badge variant='outline'>{search}</Badge>
    )
  )
}
