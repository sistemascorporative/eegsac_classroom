import {  ListPointBold } from "../../../components/ui/List";
import { ImageTextForSection } from "../../../components/ui/Imagen";

const M1s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Conducción en nieve</h2>
      <ImageTextForSection
        src="/img-cursos/30/30m1.12.jpg"
        text="Acelerar y frenar con suavidad"
      />
      <p>La conducción en nieve requiere técnicas especiales para mantener el control del vehículo y evitar deslizamientos debido a la baja adherencia de los neumáticos sobre superficies heladas o nevadas.</p>
      <p>Principales recomendaciones para conducir en nieve:</p>
      <ListPointBold list={[
        "Reducir la velocidad: Conducir más despacio mejora la estabilidad y permite reaccionar a tiempo ante imprevistos.",
        "Acelerar y frenar con suavidad: Evitar movimientos bruscos para prevenir derrapes.",
        "Usar tracción adecuada: En camionetas 4x4, activar 4H para mejorar el agarre en nieve compacta y 4L en pendientes o nieve profunda.",
        "Neumáticos de invierno o cadenas: Mejoran la adherencia y reducen el riesgo de patinaje.",
        "Mantener distancia de seguridad: Frenar en nieve requiere más espacio que en condiciones normales.",
        "Evitar cambios bruscos de dirección: Girar con suavidad para evitar perder el control.",
        "Uso del freno motor: Reducir marchas en descensos para controlar la velocidad sin depender solo del freno.",
      ]}/>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2>Conducción en nieve</h2>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/cQWFieli8QA?list=PL3V8LJJXiM6Tn7sk54FE-VG0oPHn65StL"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo11 = [M1s1,  Video];

export default Modulo11;