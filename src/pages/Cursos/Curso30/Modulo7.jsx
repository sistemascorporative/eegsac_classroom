import { ListPointBold } from "../../../components/ui/List";
import { ImageTextForSection } from "../../../components/ui/Imagen";


const M1s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Cómo funciona el control de estabilidad</h2>
      <ImageTextForSection
        src="/img-cursos/30/30m1.8.jpg"
        text="Aplica los frenos en una o más ruedas para corregir la dirección"
      />
      <p>El control de estabilidad (ESP - Electronic Stability Program o ESC - Electronic Stability Control) es un sistema de seguridad activa que ayuda a mantener el control del vehículo en situaciones de pérdida de adherencia o derrape.</p>
      <p>Funcionamiento del control de estabilidad:</p>
      <ListPointBold list={[
        "Sensores de movimiento: El sistema monitorea constantemente la velocidad de las ruedas, la dirección del volante y la aceleración lateral.",
        "Detección de pérdida de control: Si el vehículo empieza a derrapar o desviarse de la trayectoria deseada, el sistema detecta la diferencia entre la dirección del volante y la trayectoria real.",
        "Corrección automática:",
        "Frenado selectivo: Aplica los frenos en una o más ruedas para corregir la dirección.",
        "Ajuste de potencia: Reduce la potencia del motor para recuperar la estabilidad.",
        "Asistencia en curvas y superficies resbaladizas: Ayuda a evitar accidentes en curvas cerradas, suelo mojado, hielo, lodo o maniobras bruscas.",
      ]}/>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2>Cómo funciona el control de estabilidad</h2>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/Q6A4WpxJH2g?list=PL3V8LJJXiM6Tn7sk54FE-VG0oPHn65StL"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo7 = [M1s1,  Video];

export default Modulo7;