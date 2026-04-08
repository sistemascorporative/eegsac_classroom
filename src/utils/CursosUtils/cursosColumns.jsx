import { useMemo } from 'react';
import { SelectColumnFilter } from '../../components/TableCourse/SelectColumnFilter';
import { getColorByEstCur } from './ColorsByEstCur';


export default function cursosColumns() {
    const columns = useMemo(
        () => [
            {
                Header: "Codigo",
                accessor: "curcod",             
            },
            {
                Header: "Nombre del Curso",
                accessor: "curnom",
            },
            {
                Header: "Estado",
                accessor: "curestcurcod.estcurnom",
                Filter: SelectColumnFilter,
                filter: 'includes',
                Cell: ({ value }) => (
                    <div className=''>
                        <p style={getColorByEstAlq(value)}>{value}</p>
                    </div>
                ),
            },           
        ],
        []
    );
    return columns;
}
