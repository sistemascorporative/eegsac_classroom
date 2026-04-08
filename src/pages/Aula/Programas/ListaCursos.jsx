import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { TableCourse } from '../../../components/Table/TableCourse';
import { Loading } from '../../../components/ui/Loading';
import { Error } from '../../../components/ui/Error';
import { getCursosByPrograma, getProgramaById } from '../../../api/Programa.api';


function ListaCursos() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Estado
  const [programa, setPrograma] = useState(null);
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Columnas de la tabla
  const columns = useMemo(
    () => [
      { Header: 'COD', accessor: 'curcod' },
      { Header: 'Nombre del curso', accessor: 'curnom' },
    ],
    []
  );

  // Elementos del Breadcrumb
  const breadcrumbItems = [
    { text: 'Programas', url: '/aula/programas', active: true },
    { text: 'Cursos', url: `/aula/programas/${id}/cursos`, active: true },
  ];

  // Manejo de eventos de navegación
  const handleTakeCourse = (idCourse) => navigate(`/aula/programa/${id}/curso/${idCourse}/`);
  const handleTakeExam = (idExamen) => navigate(`/aula/examen/${idExamen}`);
  
  // Efecto para cargar datos
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const programaData = await getProgramaById(id);
        const cursosData = await getCursosByPrograma(id);
        setPrograma(programaData);
        setCursos(cursosData);
      } catch (error) {
        setError(error.message || 'Ocurrió un error al cargar los datos.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <Error text={error} />;

  return (
    <section>
      {/* Título y Breadcrumbs */}
      <div className="flex flex-col gap-5 lg:flex-row justify-between mb-8">
        <div className="w-full">
          <h2 className="text-primary font-bold">
            <span className="text-gray-500">PROGRAMA:</span> {programa?.pronom || 'No disponible'}
          </h2>
          <div className="h-1.5 w-14 bg-secondary mt-2"></div>
        </div>
        <Breadcrumb items={breadcrumbItems} backgroundColor="#f0f0f0" color="black" />
      </div>

      {/* Contenido */}
      {cursos.length > 0 ? (
        <TableCourse
          nombreID="curcod"
          columns={columns}
          data={cursos}
          nombre="cursos"
          onCourse={(idCourse) => handleTakeCourse (idCourse)}
          onExam={() => handleTakeExam(programa.procod)}
          clickableRows
        />
      ) : (
        <p className="text-center text-gray-500 mt-5">Este programa no tiene cursos disponibles.</p>
      )}
    </section>
  );
}

export default ListaCursos;
