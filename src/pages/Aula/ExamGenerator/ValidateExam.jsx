import React, { useState, useEffect } from "react";
import { validateExam, updateAlternative, updateQuestion } from "../../../api/GenerateExam.api";
import { IoIosCloseCircleOutline, IoIosCheckmarkCircle } from "react-icons/io";
import { toast } from "react-toastify";


const ValidateExam = ({ courseId }) => {
  const [examData, setExamData] = useState(null);
  const [editingItem, setEditingItem] = useState({ id: null, type: null });
  const [editedValue, setEditedValue] = useState("");

  useEffect(() => {
    const loadExamData = async () => {
      try {
        const response = await validateExam(courseId);
        setExamData(response);
      } catch (error) {
        toast.error(`Error al cargar los datos del examen: ${error}`);
      }
    };
    loadExamData();
  }, [courseId]);

  const startEditing = (id, type, value) => {
    setEditingItem({ id, type });
    setEditedValue(value);
  };

  const startEditingExplanation = (id, explanation) => {
    setEditingItem({ id, type: "explanation" }); // Nueva identificación para explicación
    setEditedValue(explanation);
  };

  const cancelEditing = () => {
    setEditingItem({ id: null, type: null });
    setEditedValue("");
  };

  const saveEditing = async () => {
    const { id, type } = editingItem;
    const updateFunction = type === "question"
    ? updateQuestion
    : type === "alternative"
    ? updateAlternative
    : updateQuestion; // Usamos la misma función para 'explanation'
    const field = type === "question"
    ? "pretex"
    : type === "explanation"
    ? "preexp"
    : "alttex";

    try {
      await updateFunction(id, editedValue, field); // Pasamos el campo específico a actualizar
      setExamData((prevData) => ({
        ...prevData,
        preguntas: prevData.preguntas.map((question) =>
          type === "question" && question.precod === id
            ? { ...question, pretex: editedValue }
            : type === "explanation" && question.precod === id
            ? { ...question, preexp: editedValue }
            : {
                ...question,
                alternativas: question.alternativas.map((alt) =>
                  type === "alternative" && alt.altcod === id
                    ? { ...alt, alttex: editedValue }
                    : alt
                ),
              }
        ),
      }));
      cancelEditing();
      toast.success("Cambios guardados correctamente.");
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  if (!examData) {
    return <p>Cargando examen...</p>;
  }

  return (
    <div className="text-gray-700 bg-white border border-gray-400 rounded-lg p-5 flex flex-col">
      <h2 className="mb-4 text-center text-xl font-semibold">
        Examen del curso: {examData.exacurcod.curnom}
      </h2>
      {examData.preguntas.map((question, index) => (
        <div key={question.precod} className="w-full border-t py-6 w-full flex flex-col gap-2">
          <div className="space-y-1">
            <span className="text-green-700 font-bold">Pregunta {index + 1}: (Número de módulo: {String(question.prenummod).slice(-2)}) </span>
            {editingItem.id === question.precod && editingItem.type === "question" ? (
              <EditableField
                isEditing
                value={editedValue}
                onSave={saveEditing}
                onCancel={cancelEditing}
                onChange={setEditedValue}
              />
            ) : (
              <div className="w-full flex flex-col md:flex-row gap-2 w-full items-end md:items-start">
                <p className="w-full text-sky-600 font-bold">
                  {question.pretex}
                </p>
                <button
                  className="py-1 px-2 flex text-[13px] text-center text-blue-700 border border-blue-700 rounded hover:bg-blue-700 hover:text-white focus:outline-none focus:ring"
                  onClick={() => startEditing(question.precod, "question", question.pretex)}
                >
                  Editar
                </button>
              </div>
            )}
          </div>
          <div>
            {question.alternativas.map((alternative) => (
              <div key={alternative.altcod} className="mt-2 flex flex-row gap-2 items-start">
                {alternative.altcor ? (
                  <IoIosCheckmarkCircle className="w-5 h-5 text-green-500" />
                  ) : (
                 <IoIosCloseCircleOutline className="w-5 h-5 text-red-500" />
                )}
                {editingItem.id === alternative.altcod && editingItem.type === "alternative" ? (
                  <EditableField
                    isEditing
                    value={editedValue}
                    onSave={saveEditing}
                    onCancel={cancelEditing}
                    onChange={setEditedValue}
                  />
                ) : (
                  <div className="w-full flex flex-row gap-2 items-center">
                    <p className="w-full">{alternative.alttex}</p>
                    <button
                      className="py-1 px-2 flex items-center text-[13px] text-center text-blue-700 border border-blue-700 rounded hover:bg-blue-700 hover:text-white focus:outline-none focus:ring"
                      onClick={() =>
                        startEditing(alternative.altcod, "alternative", alternative.alttex)
                      }
                    >
                      Editar
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-2">
            <div className="space-y-1">
              <span className="font-bold text-[15px] text-gray-600">Explicación:</span>
              {editingItem.id === question.precod && editingItem.type === "explanation" ? (
                <EditableField
                  isEditing
                  value={editedValue}
                  onSave={saveEditing}
                  onCancel={cancelEditing}
                  onChange={setEditedValue}
                />
              ) : (
                <div className="flex flex-col md:flex-row gap-2 items-end md:items-start">
                  <p>{question.preexp}</p>
                  <button
                    className="py-1 px-2 flex items-center text-[13px] text-center text-blue-700 border border-blue-700 rounded hover:bg-blue-700 hover:text-white focus:outline-none focus:ring"
                    onClick={() => startEditingExplanation(question.precod, question.preexp)}
                  >
                    Editar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


const EditableField = ({
  isEditing,
  value,
  onSave,
  onCancel,
  onChange,
}) => (
  isEditing ? (
    <div className="w-full flex flex-col gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border p-2 text-[14px] text-gray-500 w-full"
      />
      <div className="w-full flex flex-row gap-2 justify-end">
        <button
          className="py-1 px-2 flex items-center text-[13px] text-center text-green-700 border border-green-700 rounded hover:bg-green-700 hover:text-white focus:outline-none focus:ring"
          onClick={onSave}
        >
          Guardar
        </button>
        <button
          className="py-1 px-2 flex items-center text-[13px] text-center text-red-700 border border-red-700 rounded hover:bg-red-700 hover:text-white focus:outline-none focus:ring"
          onClick={onCancel}
        >
          Cancelar
        </button>
      </div>
    </div>
  ) : null
);

export { ValidateExam };
