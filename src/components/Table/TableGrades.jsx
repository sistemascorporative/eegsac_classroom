import React, { useState } from "react";
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

function TableGrades ({ nombreID, columns, data, nombre, onCourse, onExam, clickableRows}) {

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
      navigate(`/${nombre}/${rowId}`);
    }
  };


  // Renderizar la IU de la tabla
  return (
  <div className='flex flex-col gap-5'>
    
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
    <div className="flex flex-col p-5 items-stretch gap-5 w-auto rounded-lg bg-white shadow-lg">
      {/* Tabla */}
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, hIndex) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={hIndex}
              className="h-10 border-2 border-primary"
            >
              {headerGroup.headers.map((column, columnId) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={columnId}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "border-b-4 border-secondary"
                        : "border-t-4 border-sky-500"
                      : ""
                  }
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                key={row.id}
                className="h-8 items-center"
              >
                {row.cells.map((cell, cIndex) => {
                  return(
                    <td
                      {...cell.getCellProps()}
                      key={cIndex}
                      className="border border-gray-200"
                      onClick={() => {
                        if (cIndex > 0) {
                          handleRowClick(eval(`row.original.${nombreID}`));
                        }
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
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
          {[5, 10, 20].map(pageSize => (
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

export { TableGrades };