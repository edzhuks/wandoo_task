const CharacterFace = ({
  skinColor,
  hairColor,
}: {
  skinColor: String
  hairColor: String
}) => {
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
        className="rounded-full w-14 h-16 absolute"
        style={{ backgroundColor: `${skinColor}` }}
      />
      {skinColor2 && (
        <div
          className="rounded-l-full rounded-r-none w-7 h-16 absolute left-3"
          style={{ backgroundColor: `${skinColor2}` }}
        />
      )}
      <div className="h-16 w-14 absolute">
        <div
          className="rounded-full w-14 h-6  rounded-t-full rounded-b-none"
          style={{ backgroundColor: `${hairColor}` }}
        />
      </div>
    </div>
  )
}
export default CharacterFace
