import { gql } from '@apollo/client'

export const allCharacters = gql`
  query {
    allPeople {
      people {
        id
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

export type Homeworld = {
  name: String
  diameter: Number | undefined
  rotationPeriod: Number | undefined
  orbitalPeriod: Number | undefined
  gravity: String | undefined
  population: Number | undefined
  surfaceWater: Number | undefined
}

export type Species = {
  name: String
  classification: String | undefined
  designation: String | undefined
  language: String | undefined
  homeworld: Homeworld | undefined
}

export type characterShort = {
  id: String
  hairColor: String
  skinColor: String
  name: String
  birthYear: String
  species: Species
  homeworld: Homeworld
  filmConnection: {
    films: [{ title: String; releaseDate: String }]
  }
}

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
