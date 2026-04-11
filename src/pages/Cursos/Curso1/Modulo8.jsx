import { ImageForSection } from "../../../components/ui/Imagen";


const M8s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 8: TIEMPO Y DISTANCIA DE REACCIÓN</h2>
      <ImageForSection
        src="/img-cursos/1/1m8s1-1.jpg"
      />
      <p>La distancia de reacción y la distancia de frenado no son la misma cosa; son dos conceptos diferentes que se refieren a distintos aspectos del proceso de detener un vehículo.</p>
      <h3>Definiciones</h3>
      <p><strong>Distancia de Reacción:</strong> Es la distancia que recorre un vehículo desde que el conductor percibe un peligro hasta que efectivamente comienza a frenar. Este tiempo de reacción puede variar según el estado físico y mental del conductor, así como por factores externos como la fatiga o distracciones. Por ejemplo, a una velocidad de 50 km/h, un vehículo puede recorrer aproximadamente 10 metros durante el tiempo de reacción, que se estima en alrededor de 0.75 segundos.</p>
      <p><strong>Distancia de Frenado:</strong> Es la distancia que recorre el vehículo desde que se aplica el freno hasta que se detiene por completo. Esta distancia depende de varios factores, incluyendo la velocidad del vehículo, el estado de los frenos, las condiciones de la carretera y el peso del vehículo. A mayor velocidad, mayor será la distancia de frenado.</p>
      <h3>Diferencias Clave</h3>
      <p><strong>Naturaleza:</strong> La distancia de reacción es un concepto biológico que depende del conductor, mientras que la distancia de frenado es un concepto físico que depende del vehículo y las condiciones de la carretera.</p>
      <p><strong>Cálculo:</strong> La distancia total que un vehículo recorre desde que se detecta un peligro hasta que se detiene por completo es la suma de la distancia de reacción y la distancia de frenado. Por lo tanto, son componentes diferentes del proceso de detención.</p>
      <h3>La Distancia de Reacción: El Factor Humano en la Ecuación</h3>
      <p>Antes de que los frenos siquiera comiencen su trabajo, hay un intervalo de tiempo y espacio crucial: la distancia de reacción. Esta se define como la distancia que se recorre desde que el conductor detecta un peligro hasta que su pie presiona el pedal del freno. Es en este preciso instante cuando la distancia de frenado entra en juego.</p>
      <p>Confirman que desde que los ojos de un conductor detectan un problema hasta que su pie pisa el pedal del freno, se precisan aproximadamente 0,75 segundos. Este lapso, aunque parezca insignificante, se traduce en distancias considerables: a 50 km/h, representa una distancia de reacción de unos 10 metros; a 120 km/h, se dispara hasta los 25 metros. Esto subraya la importancia de la anticipación y la atención plena al volante.</p>
      <h3>Cálculo de la Distancia de Reacción</h3>
      <p>Para estimar la distancia de reacción en metros, puedes utilizar una regla práctica sencilla: multiplica el primer dígito de la velocidad a la que circulas por 3.</p>
      <p>Fórmula: (Primer dígito de la velocidad en km/h) x 3</p>
      <p>Ejemplo: Si circulas a 80 km/h, la distancia de reacción sería 8 x 3 = 24 metros.</p>
      <p>Ejemplo: A 50 km/h, sería 5 x 3 = 15 metros.</p>
      <p>Este cálculo asume un tiempo de reacción promedio y condiciones estándar. Recuerda que factores como la fatiga o las distracciones pueden aumentar significativamente esta distancia.</p>
      <h3>Cálculo de la Distancia de Frenado</h3>
      <p>Un cálculo eficaz para la distancia de frenado en metros es elevar al cuadrado la velocidad a la que circulas y dividir el resultado por 180.</p>
      <p>Fórmula: (Velocidad en km/h)^2 / 180</p>
      <p>Ejemplo: Si circulas a 80 km/h: (80 x 80) / 180 = 6400 / 180 = 35,5 metros.</p>
      <p>Ejemplo: A 50 km/h: (50 x 50) / 180 = 2500 / 180 = 13,9 metros.</p>
      <h3>Cálculo de la Distancia de Detención Total</h3>
      <p>La distancia de detención total (o de parada) es la suma de la distancia de reacción y la distancia de frenado. Es el espacio total que recorre tu vehículo desde que percibes un peligro hasta que se detiene por completo.</p>
      <p>Fórmula: Distancia de Detención Total = Distancia de Reacción + Distancia de Frenado</p>
      <p>Ejemplo: Si a 80 km/h tu distancia de reacción es de 24 metros y tu distancia de frenado es de 35,5 metros, la distancia de detención total sería 24 + 35,5 = 59,5 metros. Esto significa que, desde que detectas el problema hasta que consigues la detención completa del vehículo, habrás recorrido casi 60 metros.</p>
      <p>Es fundamental recordar que estos cálculos son teóricos y no consideran todos los factores externos que pueden influir en una situación real. Sin embargo, sirven como una base excelente para comprender la magnitud de las distancias y la importancia de la velocidad.</p>
      <img src="/img-cursos/1/1m8s1-2.png" alt="" />
    </div>
  );
};

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

const Video = () => {
  return(
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 8: TIEMPO Y DISTANCIA DE REACCIÓN</h2>
      <h3>Video</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/Qe0KyfMRrpM"
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
      <h2 className="uppercase text-center text-secondary">MÓDULO 8: TIEMPO Y DISTANCIA DE REACCIÓN</h2>
      <h3>Video: TIPOS DE CHOQUE EN NUESTRO PAÍS</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/M666UtjBz7E"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Video3 = () => {
  return(
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 8: TIEMPO Y DISTANCIA DE REACCIÓN</h2>
      <h3>Video: DISTANCIA DE FRENADO</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/kRY4GYyd_z4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Video4 = () => {
  return(
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 8: TIEMPO Y DISTANCIA DE REACCIÓN</h2>
      <h3>Video: QUE ES LA DISTANCIA DE FRENADO Y LA DISTANCIA DE REACCIÓN</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/6WY4CA6OobE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Video5 = () => {
  return(
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 8: TIEMPO Y DISTANCIA DE REACCIÓN</h2>
      <h3>Video: COMO CALCULAR LA DISTANCIA DE REACCIÓN Y LA DISTANCIA DE FRENADO</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/ZtZwspRozhI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Video6 = () => {
  return(
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 8: TIEMPO Y DISTANCIA DE REACCIÓN</h2>
      <h3>Video: FRENADO Y DISTANCIA SEGURA PARA VEHÍCULOS DE GRAN TAMAÑO</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/NJM2hYD4NCU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Modulo8 = [M8s1, Video, Video2, Video3, Video4, Video5, Video6];

export default Modulo8;