'use client'

export const dynamic = 'force-dynamic'

import { useSuspenseQuery } from '@apollo/client'
import { allCharacters, characterShort } from '../queries'
import CharacterCard from '../components/CharacterCard'
import { useState } from 'react'

export default function PollPage() {
  const { data }: { data: { allPeople: { people: [characterShort] } } } =
    useSuspenseQuery(allCharacters)

  const [searchQuery, setSearchQuery] = useState('')
  const [sortAscending, setSortAscending] = useState(true)

  return (
    <div>
      <div className="w-full p-3">
        <input
          className="w-full rounded-xl p-4 uppercase shadow-lg font-semibold text-xl placeholder:font-normal placeholder:text-base placeholder:normal-case focus:outline-none  focus:ring-slate-400 focus:ring-2"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex px-3 py-1 text-lg font-semibold text-slate-500">
        <div className="flex-1 ">Sort</div>
        <button
          className="cursor-pointer"
          onClick={() => setSortAscending(!sortAscending)}>
          Name {sortAscending ? '↓' : '↑'}
        </button>
      </div>
      <div className="">
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
      </div>
    </div>
  )
}
