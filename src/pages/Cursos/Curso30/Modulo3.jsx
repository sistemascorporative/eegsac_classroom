import { ListPoint } from "../../../components/ui/List";
import { ImageTextForSection } from "../../../components/ui/Imagen";

const M1s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Arranque en pendiente con camionetas</h2>
      <ImageTextForSection
        src="/img-cursos/30/30m1.5.jpg"
        text="Usar tracción baja (4L) para mayor torque y control"
      />
      <p>El arranque en pendiente es una técnica utilizada para iniciar la marcha en una superficie inclinada sin que el vehículo retroceda o pierda tracción. Es especialmente importante en camionetas 4x4 cuando se conduce en terrenos irregulares, lodo, nieve o pendientes pronunciadas.</p>
      <p>Consideraciones para 4x4:</p>
      <ListPoint list={[
        "En pendientes pronunciadas o terrenos resbaladizos, usar tracción baja (4L) para mayor torque y control.",
        "En lodo o nieve, acelerar suavemente para evitar que las ruedas patinen.",
      ]}/>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2> Arranque en pendiente con camionetas</h2>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/-sxs_Z6ll-A?list=PL3V8LJJXiM6Tn7sk54FE-VG0oPHn65StL"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo3 = [M1s1,  Video];

export default Modulo3;