# 🔗 ChotuLink

**ChotuLink** is a high-performance URL encapsulation engine built using the MERN stack. It converts long URLs into short, secure, and shareable links with a clean and modern developer-focused interface.

---

## ⚙️ System Specifications

* **Core Architecture:** MERN Stack (MongoDB, Express, React, Node.js)
* **Environment:** Optimized for EndeavourOS / Linux
* **Hardware Profile:** HP Victus 15 / RTX 3050
* **Network Node:** Render Cloud

---

## 🚀 Key Features

* **Cryptographic Hashing:** Converts long URLs into secure and unique identifiers
* **Minimalist Terminal UI:** Clean and developer-friendly interface with modern design
* **Dual-State Theme:** Supports both Dark and Light mode using CSS variables
* **Adaptive Design:** Fully responsive layout for desktop and mobile devices

---

## 📁 Project Structure

```bash
ChotuLink/
├── .gitignore                # Root level ignore rules (node_modules, .env, etc.)
├── Backend/
│   ├── controllers/
│   │   └── url.js           # API logic for link generation
│   ├── models/
│   │   └── schema.js        # MongoDB URL schema definition
│   ├── routes/
│   │   └── routes.js        # Express route definitions
│   ├── connections.js       # Database connection configuration
│   ├── index.js             # Server entry point
│   ├── .env                 # Environment variables (Private)
│   ├── package.json         # Backend dependencies
│   └── package-lock.json    # Dependency lock file
├── Frontend/
│   ├── index.html           # Main UI / Entry point (High-Density UI)
│   └── README.md            # Frontend-specific documentation
```

---

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/adityasinhaa01/url-shortener.git
cd url-shortener
```

---

### 2. Environment Configuration

Create a `.env` file inside the `Backend/` directory and add the following:

```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
BASE_URL=https://snip-b4dm.onrender.com
```

---

### 3. Install Dependencies

```bash
cd Backend
npm install
```

---

### 4. Start the Server

```bash
npm start
```

---

## 🔌 API Overview

### Create Short URL

**POST** `/url`

#### Request Body:

```json
{
  "url": "https://example.com"
}
```

#### Response:

```json
{
  "shortId": "abc123",
  "redirectURL": "original_URL"
}
```

---

### Redirect to Original URL

**GET** `/:shortId`

* Redirects the user to the original URL associated with the given short ID.

---

## 🌐 Deployment

The backend is deployed on **Render Cloud**.
Ensure your `BASE_URL` in `.env` matches your deployed backend URL.

---

## 🎯 Future Enhancements

* Analytics dashboard (click tracking, geolocation)
* Custom short URLs (aliases)
* User authentication and dashboard
* Rate limiting and abuse protection

---

## 👨‍💻 Maintainer

**Aditya P. Sinha**

* GitHub: https://github.com/adityasinhaa01
* LinkedIn: https://linkedin.com/in/adityasinha001

---

## 💡 Final Note

ChotuLink is designed for developers who appreciate performance, minimalism, and control. It is not just a URL shortener, but a foundation for building scalable link management systems.
