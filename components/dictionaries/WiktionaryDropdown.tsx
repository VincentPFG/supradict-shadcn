'use client'

import { useSearchParams } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

export function WiktionaryDropdown() {
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Wiktionary ▼</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <a
            href={`https://en.wiktionary.org/wiki/${search}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            English
          </a>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <a
            href={`https://es.wiktionary.org/wiki/${search}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            Spanish
          </a>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <a
            href={`https://fr.wiktionary.org/wiki/${search}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            French
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
