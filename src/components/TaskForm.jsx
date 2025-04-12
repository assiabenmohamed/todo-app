import React, { useRef, useState } from "react"; // Importation des hooks React
import { Plus } from "lucide-react";

function Addtask({ onAddTask, todos }) {
  const [description, setDescription] = useState(""); // État pour gérer la description de la tâche
  const [error, seterror] = useState(""); // État pour gérer les erreurs (si aucune tâche n'est entrée)

  const TaskRef = useRef(); // Référence à l'input de tâche

  const handleClick = () => {
    // Fonction qui est appelée lors du clic sur le bouton "Add"
    const task = TaskRef.current?.value; // Récupère la valeur de l'input via la référence
    if (task == "") {
      // Si aucune tâche n'est entrée
      seterror("Please enter a task"); // Affiche un message d'erreur
      return; // Arrête l'exécution
    } else {
      if (task.length > 20) {
        seterror("Please enter a task less than 20 characters"); // Affiche un message d'erreur si la tâche est trop longue
        return; // Arrête l'exécution
      } else {
        if (task.length < 3) {
          seterror("Please enter a task more than 3 characters"); // Affiche un message d'erreur si la tâche est trop courte
          return; // Arrête l'exécution
        }
      }
    }

    if (
      (todos ?? []).some(
        (t) => t.description.trim().toLowerCase() === task.trim().toLowerCase()
      )
    ) {
      seterror("Task already exists"); // Affiche un message d'erreur si la tâche est trop courte
      return; // Arrête l'exécution
    }

    onAddTask(task); // Appelle la fonction onAddTask pour ajouter la tâche
    setDescription(""); // Réinitialise la description après l'ajout
    seterror(""); // Réinitialise l'erreur après un ajout valide
  };

  return (
    <div>
      <div>
        <div className="mt-4 flex  gap-2">
          <input
            type="text"
            value={description} // L'input est contrôlé par l'état description
            onChange={(e) => setDescription(e.target.value)} // Mise à jour de l'état description lors du changement
            ref={TaskRef} // Attache la référence à l'input
            placeholder="Enter your task" // Placeholder de l'input
            className="flex-grow rounded-l border p-2"
          />
          <button
            type="submit"
            className="w-10 h-10 flex items-center justify-center rounded bg-blue-500 text-white text-3xl leading-none"
            onClick={handleClick} // Déclenche la fonction handleClick lors du clic
          >
            <Plus />
          </button>
        </div>
        <div>
          {/* Affiche l'erreur si elle existe */}
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default Addtask; // Exportation du composant Addtask
