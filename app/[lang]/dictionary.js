import "server-only";
export async function getDictionary(locale) {
  if (locale === "en") {
    const englishModule = await import("./dictionaries/en");
    return englishModule.default;
  } else if (locale === "bn") {
    const bengaliModule = await import("./dictionaries/bn.json");
    return bengaliModule.default;
  } else {
    const englishModule = await import("./dictionaries/en");
    return englishModule.default;
  }
}
