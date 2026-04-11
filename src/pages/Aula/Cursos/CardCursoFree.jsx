import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createMatriculaCurso } from '../../../api/MatriculaCurso.api';
import { toast } from 'react-toastify';
import Modal from '../../../components/Modal/Modal';
import { ImageCursoMap } from './ImageCursoMap';
import { CiBarcode } from "react-icons/ci";
import { FaCentercode } from "react-icons/fa";


const CardCursoFree = ({ id, nombre, onMatricular }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = () => {
    navigate(`/aula/cursos/${id}`);
  };

  const handleMatricula = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleMatricularse = async () => {
    const email = localStorage.getItem('email');
    if (!email) {
      toast.error("No se pudo obtener el email del usuario logueado.");
      setIsModalOpen(false);
      return;
    }

    try {
      await createMatriculaCurso({ email, cursoId: id });
      toast.success("Te has matriculado exitosamente en el curso.");
      setIsModalOpen(false);
      onMatricular(); // Llamar a la función para actualizar los cursos matriculados
    } catch (error) {
      toast.error(error.message);
      setIsModalOpen(false); // Cierra el modal en caso de error también
    }
  };

  return (
    <>
      <div className="group cursor-pointer overflow-hidden shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg bg-">
        <div className="relative mx-auto">
          <div className="relative" onClick={handleRowClick}>
            <img
              className="w-full h-full object-cover"
              src={ImageCursoMap[id] || ImageCursoMap[0]}
              alt="grado"
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            <div className="absolute top-0 right-0 bg-yellow-500 rounded-bl-2xl text-white text-sm">
              <div className="flex flex-row py-4 px-4 items-center gap-1">
                <FaCentercode style={{ height: 25, width: 25 }} />
                <span>Curso gratuito</span>
              </div>
            </div>
          </div>
          <div className="px-5 pb-5">
            <span className="relative grid h-24 w-24 -mt-14 p-2 border-yellow-500 border-8 place-items-center rounded-full bg-white transition-all duration-300 group-hover:bg-grisFondo">
              <img src="/logo/logoEegsac.png" alt="grado" />
            </span>
            <div className="mt-2 text-base leading-7 text-gray-600 transition-all duration-300">
              <h4 className="text-gray-600 text-center font-bold text-sm md:text-lg transition-all duration-300">
                {nombre}
              </h4>
              <div className="mt-2 flex flex-col items-center gap-1 mx-auto">
                <div className="flex flex-row gap-2">
                  <CiBarcode style={{ height: 25, width: 25 }} />
                  <span>Código: {id}</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-4 justify-center">
              <button
                onClick={handleRowClick}
                className="text-sm px-auto py-2 min-w-[100px] text-center text-white bg-yellow-600 border border-yellow-600 rounded active:text-yellow-500 hover:bg-transparent hover:text-yellow-600 focus:outline-none focus:ring"
              >
                Revisar
              </button>
              <button
                onClick={handleMatricula}
                className="text-sm px-auto py-2 min-w-[100px] text-center text-yellow-600 border border-yellow-600 rounded hover:bg-yellow-600 hover:text-white active:bg-yellow-500 focus:outline-none focus:ring"
              >
                Matricularme
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <Modal toggle={handleMatricula} active={isModalOpen}>
          <div>
            <p className="text-[16px] text-gray-800">
              Usted se compromete a llevar el curso dentro del plazo
              establecido de 2 meses.
            </p>
            <p className="text-[16px] text-gray-800">
              ¿Estás seguro de que deseas matricularte en este curso? Esta
              acción no se puede deshacer.
            </p>
          </div>
          <div className="flex justify-end gap-4 mt-4">
            <button
              onClick={handleMatricula}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            >
              Cancelar
            </button>
            <button
              onClick={handleMatricularse}
              className="px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700"
            >
              Matricularme
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export { CardCursoFree };
