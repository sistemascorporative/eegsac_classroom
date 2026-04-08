import React from 'react';
import { ListIcon } from '../../../components/ui/List';
import { IoMdCheckboxOutline } from "react-icons/io";
import { ImageWithInnerBorder } from "../../../components/ui/Imagen";


const Objetivos = () => {
  return (
    <section className="p-5 bg-white rounded-lg shadow-lg">
      <h2 className="font-semibold mb-4 uppercase text-center">Matpel nivel 1</h2>
      <div className="mx-auto my-5 max-w-[500px]">
        <ImageWithInnerBorder 
          src={"/img-cursos/84/84o.png"}
          alt={"curso 84"}
        />
      </div>
      <h2>Objetivos</h2>
      <div className="mt-4">
        <p>Al finalizar este curso usted deberá ser capaz de:</p>
        <ListIcon
          list={[
            "Identificar qué son los materiales peligrosos (MATPEL), reconocer sus principales características y comprender su clasificación básica para detectar riesgos en el entorno laboral.",
            "Diferenciar los residuos peligrosos de los materiales peligrosos en uso, reconociendo sus características de peligrosidad y la importancia de su adecuada gestión.",
            "Reconocer las vías de exposición a los materiales peligrosos y los posibles efectos agudos y crónicos en la salud, promoviendo prácticas preventivas y el uso correcto del EPP.",
            "Identificar los principales peligros asociados a los materiales peligrosos y comprender las medidas básicas de prevención para evitar incidentes.",
            "Aplicar principios básicos de manejo seguro, almacenamiento y disposición de sustancias químicas y residuos peligrosos, respetando los procedimientos establecidos para el Nivel 1.",
            "Definir claramente el rol, funciones y límites de actuación del personal MATPEL Nivel 1, actuando bajo el principio de reconocer, retirarse y reportar ante incidentes."
          ]}
          icon={<IoMdCheckboxOutline style={{color:"var(--primary)", width:20, height:20}}/>}
        />
      </div>
    </section>
  );
};

export default Objetivos;