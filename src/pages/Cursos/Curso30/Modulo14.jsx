import {  ListPointBold } from "../../../components/ui/List";
import { ImageTextForSection } from "../../../components/ui/Imagen";


const M1s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Conducción en barro con camionetas</h2>
      <ImageTextForSection
        src="/img-cursos/30/30m1.15.jpg"
        text="La conducción en barro con camionetas 4x4 "
      />
      <p>La conducción en barro con camionetas 4x4 requiere técnicas específicas para evitar atascos y mantener el control del vehículo en superficies resbaladizas con baja adherencia.</p>
      <p>Recomendaciones para conducir en barro:</p>
      <ListPointBold list={[
        "Usar la tracción adecuada: Activar 4H para barro ligero y 4L en lodo profundo para mayor torque y control.",
        "Velocidad constante: Mantener un ritmo estable sin aceleraciones bruscas para evitar que las ruedas patinen.",
        "Selección de neumáticos: Neumáticos con dibujo profundo (mud-terrain) mejoran la tracción y evitan el empastamiento de lodo.",
        "Presión de neumáticos: Reducir la presión mejora el agarre y la flotación sobre el barro.",
        "Evitar frenadas bruscas: Usar el freno motor y frenar de manera progresiva para no perder el control.",
        "Seguir huellas marcadas: Circular por las trazas dejadas por otros vehículos reduce el riesgo de hundimiento.",
        "Limpieza posterior: Retirar el barro acumulado en frenos, suspensión y chasis para evitar daños mecánicos.",
      ]}/>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2>Conducción en barro con camionetas</h2>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/U_RvSOwdjbI?list=PL3V8LJJXiM6Tn7sk54FE-VG0oPHn65StL"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo14 = [M1s1, Video];

export default Modulo14;