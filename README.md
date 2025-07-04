# 🚀 GrowthPro AI Assignment

A full-stack **Local Business SEO Dashboard** built with **React (Vite + Tailwind CSS)** and **Node.js + Express**.  
This dashboard simulates how small businesses can monitor their **Google-style ratings**, **reviews**, and **AI-generated SEO headlines**, aligning with GrowthProAI’s real-world applications.

---

## 📌 Objective

To build a **responsive dashboard** where users can:

- Enter a business name and location
- View simulated:
  - ⭐ Google Rating
  - 📝 Number of Reviews
  - 🧠 AI-Generated SEO Headline
- Regenerate a new headline on demand

---

## 🖼️ Demo

> 🌍 Live Preview: [https://growth-pro-ai-assignment.vercel.app](https://growth-pro-ai-assignment.vercel.app)  

---

## 🗂️ Project Structure

```
GrowthProAiAssignment/
├── client/
│   ├── src/
│   │   └── App.jsx
│   ├── public/
│   ├── index.html
│   └── tailwind.config.js
│
├── server/                 
│   ├── controllers/
│   ├── routes/
│   ├── data/
│   └── server.js
│
└── README.md
```

---

## ⚙️ Tech Stack

### 🖥️ Frontend

- React (Vite)
- Tailwind CSS
- Axios

### 🔙 Backend

- Node.js
- Express.js
- CORS

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v18+ recommended)
- npm (comes with Node.js)

---

### 📦 Installation

#### 1. Clone the repository

```bash
git clone https://github.com/your-username/GrowthProAiAssignment.git
cd GrowthProAiAssignment
```
---

#### 2. Install frontend dependencies
```bash
cd client
npm install
```
---

#### Install backend dependencies
```bash
cd ../server
npm install
```
---

#### Running the App Locally

-  #### Start Backend (Port: 4000)
```bash
cd server
npm start
```

- #### Start Frontend (Port: 5173)
```bash
cd ../client
npm run dev
```

#### 🌐 API Endpoints

##### POST:  `/api/business-data`

- Accepts:
```bash
{
  "name": "Cake & Co",
  "location": "Mumbai"
}
```
- Returns:
```bash
{
  "name": "Cake & Co",
  "location": "Mumbai",
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}

```

---

##### GET:  `/api/regenerate-headline?name=...&location=...`

- Returns:
```bash
{
  "headline": "Discover Why Cake & Co is Mumbai's Hidden Gem in 2025"
}


```

---

#### 📱 Features

- Input business name + location

- Simulated Google-style ratings and reviews

- AI-generated SEO headline

-  Regenerate headline with one click

-  Clean Tailwind styling

- Fully responsive for mobile + desktop

---

#### 🧠 Enhancements

- ✅ Spinner on API calls

- ✅ Form validation

- ✅ Randomized headline logic

- ✅ CORS setup for deployment

- ✅ Smooth UI transitions

- ✅ 50+ static business records

---
