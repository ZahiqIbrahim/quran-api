/*const fs = require('fs');
const readline = require('readline');

const filePath = "\quran.csv";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Chapter No : ", (inputChapter) => {
    rl.question("Verse No : ", (inputVerse) => {
        inputChapter = parseInt(inputChapter);
        inputVerse = parseInt(inputVerse);
        
        rl.close();
        
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
                return;
            }

            const lines = data.split('\n');
            let found = false;
            
            for (let line of lines) {
                let parts = line.split(',', 5);
                if (parts.length < 5) continue;

                let chapterIndex = parseInt(parts[1].trim());
                let chapterName = parts[2].trim();
                let verseIndex = parseInt(parts[3].trim());
                let text = parts[4].trim();

                if (inputVerse === 0) {
                    if (chapterIndex === inputChapter && verseIndex === 1) {
                        console.log(`\n\n**${chapterName}**\n`);
                    }
                    if (chapterIndex === inputChapter) {
                        console.log(text.replace(/; /g, '\n'));
                    }
                    if (chapterIndex > inputChapter) {
                        found = true;
                        break;
                    }
                } else {
                    if (chapterIndex === inputChapter && verseIndex === inputVerse) {
                        console.log(`\n\n**${chapterName} (${chapterIndex}:${verseIndex})**\n`);
                        console.log(text.replace(/; /g, '\n'));
                        found = true;
                        break;
                    }
                }
            }
            
            if (!found) {
                console.log("Verse not found!");
            }
        });
    });
}); */
