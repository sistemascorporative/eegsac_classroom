import React from 'react';
import { ListIcon } from '../../../components/ui/List';
import { IoMdCheckboxOutline } from "react-icons/io";
import { ImageWithInnerBorder } from "../../../components/ui/Imagen";


const Objetivos = () => {
  return (
    <section className="p-5 bg-white rounded-lg shadow-lg">
      <h2 className="font-semibold mb-4 uppercase text-center">Primeros Auxilios</h2>
      <div className="mx-auto my-5 max-w-[500px]">
        <ImageWithInnerBorder 
          src={"/img-cursos/10/10p.jpg"}
          alt={"curso "}
        />
      </div>
      <h2>Objetivos</h2>
      <div className="mt-4">
        <p>Al finalizar este curso usted deberá ser capaz de:</p>
        <ListIcon
          list={[
          ]}
          icon={<IoMdCheckboxOutline style={{color:"var(--primary)", width:20, height:20}}/>}
        />
      </div>
    </section>
  );
};

export default Objetivos;