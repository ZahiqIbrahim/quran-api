const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;
const filePath = "quran.csv"; 

app.use(cors()); 
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
            let parts = line.match(/([^,]+),([^,]+),([^,]+),([^,]+),(.+)/);
            if (!parts || parts.length < 6) continue;

            let chapterIndex = parseInt(parts[2].trim());
            let chapterName = parts[3].trim();
            let verseIndex = parseInt(parts[4].trim());
            let text = parts[5].trim();  

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