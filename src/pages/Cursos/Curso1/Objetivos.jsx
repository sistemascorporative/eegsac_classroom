import React from 'react';
import { ListIcon } from '../../../components/ui/List';
import { IoMdCheckboxOutline } from "react-icons/io";
import { ImageWithInnerBorder } from "../../../components/ui/Imagen";


const Objetivos = () => {
  return (
    <section className="p-5 bg-white rounded-lg shadow-lg">
      <h2 className="font-semibold mb-4 uppercase text-center">Manejo defensivo</h2>
      <div className="mx-auto my-5 max-w-[500px]">
        <ImageWithInnerBorder 
          src={"/img-cursos/1/1o.jpeg"}
          alt={"manejo defensivo"}
        />
      </div>
      <h2>Objetivos</h2>
      <div className="mt-4">
        <p>Al finalizar este curso usted deberá ser capaz de:</p>
        <ListIcon
          list={[
            "Conocer y aplicar las normas vigentes de tránsito para una conducción responsable.",
            "Identificar las principales causas de los accidentes y las formas de evitarlos.",
            "Reconocer la importancia de las condiciones físicas y emocionales del conductor en la seguridad vial.",
            "Aplicar técnicas de manejo defensivo y conducción preventiva en diferentes situaciones.",
            "Evaluar peligros en la vía y gestionar los riesgos de manera oportuna.",
            "Utilizar correctamente conceptos de tiempo y distancia de reacción para tomar decisiones seguras.",
            "Realizar una adecuada inspección del vehículo antes y durante su uso.",
            "Actuar de manera correcta ante emergencias, brindando primeros auxilios básicos en carretera.",
            "Desarrollar habilidades para manejar situaciones con conductores reactivos.",
            "Aplicar técnicas de conducción en condiciones adversas y en pendientes.",
            "Fomentar una cultura de conducción segura y responsable."
          ]}
          icon={<IoMdCheckboxOutline style={{color:"var(--primary)", width:20, height:20}}/>}
        />
      </div>
    </section>
  );
};

export default Objetivos;