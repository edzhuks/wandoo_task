'use client'

export const dynamic = 'force-dynamic'

import { useSuspenseQuery } from '@apollo/client'
import { allCharacters } from '../queries'

export default function PollPage() {
  const { data } = useSuspenseQuery(allCharacters)

  return <div>{data.allPeople.people[0].name}</div>
}
