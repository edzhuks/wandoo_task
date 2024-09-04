'use client'

export const dynamic = 'force-dynamic'

import { useSuspenseQuery } from '@apollo/client'
import { allCharacters, characterShort } from '../queries'
import CharacterCard from './CharacterCard'

export default function PollPage() {
  const { data }: { data: { allPeople: { people: [characterShort] } } } =
    useSuspenseQuery(allCharacters)

  return (
    <div className="">
      {data.allPeople.people.map((p) => (
        <CharacterCard character={p} />
      ))}
    </div>
  )
}
