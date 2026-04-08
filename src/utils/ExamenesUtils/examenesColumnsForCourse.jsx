import { SelectColumnFilter } from '../../components/Table/SelectColumnFilter';
import { getColorByEstExa } from "../../utils/ExamenesUtils/ColorsByEstExa";


const examenesColumnsForCourse = [
  {
    Header: 'COD',
    accessor: 'regexacurexacod.exacurcod.curcod',
  },
  {
    Header: 'Nombre del curso',
    accessor: 'regexacurexacod.exacurcod.curnom',
  },
  {
    Header: 'Estado',
    accessor: 'regexacurestexacod.estexanom',
    Filter: SelectColumnFilter,
    filter: 'includes',
    Cell: ({ value }) => (
      <p className="text-center" style={getColorByEstExa(value)}>{value}</p>
    ),
  },
  {
    Header: 'N° intentos',
    accessor: 'regexacurint',
  },
  {
    Header: 'Nota',
    accessor: 'regexacurpun',
  },
];

export default examenesColumnsForCourse;
