# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
React ToDo Application
Une application de gestion de tâches (Todo List) interactive développée avec React et stylisée avec TailwindCSS. Cette application permet aux utilisateurs de créer, afficher, modifier et supprimer des tâches, avec persistance des données dans le localStorage du navigateur.
Fonctionnalités

Ajouter de nouvelles tâches
Marquer les tâches comme terminées
Modifier les tâches existantes
Supprimer des tâches (avec confirmation)
Tri alphabétique des tâches
Validation complète des entrées:

Empêche les tâches vides
Empêche les tâches en double
Limite les tâches entre 3 et 20 caractères


Persistance des données via localStorage

Installation

Clonez le dépôt

bashgit clone https://github.com/assiabenmohamed/todo-app.git
cd todo-app

Installez les dépendances

npm install
Démarrage de l'application
npm run dev
L'application sera accessible à l'adresse  http://localhost:5174/
Structure du projet
react-todo-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── TaskForm.jsx    # Composant pour ajouter des tâches
│   │   └── TaskList.jsx    # Composant pour afficher et gérer les tâches
│   │   └── TaskItem.jsx    # Composant pour afficher et modifier une tâche
│   ├── App.jsx             # Composant principal
│   ├── index.css
│   └── ...
└── package.json
Dépendances principales

React (avec Hooks)
Lucide React pour les icônes
TailwindCSS pour le styling
Flux de données

L'état principal des tâches (todos) est géré dans App.jsx
Les interactions utilisateur (ajout, modification, suppression) sont gérées par des fonctions dans App.jsx qui sont passées aux composants enfants
TaskForm.jsx gère l'ajout de nouvelles tâches
TaskList.jsx organise l'affichage des tâches et les trie par ordre alphabétique
TaskItem.jsx gère l'affichage, la modification et la suppression d'une tâche individuelle

Personnalisation

Modifiez les couleurs et le style dans le fichier App.jsx et les composants
Adaptez les règles de validation dans TaskForm.jsx et TaskItem.jsx selon vos besoins
Ajoutez des fonctionnalités supplémentaires comme le filtrage des tâches ou des catégories

Limitations connues

L'application stocke les données uniquement dans le localStorage du navigateur
La limite de taille pour une tâche est de 20 caractères
Personnalisation



