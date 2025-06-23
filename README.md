# 🛒 Electronic Store Application

This is a full-stack **Electronic Store** project developed during my **CDAC course**, designed to allow users to browse, purchase, and manage electronic items online. 
The application supports both web and Android platforms, with a secure backend and a well-structured MySQL database.

---

## 🧰 Tech Stack

| Layer         | Technology                 |
|---------------|----------------------------|
| Frontend (Web) | React.js                   |
| Frontend (Mobile) | Android (Java, XML)     |
| Backend       | Java + Spring Boot         |
| Database      | MySQL                      |
| Tools         | Git, Postman, Android Studio, VS Code |

---

## ✨ Key Features

- ✅ User Registration & Login (Web & Android)
- 🖥 Product Listing with Categories & Search
- 🛒 Add to Cart and Checkout Process
- 🔐 Secure Authentication with Sessions or Tokens
- 📦 Order History & Order Status Tracking
- 🧑‍💼 Admin Panel for Product Management
- 📱 Android App for shopping on-the-go

---

## 🗂 Project Structure

electronic-store/
│
├── backend/                           # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/electronicstore/
│   │   │   │   ├── controller/
│   │   │   │   ├── model/
│   │   │   │   ├── repository/
│   │   │   │   ├── service/
│   │   │   │   └── ElectronicStoreApplication.java
│   │   │   └── resources/
│   │   │       ├── application.properties
│   │   │       └── data.sql
│   │   └── test/                      # Unit tests
│   └── pom.xml                        # Maven configuration
│
├── frontend/                          # React.js frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/                  # API calls
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── mobile-app/                        # Android app (Java)
│   ├── app/
│   │   ├── src/
│   │   │   ├── main/
│   │   │   │   ├── java/com/electronicstore/
│   │   │   │   │   ├── activities/
│   │   │   │   │   ├── adapters/
│   │   │   │   │   └── models/
│   │   │   │   └── AndroidManifest.xml
│   │   │   └── res/
│   │   │       ├── layout/
│   │   │       └── values/
│   └── build.gradle
│
├── database/                          # MySQL database scripts
│   ├── schema.sql
│   └── seed.sql
│
├── README.md                          # Project documentation
└── .gitignore                         # Ignore unnecessary files


