const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = 3000;
const filePath = "quran.csv"; // Ensure this file is in the same directory

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

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

        for (let line of lines) {
            let parts = line.split(",", 5);
            if (parts.length < 5) continue;

            let chapterIndex = parseInt(parts[1].trim());
            let chapterName = parts[2].trim();
            let verseIndex = parseInt(parts[3].trim());
            let text = parts[4].trim();

            if (inputVerse === 0) {
                if (chapterIndex === inputChapter) {
                    if (verseIndex === 1) {
                        foundVerse = { chapter: chapterName, text: "" };
                    }
                    foundVerse.text += text.replace(/; /g, "\n") + "\n";
                }
            } else {
                if (chapterIndex === inputChapter && verseIndex === inputVerse) {
                    foundVerse = { chapter: chapterName, text: text.replace(/; /g, "\n") };
                    break;
                }
            }
        }

        if (foundVerse) {
            res.json(foundVerse);
        } else {
            res.status(404).json({ error: "Verse not found" });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Quran API is running on http://localhost:${port}`);
});