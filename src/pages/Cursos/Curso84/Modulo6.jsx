import { ListNumbered, ListPoint } from "../../../components/ui/List";
import { ImageForSection } from "../../../components/ui/Imagen";


const M6s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Módulo 6: Funciones del Matpel nivel 1</h2>
      <ImageForSection
        src="/img-cursos/84/84m6s1-1.jpg"
      />
      <h3>Rol del personal MATPEL Nivel 1</h3>
      <p>El personal de este nivel actúa como:</p>
      <ListPoint
        list={[
          "Primer identificador del riesgo.",
          "Notificador del incidente.",
          "Primer eslabón en la activación de protocolos.",
          "Protector de su propia seguridad y la de otros."
        ]}
      />
      <p>Su actuación correcta puede evitar que un incidente se convierta en una emergencia mayor.</p>
      <h3>Funciones principales del MATPEL Nivel 1</h3>
      <h4>1. Reconocer la presencia de materiales peligrosos</h4>
      <ListPoint
        list={[
          "Identificar etiquetas, rótulos y señales.",
          "Detectar olores fuertes o inusuales.",
          "Observar derrames o fugas."
        ]}
      />
      <h4>2. Aislar el área</h4>
      <ListPoint
        list={[
          "Mantener distancia segura.",
          "Evitar que otras personas se acerquen.",
          "Señalizar o advertir del peligro si es posible."
        ]}
      />
      <h4>3. Notificar inmediatamente</h4>
      <ListPoint
        list={[
          "Informar al supervisor o responsable.",
          "Activar el protocolo interno.",
          "Proporcionar información clara sobre la situación."
        ]}
      />
      <h4>4. Protegerse adecuadamente</h4>
      <ListPoint
        list={[
          "Utilizar el EPP requerido.",
          "No tocar sustancias desconocidas.",
          "No intentar contener derrames complejos."
        ]}
      />
      <h4>5. No intervenir fuera de su competencia</h4>
      <p>El personal Nivel 1:</p>
      <ListPoint
        list={[
          "No neutraliza sustancias.",
          "No realiza descontaminación especializada.",
          "No combate incendios químicos.",
          "No manipula materiales sin autorización."
        ]}
      />
    </div>
  );
};

const M6s2 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Módulo 6: Funciones del Matpel nivel 1</h2>
      <h3>Límites de actuación</h3>
      <ImageForSection
        src="/img-cursos/84/84m6s2-1.jpg"
      />
      <p>Es fundamental comprender que:</p>
      <ListPoint
        list={[
          "Nivel 1 reconoce y reporta.",
          "Nivel especializado interviene."
        ]}
      />
      <p>Exceder los límites puede poner en riesgo la vida del trabajador y de terceros.</p>
      <h3>Importancia del trabajo en equipo</h3>
      <p>La respuesta ante incidentes con MATPEL es un trabajo coordinado que puede involucrar:</p>
      <ListPoint
        list={[
          "Brigadas internas.",
          "Equipos especializados.",
          "Servicios de emergencia."
        ]}
      />
      <p>Cada nivel cumple una función específica dentro del sistema de respuesta.</p>
    </div>
  );
};

const M6s3 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Módulo 6: Funciones del Matpel nivel 1</h2>
      <h3>Procedimiento básico de actuación (Regla de Oro)</h3>
      <ImageForSection
        src="/img-cursos/84/84m6s3-1.png"
      />
      <p>Ante la presencia de un posible incidente con MATPEL:</p>
      <ListNumbered
        list={[
          "Reconocer el peligro.",
          "Retirarse a una distancia segura.",
          "Reportar inmediatamente."
        ]}
      />
      <p>Esta regla resume la función esencial del MATPEL Nivel 1.</p>
      <h3>Actitudes clave del personal Nivel 1</h3>
      <p>Un trabajador MATPEL Nivel 1 debe demostrar:</p>
      <ListPoint
        list={[
          "Responsabilidad.",
          "Disciplina.",
          "Observación constante.",
          "Cumplimiento de normas.",
          "Cultura preventiva."
        ]}
      />
      <p>La prevención es la mejor herramienta de seguridad.</p>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2>Video</h2>
      <h3>Funciones del Matpel Nivel 1</h3>
      <p>En este video se explican las funciones del Matpel en su primer nivel.</p>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/i3IWpoW1V7k"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo2 = [M6s1, M6s2, M6s3, Video];

export default Modulo2;