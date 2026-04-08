import { Routes, Route } from 'react-router-dom';

import SideBarMenu from '../../components/SideBarMenu';
import Dashboard from './Dashboard/Dashboard';
import Programas from './Programas/Programas';
import ListaCursos from './Programas/ListaCursos';
import Cursos from './Cursos/Cursos';
import CursoDetalle from './Cursos/CursoDetalle';
import Examenes from './Examenes/Examenes';
import Examen from './Examenes/Examen';
import ExamenReview from './Examenes/ExamenReview';
import Notas from './Notas/Notas';
import Biblioteca from './Biblioteca/Biblioteca';
import Credenciales from './Credenciales/Credenciales';
import Certificados from './Credenciales/Certificados';
import ExamGenerator from './ExamGenerator/ExamGenerator';

import { Header } from "../../components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Aula() {
  return (
    <div className='flex flex-col w-full h-full'>
      <SideBarMenu>
        <Header />
        <div className="px-5 py-7 md:p-10 w-full">
          <Routes>
            <Route path='/dashboard' element={ <Dashboard/> } />n
            <Route path='/programas' element={ <Programas/> } />
            <Route path='/programas/:id' element={<ListaCursos/>}/>
            <Route path='/programa/:idPrograma/curso/:idCurso' element={<CursoDetalle/>}/>
            <Route path='/cursos' element={<Cursos/>}/>
            <Route path='/cursos/:idCurso' element={<CursoDetalle/>}/>
            <Route path='/examenes' element={ <Examenes/> } />
            <Route path='/examen/:id' element={ <Examen/> } />
            <Route path='/examen-review/:id' element={ <ExamenReview/> } />
            {/*<Route path='/notas' element={ <Notas/> } />
            <Route path='/certificados' element={ <Credenciales/> } />
            <Route path='/biblioteca' element={ <Biblioteca/> } />
            <Route path='/examen-generator' element={ <ExamGenerator/> } />
            <Route path='/credenciales' element={ <Credenciales/> } /> */}
          </Routes>
        </div>
      </SideBarMenu>
      <ToastContainer />
    </div>
  )
}

export default Aula;