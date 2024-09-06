'use client'

export const dynamic = 'force-dynamic'

import { useSuspenseQuery } from '@apollo/client'
import { allCharacters, characterShort } from '../queries'
import CharacterCard from '../components/CharacterCard'
import { useState } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

export default function PollPage() {
  const { data }: { data: { allPeople: { people: [characterShort] } } } =
    useSuspenseQuery(allCharacters)

  const searchParams = useSearchParams()

  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('search') || ''
  )
  const [sortAscending, setSortAscending] = useState(
    searchParams.get('sortOrder') !== 'desc'
  )

  const pathname = usePathname()
  const router = useRouter()

  return (
    <div>
      <div className="w-full p-3">
        <input
          className="w-full rounded-xl p-4 uppercase shadow-lg font-semibold text-xl placeholder:font-normal placeholder:text-base placeholder:normal-case focus:outline-none  focus:ring-slate-400 focus:ring-2"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
            router.replace(
              `${pathname}?search=${e.target.value}&sortOrder=${sortAscending}`,
              {
                scroll: false,
              }
            )
          }}
        />
      </div>
      <div className="flex px-3 py-1 text-lg font-semibold text-slate-500">
        <div className="flex-1 ">Sort</div>
        <button
          className="cursor-pointer"
          onClick={() => {
            setSortAscending(!sortAscending)
            router.replace(
              `${pathname}?search=${searchQuery}&sortOrder=${!sortAscending}`,
              {
                scroll: false,
              }
            )
          }}>
          Name {sortAscending ? '↓' : '↑'}
        </button>
      </div>
      <ul role="list">
        {data.allPeople.people
          .filter((p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .sort(
            (a, b) => a.name.localeCompare(b.name) * (sortAscending ? 1 : -1)
          )

          .map((p) => (
            <CharacterCard
              character={p}
              key={p.name}
            />
          ))}
      </ul>
    </div>
  )
}
