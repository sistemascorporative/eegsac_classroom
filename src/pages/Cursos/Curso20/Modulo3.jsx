import { ListNumbered, ListPoint,  } from "../../../components/ui/List";
import {  ImageFormat, ImageForSection, ImageTitleForSection } from "../../../components/ui/Imagen";


const M3s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">CONSIDERACIONES ANTES Y DURANTE LA INSPECCIÓN A LOS SISTEMAS DE LOS EQUIPOS PESADOS.</h2>
      <ImageForSection
        src="/img-cursos/20/20m1s1-23.jpg"
      />
      <p>Es muy importante tener en cuenta todas las recomendaciones de seguridad y operación contempladas en el manual de operación y mantenimiento para así evitar accidentes en la operación de la máquina. Usar todos los dispositivos de seguridad e informar si hay alguna falla en uno o varios sistemas de la maquina debe reportarse cualquier desperfecto del equipo y no operarla bajo ninguna condición. El uso de EPP por cada empleado es de obligatorio cumplimiento.</p>
      <p>Luego de la posterior revisión inicial del equipo y los sistemas seguir estas recomendaciones que se detallan a continuación:</p>
      <h3>La inspección de maquinaria ayuda a su seguridad</h3>
      <p>La inspección es esencial para la seguridad de la máquina, del operador y de los individuos que se encuentren cerca. Estas inspecciones constituyen una de las mejores formas de evitar problemas mecánicos y peligrosos.</p>
      <p>Cuando se detecta una fuga, una conexión de manguera floja o cualquier otro problema antes de una falla, ayuda a evitar lesiones y a minimizar el tiempo de reparación. Es más eficaz y rentable reemplazar una pieza que un componente entero de la máquina.</p>
    </div>
  );
};

const M3s2 = () => {
  return (
    <div className="space-y-3">
      <h2>¿Cuándo realizar una inspección de maquinaria?</h2>
      <div className="float-right ml-4 mb-4 w-full max-w-[370px] md:w-1/2 space-y-2">
        <ImageFormat
          src="/img-cursos/20/20m1s1-24.jpg"
          text=""
        />
        <ImageFormat
          src="/img-cursos/20/20m1s1-25.jpg"
          text=""
        />
        <ImageFormat
          src="/img-cursos/20/20m1s1-26.jpg"
          text=""
        />
        <ImageFormat
          src="/img-cursos/20/20m1s1-27.jpg"
          text=""
        />
      </div>
      <p>Solo debe tomar unos minutos al comenzar cada turno, el llevar a cabo cada inspección de la máquina. De ser posible, continúe inspeccionando la máquina durante todo el día de trabajo y asegúrese de llevar a cabo la inspección de la misma manera todas las veces.</p>
      <p>Una inspección regular significa que se ha verificado una herramienta o un equipo antes de usarlo. La inspección de máquina es una parte programada de cada tarea. Es indispensable para el trabajo realizado, en relación con su habilidad y calificación para ejecutarlo.</p>
      <p>La Inspección de Maquinaria implica una serie de pruebas realizadas en sus máquinas, que ayudan a garantizar que los dispositivos de paro de emergencia son operativos y que las medidas de protección están en sitio. La inspección incluye un análisis preciso e independiente de la maquinaria en relación con las reglamentaciones aplicables. Se identifican riesgo y se proponen acciones para minimizar esos riesgos.</p>
      <ListPoint list={[
        "Inspección alrededor de la maquina",
        "Comprobación de los niveles de fluidos",
        "Ajustar el asiento",
        "Colocar el cinturón de seguridad",
        "Comprobar freno de estacionamiento aplicado (Bloqueo del equipo)",
        "La palanca de control de implemento en fijo",
        "Palanca de la transmisión en N",
        "Verificar el sistema monitor.",
      ]}/>
      <h3>Procedimiento despues del arranque</h3>
      <p>Deje calentar el motor en baja en vacío 05 minutos</p>
      <ListPoint list={[
        "Ciclar el sistema hidráulico.",
        "Deles un vistazo a los medidores durante la operación.",
      ]}/>
      <h3>Estacionamiento</h3>
      <ListPoint list={[
        "Estacione en terreno horizontal.",
        "Use el freno de servicio para parar la máquina.",
        "Bloquee el equipo.",
        "Use el freno de servicio para parar la máquina.",
        "Palanca de control de la transmisión en N (Aplique posición fija de las palancas hidráulicas).",
        "Baje los implementos al suelo.",
        "Conecte la traba de implementos.",
        "Conecte el freno de estacionamiento (Aplique sistema de bloqueo)..",
      ]}/>
      <p>Siga todas las recomendaciones de seguridad y operación antes y durante la operación de la máquina y de los sistemas para evitar accidentes. Recuerde la fuente más fidedigna del operador es el manual de operación y mantenimiento ante dudas e inquietudes se debe consultar el manual de operación o llamar al departamento de capacitación o entrenamiento técnico nunca asuma riesgos innecesarios ni trabaje bajo supuestos se debe estar completamente seguro de la operación del equipo.</p>
      <p>Consulte constantemente el manual de operación y mantenimiento y no opere ni realice ningún mantenimiento sin haberle leído y comprendido dicho manual.</p>
      <p>En este manual encontraras información muy relevante en cuanto a la operación en sí de la máquina y de los sistemas, además, muchos detalles precisos sobre capacidades de llenado, pares de apriete, recomendaciones muy puntuales del fabricante para tenerlas en cuenta al operar la máquina.</p>
      <p>Se debe inspeccionar la máquina en busca de posibles fugas, acumulación de residuos, fallas debido a fatiga potencial de materiales, fallas progresivas en los componentes, o fallas severas en el equipo. Esto no solo garantizará la integridad de las máquinas, sino que las mantendrá en condiciones seguras para su operación.</p>
    </div>
  );
};

const M3s3 = () => {
  return (
    <div className="space-y-3">
      <h2>¿Por qué inspeccionar una máquina?</h2>
      <ImageForSection
        src="/img-cursos/20/20m1s1-28.jpg"
      />
      <ListPoint list={[
        "Además de cumplir con su objetivo principal que es detectar situaciones de riesgo, la inspección de maquinaria puede cumplir con los siguientes objetivos:",
        "Identificar problemas no previstos durante el diseño o el análisis del trabajo. Cuando se inspecciona el lugar de trabajo y se observa a los trabajadores, se hacen evidentes los requisitos de Seguridad y Salud que no se tomaron en cuenta durante el diseño y los peligros que no se descubrieron durante el análisis del trabajo.",
        "Identificar deficiencias de los equipos de trabajo. Las inspecciones ayudan a descubrir si las máquinas se han desgastado hasta llegar al límite de su condición, si su capacidad es deficiente o si se ha usado inadecuadamente.",
        "Identificar si hay acciones inapropiadas de los trabajadores que puedan tener consecuencias negativas en el desgaste de sus máquinas. Identificar los efectos indeseados de cambios en el proceso productivo o en los materiales.",
        "Proponer soluciones a las deficiencias encontradas. La inspección de maquinaria ayuda.",
        "Revisar antes de encender la máquina y probar todos los sistemas después del arranque del equipo para comprobar que el equipo se encuentra en buen estado y evitar daños a la maquina por falta de una buena inspección a los niveles del equipo.",
      ]}/>
      <p>Una vez encendida la maquina verificar si existen fugas de combustible, aceite motor, aceite hidráulico, refrigerante.</p>
    </div>
  );
};

const M3s4 = () => {
  return (
    <div className="space-y-3">
      <h2>¿Qué es inspección pre operacional en maquinaria pesada?</h2>
      <ImageForSection
        src="/img-cursos/20/20m1s1-29.jpg"
      />
      <p>La inspección de maquinaria es un punto clave para garantizar la operación y el buen funcionamiento de la misma. ... Se debe inspeccionar la máquina en busca de posibles fugas, acumulación de residuos, fallas debido a fatiga potencial de materiales, fallas progresivas en los componentes, o fallas severas en el equipo.</p>
      <p>Después, de realizar el encendido del equipo realizar unos movimientos para comprobar el correcto funcionamiento de todos los sistemas hidráulicos de la máquina y observar durante la operación del equipo su comportamiento correcto.</p>
    </div>
  );
};

const M3s5 = () => {
  return (
    <div className="space-y-3">
      <h2>¡RECOMENDACIONES MUY IMPORTANTES!</h2>
      <ImageForSection
        src="/img-cursos/20/20m1s1-30.jpg"
      />
      <ListNumbered list={[
        "Los operadores deben leer el manual de operación.",
        "Es primordial realizar una inspección visual antes de operar el equipo, es decir, aplicar la famosa frase “vuelta al gallo”.",
        "Recomienda calentar el equipo 3 a 5 min. Antes de poner a trabajar",
        "No usar la calefacción A/C con las puertas abiertas.",
        "Evitar someter el equipo a zonas inundadas de agua mayor a la altura del aro de la rueda, y en caso de orugas a la mitad del bastidor.",
        "Antes de apagar el motor debe estar en ralentí por 5 minutos para evitar daños en el turbo.",
        "Realizar ajustes como pernos de rueda, zapatas y guardas.",
      ]}/>
      <p>Para mantener la seguridad en maquinaria pesada debes conocer la capacidad de la carga, si es baja, media o alta, o según el área de trabajo, ya que depende del sistema de trabajo que hayas diseñado en la planificación se sabrá si se involucran máquinas de movimiento sin rotación con giro limitado o con rotación y, por último, la forma de movilización de la maquinaria, ya que pueden ser de llantas, orugas, rieles o estáticas.</p>
      <ListNumbered list={[
        "Todos los equipos deben ser engrasados cada 8 horas de trabajo en puntos de alta fricción y debe realizar un engrase general cada 250 horas",
        "Es muy importante la limpieza del tablero de fusibles y relay cada 250 hrs.",
        "Se debe informar cualquier anomalía que exista en el equipo, alertas en el tablero, ruidos extraños, etc.",
      ]}/>
    </div>
  );
};

const M3s6 = () => {
  return (
    <div className="space-y-3">
      <h2>..continuación</h2>
      <div className="float-right ml-4 mb-4 w-full max-w-[370px] md:w-1/2 space-y-2">
        <ImageFormat
          src="/img-cursos/20/20m1s1-31.jpg"
          text=""
        />
        <ImageFormat
          src="/img-cursos/20/20m1s1-32.jpg"
          text=""
        />
        <ImageFormat
          src="/img-cursos/20/20m1s1-33.jpg"
          text=""
        />
      </div>
      <p>Constantemente verificar todos los tableros e indicadores de la máquina que estén trabajando normalmente en la gama de operación óptima.</p>
      <p>Las máquinas experimentan un uso natural que puede conducir a todo tipo de accidentes o incidentes. Las señales de uso incluyen adhesión, puntos negros, abrasión, escamado, distorsión, fatiga y corrosión. Pueden contribuir a un incremento en el riesgo de catástrofes.</p>
      <p>esde la fase de diseño a lo largo del uso diario, la seguridad del operador es una prioridad clave. La complejidad de muchas máquinas significa que solo inspectores calificados y experimentados pueden realizar las inspecciones de manera efectiva.</p>
      <p>Siempre que trabaje con la maquina debes cumplir todas estas recomendaciones antes y durante la operación para que seas un operador seguro y productivo.</p>
      <p>Si cumples todas estas normas y procedimientos serás un operador exitoso y muy profesional.</p>
      <ListNumbered list={[
        "La máquina no deberá permanecer sola en ningún momento. Si la máquina es tipo Bulldozer o excavadora, únicamente podrá dejarse parqueada una vez la cuchilla. Verifica que el escarificador o pala se encuentren debidamente apoyados sobre el suelo.",
        "El Bulldozer para el parqueo deberá permanecer por lo menos a 3 metros de distancia del borde de excavaciones, zanjas, pozos para evitar el colapso del terreno.",
        "La pendiente máxima del terreno donde se utilice máquina tipo Bulldozer será del 30%.",
        "Cuando la máquina no esté en uso deberá permanecer apagada, apoyar sobre el suelo el balde, pala y cucharón y accionar el freno.",
        "Para la movilización de retroexcavadoras se deberá accionar los estabilizadores del brazo del cucharón así como su zona giratoria.",
        "En terrenos inclinados se deberá trabajar de cara a la pendiente.",
        "Para retroexcavadoras de llantas, en labores de zanjeo, se deberá colocar los estabilizadores y la cuchara en el suelo.",
        "Para retroexcavadoras de orugas, antes de iniciar trabajos en terrenos pendientados, se debe verificar el estado de los frenos.",
        "Se deberá notificar al operador por escrito sobre sus riesgos durante la operación de maquinaria.",
        "El operador debe contar con formación académica y experiencia laboral en el manejo de maquinaria pesada, mediante la presentación de los certificados académicos que así lo acrediten y/o formación empírica a través de certificaciones laborales como operador de mínimo un año de experiencia.",
        "El operador deberá demostrar conocimiento en el funcionamiento de los mandos y la forma de detener la operación de la misma.",
        "La máquina deberá contar con certificados de mantenimiento preventivo y rutinario de acuerdo con el manual de operación del fabricante.",
        "Antes de iniciar una actividad con maquinaria pesada, el operador deberá hacer un chequeo general y verificar las condiciones de operabilidad, revisando el nivel de aceite del motor y el agua del radiador.",
        "El operador debe contar con los elementos de protección personal, definidos previamente en la matriz de entrega de elementos.",
        "Trabajadores no involucrados en la labor no deben permanecer dentro del radio de acción de la maquinaria.",
        "La maquinaria y equipo deben permanecer en buen estado de aseo y limpieza.",
        "Las zonas en las que se desarrollará la actividad deben contar con condiciones adecuadas de iluminación cuando el clima así lo requiera o la labor se ejecute en horario nocturno.",
        "El operador deberá antes de iniciar actividades colocarse el cinturón de seguridad y ajustar la silla a su nivel de confort, de acuerdo con sus condiciones físicas",
        "Para realizar labores de mantenimiento y reparación, la máquina deberá estar apagada y su llave de encendido retirada. Además, los controles de mando, seguridad y frenos activados, sobre suelo firme.",
        "El personal que realice reparaciones y mantenimiento deberá ser idóneo, preferiblemente que cuente con experiencia amplia en el sector.",
        "Ninguna máquina podrá ser modificada, esto va en contra de la seguridad.",
        "Toda máquina deberá contar con elementos de atención de emergencias como extintor mínimo de 10 libras y botiquín con las inspecciones del caso.",
        "No encienda el motor sin antes verificar que no exista presencia de personal en el radio de giro de la máquina.",
        "Antes de encender la máquina todos los mandos deben permanecer en neutro con el fin de que no se presenten arranques intempestivos del equipo.",
        "Durante el abastecimiento de combustible no deberá haber presencia de fuentes de ignición.",
        "Las baterías deben contar la respectiva inspección para evitar corto circuito.",
        "No se debe transportar personas dentro de la máquina ni colgando de la misma.",
        "Para máquinas de llantas se debe vigilar la presión de inflado.",
        "Nunca se debe trabajar con una máquina defectuosa o sobre cargada o sobre pasar su capacidad.",
        "Siempre se deberá hacer una inspección de redes de servicios públicos tanto aéreas como subterráneas.",
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
          src="https://www.youtube.com/embed/6J7jS0e0CNo"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo3 = [M3s1, M3s2, M3s3, M3s4, M3s5, M3s6,  Video];

export default Modulo3;