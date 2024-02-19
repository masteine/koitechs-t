export function calculateLanguagesStatistic(
  languageStats: Record<string, number>[]
) {
  const totalBytesPerLanguage: Record<string, number> = languageStats.reduce(
    (acc, repo) => {
      Object.entries(repo).forEach(([language, bytes]) => {
        if (acc[language]) {
          acc[language] += bytes;
        } else {
          acc[language] = bytes;
        }
      });
      return acc;
    },
    {}
  );

  const totalBytes = Object.values(totalBytesPerLanguage).reduce(
    (acc, bytes) => acc + bytes,
    0
  );

  const percentages: Record<string, number> = {};

  Object.entries(totalBytesPerLanguage).forEach(([language, bytes]) => {
    percentages[language] = Number(((bytes / totalBytes) * 100).toFixed(2));
  });

  return percentages;
}
