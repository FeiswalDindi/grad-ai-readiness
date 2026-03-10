# AI Career Readiness - Frontend Platform 🚀

This repository contains the official frontend for the **AI Career Readiness Research Project**.  
The platform is designed using a **modular, industrial-grade architecture** focused on scalability, maintainability, and extremely clean code practices.

The goal of this project is to provide a modern digital platform that helps evaluate and improve **career readiness in the AI era**, with a strong focus on usability, performance, and maintainable development standards.

---

# 🛠 Tech Stack

The frontend platform is built with a modern JavaScript ecosystem.

- **Framework:** Vue 3 (Composition API)
- **Styling:** Tailwind CSS v4 (via Vite Plugin)
- **Icons:** Lucide Vue Next
- **Build Tool:** Vite
- **State Management:** Pinia
- **Language:** JavaScript / Vue SFC

This stack was selected to ensure:

- High performance
- Modular development
- Developer productivity
- Scalable architecture for research expansion

---

# 🏗 Industrial Architecture

The project follows a strict **"200-Line Rule"**.

> No single component should exceed **200 lines of code**.

This rule ensures:

- High readability
- Maintainability
- Clear separation of concerns
- Easier debugging and collaboration

## Folder Structure

```
src/
│
├── components/
│   ├── layout/
│   │   ├── PublicLayout.vue
│   │   └── StudentLayout.vue
│   │
│   ├── home/
│   │   ├── HeroSection.vue
│   │   ├── FeaturesSection.vue
│   │   └── CTASection.vue
│   │
│   └── shared/
│       ├── AppCard.vue
│       └── AppButton.vue
│
├── views/
│   ├── HomeView.vue
│   ├── LoginView.vue
│   └── DashboardView.vue
│
├── stores/
│   └── (Pinia stores for API and state management)
│
└── router/
    └── index.js
```

### Key Architectural Principles

**Layout Components**

Located in:

```
src/components/layout
```

These components define the **master structure of pages**, such as:

- Public pages layout
- Student dashboard layout

---

**Home Modules**

Located in:

```
src/components/home
```

Landing page sections are broken into **small reusable modules**.

Example:

- Hero section
- Features section
- Call-to-action section

---

**Shared UI Components**

Located in:

```
src/components/shared
```

Reusable UI elements including:

- Cards
- Buttons
- UI wrappers

These components ensure **design consistency across the platform**.

---

**Views (Page Components)**

Located in:

```
src/views
```

Views represent **full pages** that are connected to the router.

Examples:

- Home page
- Login page
- Student dashboard

---

# 🚀 Setup for Collaborators

Follow the steps below to run the project locally.

## 1. Clone the Repository

Make sure you have **Node.js v18 or newer installed**.

```bash
git clone https://github.com/FeiswalDindi/grad-ai-readiness.git
```

---

## 2. Enter the Project Directory

```bash
cd grad-ai-readiness
```

---

## 3. Install Dependencies

This installs the project engine (`node_modules`).

```bash
npm install
```

---

## 4. Run the Development Server

Start the local development server:

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

# 🤝 Backend & API Collaboration

### API Strategy

All backend API communication should be managed through **Pinia stores** located in:

```
src/stores
```

This approach ensures:

- Centralized state management
- Cleaner components
- Reusable API logic

---

### Security Guidelines

Do **NOT commit sensitive environment files**.

Never push:

```
.env
```

Instead create:

```
.env.example
```

Example:

```
VITE_API_URL=
VITE_API_KEY=
```

---

### Styling Guidelines

All styling should be implemented using **Tailwind utility classes**.

Preferred approach:

```html
<div class="flex items-center justify-between p-4 bg-white rounded-lg shadow"></div>
```

Avoid writing custom CSS in `<style>` blocks unless absolutely necessary.

---

# 📄 Project Status

Current development progress:

### Phase 1

Project initialization and architecture setup.

### Phase 2

Core UI system and reusable components.

### Phase 3

Landing Page Development — **Completed**

### Phase 4

Authentication and Student Dashboard — **In Progress**

---

# 📌 Contribution Workflow

When updating documentation or code:

1. Save the file in **VS Code**
2. Click the **Source Control icon**
3. Stage the changes using the **+ button**
4. Add a commit message

Example:

```
docs: final unified readme
```

5. Click **Commit**
6. Click **Sync Changes** or **Push**

---

# 📜 License

© 2026 AI Career Readiness Program.  
All rights reserved.

---

# 🌍 Project Vision

This platform is designed to evolve into a **research-backed digital system** that evaluates how prepared students are for **AI-driven job markets**.

The architecture prioritizes:

- scalability
- maintainability
- collaboration
- modern engineering practices

---

⭐ If you're part of the research team, ensure you follow the **200-Line Rule** and maintain clean modular architecture.
