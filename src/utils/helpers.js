// Trim words
export const truncate = (character) =>
  character.length > 60 ? `${character.substring(0, 60)}...` : character;
