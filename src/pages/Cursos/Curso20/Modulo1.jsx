import { ListPoint,  } from "../../../components/ui/List";
import { ImageTextForSection, ImageFormat, ImageForSection } from "../../../components/ui/Imagen";


const M1s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Estándares y procedimientos en la operación de equipos pesados.</h2>
      <div className="float-right ml-4 mb-4 w-full max-w-[370px] md:w-1/2 space-y-2">
        <ImageFormat
          src="/img-cursos/20/20m1s1.jpg"
          text=""
        />
        <ImageFormat
          src="/img-cursos/20/20m1s1-3.jpg"
          text=""
        />
        <ImageFormat
          src="/img-cursos/20/20m1s1-4.jpg"
          text=""
        />
          <ImageFormat
          src="/img-cursos/20/20m1s1-5.jpg"
          text=""
        />
          <ImageFormat
          src="/img-cursos/20/20m1s1-6.jpg"
          text=""
        />
          <ImageFormat
          src="/img-cursos/20/20m1s1-7.jpg"
          text=""
        />
          <ImageFormat
          src="/img-cursos/20/20m1s1-8.jpg"
          text=""
        />
      </div>
      <p>La operación de maquinaria pesada siempre será un aportante de importancia de riesgos tanto para el operador, la estabilidad de la empresa, la comunidad y la infraestructura. De esta manera, acontinuación, se mostrará la clasificación de la maquinaria yequipos pesados, así como las recomendaciones para su manejo, afin de que se implementen medidas de control y planes demejoramiento en la prevención de accidentes de trabajo. Paraclasificar la maquinaria se consideran diversos aspectos como son:Trabajo a efectuar: Según la actividad podemos encontrarmovimiento de tierras, compactación de materiales, izaje ymanipulación de cargas, preparación de materiales, transporte demateriales y demoliciones.</p>
      <h2>Capacidad de la carga</h2>
      <p>La maquinaria se clasifica de acuerdo con su capacidad (baja, media y alta).</p>
      <h2>Área del trabajo</h2>
      <p>Depende si el sistema de trabajo involucra máquinas de movimiento sin rotación con giro limitado o con rotación. Forma de movilización: Llantas, orugas, rieles y estático.</p>
      <p>Estándares y procedimientos en la operación de equipos pesados:</p>
      <ListPoint list={[
        "La máquina no deberá permanecer sola en ningún momento. Si la máquina es tipo bulldozer o excavadora, únicamente podrá dejarse parqueada una vez la cuchilla, escarificador o pala se encuentren debidamente apoyados sobre el suelo.",
        "La pendiente máxima del terreno donde se utilice máquina tipo buldócer será del 30%.",
        "El buldócer para el parqueo deberá permanecer por lo menos a 3 metros de distancia del borde de excavaciones, zanjas, pozos para evitar el colapso del terreno.Cuando la máquina no esté en uso deberá permanecer apagada, apoyar sobre el suelo el balde, pala y cucharón y accionar el freno.",
        "Para la movilización de retroexcavadoras se deberá accionar los estabilizadores del brazo del cucharón, así como su zona giratoria.",
        "Para retroexcavadoras de llantas en labores de zanjeo se deberá colocar los estabilizadores y la cuchara en el suelo.",
        "Para retroexcavadoras de orugas antes de iniciar trabajos en terrenos pendientados se debe verificar el estado de los frenos.",
        "En terrenos pendientados se deberá trabajar de cara a la pendiente.",
        "El trabajador debe ser notificado por escrito de sus riesgos durante la operación de maquinaria.",
        "El operador debe contar con formación académica y experiencia laboral en el manejo de maquinaria pesada, mediante la presentación de los certificados académicos que así lo acrediten y/o formación empírica a través de certificaciones laborales como operador de mínimo un año de experiencia. En cualquiera de los casos el trabajador presentará pruebas escrita y/o práctica para evidenciar de manera específica la habilidad en la máquina a operar con la finalidad de comprobar tal situación.",
        "El operador deberá demostrar conocimiento en el funcionamiento de los mandos y la forma de detener la operación de la misma.",
        "La máquina deberá contar con certificados de mantenimiento preventivo y rutinario de acuerdo con el manual de operación del fabricante.",
        "EL operador siempre antes de iniciar una actividad deberá hacer un chequeo de las condiciones de operabilidad, revisando el nivel de aceite del motor y el de agua del radiador. Si encuentra alguna anomalía no deberá iniciar el trabajo o cancelarlo si se encuentra en curso y reportar a la persona encargada del área.",
        "El operador debe contar con los elementos de protección personal definidos previamente en la matriz de entrega de elementos.",
        "Trabajadores no involucrados en la labor no deben permanecer dentro el radio de acción de la maquinaria.",
        "Algunas operaciones de maquinaria pesada requerirán de elaboración de permisos de trabajo, para lo cual el profesional del área encargada identificará con anterioridad esta situación, formulará, socializará e implementará dichos procedimientos.",
        "La maquinaria y equipo deben permanecer en buen estado de aseo y limpieza.",
        "Las zonas objeto de la actividad deben contar con condiciones adecuadas de iluminación cuando el clima así lo requiera o la labor se ejecute en horario nocturno.",
        "Durante el descenso de la máquina el operador deberá utilizar los elementos dispuestos. Escalera, peldaños, rampas, nunca debe saltar. Debe sujetarse con sus dos manos tanto para el descenso como para el ascenso.",
        "El operador deberá antes de iniciar actividades colocarse el cinturón de seguridad y ajustar la silla a su nivel de confort de acuerdo con sus condiciones físicas.",
        "Para realizar labores de mantenimiento y reparación, la máquina deberá estar apagada retirando la llave de encendido, con los controles de mando, seguridad y frenos activados, sobre suelo firme. Se debe permanecer separado de las partes giratorias.",
        "Ninguna máquina podrá ser modificada, esto va en contra de la seguridad.",
        "El personal que realice reparaciones y mantenimiento deberá ser idóneo.",
        "Toda máquina deberá contar con elementos de atención de emergencias como extintor mínimo de 10 libras y botiquín con las inspecciones del caso.",
        "Antes de encender la máquina todos los mandos deben permanecer en neutro con el fin de que no se presenten arranques intempestivos del equipo.",
        "No encienda el motor sin antes verificar que no exista presencia de personal en el radio de giro de la máquina.",
        "Durante el abastecimiento de combustible no deberá haber presencia de fuentes de ignición.",
        "Las baterías deben contar la respectiva inspección para evitar corto circuito.",
        "Durante el parqueo la máquina se ubicará sobre superficies niveladas y se deberá cerrar su cabina y las llaves debidamente guardadas para que personal no autorizado ni capacitado tengan acceso a la máquina, quienes pudieran provocar accidentes de considerables alcances.",
        "No se debe transportar personas dentro de la máquina ni colgando de la misma.",
        "Nunca se debe trabajar con una máquina defectuosa o sobre cargada o sobre pasar su capacidad. Informe a su jefe inmediato o al encargado de seguridad de su empresa.",
        "Para máquinas de llantas se debe vigilar la presión de inflado.",
        "Siempre se deberá hacer una inspección de redes de servicios públicos tanto aéreas como subterráneas. Así las cosas, el presente es un pequeño aporte a la concientización del operador durante el trabajo con el objetivo de mejorar las condiciones de trabajo, aumentar la productividad y reducir los índices de accidentalidad y las pérdidas por este concepto.",
      ]}/>
      <p>Al momento de operar equipos pesados debemos siempre pensar en el factor seguridad como prioridad número. Los operadores de maquinaria pesada deberán recibir cursos de formación continua relacionados con la operación y mantenimiento de las máquinas.</p>
      <p>En caso de que la empresa adquiera una máquina nueva, el operador deberá ser capacitado y entrenado.</p>
    </div>
  );
};

const M1s2 = () => {
  return (
    <div className="space-y-3">
      <h2>Recomendaciones generales para maquinaria pesada</h2>
      <ImageTextForSection
        src="/img-cursos/20/20m1s1-9.jpg"
        text="Asegurarse de que se cumplan las advertencias de seguridad"
      />
      <ListPoint list={[
        "Asegurarse de que los operadores la maquinaria pesada y los mecánicos reciban capacitación debida de parte de personas calificadas y que además tengan experiencia con el modelo de equipo en cuestión.",
        "Cuando el equipo requiera ser trasladado hágalo en vehículosque tengan plataforma y pampas adecuadas.",
        "Asegurarse de que se cumplan las advertencias de seguridad del operador sugerencias por el fabricante.",
        "Asegurarse de que el operador conozca el manual de operación y mantenimiento de la máquina. Tenga el manual dentro de la cabina del equipo.",
        "Asegúrese de respetar los radios mínimos de operación del equipo pesado.",
        "Dar capacitación sobre las señales de mano utilizadas con el equipo.",
        "Asegúrase de identificar en las obras los riesgos que impidan los servicios públicos (tales como gas, agua, telefono, entre otros) e informe iunmendiatamente al inspector o encargado de la obra, con el fin de que sean controlados los riegos de iniciar a operar los equipos.",
      ]}/>
    </div>
  );
};

const M1s3 = () => {
  return (
    <div className="space-y-3">
      <h2>Responsabilidades de los operadores de maquinaria pesada</h2>
      <ImageForSection
        src="/img-cursos/20/20m1s1-10.jpg"
      />
      <ListPoint list={[
        "Los operadores deben ser conscientes y responsables de la seguridad en sus puestos de trabajo.",
        "Tener voluntad para seguir las instrucciones.",
        "Leer y comprender el manual de operaciones y mantenimiento del fabricante de su máquina.",
        "Aplicar los estándares operación y mantenimiento de los equipos.",
      ]}/>
    </div>
  );
};

const M1s4 = () => {
  return (
    <div className="space-y-3">
      <h2>Requisitos mínimos para operadores de maquinaria pesada</h2>
      <ImageForSection
        src="/img-cursos/20/20m1s1-11.jpg"
      />
      <p>Para ser un operador de maquinaria pesada tienes que tener una alta responsabilidad, capaces de alcanzar altos estados de concentración. Además de ser personas metódicas, deben fijarse en los detalles y tener gran capacidad de analítica.</p>
      <p>Por otra parte, tienen que estar informados y formados al día del sector y de lo que las circunstancias requieran. La flexibilidad y la capacidad de aprendizaje son otras dos características que tiene que tener un operador de maquinaria pesada, ya que seguramente tengan que realizar otras funciones durante la jornada laboral.</p>
      <div className="float-left ml-4 mb-4 w-full max-w-[370px] md:w-1/2 space-y-2">
        <ImageFormat
          src="/img-cursos/20/20m1s1-12.JPG"
          text=""
        />
      </div>
      <ListPoint list={[
        "El operador de maquinaria pesada debe tener conocimientos técnicos",
        "Es necesario que maneje una comunicación clara ",
        "Debe conocer las prácticas de seguridad en el trabajo",
        "Se requiere tener conocimientos sobre mantenimiento de maquinaria",
        "Un operador de maquinaria pesada maneja todo tipo de terrenos",
      ]}/>
    </div>
  );
};

const M1s5 = () => {
  return (
    <div className="space-y-3">
      <div className="float-right ml-4 mb-4 w-full max-w-[190px] md:w-1/2 space-y-2">
        <ImageFormat
          src="/img-cursos/20/20m1s1-13.jpg"
          text="LA MAQUINA"
        />
        <ImageFormat
          src="/img-cursos/20/20m1s1-14.jpg"
          text="LAS CONDICIONES"
        />
        <ImageFormat
          src="/img-cursos/20/20m1s1-15.jpg"
          text="ELEMENTO HUMANO"
        />
      </div>
      <h2>Factores causantes de accidentes laborales</h2>
      <p>Tener en cuenta que estadísticamente esta comprobado que son tres los factores causantes de accidentes laborales como se muestra a continuación</p>
      <ListPoint list={[
        "La maquinaria",
        "Las condiciones",
        "Elemento humano",
      ]}/>
      <p>Siendo el factor humano el causante número uno de accidentes laborales en un 80% y ubicando a las condiciones y la maquina respectivamente en un 20% lo que quiere decir que estos accidentes se presentan mayormente por causas humanas por lo tanto todos los esfuerzos en materia de seguridad en la operación de equipos está enfocado en los seres humanos con el fin de minimizar los riesgos al operar maquinas pesadas. Existen las políticas de seguridad de cada empresa que son de obligatorio cumplimiento para todos los empleados.</p>
      <p>Los reglamentos, procedimientos, normas y políticas de seguridad son socializadas al momento de ingresar a la compañía con el objetivo que todos las conozcamos y estemos familiarizados con ellas para evitar accidentes laborales y mitigar los riesgos a los cuales estaremos expuestos.</p>
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
          src="https://www.youtube.com/embed/IxT_UqUe3WE"
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