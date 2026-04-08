import React from 'react';
import { ListIcon } from '../../../components/ui/List';
import { IoMdCheckboxOutline } from "react-icons/io";
import { ImageWithInnerBorder } from "../../../components/ui/Imagen";


const Objetivos = () => {
  return (
    <section className="p-5 bg-white rounded-lg shadow-lg">
      <h2 className="font-semibold mb-4 uppercase text-center">Manejo Defensivo 4x4</h2>
      <div className="mx-auto my-5 max-w-[500px]">
        <ImageWithInnerBorder 
          src={"/img-cursos/30/30m1.1.jpg"}
          alt={"curso "}
        />
      </div>
      <h2>Objetivos</h2>
      <div className="mt-4">
        <p>Al finalizar este curso usted deberá ser capaz de:</p>
        <ListIcon
          list={[
            "Conducir un vehículo 4x4 de manera segura y eficiente, aplicando técnicas de manejo defensivo en terrenos como hielo, lodo y nieve.",
            "Identificar y prevenir riesgos en la vía, anticipando peligros y ajustando la conducción según las condiciones del camino.",
            "Tomar decisiones seguras en situaciones adversas, como atascos, deslizamientos, ascensos y descensos en superficies resbaladizas.",
            "Optimizar el rendimiento del vehículo, ajustando tracción, presión de neumáticos y velocidad según el tipo de terreno.",
            "Respetar las normas de tránsito y promover la seguridad vial, garantizando una conducción responsable en cualquier entorno.",
          ]}
          icon={<IoMdCheckboxOutline style={{color:"var(--primary)", width:20, height:20}}/>}
        />
      </div>
    </section>
  );
};

export default Objetivos;