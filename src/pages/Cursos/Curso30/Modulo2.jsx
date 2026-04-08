import { ListPointBold } from "../../../components/ui/List";
import { ImageTextForSection } from "../../../components/ui/Imagen";


const M1s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Técnicas de frenado con una 4x4</h2>
      <p>El frenado en un vehículo 4x4 requiere técnicas específicas para mantener el control en distintos tipos de terreno, como asfalto, lodo, nieve o hielo. Estas técnicas permiten reducir la distancia de frenado y evitar derrapes o pérdidas de tracción.</p>
      <p>Técnicas de frenado en una 4x4:</p>
      <ImageTextForSection
        src="/img-cursos/30/30m1.3.jpg"
        text="Aplicar presión gradual al pedal del freno para evitar bloqueos o deslizamientos"
      />
      <ListPointBold list={[
        "Frenado suave y progresivo: Aplicar presión gradual al pedal del freno para evitar bloqueos o deslizamientos.",
        "Uso del freno motor: Reducir marchas para disminuir la velocidad sin depender completamente del freno.",
        "Sistema ABS (si está disponible): Mantener el pie en el pedal del freno sin bombear, dejando que el sistema evite el bloqueo de ruedas.",
        "Frenado en terrenos resbaladizos (hielo, nieve, lodo): Usar marchas bajas y aplicar el freno con suavidad para evitar derrapes.",
        "Frenado en descensos: Usar la tracción baja (4L) y combinar el freno motor con una leve presión en el pedal para mayor control.",
        "Frenado de emergencia: Si es necesario detenerse rápidamente, aplicar el freno con firmeza pero sin bloquear las ruedas.",
      ]}/>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2>Técnicas de frenado con una 4x4</h2>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/ykteEqZ4lK8?list=PL3V8LJJXiM6Tn7sk54FE-VG0oPHn65StL"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo2 = [M1s1,  Video];

export default Modulo2;