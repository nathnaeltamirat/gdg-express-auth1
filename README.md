# 🔐 Basic Authentication with bcrypt

This project demonstrates a **simple authentication system** using password hashing with bcrypt.

It is designed for mentees to understand:

* Why we never store plain text passwords
* How hashing works
* How to register a user
* How to verify passwords during login

---

## 📌 What This Project Covers

* User Registration
* Password Hashing with bcrypt
* User Login
* Password Comparison
* Basic Authentication Flow

---

## 🧠 Why bcrypt?

When a user creates an account, we should **never store the password directly** in the database.

Instead, we:

1. Hash the password
2. Store the hashed version
3. Compare hashes during login

bcrypt is used because:

* It automatically salts passwords
* It is slow by design (protects against brute-force attacks)
* It is widely trusted and used in production systems

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/nathnaeltamirat/gdg-express-auth1.git
cd auth
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Run the Project

```bash
npm start
```

or (if using nodemon):

```bash
npm run dev
```

---

## 🔄 Authentication Flow

### 📝 Register

1. User enters full_name + email + password
2. Password is hashed using bcrypt
3. Hashed password is stored in database

Example:

```js
const bcrypt = require('bcrypt');

const hashedPassword = await bcrypt.hash(password, 10);
```

---

### 🔐 Login

1. User enters email + password
2. System finds user in database
3. bcrypt compares entered password with stored hash

Example:

```js
const isMatch = await bcrypt.compare(password, user.password);
```

If `isMatch` is true → login successful.

---

```
auth/
│
├── config/
│   └── env.js
│
├── controllers/
│   └── auth.controller.js
│
├── database/
│   └── database.js
│
├── middlewares/
│   └── error.middleware.js
│
├── models/
│   └── user.model.js
│
├── routes/
│   └── auth.routes.js
│
├── node_modules/
│
├── .env.development.local
├── .gitignore
├── app.js
├── package.json
└── package-lock.json
```

---

## 📂 Folder Explanation

### 🔹 config/

Contains environment configuration logic.

* `env.js` → Loads and manages environment variables.

---

### 🔹 controllers/

Handles incoming requests and sends responses.

* `auth.controller.js` → Contains authentication logic (sign-up/sign-in).

---

### 🔹 database/

Handles database connection setup.

* `mongodb.js` → Connects the application to the database.

---

### 🔹 middlewares/

Custom middleware functions.

* `error.middleware.js` → Centralized error handling.

---

### 🔹 models/

Defines database schemas/models.

* `user.model.js` → User model definition.

---

### 🔹 routes/

Defines application routes.

* `auth.routes.js` → Authentication endpoints.

---

### 🔹 Root Files

* `app.js` → Main application entry point.
* `.env.development.local` → Environment variables for development.
* `.gitignore` → Files ignored by Git.
* `package.json` → Project dependencies and scripts.
* `package-lock.json` → Dependency lock file.

---



## 🚨 Important Security Notes

* Never store plain text passwords
* Never log passwords to console
* Always hash passwords before saving
* Use environment variables for secrets

---

## 🎯 Learning Goals for Mentees

After completing this project, you should understand:

* What hashing is
* Why salting matters
* How authentication works at a basic level

---

## 🚀 Next Improvements

To make this more advanced, you can add:

* JWT authentication
* Sessions
* Refresh tokens
* Role-based access control
* Email verification
* Password reset functionality



---

👨‍🏫 Built for learning purposes.
Not production-ready without additional security improvements.
