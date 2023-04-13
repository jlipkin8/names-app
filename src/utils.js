export function filterByLetter(names, letter) {
  return names.filter((name) => {
    return name.name.startsWith(letter.toUpperCase());
  });
}

export function filterBySyllable(names, numOfSyllables) {
  return names.filter((name) => {
    return name.syllables === numOfSyllables;
  });
}
