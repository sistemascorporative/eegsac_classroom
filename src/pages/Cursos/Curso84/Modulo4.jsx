import { ListPoint } from "../../../components/ui/List";
import { ImageForSection } from "../../../components/ui/Imagen";


const M4s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Módulo 4: Peligros con los Matpel</h2>
      <ImageForSection
        src="/img-cursos/84/84m4s1-1.jpg"
      />
      <h3>¿Qué entendemos por peligro?</h3>
      <p>Un peligro es cualquier condición o característica con potencial de causar daño a las personas, instalaciones o al medio ambiente.</p>
      <p>En el caso de los MATPEL, el peligro está relacionado con sus propiedades físicas y químicas, así como con su forma de almacenamiento, transporte o manipulación.</p>
      <h3>Principales tipos de peligros asociados a MATPEL</h3>
      <h4>1. Incendios</h4>
      <p>Algunos materiales son altamente inflamables y pueden encenderse fácilmente ante:</p>
      <ListPoint
        list={[
          "Chispas",
          "Llamas abiertas",
          "Electricidad estática",
          "Altas temperaturas"
        ]}
      />
      <p>Ejemplos: combustibles, solventes, gases inflamables.</p>
      <h4>2. Explosiones</h4>
      <p>Pueden ocurrir cuando:</p>
      <ListPoint
        list={[
          "Hay acumulación de gases inflamables.",
          "Se produce una reacción química violenta.",
          "Un recipiente presurizado falla."
        ]}
      />
      <p>Las explosiones pueden generar ondas de choque, proyección de fragmentos y daños estructurales.</p>
      <h4>3. Intoxicaciones</h4>
      <p>La exposición a sustancias tóxicas puede causar:</p>
      <ListPoint
        list={[
          "Problemas respiratorios.",
          "Mareos.",
          "Irritación.",
          "Daño a órganos internos."
        ]}
      />
      <p>Puede producirse por inhalación, contacto o ingestión accidental.</p>
      <h4>4. Reacciones químicas peligrosas</h4>
      <p>Algunos materiales reaccionan violentamente al mezclarse con:</p>
      <ListPoint
        list={[
          "Agua.",
          "Aire.",
          "Otras sustancias incompatibles."
        ]}
      />
      <p>Esto puede generar calor, gases tóxicos o explosiones.</p>
      <h4>5. Derrames y fugas</h4>
      <p>Los derrames pueden provocar:</p>
      <ListPoint
        list={[
          "Contaminación del suelo y agua.",
          "Exposición directa del personal.",
          "Riesgo de incendio si el producto es inflamable."
        ]}
      />
      <h4>6. Daño ambiental</h4>
      <p>Un incidente con MATPEL puede generar:</p>
      <ListPoint
        list={[
          "Contaminación del suelo.",
          "Contaminación del agua.",
          "Daños a la flora y fauna.",
          "Alteración de ecosistemas."
        ]}
      />
    </div>
  );
};

const M4s2 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Módulo 4: Peligros con los Matpel</h2>
      <h3>Factores que aumentan el riesgo</h3>
      <ImageForSection
        src="/img-cursos/84/84m4s2-1.jpeg"
      />
      <p>El peligro aumenta cuando existen:</p>
      <ListPoint
        list={[
          "Envases dañados.",
          "Almacenamiento inadecuado.",
          "Falta de ventilación.",
          "Falta de señalización.",
          "Manipulación sin EPP.",
          "Personal sin capacitación."
        ]}
      />
      <p>Muchos accidentes ocurren por descuido o desconocimiento.</p>
      <h3>Situaciones comunes de riesgo</h3>
      <p>En Nivel 1, el trabajador puede enfrentar situaciones como:</p>
      <ListPoint
        list={[
          "Olor fuerte desconocido.",
          "Fuga de gas.",
          "Recipientes abollados o corroídos.",
          "Etiquetas ilegibles.",
          "Sustancias derramadas en el piso."
        ]}
      />
      <p>En estos casos, no debe intervenir directamente, sino notificar y activar protocolos.</p>
    </div>
  );
};

const M4s3 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Módulo 4: Peligros con los Matpel</h2>
      <h3>Consecuencias de un incidente con MATPEL</h3>
      <ImageForSection
        src="/img-cursos/84/84m4s3-1.jpeg"
      />
      <p>Un accidente puede provocar:</p>
      <ListPoint
        list={[
          "Lesiones personales.",
          "Incendios estructurales.",
          "Suspensión de actividades laborales.",
          "Sanciones legales.",
          "Daño a la reputación institucional."
        ]}
      />
      <p>La prevención siempre será más económica y segura que la respuesta a una emergencia.</p>
      <h3>Principios básicos de prevención (Nivel 1)</h3>
      <p>El personal debe:</p>
      <ListPoint
        list={[
          "Identificar el peligro antes de actuar.",
          "Mantener distancia segura.",
          "No manipular sustancias desconocidas.",
          "Utilizar el EPP obligatorio.",
          "Reportar inmediatamente cualquier anomalía.",
          "Seguir los procedimientos internos."
        ]}
      />
      <p>La regla básica es: Reconocer – Retirarse – Reportar.</p>
    </div>
  );
};  

const Video = () => {
  return(
    <div className="space-y-3">
      <h2>Video</h2>
      <h3>Peligros con los Matpel</h3>
      <p>En este video se explican los peligros asociados con los materiales peligrosos (MATPEL).</p>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/yXrO2k8vToE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo4 = [M4s1, M4s2, M4s3, Video];

export default Modulo4;