# 🚀 **FULL-STACK CAFE KISSLER PROJECT BUILDER PROMPT**

*(Codex için optimize edilmiş sürüm)*

**You are an expert full-stack developer generator.
Your task is to create a complete, production-ready full-stack web application from scratch.**

The project is a dynamic restaurant website for **Cafe Kissler**, with an integrated admin panel for menu management.

Build this project using the following exact technologies:

* **SvelteKit** (latest)
* **TailwindCSS** + **DaisyUI**
* **Node.js** runtime
* **MongoDB Atlas**
* **Resend (email sending)**
* **No ORMs unless explicitly needed. Native MongoDB driver preferred.**
* **Vercel-compatible file structure and endpoints**

---

## 🔧 **PROJECT REQUIREMENTS**

### **1. Create Full Project Structure**

Generate a fully working SvelteKit codebase including:

```
src/
  lib/
    db/
      mongo.js
      menuRepository.js
    components/
    utils/
  routes/
    +layout.svelte
    +page.svelte
    menu/
      +page.svelte
      api/get.json.ts
    contact/
      +page.svelte
      api/send.post.ts
    admin/
      login/
        +page.svelte
      +layout.svelte
      +page.svelte
      menu/
        +page.svelte
        add/
          +page.svelte
        edit/[id]/
          +page.svelte
    api/
      auth/
        login.post.ts
```

---

## 🍽️ **2. Database Layer**

Use the **native MongoDB driver**.
Generate:

### `src/lib/db/mongo.js`

* Handles connection pooling for SvelteKit server.
* Exports `db` and `client`.

### `src/lib/db/menuRepository.js`

Provide functions:

* `getAllMenuItems()`
* `getMenuByCategory(category)`
* `addMenuItem(data)`
* `updateMenuItem(id, data)`
* `deleteMenuItem(id)`
* `getCategories()`

All menu documents must follow this schema:

```
{
  _id,
  category: string,
  name: string,
  description?: string,
  prices: [
    { amount: string, price: number }
  ]
}
```

---

## 🛠️ **3. MENU IMPORT**

The user already has a full JSON file (`menu.json`).
Create:

### `scripts/importMenu.js`

* Connect to MongoDB via `.env`
* Read JSON file
* Normalize data
* Insert into `menu` collection
* Remove previous year’s menu document

---

## 🎨 **4. Frontend Requirements**

### Homepage

* Simple hero section
* “View Menu” button
* Contact info

### Menu Page (`/menu`)

* Display menu grouped by categories
* Use DaisyUI card components
* Show all price options for each product

---

## 🔐 **5. Admin System**

Admin panel must include:

* Secure login system (credentials stored in MongoDB)
* JWT or session cookies (your choice)
* Protected routes for admin
* Menu CRUD pages:

  * List
  * Add
  * Edit
  * Delete
* Form validation
* DaisyUI components

---

## 📧 **6. Contact Page**

Create contact form:

* Name
* Email
* Message

POST endpoint must send email through **Resend API**.

---

## 📦 **7. Deployment Ready**

Ensure:

* Environment variables loaded from `.env`
* Mongo client cached for Vercel
* All APIs work on serverless runtimes
* Tailwind and DaisyUI config created
* `package.json` scripts:

  * `dev`
  * `build`
  * `preview`
  * `import-menu`

---

## 📝 **8. Deliverables**

Codex should output:

* All project files
* Full code for:

  * Svelte pages
  * API endpoints
  * MongoDB connection
  * Menu repository
  * Admin auth system
  * Import script
* Tailwind config
* DaisyUI setup
* README.md explaining:

  * Installation
  * Running locally
  * Importing menu
  * Deploying to Vercel
  * Admin login instructions

You MUST generate the project as if delivering to a real production team.
Your output MUST include the full directory tree and all file contents.

---

# 🧠 **Codex Mode: FULL PROJECT GENERATION ENABLED**

Start building the complete codebase now.