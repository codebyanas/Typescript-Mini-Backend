# ⚡ Typescript-Mini-Backend

A modular, strongly-typed Node.js & Express backend architecture built with **TypeScript**, featuring JWT authentication, secure HTTP-only cookie management, and structured MongoDB data modeling.

---

## 🛠️ Key Features

* **TypeScript First:** Strict type safety across routes, controllers, and database models.
* **Authentication Flow:** Secure user authentication using JSON Web Tokens (JWT) and HTTP-only cookie handling.
* **Modular Architecture:** Clean separation of concerns across controllers, routes, middleware, and database connections.
* **Security Hardening:** Middleware-level JWT verification and authorization guards on protected routes.

---

## 📁 Project Structure

```text
Typescript-Mini-Backend/
├── src/
│   ├── controllers/
│   │   └── authController.ts              # Authentication logic & request handlers
│   ├── database/
│   │   └── connectDatabase.ts             # MongoDB database connection configuration
│   ├── middleware/
│   │   └── verifyToken.ts                 # JWT verification middleware
│   ├── models/
│   │   └── userModel.ts                   # User Mongoose schema & TypeScript types
│   ├── routes/
│   │   └── authRoute.ts                   # Auth endpoint definitions
│   ├── utils/
│   │   └── generateTokenAndSetCookie.ts   # Helper for JWT generation & cookie dispatch
│   └── server.ts                          # Main Express application entry point
├── dist/                                  # Compiled JavaScript build output
├── .gitattributes
├── .gitignore
├── package.json                           # Dependencies and build scripts
├── package-lock.json                      # Locked dependency tree
├── tsconfig.json                          # TypeScript compiler settings
└── README.md                              # Project documentation

