import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useTable, useGlobalFilter, useSortBy, useFilters, usePagination, useRowSelect } from 'react-table';

import { GlobalFilter } from "./GlobalFilter";
import { IndeterminateCheckbox } from "./IndeterminateCheckbox";
import { BsChevronBarLeft, BsChevronLeft, BsChevronRight, BsChevronBarRight } from "react-icons/bs";


// Componente Table: Un componente para renderizar una tabla con funciones avanzadas.
// Props:
//   - columns: Definición de las columnas de la tabla.
//   - data: Datos para la tabla.
//   - nombre: Nombre específico para mostrar en el título.
//   - onEdit: Función para manejar la acción de editar.
//   - onDelete: Función para manejar la acción de eliminar.
function Table ({ children, nombreID, columns, data, nombre }) {

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

  /* seleccion de filas */
  const navigate = useNavigate();
  
  const handleRowClick = (rowId) => {
    navigate(`/${nombre}/${rowId}`);
  }


  // Renderizar la IU de la tabla
  return (
  <>
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
    { children }
  </div>

  {/* Contenedor de la lista */}
  <div className="flex flex-col p-5 items-stretch gap-5 w-auto rounded-lg bg-white shadow-lg">
    <h3>Lista de {nombre}</h3>
    <table {...getTableProps()} className="tabla">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr className="text-center h-10 border-2 border-primary"
          {...headerGroup.getHeaderGroupProps()} >
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "border-b-4 border-secondary"
                        : "border-t-4 border-orange-500"
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
            <tr {...row.getRowProps()}
              className="h-7 items-center"
            >
              {row.cells.map((cell, index) => {
                return (
                  <td 
                    key={index}
                    onClick={() => {
                      handleRowClick(eval(`row.original.${nombreID}`));                      
                    }}
                    {...cell.getCellProps()}
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
  {/* <div>
      <pre>
        <code>{JSON.stringify(state.selectedRowIds, null, 2)}</code>
      </pre>
    </div>     */}
  </>    
  );
}
export { Table };