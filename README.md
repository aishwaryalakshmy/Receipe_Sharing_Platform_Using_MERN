# 🍽 Recipe Sharing Platform (MERN)

This is a full-stack **Recipe Sharing Platform** built using the **MERN stack** (MongoDB, Express.js, React, and Node.js). The platform allows users to register, log in, explore recipes, and manage their own recipes. Users can also like, favorite, and filter recipes.

---

## 🛠 Tech Stack

- **Frontend**: React.js, React Router, Bootstrap 5, Axios  
- **Backend**: Node.js, Express.js, MongoDB, Mongoose  
- **Authentication**: JWT (JSON Web Token), bcrypt  
- **Database**: MongoDB  

---

## 🚀 Features

✅ **User Authentication** (Signup, Login)  
✅ **CRUD Operations** (Create, Read, Update, Delete Recipes)  
✅ **Image Upload** for recipes  
✅ **User Profile Management**  
✅ **Like & Favorite Recipes**  
✅ **Search & Filter Recipes**  
✅ **Responsive UI** with Bootstrap  

---

## 📂 Project Structure

```
recipe-sharing-platform/
│── node_modules/            # Dependencies
│── backend/                 # Backend Code (Node.js, Express.js)
│   ├── config/              # Database configuration
│   ├── models/              # Mongoose schemas
│   ├── routes/              # API routes
│   ├── controllers/         # Route logic
│   ├── middleware/          # Auth middleware
│   ├── uploads/             # Recipe images
│   ├── server.js            # Entry point
│── frontend/                # Frontend Code (React.js)
│   ├── public/              # Static assets (favicon, manifest)
│   ├── src/
│   │   ├── components/      # Reusable components (Navbar, RecipeCard, etc.)
│   │   ├── pages/           # Page components (Home, About, Contact)
│   │   ├── App.js           # Main App component
│   │   ├── index.js         # React entry point
│   │   ├── App.css          # Global styles
│── .env                     # Environment variables
│── package.json             # Dependencies & scripts
│── README.md                # Documentation
```

---

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/recipe-sharing-platform.git
cd recipe-sharing-platform
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Set Up Environment Variables

Create a **.env** file in the root directory and add:

```
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
```

### 4️⃣ Run the Backend Server

```sh
cd backend
npm start
```

### 5️⃣ Run the Frontend

Open a new terminal and run:

```sh
cd frontend
npm start
```

---

## 🔗 API Endpoints

### 🛠 **Authentication**
- **POST** `/api/auth/signup` – Register a new user  
- **POST** `/api/auth/login` – User login  

### 📖 **Recipes**
- **GET** `/api/recipes` – Get all recipes  
- **POST** `/api/recipes` – Add a new recipe  
- **PUT** `/api/recipes/:id` – Update a recipe  
- **DELETE** `/api/recipes/:id` – Delete a recipe  

---

## 📌 Future Enhancements

🔹 **User Dashboard for Personalized Recipes**  
🔹 **Advanced Filtering & Sorting**  
🔹 **Comments & Reviews on Recipes**  
🔹 **Recipe Rating System**  

---

## 🎯 Contributing

Feel free to **fork this repository** and contribute!  
If you have feature improvements, submit a **pull request**.  

---

## 📜 License

This project is **open-source** and available under the MIT License.

---

🚀 **Happy Cooking & Coding!** 🍳✨

---
