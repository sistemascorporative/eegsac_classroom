import { ListPointBold } from "../../../components/ui/List";
import { ImageTextForSection } from "../../../components/ui/Imagen";


const M1s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Cruce de charcos o vados y la adherencia del neumático</h2>
      <ImageTextForSection
        src="/img-cursos/30/30m1.10.jpg"
        text="Antes de cruzar, verificar la profundidad del agua y el tipo de terreno debajo (barro, piedras, arena)."
      />
      <p>El cruce de charcos o vados implica atravesar zonas con acumulación de agua, como charcos profundos, ríos poco caudalosos o áreas inundadas. En estos casos, la adherencia del neumático se ve afectada, lo que puede provocar pérdida de control del vehículo.</p>
      <p>Factores clave en el cruce de charcos o vados:</p>
      <ListPointBold list={[
        "Evaluación de la profundidad: Antes de cruzar, verificar la profundidad del agua y el tipo de terreno debajo (barro, piedras, arena).",
        "Velocidad controlada: Avanzar lentamente y de manera constante para evitar olas que puedan afectar el motor o la estabilidad.",
        "Uso adecuado de la tracción: En terrenos resbaladizos o con corriente, usar tracción baja (4L) para mejorar la adherencia.",
        "Evitar frenar bruscamente: El agua reduce la efectividad de los frenos; es recomendable secarlos tras el cruce pisándolos suavemente mientras se avanza.",
        "Riesgo de hidroplaneo: En charcos poco profundos a alta velocidad, los neumáticos pueden perder contacto con el suelo, reduciendo la capacidad de dirección y frenado.",
      ]}/>
      <p>Adherencia del neumático en el agua:</p>
      <ListPointBold list={[
        "Menor adherencia en superficies mojadas: El agua disminuye el agarre de los neumáticos, aumentando el riesgo de deslizamiento.",
        "Presión adecuada: Neumáticos con la presión correcta mejoran el contacto con el suelo y reducen el riesgo de hidroplaneo.",
        "Dibujo del neumático: Neumáticos con buen labrado facilitan la evacuación del agua y mejoran la estabilidad.",
      ]}/>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2>Cruce de charcos o vados y la adherencia del neumático</h2>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/xC1ISFgva4I?list=PL3V8LJJXiM6Tn7sk54FE-VG0oPHn65StL"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo9 = [M1s1,  Video];

export default Modulo9;