import { ListPoint, ListPointBold } from "../../../components/ui/List";
import { ImageTextForSection } from "../../../components/ui/Imagen";


const M2s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 10: PRIMEROS AUXILIOS BÁSICO</h2>
      <ImageTextForSection
        src="/img-cursos/10/10mt.jpg"
        text=""
      />
      ¿Qué son los primeros auxilios en el transporte?
En el sector del transporte por carretera, debido a la cantidad de horas que se pasan al volante, hay muchas probabilidades de sufrir un accidente de tráfico. Por ello, es crucial saber cómo actuar en estos casos.
Durante los primeros momentos tras un accidente de tráfico, las víctimas tienen un alto índice de mortalidad debido a la gravedad de las lesiones sufridas. La probabilidad de supervivencia de las víctimas aumenta si la asistencia sanitaria es temprana, haciendo que la actuación de las personas que presencian el accidente sea crucial para garantizar dicha supervivencia.
Es primordial que todas las personas tengan unos conocimientos básicos sobre soporte vital básico, ya que actuar de modo incorrecto puede poner en peligro a las víctimas, provocándoles lesiones más graves de las que tienen.
La primera persona que atiende a las víctimas forma parte del primer eslabón de la cadena de supervivencia o cadena asistencial.

Definición:
Cadena de la supervivencia: conjunto de acciones sucesivas y coordinadas que permiten salvar la vida y mejorar la calidad de la sobrevida de la persona que es víctima de una emergencia cardiorrespiratoria.
En situaciones de accidente, el estado de nerviosismo es bastante elevado. Por ello, se ha establecido un protocolo de actuación fácil de recordar y sencillo de aplicar denominado “protocolo PAS”.





Último eslabón del protocolo PAS: Socorrer – Primeros Auxilios
Valoración Inicial de la Víctima:
Identificación de situaciones de riesgo vital.
Establecimiento de prioridades de actuación (15 segundos).
Procedimiento para la Valoración Inicial:
Aproximación al herido:
Estimular a la víctima con la voz.
Estimular a la víctima con dolor (sin sacudirla si hay sospecha de lesión cervical).
Vigilancia y valoración secundaria si la víctima está consciente.
Aplicar el protocolo ABC si la víctima está inconsciente.
Protocolo ABC:
A: Abrir la Vía Aérea:
Maniobra frente-mentón.
Técnica de barrido digital si hay obstrucción por objeto.
B: Comprobación de la Respiración:
Ver, oír, sentir.
C: Comprobación de la Circulación:
Compresiones torácicas si la víctima no respira correctamente.
Resucitación Cardiopulmonar Básica (RCP):
Algoritmo de Soporte Vital Básico.
Posición lateral de seguridad para víctimas inconscientes pero que respiran.
Compresiones torácicas y ventilaciones boca a boca en relación 30/2.
Reanimación en caso de niños con algunas modificaciones.
Control de Hemorragias:
Hemorragias Externas:
Taponar la hemorragia con presión directa.
Elevar el miembro afectado.
Presión sobre la arteria responsable de la hemorragia.
Torniquete como último recurso en casos extremos.
Hemorragias Internas:
Pueden ser graves y no siempre visibles externamente.
Posibles hemorragias internas exteriorizadas (lesiones graves).

    </div>
  );
};

const M2s2 = () => {
  return (
    <div className="space-y-3">
      <h2></h2>
      <ImageTextForSection
        src="/img-cursos/10/10ms.png"
        text=""
      />
      <ListPoint list={[
      ]}/>
    </div>
  );
};

const M2s3 = () => {
  return (
    <div className="space-y-3">
      <h2></h2>
      <ImageTextForSection
        src="/img-cursos/10/10ms.png"
        text=""
      />
      <ListPoint list={[
      ]}/>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2>Video</h2>
      <h3></h3>
      <p></p>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo10 = [M2s1, M2s2, M2s3, Video];

export default Modulo10;