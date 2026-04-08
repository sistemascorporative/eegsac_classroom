import { ImageWithInnerBorder } from "../../../components/ui/Imagen";


const Introduccion = () => {
  return (
    <section className="p-5 bg-white rounded-lg shadow-lg space-y-3">
      <h2 className="font-semibold mb-4 uppercase text-center">Matpel Nivel 1</h2>
      <div className="mx-auto my-5 max-w-[500px]">
        <ImageWithInnerBorder 
          src={"/img-cursos/84/84i.jpg"}
          alt={"curso"}
        />
      </div>
      <h2>Introducción</h2>
      <p>El curso MATPEL Nivel 1 (Materiales Peligrosos – Nivel Básico) está diseñado para brindar los conocimientos fundamentales sobre la identificación, clasificación y manejo inicial de materiales peligrosos, conforme a normativas nacionales e internacionales vigentes.</p>
      <p>En un entorno donde el transporte, almacenamiento y manipulación de sustancias químicas forman parte de múltiples actividades industriales y comerciales, es indispensable que el personal conozca los riesgos asociados a estos materiales y las medidas preventivas necesarias para proteger la vida, la salud y el medio ambiente.</p>
    </section>
  );
};

export default Introduccion;