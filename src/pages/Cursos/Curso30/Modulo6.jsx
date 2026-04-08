import { ListPointBold } from "../../../components/ui/List";
import { ImageTextForSection } from "../../../components/ui/Imagen";


const M1s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Importancia de la presión de los neumáticos</h2>
      <ImageTextForSection
        src="/img-cursos/30/30m1.7.jpg"
        text="Una presión incorrecta puede afectar el control del vehículo, aumentando el riesgo de derrapes o pérdida de adherencia"
      />
      <p>La presión de los neumáticos es un factor clave para la seguridad, el rendimiento y la eficiencia de un vehículo, especialmente en camionetas 4x4 que transitan por diversos terrenos. Mantener la presión adecuada mejora la tracción, el desgaste uniforme y el consumo de combustible.</p>
      <p>Importancia de la presión de los neumáticos en 4x4:</p>
      <ListPointBold list={[
        "Seguridad y estabilidad: Una presión incorrecta puede afectar el control del vehículo, aumentando el riesgo de derrapes o pérdida de adherencia.",
        "Tracción óptima según el terreno:Alta presión: Ideal para carreteras pavimentadas, reduce el desgaste y mejora la eficiencia del combustible.Baja presión: Mejora el agarre en arena, lodo o nieve al aumentar la superficie de contacto.",
        "Mayor vida útil de los neumáticos: Una presión inadecuada provoca desgaste irregular y reduce su durabilidad.",
        "Eficiencia en el consumo de combustible: Una presión baja aumenta la resistencia al rodamiento, generando mayor gasto de combustible.",
        "Reducción del riesgo de daños: Una presión incorrecta puede causar pinchazos, sobrecalentamiento o reventones.",
      ]}/>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2>Importancia de la presión de los neumáticos</h2>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/Hnvicm9u61o?list=PL3V8LJJXiM6Tn7sk54FE-VG0oPHn65StL"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo6 = [M1s1,  Video];

export default Modulo6;