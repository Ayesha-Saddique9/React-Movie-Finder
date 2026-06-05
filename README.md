# 🎬 React Movie Explorer

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

A highly responsive and interactive web application built with **React.js** that leverages the **OMDB REST API** to search, retrieve, and display extensive cinematic data. This project demonstrates proficiency in modern frontend architecture, robust state management, and dynamic routing, all wrapped in a clean, professional dark-mode interface powered by **Tailwind CSS**.

---

## 📸 Application Previews

### 1. Main Search Interface
<!-- Add your main UI screenshot below this line -->
![Main UI](./ui.png)

### 2. Search Results & Movie Cards
<!-- Add your cards/results screenshot below this line -->
![Search Results](./result.png)

### 3. Dynamic Movie Details Page
<!-- Add your movie details screenshot below this line -->
![Movie Details](./details.png)

### 4. About Page
<!-- Add your about page screenshot below this line -->
![About Page](./about.png)

---

## ✨ Core Features & Functionality

- **OMDB API Integration:** Utilizes native JavaScript `fetch` with `async/await` to request and parse real-time movie data from the Open Movie Database.
- **Dynamic Routing:** Implements React Router DOM to navigate from a global grid view to highly specific, parameter-driven (`/:id`) movie detail pages.
- **Advanced State Management:** Efficiently handles asynchronous operations by separating Data, Loading, and Error states to ensure a seamless user experience.
- **Edge-Case Handling:** Features robust fallbacks, including "Movie Not Found" validation and `onError` image handlers for missing API posters.
- **Responsive Layout:** Structured with Tailwind CSS utilizing Flexbox and CSS Grid to ensure complete responsiveness across mobile, tablet, and desktop devices.

---

## 🧠 What I Learned

Building this project significantly strengthened my core React and JavaScript logic. Key takeaways include:
1. **API Limitations & Solutions:** Understanding how to handle API rate limits and correctly parsing complex nested JSON objects.
2. **Component Architecture:** Breaking down a large application into modular, reusable components (`Navbar`, `Home`, `MovieDetails`).
3. **Advanced Routing:** Passing unique IDs through URLs (`useParams`) to trigger secondary API calls on new pages.
4. **Conditional Rendering:** Mastering the logical flow of UI updates by strictly controlling when to show loading spinners, error messages, or actual data.

---

## 💻 How to Run Locally

To test or review this project on your local machine, run the following commands sequentially in your terminal:

**1. Clone the repository:**
```bash
git clone https://github.com/Ayesha-Saddique9/React-Movie-Finder.git
```
---

**2. Navigate into the project directory:**
```bash
cd React-Movie-Finder
```
---

**3.Install the required dependencies:**
```bash
npm install
```
---

**4. Start the local development server:**
```bash
npm install
```
---

## 👩‍💻 Author

**Ayesha Saddique**  
Frontend Web Developer

🔗 GitHub: https://github.com/Ayesha-Saddique9

💼 LinkedIn: https://linkedin.com/in/ayesha-saddique9

📧 Email: ayeshasaddique70@gmail.com

⭐ If you found this project useful, consider giving it a star!
