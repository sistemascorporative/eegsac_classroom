import { ListNumbered, ListPoint, ListPointBold } from "../../../components/ui/List";
import { ImageTitleForSection,ImageFormat, ImageForSection } from "../../../components/ui/Imagen";


const M2s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Introducción al manteniendo preventivo.</h2>
      <ImageForSection
        src="/img-cursos/10/10m1s1.8.jpg"
      />
      <h3>Gestión del mantenimiento preventivo de máquinas pesadas.</h3>
      <h4>¿Que entendemos por gestión?</h4>
      <p>La gestión se define como la acción o trámite que junto con otros se lleva a cabo para conseguir o resolver una cosa, dicho de otra manera, una gestión se refiere a todos aquellos trámites que se realizan con la finalidad de resolver una situación o materializar un proyecto.</p>
      <h4>¿Qué es mantenimiento preventivo?</h4>
      <p>El mantenimiento preventivo constituye una acción o serie de acciones necesarias para alargar la vida útil del equipo e instalaciones y prevenir la suspensión de las actividades laborales por imprevistos tiene como propósito planificar períodos de paralización del trabajo en momentos específicos, para inspeccionar y realizar todas las acciones de mantenimiento, con lo que se evitan los mantenimientos correctivos. El principal objetivo del mantenimiento preventivo es evitar o mitigar las consecuencias de los fallos del equipo logrando prevenir las incidencias antes de que éstas ocurran, las acciones del mantenimiento preventivo pueden incluir acciones como cambio de piezas desgastadas, cambios de aceites y lubricantes.</p>
      <p>El técnico de mantenimiento preventivo generalmente es la conexión principal entre el cliente y el distribuidor, el técnico debe poder identificar problemas o asuntos críticos que posible que un operador no note fácilmente. Debido a que los clientes con frecuencia son la primera línea de contacto, también deben poder comunicar de manera eficaz información técnica de la máquina mientras se escuchan las inquietudes de los clientes u operadores.</p>
      <p>Al sacar una conclusión de estos conceptos podemos decir que la gestión del mantenimiento preventivo de maquinas pesadas es un conjunto de acciones administrativas y operativas que se realizan para que la maquina funcione de la manera más eficiente posible, obteniendo seguridad y productividad, evitando la contaminación del medio ambiente, paradas inesperadas, altos costos de mantenimiento y fallas catastróficas.</p>
    </div>
  );
};

const M2s2 = () => {
  return (
    <div className="space-y-3">
      <h2>Que incluye el mantenimiento preventivo</h2>
      <ImageForSection
        src="/img-cursos/10/10m1s1.9.jpg"
      />
      <p>Algunas de las tareas generales del mantenimiento preventivo incluyen inspecciones, ajustes, pruebas, cambios de fluidos, reemplazo de filtros y lubricación. una lista detallada de estas tareas se incluye en la sección programa de intervalos de mantenimiento que se analizará más adelante en este módulo el programa se establece basado en la observación del comportamiento del sistema, de los mecanismos de desgaste, los componentes y del conocimiento de los componentes vitales para la operación continua del sistema.</p>
    </div>
  );
};

const M2s3 = () => {
  return (
    <div className="space-y-3">
      <h2>Simbología de seguridad en las maquinas.</h2>
      <div className="float-right ml-4 mb-4 w-full max-w-[280px] md:w-1/2 space-y-2">
        <ImageFormat
          src="/img-cursos/10/10m1s10.png"
          text=""
        />
        <ImageFormat
          src="/img-cursos/10/10m1s13.png"
          text=""
        />
        <ImageFormat
          src="/img-cursos/10/10m1s14.png"
          text=""
        />
        <ImageFormat
          src="/img-cursos/10/10m1s11.png"
          text=""
        />
        <ImageFormat
          src="/img-cursos/10/10m1s12.png"
          text=""
        />
      </div>
      <ListNumbered list={[
        "No pise.",
        "Use gafas de protección.",
        "Alerta de seguridad",
        "Mantenga las manos alejadas.",
        "Permanezca a una distancia segura de la máquina.",
        "Peligro eléctrico.",
        "Superficie caliente.",
        "Inflamable.",
        "Aplastamiento.",
        "Alto voltaje",
        "Mantenga las manos alejadas.",
        "Lea el manual de operación.",
      ]}/>
      <h2>Simbología</h2>
      <ListNumbered list={[
        "Nivel.",
        "Aceite.",
        "Presión.",
        "Temperatura.",
        "Filtro o restricción.",
        "Agua o refrigerante.",
        "Aire de admisión.",
        "Gases de escape.",
      ]}/>
      <h2>Simbología</h2>
      <ListNumbered list={[
        "Motor.",
        "Transmisión.",
        "Sistema hidráulico.",
        "Combustible.",
        "Frenos.",
      ]}/>
      <h2>Simbología</h2>
      <ListNumbered list={[
        "Punto de engrase.",
        "Parada y arranque.",
        "Manual de operación y mantenimiento.",
        "Manual de servicio.",
      ]}/>
      <h2>Simbología</h2>
      <ListNumbered list={[
        "Agua o refrigerante del motor.",
        "Aceite del motor.",
        "Aceite del sistema hidráulico.",
        "Aceite del sistema de frenos.",
        "Nivel de refrigerante del motor.",
        "Temperatura del aceite del motor.",
        "Filtro hidráulico o restricción del filtro hidráulico.",
        "Aceite de la transmisión.",
      ]}/>
    </div>
  );
};

const M2s4 = () => {
  return (
    <div className="space-y-3">  
      <div className="float-right ml-4 mb-4 w-full max-w-[280px] md:w-1/2 space-y-2">
        <ImageFormat
          src="/img-cursos/10/10m1s1.15.jpg"
          text=""
        />
        <ImageFormat
          src="/img-cursos/10/10m1s1.16.jpg"
          text=""
        />
      </div>
      <h2>Fuentes de información proporcionadas por el fabricante</h2>
      <h3>Sistema de información de servicio (SIS)</h3>
      <p>Es un software desarrollado por Caterpillar en donde podemos encontrar toda la información requerida de la máquina, así como sus piezas, especificaciones, manuales de operación y mantenimiento, pautas de reutilización de componentes, etc.</p>
      <h3>Manuales proporcionados por el fabricante.</h3>
      <p>con cada máquina Caterpillar se incluye un manual de operación y mantenimiento que presentainformación importante y necesaria para laoperación y mantenimiento de la máquina el manualde operación y mantenimiento se divide en 6secciones: seguridad, información de producto,operación,mantenimiento,informacióndereferencia e índice. El técnico en mantenimientopreventivo usará frecuentemente la información deeste manual específicamente en la sección demantenimiento, este proporciona al técnico una listade tareas que deben realizarse los números depieza de reemplazo y mucho más en esta lecciónaprenderá donde encontrar una lista decomprobación de mantenimiento preventivo y cómo usarla.</p>
    </div>
  );
};

const M2s5 = () => {
  return (
    <div className="space-y-3">
      <h2>Control de contaminación en máquinas pesadas Caterpillar.</h2>
      <ImageForSection
        src="/img-cursos/10/10m1s1.17.png"
      />
      <p>La contaminación es muy perjudicial para los componentes de un sistema de fluido y sus efectos pueden ser catastróficos. El objetivo de esta elección es presentar el tema de la contaminación, su concepto e importancia, la exigencia del cliente de mayor productividad ha producido tendencias de la industria en el uso de componentes electrohidráulicos, presiones más altas de los sistemas y espacios libres internos muy reducidos, como resultado los sistemas de fluidos actuales no pueden tolerar los niveles de polvo y contaminantes aceptados previamente.</p>
      <p>La contaminación es cualquier elemento extraño en un fluido los contaminantes incluyen polvo, salpicadura de soldadura, pintura, fibras de trapos, partículas metálicas de desgaste, grasa, agua, aire y mucho más; Algo tan pequeño como una cucharadita de tierra en 55 galones de aceite hidráulico exceden los estándares de Caterpillar. El diagrama mostrado ilustra las tolerancias muy reducidas de los sistemas de Caterpillar y cómo incluso las partículas más pequeñas pueden afectar la fiabilidad y el rendimiento de los sistemas.</p>
      <p>Expertos atribuyen entre 75% y 85% de las fallas de los sistemas hidráulicos a la contaminación. Sistemas de fluidos contaminados acortan la vida útil de los componentes y de los fluidos, reducen la productividad de la máquina y pueden llevar a fallas catastróficas, tiempo de inactividad y reparaciones costosas. Ejemplo de esto incluyen el corrimiento de los cilindros, dirección errática, menos reacción de los implementos y operación no fiable.</p>
    </div>
  );
};

const M2s6 = () => {
  return (
    <div className="space-y-3">
      <h2>¿Cuáles son las fuentes de la contaminación?</h2>
      <p>Hay innumerables contaminantes que amenazan los sistemas de fluidos. En estase presentarán las fuentes más comunes de estos contaminantes y como puedena los sistemas de fluidos de la máquina.</p>
      <h3>Durante el aseo y mantenimiento.</h3>
      <div className="float-right ml-4 mb-4 w-full max-w-[250px] md:w-1/2 space-y-2">
        <ImageFormat
          src="/img-cursos/10/10m1s1.17.jpg"
          text=""
        />
        <ImageFormat
          src="/img-cursos/10/10m1s1.18.png"
          text=""
        />
        <ImageFormat
          src="/img-cursos/10/10m1s1.19.png"
          text=""
        />
        <ImageFormat
          src="/img-cursos/10/10m1s1.20.png"
          text=""
        />
      </div>
      <p>Los contaminantes pueden ingresar a los sistemas de fluidos por falta de aseo y mantenimiento. Las áreas de trabajo sucias llevan a piezas, herramientas y mangueras sucias lo que finalmente origina contaminación en los fluidos, es importante mantener el área de trabajo limpia y el camión de servicio limpio y organizado; también es importante que el técnico en mantenimiento preventivo limpie las áreas de la máquina del cliente a la que se va a proporcionar servicio antes y después de cada tarea, esto no solo ayuda a controlar la contaminación sino que refleja una imagen profesional y fortalecer la relación con el cliente.</p>
      <h3>Aceite nuevo</h3>
      <p>Una causa de contaminación que con frecuencia se pasa por alto es el aceite nuevo. Los estándares de contaminación de Caterpillar son muy exigentes y no es raro que el aceite nuevo esté fuera de estos estándares, como práctica general siempre filtre el aceite nuevo antes de que ingrese al sistema de fluidos de la máquina.</p>
      <h3>Durante la operación normal del equipo</h3>
      <p>La operación normal de la máquina producirá contaminantes en los sistemas de fluidos, la fricción entre componentes dentro de cada sistema producirá contaminantes metálicos, los cambios rutinarios de aceite y filtros reducen el riesgo de que los contaminantes originados por la operación normal de la máquina se conviertan en un problema; aunque estos contaminantes son inevitables otras formas de contaminantes son evitables y deben minimizarse.</p>
      <h3>Durante el mantenimiento</h3>
      <p>Durante el mantenimiento podemos contaminar los sistemas de fluidos por la falta de limpieza alrededor de las aberturas antes de quitar las tapas, al instalar piezas o componentes sucios, no usar los filtros correctos, no limpiar apropiadamente las bases de los filtros, falta de limpieza alrededor de las aberturas antes de quitar las tapas.</p>
    </div>
  );
};

const M2s7 = () => {
  return (
    <div className="space-y-3">
      <h2>Descripción del muestreo S.O.S.</h2>
      <ImageForSection
        src="/img-cursos/10/10m1s1.21.png"
      />
      <p>Caterpillar ha desarrollado una herramienta de administración de mantenimiento que evalúa la degradación del aceite y detecta señales iniciales de desgaste en los componentes internos, esta herramienta se conoce como análisis de fluidos S.O.S. es parte del programa de servicios S.O.S. que ayuda a detectar problemas antes de que terminen en reparaciones y tiempo de inactividad costosos. Caterpillar recomienda tomar muestras de los compartimentos de fluido cada 250 horas y en cada cambio de aceite.</p>
      <p>Cada uno de los fluidos necesita un muestreo S.O.S. consulte el manual de operación y mantenimiento para saber el intervalo de muestro de cada uno.</p>
      <ListPoint list={[
        "Aceite de motor.",
        "Aceite transmisión.",
        "Aceite hidráulico.",
        "Aceite de mandos finales.",
        "Aceite de frenos.",
        "Aceite de ejes diferenciales.",
        "Aceite de caja de transferencia.",
        "Aceite del convertidor de par.",
        "Muestra de refrigerante nivel 1 y 2.",
      ]}/>
    </div>
  );
};

const M2s8 = () => {
  return (
    <div className="space-y-3">
      <h2>Tipos de análisis</h2>
      <ImageForSection
        src="/img-cursos/10/10m1s1.22.png"
      />
      <p>Estos cuatro tipos de análisis se usan para controlar el estado de su equipo y podrán identificar posibles problemas, un programa de análisis de aceite de servicios S.O.S. correctamente administrado reduce los costos de reparación y el impacto del tiempo de inactividad.</p>
      <ListPointBold list={[
        "Desgaste de los componentes: El análisis elemental del aceite evalúa los metales de desgaste y la contaminación en el aceite. El análisis de los metales de desgaste permite la evaluación del desgaste de los componentes o motores lubricados.",
        "Estado del aceite: Determina si el aceite se ha degradado debido a esfuerzos químicos o térmicos este análisis incluye la oxidación, nitración, sulfatación, viscosidad, hollín, y si es necesario índice de acidez total con número de base total.",
        "Contaminación del aceite: Pruebas de contaminantes perjudiciales que pueden haber entrado en el aceite cómo tierra, agua, combustible y refrigerantes. La contaminación del aceite puede causar desgaste y daños al motor y los componentes lubricados.",
        "Identificación del aceite: este análisis asegura que se use la calidad apropiada de aceite y que se use el aceite correcto en el compartimiento correcto el aceite incorrecto en un compartimento puede dañar gravemente componentes importantes",
      ]}/>
      <p>Los problemas en el sistema de enfriamiento acortan también la vida útil de los motores, las transmisiones y los sistemas hidráulicos. El análisis de refrigerante S·O·S y el análisis de aceite S·O·S garantizan un método completo y preciso para vigilar la condición de todos los sistemas de la máquina. Un programa de servicios S·O·S. correctamente administrado reduce los costos de reparación y disminuye el impacto del tiempo de inactividad. El consumo del aceite del motor debe medirse y registrarse. Un aumento significativo en el consumo de aceite puede indicar un problema con los componentes o los depósitos de paquetes de cilindros. Adicionalmente, las adiciones de aceite diluyen los metales de desgaste y otros contaminantes. Los resultados de un análisis de aceite pueden ser inexactos.</p>
    </div>
  );
};

const M2s9 = () => {
  return (
    <div className="space-y-3">
      <h2>Recolección de muestras S.O.S.</h2>
      <div className="float-right ml-4 mb-4 w-full max-w-[370px] md:w-1/2 space-y-2">
        <ImageFormat
          src="/img-cursos/10/10m1s1.23.png"
        />
        <ImageFormat
          src="/img-cursos/10/10m1s1.24.png"
        />
      </div>
      <p>Hay dos formas de recoger muestras de aceite SOS los siguientes métodos se numeran por orden de preferencia.</p>
      <ListPoint list={[
        "Usé una válvula de toma de muestras en líneas para los sistemas de aceite presurizado.",
        "Usé una bomba de toma de muestras que se introduzca en el sumidero o Carter.",
      ]}/>
      <p>El uso de la válvula de toma de muestras es el método preferido, proporciona muestras con menos probabilidades de estar contaminadas. Normalmente la muestra de aceite se toma a baja velocidad en vacío, si el régimen de flujo es demasiado bajo aumente la velocidad del motor para obtener la muestra de aceite, las válvulas de toma de muestras en línea no se pueden usar en sistemas de aceite no presurizados como diferenciales o mandos finales, el uso de la bomba de toma de muestras es el método recomendado para sistemas de aceite no presurizados.</p>
      <p>Antes de obtener una muestra de aceite S·O·S, opere la máquina hasta que el aceite esté caliente y circule bien. Después, obtenga la muestra de aceite S·O·S. Para obtener una buena muestra de aceite, no tome la muestra de aceite de la corriente de drenaje. Un método de chorro de drenaje puede permitir que un chorro de aceite sucio de la parte inferior del compartimiento contamine la muestra. Igualmente, no tome nunca una muestra de aceite de un recipiente de aceite ni extraiga una muestra de un filtro usado.</p>
    </div>
  );
};

const M2s10 = () => {
  const data = [
    {
      bac: 'Motor',
      efectostip: '250 Horas',
      efectospre: '250 Horas',
      efectospre1: 'Si',
    },
    {
      bac: 'transmisión',
      efectostip: '1.000 Horas',
      efectospre: '500 Horas',
      efectospre1: 'Si',
    },
    {
      bac: 'Sistema Hidráulico',
      efectostip: '2.000 Horas',
      efectospre: '500 Horas',
      efectospre1: 'Si',
    },
    {
      bac: 'Diferencial y mando final',
      efectostip: '2.000 Horas',
      efectospre: '500 Horas',
      efectospre1: 'No',
    },
    {
      bac: 'Sistema de enfriamiento',
      efectostip: '6.000 Horas ',
      efectospre: '500 Horas',
      efectospre1: 'No',
    },

  ];
  return (
    <div className="space-y-3">
      <ImageTitleForSection
        src="/img-cursos/10/10m1s1.26.png"
        text=""
      />
      <h2>Pasos para tomar una muestra de aceite con sonda de latón (válvula de línea).</h2>
      <p>Notas de colores de extracción por vacío: La fotografía muestra la configuración de color de la funda contra polvo. El color de las fundas contra polvo, ubicadas en las válvulas de muestreo para compartimientos de aceite presurizados corresponderá al sistema específico. Cortar el tubo con una navaja es difícil y deja partículas que pueden contaminar la muestra en el tubo. Para evitar estos problemas, recomendamos el cortador de tubo (1U7648), que permite un corte rápido y preciso con una sola mano. Mantenga tapados los frascos nuevos y vacíos, y guarde los frascos y tubos en bolsas plásticas protegidas del polvo. La bomba de vacío y la sonda de la válvula de bronce también deben estar protegidas del polvo. Si piensa que una muestra se contaminó, deséchela y tome una nueva.</p>
      <p>Este método de tomar muestras requiere una sonda de latón 8T9208 y un tubo de aproximadamente 15 cm (6 in), si va a tomar muestras de varios compartimentos comienza por el sistema más limpio, generalmente el sistema hidráulico, siga con la transmisión o el sistema de dirección y finalmente el sistema del motor. Utilicé un trozo de tubo nuevo para cada máquina o motor. después de tomar muestras de aceite del motor es de suma importancia descartar el tubo debido a la posibilidad de que el hollín y los aditivos del aceite queden depositados en el tubo y contaminen otras muestras.</p>
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="text-center">
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b border-gray-200 border-x">Comportamiento</th>
            <th className="py-2 px-4 border-b border-gray-200 border-x">Intervalo de cambio</th>
            <th className="py-2 px-4 border-b border-gray-200 border-x">Intervalo de nuestreo</th>
            <th className="py-2 px-4 border-b border-gray-200 border-x">Válvula de muestreo</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200 border-x">{row.bac}</td>
              <td className="py-2 px-4 border-b border-gray-200 border-x">{row.efectostip}</td>
              <td className="py-2 px-4 border-b border-gray-200 border-x">{row.efectospre}</td>
              <td className="py-2 px-4 border-b border-gray-200 border-x">{row.efectospre1}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="float-right ml-4 mb-4 w-full max-w-[370px] md:w-1/2 space-y-2">
        <ImageFormat
          src="/img-cursos/10/10m1s1.29.png"
          text=""
        />
        <ImageFormat
          src="/img-cursos/10/10m1s1.27.png"
          text=""
        />
        <ImageFormat
          src="/img-cursos/10/10m1s1.28.png"
          text=""
        />
        <ImageFormat
          src="/img-cursos/10/10m1s1.25.png"
          text=""
        />
      </div>
      <h2>Paso A</h2>
      <p>Haga funcionar el motor a velocidad baja en vacío y quite la tapa contra el polvo de la válvula del compartimiento que va a tomar la muestra.</p>
      <h2>Paso B</h2>
      <p>Inserte la sonda en la válvula y recoja aproximadamente 100 ml de aceite en un recipiente para basura. si el flujo de aceite es muy lento a baja en vacío, puede ser necesario que alguien acelere la velocidad del motor hasta alta en vacío mientras extrae la muestra de aceite. (Este proceso limpia la válvula y ayuda a obtener una mayor seguridad de muestra que representa el estado en que se encuentra el aceite.</p>
      <h2>Paso C</h2>
      <p>Vuelva a insertar la sonda en la válvula y llené 3/4 partes de la botella para muestras. no la llene completamente no permita la entrada de suciedad en la botella ni en la tapa.</p>
      <h2>Paso D</h2>
      <p>Saqué la sonda de la válvula y aseguré la tapa a la botella. luego ponga la botella con la etiqueta debidamente llenada en el tubo de envío.</p>
      <p>Como asegurar resultados precisos del programa S.O.S</p>
      <p>Para asegurar resultados precisos de la muestra, anote toda la información solicitada para cada compartimiento de la máquina. el modelo, número de serie y las unidades del medidor de servicio tanto del equipo como del aceite son muy importantes. si es necesario puede obtener la información sobre la clasificación y el tipo de aceite y la lectura del medidor de servicio de los registros del taller cuando efectuaron el último cambio de aceite. también está importancia primordial indicar si cambio o no cambió el aceite al tomar la muestra.</p>
      <p>Las muestras de aceite nuevo son necesarias para analizar las condiciones en que se encuentra el aceite. Al recibir aceite de una marca nueva o un envió de aceite en gran volumen, envié una muestra indicando en la etiqueta el tipo, la marca y la clasificación del aceite, para evitar que la etiqueta se engrase y facilitar su lectura, llénela con información antes de tomar las muestras.</p>
    </div>
  );
};

const M2s11 = () => {
  return (
    <div className="space-y-3">
      <h2>Usando el método de extracción por vacío.</h2>
      <p>Este método para tomar requiere una bomba de vacío 1U5718 o una similar. utilice este método para los sistemas de baja presión que no están equipados con válvulas para tomar muestras. recalcamos la importancia de utilizar un nuevo trozo de tubo después de tomar muestras de aceite del motor debido a la posibilidad de que el hollín y los aditivos del aceite queden depositados en el tubo y contaminen otras muestras.</p>
      <div className="float-right ml-4 mb-4 w-full max-w-[250px] md:w-1/2 space-y-2">
        <ImageFormat
          src="/img-cursos/10/10m1s1.30.png"
          text=""
        />
        <ImageFormat
          src="/img-cursos/10/10m1s1.32.png"
          text=""
        />
          <ImageFormat
          src="/img-cursos/10/10m1s1.33.png"
          text=""
        />
          
          <ImageFormat
          src="/img-cursos/10/10m1s1.31.png"
          text=""
        />
      </div>
      <p>Muestras de refrigerante, no utilice la misma bomba que ha usado para extraer las muestras de aceite. a pesar de que el fluido no entra en el barril de la bomba el residuo de glicol de una muestra de refrigerante puede causar resultados positivos falsos en las muestras de aceite que se tomen posteriormente con la misma bomba destine otra bomba para el muestreo trabajos y que no quiero a nadie ahorita del refrigerante.</p>
      <h2>Paso A</h2>
      <p>apaga el motor, mida el tubo nuevo y córtelo del largo de la varilla indicadora de nivel. si el compartimiento de dónde está tomando la muestra no tiene una varilla, corté el tubo de modo que llegué hasta la mitad de la profundidad del aceite.</p>
      <h2>Paso B</h2>
      <p>Inserte el tubo por la cabeza de la bomba de vacío y apriete la tuerca de retención el tubo debe sobresalir aproximadamente 4 cm de la base de la cabeza de la bomba de vacío.</p>
      <h2>Paso C</h2>
      <p>Conecte una nueva botella de muestreo a la bomba de vacío e inserte el tremo del tubo en el aceite, no permita que el tubo toqué el fondo del compartimiento.</p>
      <h2>Paso D</h2>
      <p>Accione la manija de la bomba para crear un vacío. Mantenga la bomba en posición vertical si la voltea se puede contaminar con el aceite. si le entra aceite a la bomba desarmarla y limpiarla antes de tomar la muestra y en 3/4 partes de la botella para muestras no la llene completamente.</p>
      <h2>Paso E</h2>
      <p>Saca el tubo del compartimiento la botella de la bomba de vacío y asegure la tapa la botella luego ponga la botella con la etiqueta debidamente llenada en el tubo de envío.</p>
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
          src="https://www.youtube.com/embed/AOW3T7RqfNM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo2 = [M2s1, M2s2, M2s3, M2s4, M2s5, M2s6, M2s7, M2s8, M2s9, M2s10,  M2s11, Video];

export default Modulo2;