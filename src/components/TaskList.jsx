import React from "react"; // Importation de React pour créer des composants
import Task from "./TaskItem"; // Importation du composant Task pour afficher chaque todo

function ListTask({ Todo, handleToggle, handleDelete, handleEdit }) {
  return (
    <div className="flex flex-col gap-4">
      {/* 
        Ici on map sur toutes les todos et pour chaque todo, on passe les données au composant Task.
        - La prop "key" permet d'identifier de manière unique chaque élément de la liste (ici, c'est l'id du todo).
      */}

      {Todo.slice() // on clone le tableau pour ne pas muter le state original
        .sort((a, b) => a.description.localeCompare(b.description)) // on trie le tableau par ordre alphabétique
        .map((todo) => (
          <Task
            key={todo.id}
            todo={todo}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
            updateTodo={handleEdit}
            todos={Todo}
          /> // Composant Task affichant une todo individuelle
        ))}
    </div>
  );
}

export default ListTask; // Exportation du composant ListTask pour pouvoir l'utiliser ailleurs dans l'application
