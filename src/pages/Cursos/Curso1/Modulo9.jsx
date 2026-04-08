import { ListPoint } from "../../../components/ui/List";
import { ImageForSection } from "../../../components/ui/Imagen";


const M9s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 9: ESTADÍSTICAS DE LOS ACCIDENTES DE TRÁNSITO</h2>
      <ImageForSection
        src="/img-cursos/1/1m9s1-1.png"
      />
      <p>En 2023, Perú enfrentó un año marcado por la siniestralidad vial, con 87,172 accidentes de tránsito registrados. Este número refleja un problema crítico de seguridad vial en el país. Las principales causas de estos accidentes fueron:</p>
      <ListPoint list={[
        "Imprudencia del conductor: 28.1%",
        "Exceso de velocidad: 26.4%",
        "Ebriedad del conductor: 7.1%",
        "Imprudencia del peatón: 3%",
        "Otros factores: 35.4%"
      ]}/>
      <p>Como consecuencia de estos accidentes, 3,138 personas fallecieron y 58,082 quedaron lesionadas. La Policía Nacional del Perú y el Ministerio de Transportes y Comunicaciones (MTC) han trabajado en la implementación de políticas públicas para mejorar la educación vial y la infraestructura de seguridad vial, como parte de la campaña "Perú conduce seguro".</p>
      <p>En 2024, el Perú ha enfrentado un aumento significativo en los accidentes de tránsito, con más de 1.300 incidentes reportados hasta septiembre. Este aumento representa un incremento del 10% en comparación con el año anterior. Los accidentes han dejado un saldo devastador de 1.635 personas fallecidas, con choques como la causa principal de estos siniestros. La Policía Nacional del Perú ha instado a los conductores a respetar los límites de velocidad y evitar comportamientos de riesgo, como el consumo de alcohol antes de conducir. Además, se han realizado operativos y campañas de sensibilización sobre la seguridad vial para mejorar la infraestructura vial y reducir los puntos de alto riesgo.</p>
      <p>Las estadísticas de accidentes de tránsito en Perú para el año 2025 revelan un panorama preocupante de inseguridad vial. A continuación se presentan algunos de los datos más relevantes:</p>
      <p>2,985 fallecidos por accidentes de tránsito entre enero y octubre de 2025, según la Asociación de Víctimas de Accidentes de Tránsito (Aviactran).</p>
      <p>3,455 muertos por accidentes de tránsito en 2025, según el registro policial citado por la prensa.</p>
      <p>2,551 muertes por accidentes de tránsito en lo que va del año 2025, según el Sistema Informático Nacional de Defunciones (SinaDEF).</p>
      <p>965 personas fallecidas y 2,467 heridas en lo que va del año 2025, según el reporte oficial del Ministerio de Transportes y Comunicaciones (MTC).</p>
      <p>Estos datos reflejan la gravedad del problema de inseguridad vial en el país y la necesidad urgente de medidas de prevención y educación vial.</p>
    </div>
  );
};

const Modulo9 = [M9s1];

export default Modulo9;