import { ListPointBold } from "../../../components/ui/List";
import { ImageTextForSection } from "../../../components/ui/Imagen";


const M1s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">¿Primero pisar freno o embrague?</h2>
      <ImageTextForSection
        src="/img-cursos/30/30m1.4.jpg"
        text="Se debe pisar primero el freno para reducir la velocidad y, cuando esté cerca de detenerse, pisar el embrague para evitar que el motor se apague"
      />
      <p>El orden en que se pisa el freno y el embrague depende de la situación y la velocidad del vehículo.</p>
      <ListPointBold list={[
        "En velocidades altas o medias: Se debe pisar primero el freno para reducir la velocidad y, cuando esté cerca de detenerse, pisar el embrague para evitar que el motor se apague.",
        "En velocidades bajas o al detenerse por completo: Se pueden pisar ambos pedales al mismo tiempo para una parada más suave.",
        "En descensos o terrenos resbaladizos (hielo, lodo, nieve): Es recomendable usar el freno motor (reduciendo marchas) antes de tocar el freno para evitar el bloqueo de ruedas y pérdida de control.",
      ]}/>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2>¿Primero pisar freno o embrague?</h2>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/Q7f3gfomRGM?list=PL3V8LJJXiM6Tn7sk54FE-VG0oPHn65StL"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo4 = [M1s1,  Video];

export default Modulo4;