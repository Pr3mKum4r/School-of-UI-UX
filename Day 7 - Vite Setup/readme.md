# 📘 Day 7: Tooling & Project Structure

## 🚀 Assignment: React + TypeScript + Tooling Setup

In this assignment, you will set up a modern frontend project using:

- ⚛️ React (with Vite)
- 🟦 TypeScript
- 🧹 ESLint (linting)
- 🎨 Prettier (formatting)

---

## 🎯 Objectives

By the end of this assignment, you should be able to:

- Create a React + TypeScript app using Vite
- Organize code using a clean folder structure
- Set up linting and formatting tools
- Build a small feature using modular architecture

---

## 📁 Project Structure
src/
├── components/ # Reusable UI components
├── services/ # API calls
├── types/ # TypeScript types
├── styles/ # CSS files
├── App.tsx # Root component
└── main.tsx # Entry point

---

## 🛠️ Setup Instructions

### 1. Create Project

```bash
npm create vite@latest day-7-react-ts
```

Select:
Framework: React
Variant: TypeScript

### 2. Install Dependencies

```bash
cd day-7-react-ts
npm install
```

### 3.Start Development Server

```bash
npm run dev
```

### 4. ESLint Setup

```bash
npm install eslint --save-dev
npx eslint --init
```

### 5. Prettier Setup

```bash
npm install prettier --save-dev
```

### 6. Create .prettierrc:

{
  "semi": true,
  "singleQuote": true
}
