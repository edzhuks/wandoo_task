'use client'

export const dynamic = 'force-dynamic'

import { gql, useSuspenseQuery } from '@apollo/client'

const query = gql`
  query {
    allFilms {
      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
    }
  }
`

export default function PollPage() {
  const { data } = useSuspenseQuery(query)

  return <div>{data.allFilms.films[0].title}</div>
}
