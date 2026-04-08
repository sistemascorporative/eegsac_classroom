import { SelectColumnFilter } from '../../components/Table/SelectColumnFilter';
import { getColorByEstExa } from "../../utils/ExamenesUtils/ColorsByEstExa";


const examenColumns = [
  {
    Header: 'COD',
    accessor: 'regexaproexacod.exacurcod.curcod',
  },
  {
    Header: 'Nombre del curso',
    accessor: 'regexaproexacod.exacurcod.curnom',
  },
  {
    Header: 'Estado',
    accessor: 'regexaproestexacod.estexanom',
    Filter: SelectColumnFilter,
    filter: 'includes',
    Cell: ({ value }) => (
      <p className="text-center" style={getColorByEstExa(value)}>{value}</p>
    ),
  },
  {
    Header: 'N° intentos',
    accessor: 'regexaproint',
  },
  {
    Header: 'Nota',
    accessor: 'regexapropun',
  },
];

export default examenColumns;
