import { ImageForSection } from "../../../components/ui/Imagen";


const M9s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 9: PRIMEROS AUXILIOS EN CARRETERAS</h2>
      <ImageForSection
        src="/img-cursos/1/1m9s1-1.png"
      />
      <h3>¿Qué son los primeros auxilios en el transporte?</h3>
      <p>En el sector del transporte por carretera, debido a la cantidad de horas que se pasan al volante, hay muchas probabilidades de sufrir un accidente de tráfico. Por ello, es crucial saber cómo actuar en estos casos.</p>
      <p>Durante los primeros momentos tras un accidente de tráfico, las víctimas tienen un alto índice de mortalidad debido a la gravedad de las lesiones sufridas. La probabilidad de supervivencia de las víctimas aumenta si la asistencia sanitaria es temprana, haciendo que la actuación de las personas que presencian el accidente sea crucial para garantizar dicha supervivencia.</p>
      <p>Es primordial que todas las personas tengan unos conocimientos básicos sobre soporte vital básico, ya que actuar de modo incorrecto puede poner en peligro a las víctimas, provocándoles lesiones más graves de las que tienen.</p>
      <p>La primera persona que atiende a las víctimas forma parte del primer eslabón de la cadena de supervivencia o cadena asistencial.</p>
      <h3>Definición:</h3>
      <p>Cadena de la supervivencia: conjunto de acciones sucesivas y coordinadas que permiten salvar la vida y mejorar la calidad de la sobrevida de la persona que es víctima de una emergencia cardiorrespiratoria.</p>
      <p>En situaciones de accidente, el estado de nerviosismo es bastante elevado. Por ello, se ha establecido un protocolo de actuación fácil de recordar y sencillo de aplicar denominado “protocolo PAS”.</p>
      <img src="/img-cursos/1/1m9s1-2.jpg" alt="" />
      <p>Último eslabón del protocolo PAS: Socorrer – Primeros Auxilios</p>
      <h4>Valoración Inicial de la Víctima:</h4>
      <p>Identificación de situaciones de riesgo vital.</p>
      <p>Establecimiento de prioridades de actuación (15 segundos).</p>
      <h4>Procedimiento para la Valoración Inicial:</h4>
      <p>Aproximación al herido:</p>
      <p>Estimular a la víctima con la voz.</p>
      <p>Estimular a la víctima con dolor (sin sacudirla si hay sospecha de lesión cervical).</p>
      <p>Vigilancia y valoración secundaria si la víctima está consciente.</p>
      <p>Aplicar el protocolo ABC si la víctima está inconsciente.</p>
      <h3>Protocolo ABC:</h3>
      <p>A: Abrir la Vía Aérea:</p>
      <p>Maniobra frente-mentón.</p>
      <p>Técnica de barrido digital si hay obstrucción por objeto.</p>
      <p>B: Comprobación de la Respiración:</p>
      <p>Ver, oír, sentir.</p>
      <p>C: Comprobación de la Circulación:</p>
      <p>Compresiones torácicas si la víctima no respira correctamente.</p>
      <h3>Resucitación Cardiopulmonar Básica (RCP):</h3>
      <p>Algoritmo de Soporte Vital Básico.</p>
      <p>Posición lateral de seguridad para víctimas inconscientes pero que respiran.</p>
      <p>Compresiones torácicas y ventilaciones boca a boca en relación 30/2.</p>
      <p>Reanimación en caso de niños con algunas modificaciones.</p>
      <h3>Control de Hemorragias:</h3>
      <p className="font-bold">Hemorragias Externas:</p>
      <p>Taponar la hemorragia con presión directa.</p>
      <p>Elevar el miembro afectado.</p>
      <p>Presión sobre la arteria responsable de la hemorragia.</p>
      <p>Torniquete como último recurso en casos extremos.</p>
      <p className="font-bold">Hemorragias Internas:</p>
      <p>Pueden ser graves y no siempre visibles externamente.</p>
      <p>Posibles hemorragias internas exteriorizadas (lesiones graves).</p>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 9: PRIMEROS AUXILIOS EN CARRETERAS</h2>
      <h3>Video</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/B-ro-rbEiJs"
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
      <h2 className="uppercase text-center text-secondary">MÓDULO 9: PRIMEROS AUXILIOS EN CARRETERAS</h2>
      <h3>Video: PRIMEROS AUXILIOS EN CARRETERAS</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/pNcFKKCdUDM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Modulo9 = [M9s1, Video, Video2];

export default Modulo9;