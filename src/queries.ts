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
  name: string
  diameter: Number | undefined
  rotationPeriod: Number | undefined
  orbitalPeriod: Number | undefined
  gravity: string | undefined
  population: Number | undefined
  surfaceWater: Number | undefined
}

export type Species = {
  name: string
  classification: string | undefined
  designation: string | undefined
  language: string | undefined
  homeworld: Homeworld | undefined
}

export type Film = {
  title: string
  releaseDate: string
}

export type characterShort = {
  id: string
  hairColor: string
  skinColor: string
  name: string
  birthYear: string
  species: Species
  homeworld: Homeworld
}
export type characterFull = {
  id: string
  hairColor: string
  skinColor: string
  name: string
  birthYear: string
  species: Species
  homeworld: Homeworld
  filmConnection: {
    films: [Film]
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
