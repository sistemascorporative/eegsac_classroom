import { ListPoint } from "../../../components/ui/List";
import { ImageTextForSection, ImageFormat, ImageTitleForSection, ImageForSection } from "../../../components/ui/Imagen";


const M1s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Seguridad</h2>
      <ImageTextForSection
        src="/img-cursos/10/10m1s1.2.jpg"
        text="Elementos de Protección personal "
      />
      <p>La seguridad es un aspecto inherente en el trabajo, en cada actividad que realizamosforma parte de la vida diaria de cada persona,por esa razón constantemente debemos estarprevenidos, debidamente capacitados yadiestrados en toda actividad en la cual nosdesempeñamos, es unaresponsabilidadcompartida entre el colaborador y el empleadorla evaluación del medio laboral y lascondiciones de trabajo para poder tomaracciones en beneficio del trabajador en queante todo debe desempeñar sus labores en unambiente seguro.</p>
      <p>Cuando hablamos de seguridad podemos dar muchas repuestas sobre su significado yconceptos, podemos decir que es una ciencia interdisciplinaria que está encargada deevaluar, estudiar y gestionar los riesgos a los que se encuentra sometida una persona, unbien o el ambiente, definir seguridad es como decir la ausencia de peligros y riesgos.Cuando nosotros realizamos un trabajo estamos expuestos a distintos peligros, comosufrir accidentes ya sean leves o letales, por eso es muy importante adoptar una conductade seguridad para garantizar nuestra salud física y mental.; debemos diferenciar laseguridad sobre las personas (seguridad física), ambiente (seguridad ambiental), laboral(seguridad e higiene).</p>
      <h3>¿Qué entendemos por accidentes?</h3>
      <p>Es un suceso no planeado y no deseado que provoca un daño, lesión o incidencia negativa sobre un objeto o sujeto. Los accidentes ocurren por causas básicas y causas inmediatas.</p>
      <p>Las causas básicas pueden dividirse por factores personales y de trabajo.</p>
      <p><span className="font-bold text-primary">Los factores personales </span> están ligado al comportamiento humano, por ejemplo:</p>
      <ListPoint list={[
        "Falta de conocimiento y capacitación.",
        "Motivación equivocada.",
        "Por ahorrar tiempo.",
        "Buscar la comodidad.",
        "Capacidades físicas y/o mentales.",
      ]}/>
      <ImageTextForSection
        src="/img-cursos/10/10m1s1.jpg"
        text="Elementos de Protección personal "
      />
      <p><span className="font-bold text-primary">Los factores de trabajo </span>son aquellos ligados al comportamiento de la empresa, por ejemplo:</p>
      <ListPoint list={[ 
        "Falta de información.",
        "Falta de normas y procedimientos de trabajo o negligencia laboral.",
        "Diseño inadecuado de las máquinas y equipos.",
        "Desgaste de equipos y herramientas.",
        "Mantenimiento inadecuado de las máquinas y equipos.",
      ]}/>
      <h3>Causas inmediatas</h3>
      <ListPoint list={[
        "Entorno laboral (condiciones del medio ambiente y del entorno del trabajo, equipos y herramientas, infraestructura, disposición del proceso productivo, incluyendo equipo de protección personal, entre otras)",
        "Personales (actos inseguros con o sin conocimiento de causa o efecto, ya sean propios o de otro individuo)",
        "Administrativos (falta o claridad de procedimientos, ausencia de normas, inspecciones deficientes o inexistentes, supervisiones inadecuadas o inconstantes, falta de historial y seguimiento de incidentes o accidentes anteriores y otros).",
      ]}/>
      <h3>Actos inseguros</h3>
      <p>Son los comportamientos del propio trabajador que podrían dar lugar a la ocurrencia de un accidente o incidente.</p>
      <h3>Condiciones inseguras</h3>
      <p>Son aquellas circunstancias dentro o cercanas al lugar de trabajo que podrían dar lugar a la ocurrencia de un accidente o incidentes.</p>
    </div>
  );
};

const M1s2 = () => {
  return (
    <div className="space-y-3">
      <h2>Herramientas necesarias para desempeñar un trabajo seguro en máquinas pesadas</h2>
      <ImageForSection
        src="/img-cursos/10/10m1s1.3.jpg"
      />
      <h3>Análisis de seguridad en el trabajo (ATS)</h3>
      <p>El Análisis de Seguridad en el Trabajo (AST) es una herramienta básica para poder realizaruna planeación efectiva por Seguridad, Salud en el Trabajo y Protección Ambiental decualquier actividad o tarea que se realice en cualquier momento en el Centro de Trabajo. Alaplicar el ATS, se establecen las acciones para comprender, identificar y controlar losriesgos potenciales a los que pueden estar expuestos los trabajadores al realizar unaactividad, tarea, considerando los escenarios y condiciones ambientales del lugar en dondese ejecutará, así como los recursos necesarios para realizarla de forma segura. El ATS nospermite registrar por escrito y en forma detallada los peligros que existen, conocer lasconsecuencias y tomar las medidas necesarias para minimizar cualquier exposición directade tales peligros. “Es la Prevención de accidentes a través de la identificación y control delos Riesgos”.</p>
    </div>
  );
};

const M1s3 = () => {
  return (
    <div className="space-y-3">
      <div className="float-right ml-4 mb-4 w-full max-w-[280px] md:w-1/2 space-y-2">
        <ImageFormat
          src="/img-cursos/10/10m1s1.4.jpg"
          text="etiquetado"
        />
        <ImageFormat
          src="/img-cursos/10/10m1s1.5.jpg"
          text="Bloqueo "
        />
      </div>
      <h2>Bloqueo y etiquetado</h2>
      <p>El bloqueo y etiquetado va más allá de candados, tarjetas y dispositivos. El empleador debeestablecer un programa que incluya procedimientos de control de energía, capacitación de losempleados e inspecciones periódicas para garantizar que antes de que cualquier empleado realicéservicio o mantenimiento a una máquina o equipo donde pueda ocurrir activación, arranque oliberación de energía almacenada inesperados y ocasionar lesiones, la máquina deba ser aisladade la fuente de energía y dejarse fuera de servicio.</p>
      <p>El uso de cuñas y calzos evita el movimiento accidental o inesperado de equipos móviles y carga cuando los trabajadores están trabajando, el uso de cuñas en las ruedas de los camiones o equipos móviles brinda una barrera física al movimiento de las ruedas para evitar que el equipo se desplace y atropelle o lesione a un trabajador o proporciona una barrera física en los equipos para evitar que se accionen accidentalmente durante las operaciones de mantenimiento.</p>
    </div>
  );
};

const M1s4 = () => {
  return (
    <div className="space-y-3">
      <h2>Trabas de seguridad en los equipos y prácticas de seguridad</h2>
      <ImageTextForSection
        src="/img-cursos/10/10m1s1.6.jpg"
        text="eguridad en los equipos"
      />
      <p>Estos dispositivos de seguridad vienen integrados en la maquina para evitar accidentes ya sea realizando un servicio o una inspección de rutina, así como también algunos procedimientos necesarios que se deben realizar antes de comenzar a trabajar en la máquina, por ejemplo:</p>
      <ListPoint list={[
        "Bloqueo mecánico de la dirección en cargadores de rueda.",
        "Seguridad de caída del implemento en retroexcavadoras.",
        "Seguridad de caída del capo del motor en vibro compactadoras.",
        "Traba de articulación en motoniveladoras.",
        "Liberar presión hidráulica del sistema.",
        "Dejar implementos a nivel del suelo.",
        "Uso de conos para delimitar área de trabajo.",
        "Utilizar los tres puntos de contacto al subir a la maquina",
        "Utilizar las alarmas sonoras al encender y mover la máquina.",
        "Leer las etiquetas de advertencia situadas en las maquinas.",
        "Uso de EPP",
      ]}/>
    </div>
  );
};

const M1s5 = () => {
  return (
    <div className="space-y-3">
      <h2>Equipo de protección personal.</h2>
      <ImageTextForSection
        src="/img-cursos/10/10m1s1.7.jpg"
        text="protección personal"
      />
      <p>Los Equipos de Protección Personal (EPP) son elementos de uso individual destinados a darprotección al trabajador, frente a eventuales riesgos que puedan afectar su integridad durante eldesarrollo de sus labores. Es importante destacar que antes de decidir el uso de elementos deprotección personal debieran agotarse las posibilidades de controlar el problema en su fuente deorigen, debido a que ésta constituye la solución más efectiva. La implicancia legal que tiene eltema de los EPP supone, que tanto las empresas, como los trabajadores aborden esta materia conresponsabilidad, aplicando un criterio técnico, buscando el asesoramiento de profesionalesespecializados.</p>
      <p>Se clasifica en:</p>
      <ListPoint list={[
        "Protección del cráneo",
        "Protección de ojos y cara.",
        "Protección de oídos.",
        "Protección de las vías respiratorias.",
        "Protección de manos y brazos.",
      ]}/>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2>Video</h2>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/tF2JImMgGAE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo1 = [M1s1, M1s2, M1s3, M1s4, M1s5, Video];

export default Modulo1;