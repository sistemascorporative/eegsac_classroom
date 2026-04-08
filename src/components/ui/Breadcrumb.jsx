import { FaHome } from "react-icons/fa";

function Breadcrumb({ items, backgroundColor, color }) {
  return(
    <nav style={{ backgroundColor: backgroundColor }}>
      <ul className="flex p-4">
        <li className=''>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <FaHome/>
          </a>
        </li>
        {items.map((item, index) => (
          <li key={index} className="mr-2">
            <span className="mx-4 h-auto text-gray-400 font-medium">/</span>
            {index !== items.length - 1 ? (
              <a href={item.url} className="text-gray-600" style={{ color: color }}>
                {item.text}
              </a>
            ) : (
              <span className="text-gray-800" style={{ color: color }}>
                {item.text}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

const BreadcrumbClassroom = ({ idPrograma, idCurso }) => {
  return(
    <nav>
      <ul className="flex p-4">
        <li className=''>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <FaHome/>
          </a>
        </li>
        <li className="mr-2">
          <span className="mx-4 h-auto text-gray-400 font-medium">/</span>
            <a href="/aula/programas" className="text-gray-600">
              Programas
            </a>
        </li>
        <li className="mr-2">
          <span className="mx-4 h-auto text-gray-400 font-medium">/</span>
            <a href={`/aula/programas/${idPrograma}`} className="text-gray-600">
              Cursos
            </a>
        </li>
        <li className="mr-2">
          <span className="mx-4 h-auto text-gray-400 font-medium">/</span>
            <a href="/aula/programas" className="text-gray-600">
              {idCurso}
            </a>
        </li>
      </ul>
    </nav>
  );
};

export {Breadcrumb, BreadcrumbClassroom}