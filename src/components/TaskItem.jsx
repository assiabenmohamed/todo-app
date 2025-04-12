import { FilePen, Radius, Save, Trash2 } from "lucide-react";
import React, { useRef, useState } from "react"; // Importation de React et useState

function Task({ todo, handleToggle, handleDelete, updateTodo, todos }) {
  const [isEditing, setIsEditing] = useState(false); // État pour gérer l'édition
  const [editText, setEditText] = useState(todo.description); // État pour gérer la valeur du texte pendant l'édition

  const modfRef = useRef(null); // Référence pour l'input d'édition
  const [error, seterror] = useState(""); // État pour gérer les erreurs (si aucune tâche n'est entrée)

  const handleEdit = () => {
    // Fonction pour éditer la description de la tâche
    if (!modfRef.current) return;
    const Modval = modfRef.current?.value; // Récupère la nouvelle description
    if (Modval == "") {
      // Si aucune tâche n'est entrée
      seterror("Please enter a task"); // Affiche un message d'erreur
      return; // Arrête l'exécution
    } else {
      if (Modval.length > 20) {
        seterror("Please enter a task less than 20 characters"); // Affiche un message d'erreur si la tâche est trop longue
        return; // Arrête l'exécution
      } else {
        if (Modval.length < 3) {
          seterror("Please enter a task more than 3 characters"); // Affiche un message d'erreur si la tâche est trop courte
          return; // Arrête l'exécution
        }
      }
    }

    if (
      (todos ?? []).some(
        (t) =>
          t.description.trim().toLowerCase() === Modval.trim().toLowerCase()
      )
    ) {
      seterror("Task already exists"); // Affiche un message d'erreur si la tâche est trop courte
      return; // Arrête l'exécution
    }
    updateTodo(todo.id, Modval);
    setIsEditing(false); // Désactive le mode édition
    seterror(""); // Réinitialise l'erreur après un ajout valide
  };

  const handeldelete = () => {
    // Fonction pour supprimer la tâche
    // setIsEditing(false); // Désactive le mode édition si supprimé en mode édition
    handleDelete(todo.id);
  };

  return (
    <div className="flex items-center border-b p-2">
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => handleToggle(todo.id)}
        className="mr-2 accent-gray-400 w-4 h-4 mt-1"
        style={{ borderRadius: "50%", clipPath: "circle(45% at 50% 50%)" }}
      />
      {isEditing ? (
        <div className="w-full">
          <div className="flex flex-1">
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              ref={modfRef}
              className="flex-1 rounded border p-1"
              autoFocus
            />
            <button
              onClick={() => handleEdit()}
              className="ml-2 rounded  px-2 text-white"
            >
              <Save />
            </button>
          </div>
          {error && <span className="text-red-500">{error}</span>}
        </div>
      ) : (
        <div className="flex  items-center justify-between w-full">
          <span
            className={` ${todo.isDone ? "text-gray-500 line-through" : ""}`}
          >
            {todo.description}
            {todo.isDone ? "✅" : "🕒"}
          </span>
          <div>
            <button
              onClick={() => setIsEditing(true)}
              className="ml-2 rounded-full  p-2 text-white"
            >
              <FilePen />
            </button>
            <button
              onClick={() => handeldelete()}
              className="ml-2 rounded  px-2 text-white"
            >
              <Trash2 />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Task; // Exportation du composant Task
