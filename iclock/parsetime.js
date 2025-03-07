function parseFrenchTime(phrase) {
  return new Promise((resolve, reject) => {
    phrase = phrase.toLowerCase().trim();

    const timePattern =
      /(?:il est )?(\d{1,2})(?:\s*heure[s]?\s*|\s*h\s*)(\d{2})?|midi|minuit/;
    const match = phrase.match(timePattern);

    if (!match) {
      reject(new Error("Invalid French time format"));
      return;
    }

    let hour, minute = 0;

    // Handle special cases: "midi" (12:00) and "minuit" (00:00)
    if (match[0] === "midi") {
      hour = 12;
      minute = 0;
    } else if (match[0] === "minuit") {
      hour = 0;
      minute = 0;
    } else {
      // Extract hour and minute from regular time format
      hour = parseInt(match[1]);
      minute = match[2] ? parseInt(match[2]) : 0;

      // Validate ranges
      if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
        reject(new Error("Time values out of range"));
        return;
      }
    }
    resolve({ hour, minute });
  });
}
