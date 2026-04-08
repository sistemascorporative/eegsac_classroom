import { ListPoint, } from "../../../components/ui/List";
import { ImageTextForSection, ImageFormat } from "../../../components/ui/Imagen";

const M5s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">TÉCNICAS DE OPERACIÓN SEGURA EN DIVERSOS EQUIPOS PESADOS.</h2>

      <div className="float-right ml-4 mb-4 w-full max-w-[370px] md:w-1/2 space-y-2">
  <ImageFormat
    src="/img-cursos/20/20m1s1-49.jpg"
    text=""
  />
  <ImageFormat
    src="/img-cursos/20/20m1s1-50.jpg"
    text=""
  />
</div>

      <p>Las técnicas de operación son aquellos procedimientos de seguridad y operación descritos en el manual de operación y mantenimiento como normas seguras en la operación en sí de las diferentes máquinas y el incumplir alguno de estos nos pude conllevar a cometer un accidente donde se puede ver afectada la integridad del operador o del equipo, además, del rendimiento de la maquina afectando en sí la productividad de los equipos.</p>
      <p>Todas las técnicas de operación de los diversos equipos pesados están diseñadas para una operación segura y adecuada de las máquinas y así evitar accidentes o malas operaciones en las mismas lo que podría dar como resultado daños a los equipos.</p>
      <p>Constantemente en el área de trabajo se suman esfuerzos de parte del personal técnico para disminuir abusos o malas operaciones de parte de los operarios con capacitación continua y planes de mejoramiento en cuanto a operación de las máquinas.</p>
      <p>Un operador profesional es aquel que diariamente se esfuerza por operar los distintos equipos aplicando las técnicas de operación de las maquinas descritas en el manual de operación para que los equipos se conserven y podamos sacarle el rendimiento óptimo.</p>
      <p>Una de las tareas indispensables de los operadores de maquinaria pesada es conocer los peligros y riesgos específicos a los cuales está expuesto. La Dirección General de Industria, Energía y Minas de Murcia da algunas recomendaciones de prevención para un trabajo seguro y de calidad.</p>
      <p>La maquinaria móvil dentro de la explotación minera tiene cada vez más importancia. Las máquinas actuales son más seguras y están dotadas de más ayudas para el operador. Sin embargo, los riesgos debidos a las condiciones de la explotación no han cambiado: están presentes en todas las operaciones.</p>
      <p>Los trabajos a realizar con la maquinaria minera móvil, pueden dividirse en cuatro grandes grupos:</p>
      <ListPoint list={[
       "Arranque",
       "Carga",
       "Transporte",
       "Vertido",
      ]}/>
      <p>A continuación, se describirá cada uno de ellos y las medidas de prevención a tener en cuenta para eliminar o reducir los riesgos presentes en cada cas</p>
    </div>
  );
};
const M5s2 = () => {
  return (
    <div className="space-y-3">
      <h2>Arranque</h2>
      <h2 className="uppercase text-center text-secondary"></h2>
      <div className="float-right ml-4 mb-4 w-full max-w-[370px] md:w-1/2 space-y-2">
  <ImageFormat
    src="/img-cursos/20/20m1s1-51.jpg"
    text=""
  />
  <ImageFormat
    src="/img-cursos/20/20m1s1-52.jpg"
    text=""
  />
    <ImageFormat
    src="/img-cursos/20/20m1s1-53.jpg"
    text=""
  />
</div>

      <h3>Esta actividad se puede dividir en dos grandes bloques:</h3>
      <ListPoint list={[ 
       "Extracción de áridos.",
       "Arranque de rocas ornamentales.",
      ]}/>
      <p>En las explotaciones de áridos con frentes de poca altura y de materiales sueltos (arenas, graveras, etc.,), el arranque se realiza directamente con las palas cargadoras. El resto de trabajos de arranque se realiza con el empleo de explosivos, complementado normalmente con retroexcavadoras o bulldozer.</p>
      <h3>Cuando se maneja una retroexcavadora:</h3>
      <ListPoint list={[
       "Asegurarse de que la plataforma de trabajo sea horizontal y que todo el tren de orugas esté asentado en la misma.",
       "Si la máquina es de ruedas, coloca y asegura los estabilizadores. Están diseñados para evitar que el operario pueda volcarse al realizar maniobras de trabajo.",
       "Cuando el trabajo se realice en la parte superior del banco, habrá que comprobar la estabilidad del borde del mismo antes de emplazar la máquina.",
       "Recuerda que el tren de orugas o el conjunto de ruedas y estabilizadores deben estar perpendiculares al borde del banco o de la plataforma. Si se coloca en paralelo se está aumentando considerablemente el riesgo de vuelco por el borde de la plataforma o del banco.",
       "Cuando toque desplazarse de un punto a otro del frente, nunca se debe atravesar la pendiente del mismo, ya que esto puede provocar el vuelco de la máquina.",
      ]}/>
      <h3>La operación correcta es:</h3>
      <ListPoint list={[
       "Descender por la pendiente con la cuchara y el brazo recogido y por delante de la máquina.",
       "Traslardarse por una zona horizontal hasta la vertical del nuevo emplazamiento.",
       "Subir por la pendiente de nuevo, con el brazo recogido y por delante, hasta situarte en el nuevo punto de trabajo. Es posible se requiera algo más de tiempo, pero se elimina por completo el riesgo de volcar.",
      ]}/>
      <h3>Cuando se maneja un bulldozer:</h3>
      <p>Cuando el trabajo se lleve a cabo en la parte superior del banco, cerca del talud, recordar que habrá que acercarse al mismo en marcha adelante y manteniendo la cuchilla de frente al borde. Lo mencionado evitará un posible hundimiento del talud provocado por el peso de la máquina e implique el vuelco de la misma.</p>
      <p>Cuando se trabaje en el propio talud, deberá realizarse siempre con la cuchilla por delante y empujando el material de arriba hacia abajo, siguiendo la línea de máxima pendiente.</p>
      <p>Para el desplazamiento de un punto a otro del frente, nunca atravesar la pendiente del mismo, ya que esto puede provocar el vuelco del bulldozer.</p>
      <h3>La operación correcta es la misma que en el caso anterior:</h3>
      <ListPoint list={[
        "Se debe descender por la pendiente con la cuchilla lo más baja posible y por delante de la máquina.",
       "Trasladarse por una zona horizontal hasta la vertical del nuevo emplazamiento.",
       "Subir por la pendiente de nuevo, con la cuchilla lo más baja posible y por delante, hasta situarte en el nuevo punto de trabajo.",
       "En las explotaciones de roca ornamental, se utiliza la pala de frente modificada con un empujador, hidráulico o no. Su función es empujar el bloque durante el proceso de volteo o abatimiento de los mismos.",
      ]}/>
      <h3>Durante este proceso:</h3>
      <ListPoint list={[
       "Asegurarse de que no hay nadie dentro del radio de acción de la máquina y del vuelco de bloques.",
       "Respetar en todo momento las indicaciones y señales de la persona responsable del volteo.",
       "Si el empujador no es hidráulico, colocar una barrera de bloques en el borde del talud.",
      ]}/>
    </div>
  );
};

const M5s3 = () => {
  return (
    <div className="space-y-3">
      <h2>Carga</h2>
      <ImageTextForSection
        src="/img-cursos/20/20m1s1-54.jpg"
        text="El proceso de carga se realizará por la parte trasera o la parte lateral del dumper. "
      />
      <p>En las operaciones de carga, la pala y el dumper o volquete, deben estar lo más separados posible del frente. Cuando el operario se acerque al pie del talud para cargar la pala, tendrá que hacerlo perpendicular al mismo. La estructura de la máquina lo protegerá en el caso de derrumbamientos del terreno o de impactos de fragmentos de piedras.</p>
      <p>La pala estará esperando al dumper con la cuchara levantada, indicando el lugar donde debe pararse para ser cargado. El proceso de carga se realizará por la parte trasera o la parte lateral del dumper. No se debe pasar la cuchara por encima de la cabina, ya que pone en riesgo la seguridad del compañero.</p>
      <ListPoint list={[
      ]}/>
    </div>
  );
};

const M5s4 = () => {
  return (
    <div className="space-y-3">
      <h2>Transporte</h2>
      <div className="float-right ml-4 mb-4 w-full max-w-[370px] md:w-1/2 space-y-2">
  <ImageFormat
    src="/img-cursos/20/20m1s1-55.jpg"
    text=""
  />
  <ImageFormat
    src="/img-cursos/20/20m1s1-56.jpg"
    text=""
  />
   <ImageFormat
    src="/img-cursos/20/20m1s1-57.jpg"
    text=""
  />
</div>

      <p>En los desplazamientos por las pistas, accesos y plaza de la explotación, recordar que se debe seguir una serie de recomendaciones. Éstas deberán estar recogidas en la disposición interna de seguridad de regulación del tránsito.</p>
      <p>La presencia de barro, baches, poca visibilidad, etc., son factores contra los que el operario se enfrenta cuando circula por la explotación. Se trata de una cuestión que no se puede evitar, pero sí minimizar los riesgos, observando algunas medidas de seguridad:</p>
      <ListPoint list={[
       "Respetar siempre la señalización existente y no sobrepasar la velocidad límite máxima fijada para cada situación.",
       "Si se tiene que pasar por debajo de estructuras de cintas transportadoras, hacerlo siempre por la parte reservada y delimitada para ello.",
       "No acercar el vehículo innecesariamente a los bordes de la pista, tanto interiores como exteriores.",
       "Presta atención especial a los posibles peatones. Recordar que, desde el puesto de conducción, la visibilidad es limitada.",
       "Mantener una especial vigilancia en los cruces y comprobar que no hay posibilidad de colisionar con otro vehículo.",
       "Cuando se circula por detrás de otro vehículo, mantener siempre la distancia de seguridad.",
       "Tener en cuenta que el vehículo es más pesado que un automóvil y que la respuesta de frenado es más lenta, por lo que se deberá prever el momento de frenado con mayor anticipación.",
       "Si se maneja un dumper o un camión, no sobrecargar el vehículo. Puede que no respondan los frenos en caso de necesidad.",
       "Si se circula con una pala, hacerlo siempre con la cuchara bajada.",
       "Los bordes de la pista han de estar balizados. Si se comprueba que existe alguna zona sin balizamiento, avisar al encargado de la explotación de la situación.",
       "No dejar elementos sueltos por la cabina. Con el movimiento pueden caer debajo de los pedales y, de esta manera, bloqueándolos.",
      ]}/>
    </div>
  );
};

const M5s5 = () => {
  return (
    <div className="space-y-3">
      <h2>Vertido</h2>
      <ImageTextForSection
        src="/img-cursos/20/20m1s1-60.jpg"
        text="Durante el proceso de vertido existe riesgo de vuelco del dumper o la pala."
      />
      <p>El vertido, al igual que otras maniobras realizadas con máquinas, ha de estar regulado por una disposición interna de seguridad. La disposición interna de seguridad será de obligado cumplimiento y deberá indicar la forma de acceder al punto de vertido, lugar y forma de realizarlo.</p>
      <p>Durante el proceso de vertido existe riesgo de vuelco del dumper o la pala. Por ello, se deberá trabajar siempre con un tope de seguridad que impida un acercamiento excesivo del tren trasero del vehículo al borde de la tolva o de la escombrera.</p>
      <p>Se debe avisar de la maniobra con señales luminosas y acústicas. Luego, aproximarse a la zona de descarga lentamente. Si existe una señalización tipo semáforo, habrá que respetarla en todo momento. Esto debido a que su indicación permitirá saber que la zona de descarga está libre para realizar la maniobra.</p>
      <p>Como podemos observar en la variedad de imagenes los diversos equipos pesados usados en la minería, las técnicas de operación nos proporcionan una operación segura y productiva de los diferentes equipos pesados las cuales debemos aplicar siempre que se esté operando una máquina.</p>
      <p>Además, las técnicas de operación nos mantienen seguros y nos ayudan a evitar accidentes laborales en nuestras áreas de trabajo por eso es muy importante concientizar a los operadores para que apliquen estas técnicas diariamente en la operación de los equipos pesados.</p>
      <div className="float-center ml-4 mb-4 w-full max-w-[370px] md:w-1/2 space-y-2">
  <ImageFormat
    src="/img-cursos/20/20m1s1-58.jpg"
    text=""
  />
  </div>
  <p>Observemos esta técnica de la altura de los bancos de trabajo y la formas de trabajar en ellos.</p>
  <div className="float-center ml-4 mb-4 w-full max-w-[370px] md:w-1/2 space-y-2">
  <ImageFormat
    src="/img-cursos/20/20m1s1-59.jpg"
    text=""
  />
  </div>
  <p>En cualquier máquina que trabajemos debemos aplicar estas técnicas operación segura para que el equipo trabaje de forma productiva y podamos rendir en el sitio de trabajo.</p>
  <p>Sea que estemos trabajando con un camión minero o un cargador sobre ruedas siempre es muy importante aplicar las técnicas de operación segura de los equipos; cada máquina tiene configuraciones diferentes por lo tanto es menester conocer sus especificaciones técnicas para saber sus capacidades y no sobrecargar el equipo evitando así un accidente laboral o daños a la propiedad.</p>
  <p>Estas técnicas de operación segura en los diversos equipos pesados juegan un papel sumamente importante tanto en materia de seguridad como en lo referente al tema del rendimiento de los equipos y el incumplirlas nos pueden afectar tanto como en la producción de la maquina como en la seguridad de los equipos.</p>
  <p>Existen un sinnúmero de técnicas de operación descritas en el manual de los equipos y algunas son diseñadas por las compañías mineras para trabajar de forma segura y productiva.</p>
  <p>Diariamente nos socializan las diferentes técnicas de operación en los distintos lugares en los cuales estemos laborando si existen dudas se debe consultar con su jefe inmediato para evitar accidentes laborales.</p>
  <p>El diseño de bermas, rampas, vías, vertederos y áreas de mina se realiza de acuerdo a estas técnicas de operación y las capacidades de los equipos, por ejemplo; diseño de rampas de 10% y ancho de vías de 30 metros estos teniendo en cuenta el ancho de los camiones mineros y su capacidad para subir una cuesta o pendiente la cual la técnica nos dice que estos equipos pueden subir pendientes de hasta 10% y se debe respetar este porcentaje para no sobrecargar la máquina.</p>
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
          src="https://www.youtube.com/embed/vY232uACwvk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo5 = [M5s1, M5s2, M5s3, M5s4, M5s5, Video];

export default Modulo5;