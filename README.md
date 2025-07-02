# 👥 Developers Catalog – Frontend Engineer

A responsive web page built with **React** and **TailwindCSS** that allows users to search and explore a catalog of developers they may want to collaborate with.

---

## ✨ Features

- 🔎 **Filter** by:
  - Last Name (partial match, case-insensitive)
  - Preferred Programming Language (JavaScript, Python, Golang)
- 📜 **Infinite Scrolling** with dynamic loading
- 📇 **Developer Cards** showing:
  - First Name, Last Name, Email, Language
- 📨 **Invite Button** with confirmation modal
- 🔗 **Shareable URL with filters preserved**
- 📱 **Fully responsive** layout (mobile + desktop)
- 🧪 Mock API with filtering, sorting & pagination

---

## 🛠 Tech Stack

- ⚛️ [React](https://reactjs.org/)
- 🎨 [TailwindCSS](https://tailwindcss.com/)
- 🧪 Local `JSON` mock data
- ❌ No React Query / Infinite Scroll libraries (per instructions)

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/michail788/devs-catalog.git
cd devs-catalog

# Install dependencies
npm install

# Start the dev server
npm run dev
```

## 📁 Folder Structure

```
.
├── public/
├── src/
│ ├── api/
│ │ └── getPeople.js
│ ├── components/
│ │ ├── FiltersInput.jsx
│ │ ├── PersonCard.jsx
│ │ └── InviteModal.jsx
│ ├── data/
│ │ └── people.json
│ └── App.jsx
├── tailwind.config.js
└── README.md
```
