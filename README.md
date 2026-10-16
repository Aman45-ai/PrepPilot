# 🚀 PrepPilot — Interview Practice Tracker

**Prepare smarter. Track progress. Crack interviews.**

PrepPilot is a React-based interview preparation tracker that helps you organize coding practice questions, manage their difficulty and status, and monitor your preparation progress through a centralized dashboard.

Built as a React machine-coding project with a focus on reusable components, state management, responsive design, and persistent data storage.

## ✨ Features

- 📊 **Dashboard Overview** — Track total questions, completed questions, and preparation progress.
- ➕ **Add Questions** — Add questions with a title, category, difficulty, and status.
- ✏️ **Edit Questions** — Update question details whenever needed.
- 🗑️ **Delete Questions** — Remove questions from your tracker.
- 🔍 **Search Questions** — Find questions quickly by title.
- 🎯 **Smart Filters** — Filter questions by category, difficulty, and status.
- 📈 **Progress Tracking** — Monitor your interview preparation progress.
- 💾 **LocalStorage Persistence** — Keep your questions saved across browser refreshes.
- ✅ **Form Validation** — Validate question input before submission.
- 📱 **Responsive Design** — Designed to work across desktop, tablet, and mobile screens.
- 🗂️ **Organized Components** — Maintainable structure with reusable React components.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| Vite | Development server and production build |
| Tailwind CSS | Styling and responsive layouts |
| React Router | Application routing |
| React Hook Form | Form management and validation |
| Context API | Shared application state |
| LocalStorage | Persisting questions in the browser |
| JavaScript | Application logic |

## 📂 Project Structure

```text
PrepPilot/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AddQuestion.jsx
│   │   └── Dashboard.jsx
│   ├── context/
│   │   ├── QuestionContext.jsx
│   │   └── QuestionProvider.jsx
│   ├── dashboard/
│   │   ├── Filters.jsx
│   │   ├── Greeting.jsx
│   │   ├── QuestionSet.jsx
│   │   └── StatsCard.jsx
│   ├── layout/
│   │   └── Sidebar.jsx
│   ├── routes/
│   │   └── AppRoutes.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

Follow these steps to run PrepPilot locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm, which comes with Node.js
- Git

### 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

### 2. Navigate to the Project

```bash
cd PrepPilot
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal to access the application.

### 5. Create a Production Build

```bash
npm run build
```

Vite generates the production build in the `dist/` directory.

## 📖 How to Use

1. Open PrepPilot in your browser.
2. Navigate to the dashboard to view your preparation statistics.
3. Add a question with its title, category, difficulty, and status.
4. Search for questions using the search field.
5. Apply category, difficulty, or status filters to find specific questions.
6. Edit existing questions to update their details.
7. Delete questions you no longer need.
8. Update question statuses as you progress with your preparation.
9. Monitor your completed questions and overall progress from the dashboard.

## 🏷️ Supported Question Categories

PrepPilot supports the following categories:

- DSA
- Git
- Full-Stack
- Machine-Coding

## 🎚️ Difficulty Levels

Questions can be organized by difficulty:

- Easy
- Medium
- Hard

## 📌 Question Statuses

Track your preparation using these statuses:

- Pending
- In Progress
- Completed

## 💾 Data Persistence

PrepPilot uses browser LocalStorage to save question data between page refreshes.

Because the data is stored locally:

- Questions remain available in the same browser after refreshing the page.
- Data is not automatically synchronized across devices or browsers.
- Clearing the browser's site data may remove saved questions.

## 🎯 Project Objectives

This project demonstrates practical implementation of:

- Component-based React development
- Shared state management with Context API
- Create, read, update, and delete operations
- Search and multi-criteria filtering
- Form handling and validation
- Browser LocalStorage integration
- Responsive user interface development
- Client-side routing
- Reusable UI components
- Production builds with Vite

## 🔮 Future Enhancements

Potential improvements include:

- User authentication
- Cloud synchronization
- Bookmarks and question tags
- Advanced sorting options
- Preparation streaks and reminders
- Detailed analytics and progress charts
- Dark mode

## 👨‍💻 Author

**Amandeep Patel**

- GitHub: https://github.com/Aman45-ai

## 📄 License

This project is available under the MIT License.

---

**Built with ❤️ using React and Vite.**
