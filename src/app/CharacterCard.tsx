import { characterShort } from '@/queries'

const CharacterFace = ({
  skinColor,
  hairColor,
}: {
  skinColor: String
  hairColor: String
}) => {
  console.log(skinColor)

  let skinColor2, skinColor3
  if (
    skinColor.includes(',') ||
    skinColor.includes(' ') ||
    skinColor.includes('-')
  ) {
    ;[skinColor, skinColor2, skinColor3] = skinColor.split(/, | |-/)
  }
  if (hairColor.includes(',')) {
    hairColor = hairColor.split(',')[0]
  }
  if (skinColor === 'fair') {
    skinColor = '#F3CFBB '
  } else if (skinColor === 'pale' || skinColor === 'light') {
    skinColor = '#F0DFD6'
  } else if (skinColor === 'metal') {
    skinColor = '#aaa9ad '
  } else if (skinColor === 'dark') {
    skinColor = '#6F4F1D '
  }

  if (hairColor === 'blond') {
    hairColor = '#faf0be  '
  } else if (hairColor === 'auburn') {
    hairColor = '#71231D'
  }
  if (skinColor === 'unknown') {
    skinColor = hairColor
  }
  return (
    <div className="bg-slate-400 bg-opacity-80 rounded-l-xl  w-20  p-3 h-full flex justify-center items-center relative">
      <div
        className="rounded-full w-14 h-16 absolute top-2"
        style={{ backgroundColor: `${skinColor}` }}
      />
      {skinColor2 && (
        <div
          className="rounded-l-full rounded-r-none w-7 h-16 absolute top-2 left-3"
          style={{ backgroundColor: `${skinColor2}` }}
        />
      )}
      <div
        className="rounded-full w-14 h-6 absolute top-2 rounded-t-full rounded-b-none"
        style={{ backgroundColor: `${hairColor}` }}
      />
    </div>
  )
}

const CharacterCard = ({ character }: { character: characterShort }) => {
  return (
    <div className="m-3 shadow-lg bg-white rounded-xl flex ">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5">
              <path
                fillRule="evenodd"
                d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z"
                clipRule="evenodd"
              />
            </svg>

            {character.birthYear}
          </div>

          <div className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5 ">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-1.503.204A6.5 6.5 0 1 1 7.95 3.83L6.927 5.62a1.453 1.453 0 0 0 1.91 2.02l.175-.087a.5.5 0 0 1 .224-.053h.146a.5.5 0 0 1 .447.724l-.028.055a.4.4 0 0 1-.357.221h-.502a2.26 2.26 0 0 0-1.88 1.006l-.044.066a2.099 2.099 0 0 0 1.085 3.156.58.58 0 0 1 .397.547v1.05a1.175 1.175 0 0 0 2.093.734l1.611-2.014c.192-.24.296-.536.296-.842 0-.316.128-.624.353-.85a1.363 1.363 0 0 0 .173-1.716l-.464-.696a.369.369 0 0 1 .527-.499l.343.257c.316.237.738.275 1.091.098a.586.586 0 0 1 .677.11l1.297 1.297Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="line-clamp-1">{character.homeworld.name}</span>
          </div>
        </div>
      </div>
      <button className="border-0 p-2  font-light text-slate-400 shrink-0 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-10">
          <path
            fillRule="evenodd"
            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}

export default CharacterCard
