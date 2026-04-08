import React from "react";
import { useNavigate } from 'react-router-dom';
import { useTable, useGlobalFilter, useSortBy, useFilters, usePagination, useRowSelect } from 'react-table';
import { GlobalFilter } from "../Table/GlobalFilter";
import { BsChevronBarLeft, BsChevronLeft, BsChevronRight, BsChevronBarRight } from "react-icons/bs";
import '../../styles/Table.css'

// Componente Table: Un componente para renderizar una tabla con funciones avanzadas.
// Props:
//   - columns: Definición de las columnas de la tabla.
//   - data: Datos para la tabla.
//   - nombre: Nombre específico para mostrar en el título.
//   - onEdit: Función para manejar la acción de editar.
//   - onDelete: Función para manejar la acción de eliminar.

function TableCourse ({ nombreID, columns, data, nombre, onCourse, onExam, clickableRows}) {

  // Use la lógica y funciones proporcionadas por useTable para construir la interfaz de usuario
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
  );

  /*seleccion de filas*/
  const navigate = useNavigate();

  const handleRowClick = (rowId) => {
    if(clickableRows) {
      navigate(`/aula/${nombre}/${rowId}`);
    }
  };


  // Renderizar la IU de la tabla
  return (
  <div className="flex flex-col gap-5">

    {/* Contenedor del filtro global */}
    <div className="flex flex-row gap-4 bg-white p-4 rounded-lg shadow-lg">
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      {headerGroups.map((headerGroup) =>
        headerGroup.headers.map((column) =>
          column.Filter ? (
            <div key={column.id} className="flex flex-row justify-evenly gap-2">
              <label htmlFor={column.id} className="text-primary text-sm self-center">{column.render("Header")}: </label>
              {column.render("Filter")}
            </div>
          ) : null
        )
      )}
    </div>

    {/* Contenedor de la lista */}
    <div className="flex flex-col gap-5 bg-white p-5 rounded-lg shadow-lg">
      
      {/* Titulo */}
      <h3>Lista de {nombre}</h3>

      {/* Tabla */}
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr className="h-10 border-2 border-primary"
              {...headerGroup.getHeaderGroupProps()} key={index}
            >
              {headerGroup.headers.map((column, index) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={index}
                      className={
                      column.isSorted
                        ? column.isSortedDesc
                          ? "border-b-4 border-secondary"
                          : "border-t-4 border-sky-500"
                        : "border-2 border-sky-600"
                    }
                >
                  {column.render("Header")}
                </th>
              ))}
              <th className="border-2 border-sky-600">Acciones</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <tr className="odd:bg-gray-100 even:bg-white h-7 hover:bg-gray-200 items-center" {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => {
                  return  (
                    <td className="border border-gray-200"
                      onClick={() => handleRowClick(row.original.curcod)}
                      {...cell.getCellProps()}
                      key={index}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
                <td className="border border-gray-200">
                  <span className="p-1 flex flex-row gap-1 items-center justify-center">
                    <button
                      onClick={() => onCourse(row.original.curcod)}
                      className="text-xs px-2 py-[6px] text-center text-white bg-green-600 border border-green-600 rounded active:text-green-500 hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring">
                      Ir al curso
                    </button>
                    {/*<button
                      onClick={() => onExam(eval(`row.original.${nombreID}`))}
                      className="text-xs px-2 py-[6px] text-center text-white bg-orange-600 border border-orange-600 rounded active:text-orange-500 hover:bg-transparent hover:text-orange-600 focus:outline-none focus:ring">
                      Examen
                    </button>*/}
                  </span>
                </td>
              </tr>            
            );
          })}        
        </tbody>
      </table>

      {/* Paginación y selección de tamaño de página */}
      <div className="paginacion">
        <p>
          <span>
            Página{' '}
            <strong>
              {state.pageIndex + 1} de {pageOptions.length}
            </strong>{' '}
          </span>
        </p>
        <div className="pag-botones">
          <button className='btn-pagin' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            <BsChevronBarLeft color='white' width={10} height={10}/>
          </button>
          <button className='btn-pagin' onClick={() => previousPage()} disabled={!canPreviousPage}>
            <BsChevronLeft color='white' width={10} height={10}/>
          </button>
          <button className='btn-pagin' onClick={() => nextPage()} disabled={!canNextPage}>
            <BsChevronRight color='white' width={10} height={10}/>
          </button>
          <button className='btn-pagin' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            <BsChevronBarRight color='white' width={10} height={10}/>
          </button> 
        </div>     
        <select className="select"
          value={state.pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[5, 10, 20, 50, 100].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Mostrar {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  </div>    
  );
}

export { TableCourse };