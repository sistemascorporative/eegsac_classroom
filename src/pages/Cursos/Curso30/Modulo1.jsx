import { ListPointBold } from "../../../components/ui/List";
import { ImageTextForSection } from "../../../components/ui/Imagen";


const M1s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Cómo manejar en hielo</h2>
      <ImageTextForSection
        src="/img-cursos/30/30m1.2.jpg"
        text="Manejar en hielo"
      />
      <p>Manejar en hielo requiere técnicas específicas para mantener el control del vehículo y evitar accidentes. La conducción en superficies heladas implica reducir la velocidad, evitar movimientos bruscos y utilizar la tracción adecuada para minimizar el riesgo de deslizamiento.</p>
      <p>Recomendaciones para manejar en hielo:</p>
      <ListPointBold list={[
        "Reducir la velocidad: Conducir más despacio permite mayor tiempo de reacción y mejor control del vehículo.",
        "Acelerar y frenar suavemente: Movimientos bruscos pueden hacer que las ruedas pierdan adherencia.",
        "Mantener distancia de seguridad: Frenar en hielo requiere más espacio que en condiciones normales.",
        "Usar marchas bajas: En vehículos 4x4, utilizar la tracción adecuada (4H o 4L) para mejorar la estabilidad.",
        "Evitar giros repentinos: Girar con suavidad para prevenir el derrape.",
        "Reconocer zonas de hielo negro: Estas áreas pueden ser difíciles de ver y extremadamente resbaladizas.",
      ]}/>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2>Cómo manejar en hielo </h2>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/6nIEcdgImYM?list=PL3V8LJJXiM6Tn7sk54FE-VG0oPHn65StL"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo1 = [M1s1, Video];

export default Modulo1;