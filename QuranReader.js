<<<<<<< HEAD
<<<<<<< HEAD
const fs = require('fs');
=======
=======
>>>>>>> 0b7cbdc (fixed bugs)
<<<<<<< HEAD
/*const fs = require('fs');
>>>>>>> 27f4fc2 (TEST)
const readline = require('readline');

=======
//const fs = require('fs');
//const readline = require('readline');
/*
>>>>>>> a6fa236 (TEST)
const filePath = "\quran.csv";
=======
const fs = require('fs');
const readline = require('readline');

const filePath = "quran.csv";
>>>>>>> 0c8d778 (fixed bugs)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Chapter No : ", (inputChapter) => {
    rl.question("Verse No : ", (inputVerse) => {
        inputChapter = parseInt(inputChapter);
        inputVerse = parseInt(inputVerse);
<<<<<<< HEAD
        
        rl.close();
        
=======

        rl.close();

>>>>>>> 0c8d778 (fixed bugs)
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
                return;
            }

            const lines = data.split('\n');
            let found = false;
<<<<<<< HEAD
            
            for (let line of lines) {
                let parts = line.split(',', 5);
                if (parts.length < 5) continue;

                let chapterIndex = parseInt(parts[1].trim());
                let chapterName = parts[2].trim();
                let verseIndex = parseInt(parts[3].trim());
                let text = parts[4].trim();
=======

            for (let line of lines) {
                // Use regex to match the correct CSV format
                let parts = line.match(/([^,]+),([^,]+),([^,]+),([^,]+),(.+)/);
                
                if (!parts || parts.length < 6) continue;

                let chapterIndex = parseInt(parts[2].trim());
                let chapterName = parts[3].trim();
                let verseIndex = parseInt(parts[4].trim());
                let text = parts[5].trim(); // Verse text (keeps commas intact)
>>>>>>> 0c8d778 (fixed bugs)

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
<<<<<<< HEAD
            
=======

>>>>>>> 0c8d778 (fixed bugs)
            if (!found) {
                console.log("Verse not found!");
            }
        });
    });
<<<<<<< HEAD
<<<<<<< HEAD
}); 
=======
=======
>>>>>>> 0b7cbdc (fixed bugs)
<<<<<<< HEAD
}); */
=======
});  */
>>>>>>> a6fa236 (TEST)
<<<<<<< HEAD
>>>>>>> 27f4fc2 (TEST)
=======
=======
});
>>>>>>> 0c8d778 (fixed bugs)
>>>>>>> 0b7cbdc (fixed bugs)
