export function filterByLetters(names, letters, lettersPosition) {
  if (lettersPosition === 'starts-with') {
    return names.filter((name) => {
      return name.name
        .toUpperCase()
        .startsWith(letters.toUpperCase());
    });
  } else {
    return names.filter((name) => {
      return name.name.toUpperCase().endsWith(letters.toUpperCase());
    });
  }
}

export function filterBySyllable(names, numOfSyllables) {
  return names.filter((name) => {
    return name.syllables === numOfSyllables;
  });
}

export function range(size, startAt = 1) {
  return [...Array(size).keys()].map((i) => i + startAt);
}
