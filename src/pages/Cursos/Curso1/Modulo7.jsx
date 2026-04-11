import { ImageForSection } from "../../../components/ui/Imagen";


const M7s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 7: CLASES DE ACCIDENTES</h2>
      <ImageForSection
        src="/img-cursos/1/1m7s1-1.jpeg"
      />
      <p>Los accidentes de tránsito se clasifican principalmente en colisiones, atropellos, volcaduras, caídas de ocupantes y accidentes por fallas mecánicas o incendios, cada uno con distintos niveles de gravedad y consecuencias.</p>
      <h3>Clasificación según el tipo de impacto</h3>
      <p><strong>Colisión frontal:</strong> ocurre cuando dos vehículos chocan de frente, siendo uno de los accidentes más peligrosos debido a la fuerza directa sobre los ocupantes.</p>
      <p><strong>Colisión lateral:</strong> se produce cuando un vehículo impacta el costado de otro, común en intersecciones o cambios de carril.</p>
      <p><strong>Colisión por alcance:</strong> sucede cuando un vehículo choca por detrás a otro, generalmente por no mantener la distancia de seguridad.</p>
      <p><strong>Volcadura:</strong> el vehículo se voltea completamente, causada por curvas cerradas, exceso de velocidad o pérdida de estabilidad.</p>
      <p><strong>Atropello:</strong> un vehículo impacta a un peatón o ciclista, siendo uno de los accidentes más graves y con alta mortalidad.</p>
      <p><strong>Caída de ocupantes:</strong> el pasajero pierde el equilibrio y cae del vehículo en movimiento, sin que haya choque o volcadura.</p>
      <p><strong>Accidentes por fallas mecánicas o incendios:</strong> incluyen problemas eléctricos, mecánicos o combustión del vehículo sin un accidente previo.</p>
      <p><strong>Otros accidentes:</strong> eventos no clasificados anteriormente, como objetos lanzados por vehículos que causan daños o lesiones.</p>
      <h3>Clasificación según la gravedad</h3>
      <p><strong>Solo daños materiales:</strong> no hay heridos ni fallecidos, solo perjuicios a vehículos o infraestructura.</p>
      <p><strong>Con heridos:</strong> se producen lesiones que requieren atención médica, además de posibles daños materiales.</p>
      <p><strong>Con muertos:</strong> accidentes con víctimas fatales, a veces combinados con heridos y daños materiales.</p>
      <h3>Factores de riesgo y causas comunes</h3>
      <p><strong>Errores humanos:</strong> distracciones, exceso de velocidad, uso del celular, alcohol o drogas.</p>
      <p><strong>Fallas mecánicas:</strong> frenos, dirección, neumáticos o sistemas de iluminación defectuosos.</p>
      <p><strong>Condiciones de la vía:</strong> asfalto en mal estado, señalización deficiente, baches o derrumbes.</p>
      <p><strong>Factores climatológicos:</strong> lluvia, nieve, hielo, niebla o viento fuerte.</p>
      <p><strong>Causas combinadas:</strong> cuando intervienen varios factores simultáneamente.</p>
      <h3>Estadísticas y prevención</h3>
      <p>En Colombia, por ejemplo, el 80% de los accidentes fueron caídas de ocupantes y el 8,7% colisiones, siendo las motocicletas los vehículos más involucrados en accidentes con objetos fijos. La prevención incluye mantener distancia de seguridad, respetar límites de velocidad, usar cinturón de seguridad o casco, y mantener el vehículo en buen estado.</p>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 7: CLASES DE ACCIDENTES</h2>
      <h3>Video</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/VsL65cw2dto"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Video2 = () => {
  return(
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 7: CLASES DE ACCIDENTES</h2>
      <h3>Video: ESTADÍSTICAS DE ACCIDENTES DE TRÁNSITO EN PERÚ</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/Y4cacst5IFw"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Modulo7 = [M7s1, Video, Video2];

export default Modulo7;