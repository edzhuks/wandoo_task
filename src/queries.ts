import { gql } from '@apollo/client'

export const allCharacters = gql`
  query {
    allPeople {
      people {
        hairColor
        skinColor
        name
        birthYear
        species {
          name
        }
        homeworld {
          name
        }
      }
    }
  }
`

export const characterDetails = gql`
  query ($id: ID) {
    person(id: $id) {
      hairColor
      skinColor
      name
      birthYear
      species {
        name
        classification
        designation
        language
        homeworld {
          name
        }
      }
      homeworld {
        name
        diameter
        rotationPeriod
        orbitalPeriod
        gravity
        population
        surfaceWater
      }
      filmConnection {
        films {
          title
          releaseDate
        }
      }
    }
  }
`

// export default { allCharacters, characterDetails }
