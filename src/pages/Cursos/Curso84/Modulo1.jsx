import { ListNumbered, ListPoint, ListPointBold } from "../../../components/ui/List";
import { ImageForSection } from "../../../components/ui/Imagen";


const M1s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Módulo 1: Conociendo a los Matpel</h2>
      <ImageForSection
        src="/img-cursos/84/84m1s1-1.jpg"
      />
      <h3>¿Qué son los MATPEL?</h3>
      <p>Los Materiales Peligrosos (MATPEL) son sustancias, materiales o elementos que, debido a sus propiedades físicas, químicas o biológicas, pueden representar un riesgo para:</p>
      <ListPoint
        list={[
          "La salud de las personas",
          "La seguridad pública",
          "La propiedad",
          "El medio ambiente"
        ]}
      />
      <p>Estos materiales pueden encontrarse en estado sólido, líquido o gaseoso, y su peligrosidad depende tanto de sus características como de la forma en que son manipulados.</p>
      <p>Ejemplos comunes de MATPEL:</p>
      <ListPoint
        list={[
          "Combustibles (gasolina, diésel)",
          "Gas licuado de petróleo (GLP)",
          "Ácidos y sustancias corrosivas",
          "Pinturas y solventes",
          "Productos químicos industriales"
        ]}
      />
      <h3>¿Dónde encontramos los MATPEL?</h3>
      <ImageForSection
        src="/img-cursos/84/84m1s1-2.jpg"
      />
      <p>Los materiales peligrosos están presentes en múltiples sectores:</p>
      <ListPoint
        list={[
          "Industrias químicas",
          "Transporte de carga",
          "Construcción",
          "Hospitales y laboratorios",
          "Uso doméstico (lejía, insecticidas, gas doméstico)"
        ]}
      />
      <p>Es importante entender que no solo las grandes industrias manejan MATPEL; muchas actividades cotidianas implican el uso de sustancias potencialmente peligrosas.</p>
    </div>
  );
};

const M1s2 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Modulo 1: Conociendo a los Matpel</h2>
      <ImageForSection
        src="/img-cursos/84/84m1s2-1.png"
      />
      <h3>Características que hacen peligroso a un material</h3>
      <p>Un material se considera peligroso cuando presenta una o más de las siguientes características:</p>
      <ListPointBold list={[
        "Inflamabilidad: Capacidad de arder fácilmente y generar incendios.",
        "Explosividad: Puede detonar o liberar energía de manera violenta.",
        "Toxicidad: Puede causar daño a la salud por inhalación, ingestión o contacto.",
        "Corrosividad: Puede destruir tejidos vivos o materiales.",
        "Reactividad: Puede reaccionar violentamente al contacto con otras sustancias.",
        "Peligro ambiental: Puede contaminar agua, suelo o aire."
      ]}/>
      <h3>Clasificación general de los MATPEL</h3>
      <ImageForSection
        src="/img-cursos/84/84m1s2-2.jpeg"
      />
      <p>Los materiales peligrosos se clasifican internacionalmente en 9 clases principales según el sistema de la ONU:</p>
      <ListNumbered list={[
        "Explosivos",
        "Gases",
        "Líquidos inflamables",
        "Sólidos inflamables",
        "Sustancias comburentes y peróxidos orgánicos",
        "Sustancias tóxicas e infecciosas",
        "Material radiactivo",
        "Sustancias corrosivas",
        "Sustancias y objetos peligrosos diversos"
      ]}/>
      <p>Esta clasificación permite estandarizar su identificación durante el transporte y almacenamiento.</p>
    </div>
  );
};

const M1s3 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Modulo 1: Conociendo a los Matpel</h2>
      <h3>¿Por qué es importante conocer los MATPEL?</h3>
      <ImageForSection
        src="/img-cursos/84/84m1s3-1.jpeg"
      />
      <p>Conocer los MATPEL permite:</p>
      <ListPoint
        list={[
          "Prevenir accidentes.",
          "Reducir riesgos laborales.",
          "Actuar correctamente ante una emergencia.",
          "Proteger la vida y el medio ambiente.",
          "Cumplir con normativas legales."
        ]}
      />
      <p>El desconocimiento es uno de los principales factores que contribuyen a incidentes con materiales peligrosos.</p>
      <h3>Responsabilidad del trabajador en Nivel 1</h3>
      <ImageForSection
        src="/img-cursos/84/84m1s3-2.jpg"
      />
      <p>El personal de Nivel 1 no realiza intervención especializada, pero sí debe:</p>
      <ListPoint
        list={[
          "Reconocer la presencia de materiales peligrosos.",
          "Identificar señales y rótulos.",
          "Mantener distancia segura.",
          "Notificar inmediatamente a personal especializado.",
          "Activar protocolos internos de emergencia."
        ]}
      />
      <p>La primera acción correcta puede evitar una tragedia.</p>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2>Video</h2>
      <h3>Conociendo a los Matpel</h3>
      <p>En este video se presenta una introducción a los materiales peligrosos (MATPEL).</p>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/Ga3SoOT3tE0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo1 = [M1s1, M1s2, M1s3, Video];

export default Modulo1;