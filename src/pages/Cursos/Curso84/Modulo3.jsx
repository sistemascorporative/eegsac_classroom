import { ListPointBold, ListPoint } from "../../../components/ui/List";
import { ImageForSection } from "../../../components/ui/Imagen";

const M3s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Módulo 3: Efectos a la salud causados por Matpel</h2>
      <ImageForSection
        src="/img-cursos/84/84m3s1-1.jpg"
      />
      <p>Los materiales peligrosos (MATPEL) causan efectos agudos (inmediatos) o crónicos (largo plazo) a la salud, incluyendo irritación, quemaduras, asfixia, cáncer, daños a órganos (hígado, riñones), alteraciones neurológicas y la muerte, dependiendo de la vía de exposición (inhalación, contacto cutáneo, ingestión) y la toxicidad del material. Los daños pueden ser reversibles o irreversibles.</p>
      <p>Aquí se detallan los efectos a la salud causados por los MATPEL:</p>
      <ListPointBold list={[
        "Efectos Respiratorios: Irritación de vías respiratorias, tos, dificultad para respirar y, en exposiciones crónicas, daños pulmonares.",
        "Efectos en la Piel y Ojos: Dermatitis de contacto alérgico (DCA), irritación, sensibilización, y quemaduras o destrucción de tejidos (corrosión) por contacto con sustancias químicas.",
        "Toxicidad Sistémica y Órganos: Daños a órganos específicos como el hígado, riñones o cerebro debido a la absorción de solventes o metales pesados, pudiendo causar fallas orgánicas crónicas.",
        "Efectos Neurológicos: Mareos, náuseas, vómitos, fatiga y debilidad muscular, actuando como depresores del sistema nervioso central.",
        "Efectos a Largo Plazo (Crónicos): Desarrollo de cáncer, mutaciones genéticas, malformaciones en la descendencia (teratógenos) y alteraciones hormonales.",
        "Efectos por Radiación o Explosión: Lesiones físicas graves, quemaduras térmicas y, en el caso de materiales radiactivos, alteraciones celulares graves.",
      ]}/>
      <p>La severidad del daño depende de la concentración, el tiempo de exposición y la susceptibilidad individual.</p>
      <h3>¿Cómo ingresan los MATPEL al cuerpo?</h3>
      <p>Los materiales peligrosos pueden ingresar al organismo a través de diferentes vías de exposición:</p>
      <ListPointBold list={[
        "Inhalación: Es la vía más común. Ocurre cuando se respiran gases, vapores, humos o partículas contaminadas. Ejemplo: inhalar vapores de solventes o gases tóxicos.",
        "Contacto o absorción Cutáneo: Ocurre cuando sustancias químicas entran en contacto con la piel. Ejemplo: derrames de productos químicos en la piel.",
        "Ingestión: Ocurre cuando se ingieren accidentalmente materiales peligrosos. Ejemplo: comer alimentos contaminados con productos químicos.",
        "Inyección accidental: Se produce cuando una sustancia penetra por una herida o pinchazo. Ejemplo: accidente con material contaminado."
      ]}/>
    </div>
  );
};

const M3s2 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Módulo 3: Efectos a la salud causados por Matpel</h2>
      <h3>Tipos de efectos en la salud</h3>
      <ImageForSection
        src="/img-cursos/84/84m3s2-1.jpg"
      />
      <p>Los efectos pueden variar según:</p>
      <ListPoint
        list={[
          "Tipo de sustancia",
          "Cantidad de exposición",
          "Tiempo de exposición",
          "Condiciones de la persona expuesta",
        ]}
      />
      <h4>Efectos Agudos</h4>
      <p>Aparecen poco tiempo después de la exposición.</p>
      <p>Ejemplos:</p>
      <ListPoint
        list={[
          "Irritación de ojos y piel.",
          "Dificultad para respirar.",
          "Náuseas y vómitos.",
          "Quemaduras."
        ]}
      />
      <h4>Efectos Crónicos</h4>
      <p>Se presentan después de exposiciones repetidas o prolongadas en el tiempo.</p>
      <p>Ejemplos:</p>
      <ListPoint
        list={[
          "Enfermedades respiratorias crónicas.",
          "Daño hepático o renal.",
          "Problemas neurológicos.",
          "Desarrollo de enfermedades graves."
        ]}
      />
      <h4>Factores que influyen en el daño</h4>
      <p>El impacto en la salud depende de:</p>
      <ListPoint
        list={[
          "Concentración del material peligroso.",
          "Duración del contacto.",
          "Uso o no de EPP.",
          "Condiciones de ventilación.",
          "Estado de salud previo del trabajador."
        ]}
      />
      <h4>Síntomas de exposición a MATPEL</h4>
      <p>Es importante reconocer señales tempranas de alerta:</p>
      <ListPoint
        list={[
          "Ardor en ojos o garganta.",
          "Tos persistente.",
          "Dolor de cabeza.",
          "Mareo.",
          "Enrojecimiento o ampollas en la piel.",
          "Dificultad respiratoria."
        ]}
      />
      <p>Ante cualquier síntoma, se debe informar inmediatamente al supervisor y activar los protocolos de emergencia.</p>
    </div>
  );
};

const M3s3 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Módulo 3: Efectos a la salud causados por Matpel</h2>
      <h3>Grupos de mayor riesgo</h3>
      <ImageForSection
        src="/img-cursos/84/84m3s3-1.jpeg"
      />
      <p>Algunas personas pueden ser más vulnerables:</p>
      <ListPoint
        list={[
          "Trabajadores expuestos constantemente.",
          "Personas con enfermedades respiratorias.",
          "Mujeres gestantes.",
          "Personas con sistemas inmunológicos debilitados."
        ]}
      />
      <p>La prevención es clave para todos.</p>
      <h3>Medidas de Prevención (Nivel 1)</h3>
      <p>El personal MATPEL Nivel 1 debe:</p>
      <ListPoint
        list={[
          "Reconocer el riesgo antes de actuar.",
          "No tocar sustancias desconocidas.",
          "Mantener distancia segura.",
          "Usar correctamente el EPP.",
          "Lavarse las manos después de manipular sustancias.",
          "Reportar inmediatamente cualquier derrame o fuga."
        ]}
      />
      <p>Recordatorio: Nivel 1 no realiza intervención especializada, solo identificación y notificación.</p>
      <h3>Importancia del Equipo de Protección Personal (EPP)</h3>
      <p>El EPP puede incluir:</p>
      <ListPoint
        list={[
          "Guantes",
          "Mascarillas o respiradores",
          "Gafas de seguridad",
          "Ropa de protección",
          "Botas de seguridad"
        ]}
      />
      <p>El EPP reduce significativamente el riesgo de exposición.</p>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2>Video</h2>
      <h3>Efectos a la salud causados por Matpel</h3>
      <p>En este video se explican los efectos a la salud causados por los materiales peligrosos (MATPEL).</p>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/V5s5JlJKpSI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo3 = [M3s1, M3s2, M3s3, Video];

export default Modulo3;