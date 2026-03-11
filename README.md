# 📖 Quran API

A lightweight REST API built with **Node.js** and **Express.js** that lets you retrieve any verse from the Quran by chapter and verse index. Verse data is served from a local CSV file, making it fast and dependency-free.

---

## 🚀 Live Demo

This API is deployed on **Render**:
```
https://quran-api-<your-render-slug>.onrender.com
```

---

## 📡 API Reference

### Get a Specific Verse

```
GET /quran/:chapter_index/:verse_index
```

| Parameter       | Type    | Description                          |
|-----------------|---------|--------------------------------------|
| `chapter_index` | integer | The Surah (chapter) number           |
| `verse_index`   | integer | The Ayah (verse) number (0-indexed)  |

### Example Requests

**Ayat Al-Kursi (2:255)**
```
GET http://localhost:3000/quran/2/255
```
```json
{
  "chapter": "Al-Baqarah",
  "text": "Allah! There is no deity except Him, the Ever-Living, the Sustainer of existence."
}
```

**Al-Fatiha (full chapter)**
```
GET http://localhost:3000/quran/1/0
```
```json
{
  "chapter": "Al-Fatiha",
  "text": "In the name of Allah, the Most Gracious, the Most Merciful.\nPraise be to Allah, the Lord of all worlds."
}
```

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/ZahiqIbrahim/quran-api.git
cd quran-api

# Install dependencies
npm install

# Start the server
node server.js
```

The server will start at `http://localhost:3000`.

---

## 🗂️ Project Structure

```
quran-api/
├── server.js         # Express server — defines the API endpoint
├── QuranReader.js    # CLI tool to search verses from the terminal
├── quran.csv         # Verse database (chapter, verse, text)
├── package.json
└── package-lock.json
```

### File Overview

- **`server.js`** — Sets up the Express.js server, reads `quran.csv` on startup, and exposes the `/quran/:chapter/:verse` endpoint.
- **`quran.csv`** — Acts as the database. Each row contains a chapter number, verse number, chapter name, and verse text.
- **`QuranReader.js`** — A command-line utility that lets you look up a verse directly in the terminal by entering a chapter and verse number when prompted.

---

## 💻 Using the CLI Tool

```bash
node QuranReader.js
```

You'll be prompted to enter a chapter number and verse number, and the matching verse will be printed to the terminal.

---

## 🔌 Integrating Into Your Project

You can call this API from any language that supports HTTP requests.

**JavaScript (fetch)**
```javascript
const response = await fetch('http://localhost:3000/quran/2/255');
const verse = await response.json();
console.log(verse.text);
```

**Python (requests)**
```python
import requests

response = requests.get('http://localhost:3000/quran/2/255')
verse = response.json()
print(verse['text'])
```
