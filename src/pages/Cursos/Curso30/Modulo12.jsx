import {  ListPointBold } from "../../../components/ui/List";
import { ImageTextForSection } from "../../../components/ui/Imagen";


const M1s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">¿Cómo funciona la caja de transferencia de los 4x4</h2>
      <ImageTextForSection
        src="/img-cursos/30/30m1.13.jpg"
        text="Funcionamiento de la caja de transferencia"
      />
      <p>La caja de transferencia es un componente clave en los vehículos 4x4, encargado de distribuir la potencia del motor a las cuatro ruedas, permitiendo cambiar entre diferentes modos de tracción según el terreno.</p>
      <p>Funcionamiento de la caja de transferencia:</p>
      <ListPointBold list={[
        "Distribución de tracción: Envía la fuerza del motor a los ejes delantero y trasero en proporciones adecuadas.",
        "Modos de operación: 2H (Tracción en dos ruedas) Envía potencia solo a las ruedas traseras, ideal para carreteras secas.4H (Tracción en cuatro ruedas alta) Distribuye potencia a las cuatro ruedas, recomendado para terrenos resbaladizos como nieve, lodo o grava.4L (Tracción en cuatro ruedas baja) Aumenta la fuerza y control a bajas velocidades, útil en pendientes pronunciadas, barro profundo o rocas.",
        "Diferencial central: Algunos sistemas incluyen un diferencial central que permite el uso de 4H en asfalto sin dañar el sistema.",
      ]}/>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2>¿Cómo funciona la caja de transferencia de los 4x4</h2>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/-3FBnXqcPhM?list=PL3V8LJJXiM6Tn7sk54FE-VG0oPHn65StL&t=2"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo12 = [M1s1,  Video];

export default Modulo12;