import React, { useState, useEffect } from "react";
import { getModuloTxtContent } from "../../../api/Modulo.api";
import { updateModuloTxtContent } from "../../../api/GenerateExam.api";
import { toast } from 'react-toastify';
import { FaRegEdit } from "react-icons/fa";


// VALIDACIÓN DEL TEXTO EXTRAÍDO DEL PDF
const ValidateTxt = ({ courseId }) => {
  const [modules, setModules] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(""); // Estado temporal para el texto editado

  // Obtener módulos al cargar el componente
  useEffect(() => {
    const fetchModulesContent = async () => {
      try {
        const response = await getModuloTxtContent(courseId);
        setModules(response);
        setEditedText(response[0]?.content || ""); // Inicializar con el contenido del primer módulo
      } catch (error) {
        console.error("Error al obtener contenido de módulos:", error);
        toast.error("Error al cargar los módulos. Por favor, inténtalo más tarde.");
      }
    };
    fetchModulesContent();
  }, [courseId]);

  // Manejar navegación entre módulos
  const navigateModule = (direction) => {
    const newIndex = currentIndex + direction;
    setCurrentIndex(newIndex);
    setEditedText(modules[newIndex].content); // Actualizar el texto temporal al nuevo módulo
  };

  // Guardar cambios en el módulo actual
  const handleSaveChanges = async () => {
    const { modcod } = modules[currentIndex];
    try {
      await updateModuloTxtContent(modcod, editedText);
      setModules((prevModules) =>
        prevModules.map((module, index) =>
          index === currentIndex ? { ...module, content: editedText } : module
        )
      );
      setIsEditing(false);
      toast.success("Cambios guardados exitosamente.");
    } catch (error) {
      console.error("Error al guardar cambios:", error);
      toast.error("No se pudieron guardar los cambios. Intenta nuevamente.");
    }
  };

  // Cancelar edición
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedText(modules[currentIndex].content); // Restaurar el texto original del módulo actual
  };

  // Activar modo edición
  const handleEdit = () => {
    setIsEditing(true);
    setEditedText(modules[currentIndex].content); // Copiar el contenido actual al estado temporal
  };

  // Completar la validación
  const handleValidationComplete = () => {
    toast.success("Validación de módulos completada.");
    onValidationComplete();
  };

  // Variables derivadas
  const currentModule = modules[currentIndex];
  const isFirstModule = currentIndex === 0;
  const isLastModule = currentIndex === modules.length - 1;

  return (
    <div className="text-gray-700 bg-white border border-gray-400 rounded-lg p-5 flex flex-col space-y-3">
      {currentModule ? (
        <>
          {/* Mostrar el nombre del módulo */}
          <h3 className="text-center font-bold">Módulo: {currentModule.modnom}</h3>

          {/* Área de texto editable */}
          <textarea
            className="p-2 border border-gray-300 rounded-md w-full h-[350px]"
            value={editedText} // Usa el estado temporal
            onChange={(e) => setEditedText(e.target.value)} // Actualiza solo el estado temporal
            disabled={!isEditing}
          />

          {/* Botones de acción */}
          <div className="flex flex-row gap-2">
            {isEditing ? (
              <>
                <button
                  onClick={handleCancelEdit}
                  className="w-full px-2 text-[14px] py-[6px] text-center text-white bg-gray-500 border border-gray-500 rounded active:text-gray-400 hover:bg-transparent hover:text-gray-500 focus:outline-none"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSaveChanges}
                  className="w-full px-2 text-[14px] py-[6px] text-center text-white bg-green-600 border border-green-600 rounded active:text-green-500 hover:bg-transparent hover:text-green-600 focus:outline-none"
                >
                  Guardar Cambios
                </button>
              </>
            ) : (
              <button
                onClick={handleEdit}
                className="w-full flex flex-row justify-center items-center gap-2 px-2 text-[14px] py-[6px] text-center text-white bg-orange-600 border border-orange-600 rounded active:text-orange-500 hover:bg-transparent hover:text-orange-600 focus:outline-none"
              >
                <FaRegEdit />
                <span>Editar</span>
              </button>
            )}
          </div>

          {/* Navegación entre módulos: Oculta cuando está en modo edición */}
          {!isEditing && (
            <div className="flex flex-row justify-between gap-4">
              <button
                onClick={() => navigateModule(-1)}
                className={`w-full text-[14px] px-4 py-[6px] text-center rounded border ${
                  isFirstModule
                    ? "border-gray-400 bg-gray-200 text-gray-500"
                    : "text-white bg-sky-600 border-sky-600 active:text-sky-500 hover:bg-transparent hover:text-sky-600 focus:outline-none"
                }`}
                disabled={isFirstModule}
              >
                ← Anterior
              </button>
              <button
                onClick={() => navigateModule(1)}
                className={`w-full text-[14px] px-4 py-[6px] text-center rounded border ${
                  isLastModule
                    ? "border-gray-400 bg-gray-200 text-gray-500"
                    : "text-white bg-sky-600 border-sky-600 active:text-sky-500 hover:bg-transparent hover:text-sky-600 focus:outline-none"
                }`}
                disabled={isLastModule}
              >
                Siguiente →
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="text-center text-gray-500">Cargando módulos...</p>
      )}
    </div>
  );
};

export { ValidateTxt };