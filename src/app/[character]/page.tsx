'use client'

export const dynamic = 'force-dynamic'

import { useSuspenseQuery } from '@apollo/client'
import { characterDetails, characterFull, Film } from '../../queries'
import CharacterFace from '../../components/CharacterFace'
import CalendarIcon from '@/components/icons/Calendar'
import SpeciesIcon from '@/components/icons/Species'
import WorldIcon from '@/components/icons/World'

const Detail = ({
  label,
  text,
  unit,
}: {
  label: string
  text: string | undefined
  unit?: string | undefined
}) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-slate-500 "> {label} </span>
      <div
        className="flex-1 bg-slate-500 mt-1"
        style={{ height: '1px' }}></div>
      <span className="text-nowrap">{`${text || 'n/a'} ${unit || ''}`}</span>
    </div>
  )
}

const FilmCard = ({ film }: { film: Film }) => {
  return (
    <div className="m-3 shadow-lg bg-white rounded-xl p-4 flex">
      <h3 className="text-lg font-semibold flex-1">{film.title}</h3>
      <div className="text-slate-500">
        {film.releaseDate.replaceAll('-', '.')}
      </div>
    </div>
  )
}

export default function Page({ params }: { params: { character: string } }) {
  let id
  try {
    id = atob(params.character)
  } catch (e) {}
  const { data }: { data: { person: characterFull } } = useSuspenseQuery(
    characterDetails,
    { variables: { id: id } }
  )

  return (
    <div className="">
      <div className="m-3 shadow-lg bg-white rounded-xl flex h-20">
        <div>
          <CharacterFace
            hairColor={data.person.hairColor}
            skinColor={data.person.skinColor}
          />
        </div>
        <h2 className="p-4 text-2xl font-semibold uppercase self-center">
          {data.person.name}
        </h2>
      </div>
      <div className="m-3 shadow-lg bg-white rounded-xl p-4 text-lg flex items-center gap-3">
        <CalendarIcon className="size-10 text-slate-500" /> Born in the year
        <strong> {data.person.birthYear}</strong>
      </div>
      {data.person.species && (
        <div className="m-3 shadow-lg bg-white rounded-xl p-4">
          <div className="flex items-center gap-3">
            <SpeciesIcon className="size-10 text-slate-500" />
            <h3 className="text-xl font-semibold">
              {data.person.species.name}
            </h3>
          </div>
          <div className="flex mt-2 justify-between gap-4 flex-wrap">
            <div className="flex-1">
              <Detail
                label="designation"
                text={data.person.species.designation}
              />
              <Detail
                label="class"
                text={data.person.species.classification}
              />
            </div>
            <div className="flex-1">
              <Detail
                label="homeworld"
                text={data.person.species.homeworld?.name}
              />
              <Detail
                label="language"
                text={data.person.species.language}
              />
            </div>
          </div>
        </div>
      )}
      <div className="m-3 shadow-lg bg-white rounded-xl p-4">
        <div className="flex items-center gap-3">
          <WorldIcon className="size-10 text-slate-500" />
          <h3 className="text-xl font-semibold">
            {data.person.homeworld.name}
          </h3>
        </div>
        <div className="flex mt-2 justify-between gap-4">
          <div className="flex-1">
            <Detail
              label="population"
              text={data.person.homeworld.population?.toLocaleString()}
            />
            <Detail
              label="gravity"
              text={data.person.homeworld.gravity}
              unit="G"
            />
            <Detail
              label="diameter"
              text={data.person.homeworld.diameter?.toLocaleString()}
              unit="km"
            />
          </div>
          <div className="flex-1">
            <Detail
              label="day"
              text={data.person.homeworld.rotationPeriod?.toString()}
              unit="hours"
            />
            <Detail
              label="year"
              text={data.person.homeworld.orbitalPeriod?.toString()}
              unit="days"
            />
            <Detail
              label="water %"
              text={data.person.homeworld.surfaceWater?.toString()}
              unit="%"
            />
          </div>
        </div>
      </div>
      {data.person.filmConnection.films.map((film) => (
        <FilmCard film={film} />
      ))}
    </div>
  )
}
