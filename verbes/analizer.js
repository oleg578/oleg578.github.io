// Import necessary Node.js modules using ES module syntax
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url'; // Needed to get __dirname equivalent

/**
 * Extracts all unique verb infinitives and verbs from 'verbes_du_type'
 * from the provided JSON data structure.
 * @param {object} jsonData The parsed JSON data.
 * @returns {string[]} An array of unique verb strings.
 */
function getAllVerbs(jsonData) {
    const allVerbsSet = new Set();

    // Check if the main conjugation_groups key exists
    if (!jsonData || !jsonData.conjugation_groups || typeof jsonData.conjugation_groups !== 'object') {
        console.warn("Warning: 'conjugation_groups' not found or not an object in the JSON data.");
        return [];
    }

    for (const groupKey in jsonData.conjugation_groups) {
        // Ensure it's a property of the object itself, not from the prototype chain
        if (Object.prototype.hasOwnProperty.call(jsonData.conjugation_groups, groupKey)) {
            const group = jsonData.conjugation_groups[groupKey];

            if (group && group.verbs && Array.isArray(group.verbs)) {
                group.verbs.forEach(verb => {
                    // Add the main infinitive
                    if (verb && verb.infinitive && typeof verb.infinitive === 'string') {
                        allVerbsSet.add(verb.infinitive.trim());
                    }

                    // Add verbs from verbes_du_type
                    if (verb && verb.verbes_du_type && typeof verb.verbes_du_type === 'string') {
                        const relatedVerbsRaw = verb.verbes_du_type.trim();
                        if (relatedVerbsRaw.length > 0) { // Process only if not an empty string
                            const relatedVerbs = relatedVerbsRaw.split(',')
                                .map(v => v.trim()) // Trim whitespace from each part
                                .filter(v => v.length > 0); // Remove any empty strings

                            relatedVerbs.forEach(relatedVerb => {
                                allVerbsSet.add(relatedVerb);
                            });
                        }
                    }
                });
            } else {
                console.warn(`Warning: Verbs array missing or malformed in group '${groupKey}'.`);
            }
        }
    }

    return Array.from(allVerbsSet).sort(); // Return a sorted array for consistent output
}

/**
 * Main function to read the JSON file, process it, and print the results.
 */
function main() {
    // Get the directory name in ES module scope
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // Define the path to your JSON file.
    // This assumes 'french_verbes_3m-gr.json' is in the same directory as the script.
    const fileName = 'french_verbes_3m-gr.json';
    const filePath = path.join(__dirname, fileName);

    try {
        // Read the file content synchronously
        console.info(`Attempting to read file: ${filePath}`);
        const fileContent = fs.readFileSync(filePath, 'utf8');

        // Parse the JSON content
        console.info("File read successfully. Parsing JSON content...");
        const frenchVerbsData = JSON.parse(fileContent);
        console.info("JSON parsed successfully.");

        // Get the list of all unique verbs
        const uniqueVerbsList = getAllVerbs(frenchVerbsData);

        // Print the results
        if (uniqueVerbsList.length > 0) {
            //console.log("\n--- Unique Verbs List ---");
            uniqueVerbsList.forEach(verb => console.log(verb));
            console.info(`Total unique verbs found: ${uniqueVerbsList.length}`);
        } else {
            console.error("\nNo verbs found or extracted. Please check the JSON file structure and content.");
        }

    } catch (error) {
        console.error("\n--- An Error Occurred ---");
        if (error.code === 'ENOENT') {
            console.error(`Error: File not found at '${filePath}'.`);
            console.error(`Please ensure '${fileName}' is in the same directory as this script.`);
        } else if (error instanceof SyntaxError) {
            console.error(`Error: Could not parse JSON from '${fileName}'. The file might be corrupted or not valid JSON.`);
            console.error(`Details: ${error.message}`);
        } else {
            console.error("An unexpected error occurred:");
            console.error(error);
        }
    }
}

// Run the main function
main();