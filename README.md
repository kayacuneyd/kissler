# Cafe Kissler - Full Stack Web Application

A dynamic restaurant website for Cafe Kissler with an integrated admin panel for menu management. Built with SvelteKit, TailwindCSS, DaisyUI, and MongoDB.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB Atlas Account
- Resend Account (for emails)

### Installation

1. Clone the repository (if applicable) or use the provided files.
2. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory (if not exists) and add your credentials:
   ```env
   MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/cafe_kissler?retryWrites=true&w=majority
   RESEND_API_KEY=re_123456789
   JWT_SECRET=your-secure-random-string
   ```

### Importing the Menu

To populate the database with the initial menu from `menu.json`:

1. Ensure your `.env` file has the correct `MONGODB_URI`.
2. Run the import script:
   ```bash
   npm run import-menu
   ```

### Creating an Admin User

To access the admin panel, you need an admin user. Run the creation script:

```bash
node scripts/createAdmin.js
```
This will create a user `admin` with password `password123`. **Change this password immediately after logging in or update the script before running.**

### Running Locally

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:5173`.

- Public Site: `http://localhost:5173/`
- Admin Panel: `http://localhost:5173/admin`

## 📦 Deployment

### Vercel

1. Push your code to a Git repository (GitHub/GitLab).
2. Import the project into Vercel.
3. Vercel will detect SvelteKit.
4. Add the Environment Variables (`MONGODB_URI`, `RESEND_API_KEY`, `JWT_SECRET`) in the Vercel Project Settings.
5. Deploy!

## 🛠️ Tech Stack

- **Framework:** SvelteKit
- **Styling:** TailwindCSS + DaisyUI
- **Database:** MongoDB (Native Driver)
- **Email:** Resend
- **Runtime:** Node.js

## 📂 Project Structure

- `src/lib/db`: Database connection and repository logic.
- `src/routes`: Application pages and API endpoints.
- `src/routes/admin`: Protected admin area.
- `scripts`: Utility scripts for data import and setup.
