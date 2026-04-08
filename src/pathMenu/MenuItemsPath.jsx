import { MdOutlineSchool, MdSchool } from 'react-icons/md';
import { PiBooks, PiBooksFill, PiExam, PiExamFill, PiCertificate, PiCertificateFill} from 'react-icons/pi'
import { BiCategory, BiSolidCategory } from 'react-icons/bi';
import { RiBookletLine, RiBookletFill } from "react-icons/ri";
import { MdOutlineLibraryBooks } from 'react-icons/md';


const menuItems = () => [
    {
        path:"/aula/dashboard",
        name:"Dashborad",
        iconWhite: <BiCategory color='white' style={{ width:25, height:25 }} />,
        iconFill: <BiSolidCategory style={{ width: '100%', height: '100%' }} />,
        text:"En esta secciónn encontrarás un pequeño tutorial de como usar el aula virtual.",
    },
    /*{
        path:"/aula/programas",
        name:"Diplomados",
        iconWhite: <PiBooks color='white' style={{ width:25, height:25 }} />,
        iconFill: <PiBooksFill style={{ width: '100%', height: '100%' }} />,
        text:"En esta sección podrás encontrar los programas a los cuales fuiste matriculado.",
    },*/
    {
        path:"/aula/cursos",
        name:"Cursos",
        iconWhite: <RiBookletLine color='white' style={{ width:25, height:25 }} />,
        iconFill: <RiBookletFill style={{ width: '100%', height: '100%' }} />,
        text:"En esta sección podrás encontrar los cursos a los cuales fuiste matriculado.",
    },
    {
        path:"/aula/examenes",
        name:"Exámenes",
        iconWhite: <PiExam color='white' style={{ width:25, height:25 }} />,
        iconFill: <PiExamFill style={{ width: '100%', height: '100%' }} />,
        text:"En esta sección podrás ver el estado de tus examenes, es decir si aprobaste, desaprobaste o pendiente por dar el examen.",
    },
    /*{
        path:"/aula/notas",
        name:"Notas",
        iconWhite: <MdOutlineSchool color='white' style={{ width:25, height:25 }} />,
        iconFill: <MdSchool style={{ width: '100%', height: '100%' }} />,
        text:"En esta sección podrás ver tus notas de los exámenes que diste.",
    },
    {
        path:"/aula/biblioteca",
        name:"Biblioteca",
        iconWhite: <PiBooks color='white' style={{ width:25, height:25 }} />,
        iconFill: <PiBooksFill style={{ width: '100%', height: '100%' }} />,
        text:"En esta sección podrás encontrar material extra para leer.",
    },
    {
        path:"/aula/certificados",
        name:"Certificados",
        iconWhite: <PiCertificate color='white' style={{ width:25, height:25 }} />,
        iconFill: <PiCertificateFill style={{ width: '100%', height: '100%' }}/>,
        text:"En esta sección podrás descargar tus credenciales de certificación.",
    },
    {
        path:"/aula/examen-generator",
        name:"Generador de Examenes",
        iconWhite: <MdOutlineLibraryBooks color='white' style={{ width:25, height:25 }} />,
        iconFill: <MdOutlineLibraryBooks color='white' style={{ width:25, height:25 }} />,
    },*/
];

export default menuItems;