import { characterShort } from '@/queries'
import CharacterFace from './CharacterFace'
import CalendarIcon from './icons/Calendar'
import ChevronRightIcon from './icons/ChevronRight'
import Link from 'next/link'

const CharacterCard = ({ character }: { character: characterShort }) => {
  return (
    <Link href={`/${btoa(character.id)}`}>
      <div className="m-3 shadow-lg bg-white hover:bg-slate-100 rounded-xl flex ">
        <div>
          <CharacterFace
            skinColor={character.skinColor}
            hairColor={character.hairColor}
          />
        </div>
        <div className="p-4 flex-1">
          <h3 className="uppercase font-semibold text-xl pb-1">
            {character.name}
          </h3>
          <div className="grid grid-cols-2 text-slate-500">
            <div className="flex gap-1">
              <CalendarIcon className="size-5" />
              {character.birthYear}
            </div>
            <div className="flex gap-1">
              <span className="line-clamp-1">{character.homeworld.name}</span>
            </div>
          </div>
        </div>
        <button className="border-0 p-2  font-light text-slate-400 shrink-0 ">
          <ChevronRightIcon className="size-10" />
        </button>
      </div>
    </Link>
  )
}

export default CharacterCard
