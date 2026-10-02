POSTMAN LINK: https://documenter.getpostman.com/view/58320290/2sBYHNX3UD


# Bicycle Shop

A full-stack bicycle shop application built as a learning project. The application demonstrates how a React frontend communicates with a REST API to manage bicycle data stored in a MySQL database.

The project is split into two parts:

- **Frontend:** React, TypeScript, and Vite
- **Backend:** Node.js, Express, TypeScript, and Sequelize
- **Database:** MySQL

The application supports the basic CRUD operations: creating, viewing, updating, and deleting bicycles.

## Project Structure

```text
.
├── backend/       # Express API and database logic
├── frontend/      # React user interface
└── README.md
```

## Requirements

Before starting the project, make sure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) and npm
- [MySQL](https://www.mysql.com/)

A recent Node.js version is recommended to ensure compatibility with Vite.

Make sure your MySQL server is running before launching the backend.

## Getting Started

### 1. Clone the repository

Clone the project and enter its directory:

```bash
git clone <https://github.com/linnaaire-source/POSTMAN-DSW>
```

All commands below should be executed from the project directory unless stated otherwise.

### 2. Create the MySQL database

Open MySQL using your preferred tool, such as MySQL Workbench or the MySQL command-line client.

For example:

```bash
mysql -u root -p
```

Then create the database:

```sql
CREATE DATABASE IF NOT EXISTS db_bicycle_shop
CHARACTER SET utf8mb4;
```

The database needs to exist before the backend starts. Sequelize is responsible for creating the required tables when the application connects successfully.

Make sure the MySQL account configured in the backend has permission to use this database.

## Backend Configuration

Inside the `backend` directory, create a `.env` file:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=3306
DB_NAME=db_bicycle_shop
DB_USER=root
DB_PASSWORD=pirineus
```

Update the username and password to match your local MySQL installation.

If your MySQL server uses a different host, port, or database name, change those values accordingly.

### Install backend dependencies

```bash
cd backend
npm ci
```

### Run the backend

Start the development server with:

```bash
npm run dev
```

Once running, the API will normally be available at:

```text
http://localhost:3000/api
```

The bicycle API can be accessed at:

```text
http://localhost:3000/api/bicycles
```

## Frontend Configuration

Create a `.env` file inside the `frontend` directory:

```env
VITE_API_URL=http://localhost:3000/api
```

This value tells the React application where to find the backend API.

Keep the URL at the API base level rather than adding `/bicycles`, since the frontend handles the individual endpoint paths.

If you change the backend port, remember to update this variable as well.

### Install frontend dependencies

From the project root:

```bash
cd frontend
npm ci
```

### Start the frontend

Run:

```bash
npm run dev
```

Vite will display the local address in the terminal. It will typically be:

```text
http://localhost:5173
```

Open that address in your browser to use the application.

## Running the Full Application

You need both the backend and frontend development servers running at the same time.

**Terminal 1 — Backend**

```bash
cd backend
npm run dev
```

**Terminal 2 — Frontend**

```bash
cd frontend
npm run dev
```

Then open the URL provided by Vite.

The frontend communicates with the Express API, while the backend handles database operations through Sequelize and MySQL.

## Environment Files

The project uses environment variables for local configuration.

Do **not** commit files containing real database passwords or other private credentials.

A typical `.gitignore` should include:

```text
.env
```

You can provide `.env.example` files containing placeholder values so other developers know which variables are required.

## Technologies

### Frontend

- **React** — building the user interface
- **TypeScript** — static typing
- **Vite** — development server and build tooling

### Backend

- **Node.js** — JavaScript runtime
- **Express** — HTTP server and API routing
- **TypeScript** — static typing
- **Sequelize** — ORM for interacting with MySQL

### Database

- **MySQL** — persistent storage for bicycle information

## API

The backend exposes a REST API for bicycle management.

The main resource is:

```text
/api/bicycles
```

The application uses HTTP methods to perform CRUD operations:

| Method | Purpose |
|---|---|
| `GET` | Retrieve bicycles |
| `POST` | Add a bicycle |
| `PUT` / `PATCH` | Modify a bicycle |
| `DELETE` | Remove a bicycle |

The exact request and response structure depends on the implementation in the backend.

## Useful Documentation

- [React Documentation](https://react.dev/learn) — React fundamentals and components
- [Express Documentation](https://expressjs.com/) — HTTP servers, routes, and middleware
- [Sequelize Documentation](https://sequelize.org/docs/v6/) — models and database operations
- [MySQL Documentation](https://dev.mysql.com/doc/) — MySQL administration and SQL
- [Vite Documentation](https://vite.dev/guide/) — frontend tooling and development
- [npm Documentation](https://docs.npmjs.com/) — package management and commands

## Development Notes

When changing environment variables, restart the affected development server so the new configuration is loaded.

For dependency installation, `npm ci` is recommended when a `package-lock.json` file is present because it installs the versions recorded in the lockfile.

This project is intended primarily for learning and development, so production deployments will require additional configuration such as secure environment management, database security, and production build/deployment settings.
