import { ListPointBold } from "../../../components/ui/List";
import { ImageTextForSection } from "../../../components/ui/Imagen";


const M1s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Conducción segura de camionetas</h2>
      <ImageTextForSection
        src="/img-cursos/30/30m1.9.jpg"
        text="Reducir la velocidad antes de entrar a una curva y utilizar marchas bajas en descensos."
      />
      <p>La conducción segura de camionetas consiste en aplicar técnicas de manejo defensivo y buenas prácticas para minimizar riesgos, garantizar la estabilidad del vehículo y proteger a los ocupantes en todo tipo de terrenos y condiciones.</p>
      <p>Principios de conducción segura en camionetas:</p>
      <ListPointBold list={[
        "Manejo defensivo: Anticipar riesgos, mantener distancia de seguridad y estar alerta ante imprevistos.",
        "Control de velocidad: Ajustar la velocidad según el tipo de vía, la carga y las condiciones climáticas.",
        "Uso adecuado de frenos y tracción:Aplicar frenado progresivo, especialmente en terrenos resbaladizos.Usar tracción 4x4 (4H o 4L) en lodo, nieve, arena o pendientes pronunciadas.",
        "Carga bien distribuida: Evitar sobrecargar el vehículo y distribuir el peso correctamente para mayor estabilidad.",
        "Neumáticos y mantenimiento: Verificar la presión y el estado de los neumáticos, además de realizar revisiones mecánicas periódicas.",
        "Seguridad en curvas y pendientes: Reducir la velocidad antes de entrar a una curva y utilizar marchas bajas en descensos.",
        "Condiciones climáticas: Adaptar la conducción a la lluvia, nieve, niebla o vientos fuertes para evitar accidentes.",
      ]}/>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2>Conducción segura de camionetas</h2>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/f-6dNNV4Vwc?list=PL3V8LJJXiM6Tn7sk54FE-VG0oPHn65StL"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo8 = [M1s1,  Video];

export default Modulo8;