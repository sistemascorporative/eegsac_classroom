import React from 'react';
import { ListIcon } from '../../../components/ui/List';
import { IoMdCheckboxOutline } from "react-icons/io";
import { ImageWithInnerBorder } from "../../../components/ui/Imagen";


const Objetivos = () => {
  return (
    <section className="p-5 bg-white rounded-lg shadow-lg">
      <h2 className="font-semibold mb-4 uppercase text-center">GESTIÓN DEL MANTENIMIENTO PREVENTIVO DE MÁQUINAS CATERPILLAR</h2>
      <div className="mx-auto my-5 max-w-[500px]">
        <ImageWithInnerBorder 
          src={"/img-cursos/10/10m1.jpg"}
          alt={"curso "}
        />
      </div>
      <h2>Objetivos</h2>
      <div className="mt-4">
        <p>Al finalizar este curso usted deberá ser capaz de:</p>
        <ListIcon
          list={[
            "Definir de manera correcta el concepto de mantenimiento preventivo.",
            "Definir gestión de mantenimiento preventivo",
            "Conocer cuando, como y por que debemos realizar un mantenimiento preventivo.",
            "Conocer las distintas fuentes de información sobre mantenimiento preventivo.",
            "Mencionar las ventajas de realizar buenas prácticas de mantenimiento preventivo.",
            "Identificar las mejores practicas de control de contaminación para prevenir las condiciones adversas causadas por la contaminación.",
            "Realizar una toma de muestras APA por el método de bomba de vacío y sonda de latón.",
            "Conocer los distintos tipos de lubricantes y como elegir el lubricante indicado para un determinado componente de la máquina.",
            "Conocer los distintos filtros, identificar su eficiencia y distintos métodos de inspección para evaluar posibles fallas.",
            "Saber cómo realizar de manera efectiva una inspección de la maquina en busca de",
            "averías y prever fallas.",
            "Saber cómo realizar los distintos ajustes de la maquina siguiendo la información dada por el fabricante",
          ]}
          icon={<IoMdCheckboxOutline style={{color:"var(--primary)", width:20, height:20}}/>}
        />
      </div>
    </section>
  );
};

export default Objetivos;