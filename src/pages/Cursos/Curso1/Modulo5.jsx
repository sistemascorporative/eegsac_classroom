import { ImageForSection } from "../../../components/ui/Imagen";
import { ListNumberedBold } from "../../../components/ui/List";


const M5s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 5: CAUSAS DE LOS ACCIDENTES DE TRÁNSITO</h2>
      <ImageForSection
        src="/img-cursos/1/1m5s1-1.jpeg"
      />
      <p>Las principales causas de accidentes de tránsito incluyen distracciones al volante, exceso de velocidad, conducción bajo efectos de alcohol o drogas, fatiga, conducción temeraria y condiciones adversas de la vía.</p>
      <h3>Principales causas</h3>
      <ListNumberedBold list={[
        "Distracciones al volante: Usar el celular, comer, maquillarse, manipular la radio o el GPS son acciones que desvían la atención del conductor y aumentan significativamente el riesgo de colisión.",
        "Exceso de velocidad: Conducir por encima de los límites establecidos reduce el tiempo de reacción ante imprevistos y aumenta la gravedad de los accidentes.",
        "Alcohol y drogas: El consumo de alcohol o drogas disminuye la coordinación, el tiempo de reacción y la percepción de riesgos, siendo una de las causas más graves de accidente.",
        "Fatiga y somnolencia: Conducir cansado disminuye los reflejos y la capacidad de reacción, incrementando la probabilidad de salirse de la vía o colisionar.",
        "Conducción temeraria: Maniobras agresivas, no respetar señales de tránsito y adelantar de manera imprudente son factores que elevan el riesgo de accidentes.",
        "Condiciones climáticas y del camino: Lluvia, nieve, hielo, niebla, carreteras en mal estado o con poca visibilidad dificultan el control del vehículo y contribuyen a accidentes.",
        "Fallas mecánicas: Frenos defectuosos, llantas en mal estado o luces rotas pueden provocar accidentes si no se realiza un mantenimiento adecuado.",
        "Conducción nocturna: La visibilidad reducida durante la noche aumenta la probabilidad de colisiones, especialmente si se combina con fatiga o distracciones."
      ]}/>
      <h3>Conclusión</h3>
      <p>La mayoría de los accidentes de tránsito son prevenibles mediante educación vial, respeto a las normas, atención constante y mantenimiento adecuado del vehículo. Identificar y evitar estos factores de riesgo es clave para reducir lesiones y muertes en las vías.</p>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 5: CAUSAS DE LOS ACCIDENTES DE TRÁNSITO</h2>
      <h3>Video</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/W7JmIrYhUhw"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo5 = [M5s1, Video];

export default Modulo5;