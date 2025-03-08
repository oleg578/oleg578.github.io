function parseFrenchTime(phrase) {
    return new Promise((resolve, reject) => {
        try {
            // Convert to lowercase and remove extra spaces
            phrase = phrase.toLowerCase().trim();

            // French number words (0-59 for minutes, 0-23 for hours)
            const frenchNumbers = {
                "zéro": 0, "zero": 0, "un": 1, "une": 1, "deux": 2, "trois": 3, "quatre": 4,
                "cinq": 5, "six": 6, "sept": 7, "huit": 8, "neuf": 9, "dix": 10,
                "onze": 11, "douze": 12, "treize": 13, "quatorze": 14, "quinze": 15,
                "seize": 16, "dix-sept": 17, "dix-huit": 18, "dix-neuf": 19, "vingt": 20,
                "vingt-et-un": 21, "vingt-deux": 22, "vingt-trois": 23, "vingt-quatre": 24,
                "vingt-cinq": 25, "vingt-six": 26, "vingt-sept": 27, "vingt-huit": 28,
                "vingt-neuf": 29, "trente": 30, "trente-et-un": 31, "trente-deux": 32,
                "trente-trois": 33, "trente-quatre": 34, "trente-cinq": 35, "trente-six": 36,
                "trente-sept": 37, "trente-huit": 38, "trente-neuf": 39, "quarante": 40,
                "quarante-et-un": 41, "quarante-deux": 42, "quarante-trois": 43,
                "quarante-quatre": 44, "quarante-cinq": 45, "quarante-six": 46,
                "quarante-sept": 47, "quarante-huit": 48, "quarante-neuf": 49, "cinquante": 50,
                "cinquante-et-un": 51, "cinquante-deux": 52, "cinquante-trois": 53,
                "cinquante-quatre": 54, "cinquante-cinq": 55, "cinquante-six": 56,
                "cinquante-sept": 57, "cinquante-huit": 58, "cinquante-neuf": 59
            };

            // Special time words
            const specialTimes = {
                "midi": { hour: 12, minute: 0 },
                "minuit": { hour: 0, minute: 0 }
            };

            // Handle special cases first (midi, minuit)
            if (specialTimes[phrase]) {
                return resolve(specialTimes[phrase]);
            }

            // Regular expression for different patterns
            const fullPattern = /(?:il est )?(moins le quart|quart|demi)?\s*(\d{1,2}|\w+(?:-\w+)*)(?:\s*heure[s]?\s*|\s*h\s*)?(?:(\d{2}|\w+(?:-\w+)*)|quart|demi)?/;
            const match = phrase.match(fullPattern);

            if (!match) {
                return reject(new Error("Invalid French time format"));
            }

            let hour, minute = 0;
            const [, modifier, hourStr, minuteStr] = match;

            // Parse hour (could be number or word)
            if (frenchNumbers[hourStr] !== undefined) {
                hour = frenchNumbers[hourStr];
            } else {
                hour = parseInt(hourStr);
                if (isNaN(hour)) {
                    return reject(new Error("Invalid hour format"));
                }
            }

            // Handle minutes
            if (minuteStr) {
                if (minuteStr === "quart") {
                    minute = 15;
                } else if (minuteStr === "demi") {
                    minute = 30;
                } else if (frenchNumbers[minuteStr] !== undefined) {
                    minute = frenchNumbers[minuteStr];
                } else {
                    minute = parseInt(minuteStr);
                    if (isNaN(minute)) {
                        return reject(new Error("Invalid minute format"));
                    }
                }
            }

            // Handle "moins le quart" (quarter to the next hour)
            if (modifier === "moins le quart") {
                minute = 45;
                hour = (hour - 1) % 24; // Previous hour, wrapping at 24
            } else if (modifier === "quart") {
                minute = 15;
            } else if (modifier === "demi") {
                minute = 30;
            }

            // Validate ranges
            if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
                return reject(new Error("Time values out of range"));
            }

            resolve({ hour, minute });
        } catch (error) {
            reject(error);
        }
    });
}