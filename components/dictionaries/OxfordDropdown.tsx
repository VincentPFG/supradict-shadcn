'use client'

import { useSearchParams } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

export function OxfordDropdown() {
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='default'>
          Oxford ▼
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <a
            href={`https://www.oxfordlearnersdictionaries.com/definition/english/${search}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            English
          </a>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <a
            href={`https://www.oxfordlearnersdictionaries.com/definition/american_english/${search}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            American English
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
