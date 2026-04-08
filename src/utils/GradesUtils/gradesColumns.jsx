import { useMemo } from 'react';
import { SelectColumnFilter } from '../../components/Table/SelectColumnFilter';

export default function gradesColumns() {
    const columns = useMemo(
        () => [
            {
                Header: "Código",
                accessor: "curcod",             
            },
            {
                Header: "Nombre del Curso",
                accessor: "curnom",
                Filter: SelectColumnFilter,
                filter: 'includes',
            },
            {
                Header: "Puntuación",
                accessor: "curnom",
            },
        ],
        []
    );
    return columns;
}
