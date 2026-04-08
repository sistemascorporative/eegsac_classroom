import React from 'react';
import { ListIcon } from '../../../components/ui/List';
import { IoMdCheckboxOutline } from "react-icons/io";
import { ImageWithInnerBorder } from "../../../components/ui/Imagen";


const Objetivos = () => {
  return (
    <section className="p-5 bg-white rounded-lg shadow-lg">
      <h2 className="font-semibold mb-4 uppercase text-center">SEGURIDAD EN LA OPERACIÓN DE EQUIPOS PESADOS CATERPILLAR</h2>
      <div className="mx-auto my-5 max-w-[500px]">
        <ImageWithInnerBorder 
          src={"/img-cursos/20/20m1s1-61.jpg"}
          alt={"curso20"}
        />
      </div>
      <h2>Objetivos</h2>
      <div className="mt-4">
        <p>Al finalizar este curso usted deberá ser capaz de:</p>
        <ListIcon
          list={[
            "Identificar riesgos en la operación de equipos Caterpillar.",
            "Aplicar procedimientos de seguridad adecuados.",
            "Realizar inspecciones y mantenimiento básico.",
            "Operar los equipos de forma segura y eficiente.",
            "Usar correctamente el equipo de protección personal (EPP).",
            "Responder a emergencias de manera efectiva.",
            "Cumplir con normativas de seguridad.",
            "Usar tecnologías de seguridad avanzadas.",
            "Promover una cultura de seguridad en el trabajo.",
            "Comprender el impacto de la seguridad en la productividad.",
          ]}
          icon={<IoMdCheckboxOutline style={{color:"var(--primary)", width:20, height:20}}/>}
        />
      </div>
    </section>
  );
};

export default Objetivos;