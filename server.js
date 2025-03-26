const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;
const filePath = path.join(__dirname, "quran.csv");

const cors = require('cors');


if (!fs.existsSync(filePath)) {
    console.error("Error: quran.csv file not found.");
    process.exit(1);
}

// API Endpoint: Get a verse by chapter and verse number
app.get("/quran/:chapter/:verse", (req, res) => {
    const inputChapter = parseInt(req.params.chapter);
    const inputVerse = parseInt(req.params.verse);

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error reading file" });
        }

        const lines = data.split("\n");
        let foundVerse = null;
        let verses = [];

        for (let line of lines) {
            let parts = line.match(/([^,]+),([^,]+),([^,]+),([^,]+),(.+)/);
            if (!parts) continue;

            let chapterIndex = parseInt(parts[2].trim());
            let chapterName = parts[3].trim();
            let verseIndex = parseInt(parts[4].trim());
            let text = parts[5].trim();

            if (inputVerse === 0) {
                if (chapterIndex === inputChapter) {
                    if (!foundVerse) {
                        foundVerse = { chapter: chapterName, text: [] };
                    }
                    foundVerse.text.push(text.replace(/; /g, "\n"));
                }
            } else {
                if (chapterIndex === inputChapter && verseIndex === inputVerse) {
                    foundVerse = { chapter: chapterName, text: text.replace(/; /g, "\n") };
                    break;
                }
            }
        }

        if (foundVerse) {
            if (Array.isArray(foundVerse.text)) {
                foundVerse.text = foundVerse.text.join("\n");
            }
            res.json(foundVerse);
        } else {
            res.status(404).json({ error: "Verse not found" });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Quran API is running on port ${port}`);
});