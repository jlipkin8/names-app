export function filterByLetters(names, letters) {
  return names.filter((name) => {
    return name.name.toUpperCase().startsWith(letters.toUpperCase());
  });
}

export function filterBySyllable(names, numOfSyllables) {
  return names.filter((name) => {
    return name.syllables === numOfSyllables;
  });
}
