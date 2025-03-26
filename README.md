# quran-api
call any verse from quran by (chapter index : verse index)


API Endpoint format : GET http://localhost:3000/quran/Chapter_index/Verse_index


You can integrate the Quran API into your own project using JavaScript, Python, or any language that supports HTTP requests.

Get a Specific Verse :

Request: GET http://localhost:3000/quran/2/255
output :
{
    "chapter": "Al-Baqarah",
    "text": "Allah! There is no deity except Him, the Ever-Living, the Sustainer of existence."
}


Request: GET http://localhost:3000/quran/1/0
output :
{
    "chapter": "Al-Fatiha",
    "text": "In the name of Allah, the Most Gracious, the Most Merciful.\nPraise be to Allah, the Lord of all worlds."
}






***********overview**************

server.js :
sets up a simple Quran API using Express.js. It reads Quranic verses from a CSV file (quran.csv) and provides an API endpoint to retrieve specific verses based on chapter and verse numbers.

quran.cvs :
The quran.csv file stores Quranic verses in a comma-separated values (CSV) format. This file acts as a database for the API, allowing it to retrieve verses based on chapter and verse numbers.

QuranReader.js :
This Node.js script reads Quranic verses from a CSV file (quran.csv) and allows the user to search for a specific chapter and verse using the command line.
Takes user input for the chapter number and verse number via the terminal.



This API is deployed on Render.