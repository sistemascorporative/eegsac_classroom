import { ListNumbered, ListNumberedBold, ListPoint } from "../../../components/ui/List";
import { ImageTextForSection, ImageTitleForSection, ImageFormat, ImageForSection } from "../../../components/ui/Imagen";


const M5s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Tareas, ajustes y pruebas</h2>
      <ImageForSection
        src="/img-cursos/10/10m1s16.png"
      />
      <h3>Intervalos de mantenimiento.</h3>
      <p>El usuario es responsable de realizar el mantenimiento, incluidos todos los ajustes, el usode lubricantes, fluidos y filtros apropiados, y el reemplazo de componentes debido aldesgaste normal y al envejecimiento. Si no se realizan los procedimientos de mantenimientoadecuados en los intervalos establecidos, puede reducirse el rendimiento del producto oacelerarse el desgaste de los componentes. Utilice el kilometraje, el consumo decombustible, las horas de servicio o el tiempo de calendario, LO QUE OCURRA PRIMERO,para determinar los intervalos de mantenimiento. Los productos que se usan en condicionesde operación exigentes pueden requerir un mantenimiento más frecuente.</p>
      <p><span className="font-bold text-primary">Nota:</span>Antes de efectuar las tareas de mantenimiento de cada intervalo consecutivo, hay que realizar tambi%C3%A9n todas las tareas de mantenimiento del intervalo anterior.</p> 
      <p>Las actividades que se incluyen en cada intervalo de mantenimiento son muy comunes entre los fabricantes ya sea que se realiza en tomando en cuenta el kilometraje las horas las condiciones de trabajo o el tiempo estos intervalos de mantenimiento son encontrados en el manual de operación y mantenimiento de cada máquina ahí encontraremos cada una de las actividades a realizar tomaremos como ejemplo un tractor D5</p>
      <p><span className="font-bold text-primary">Se deben seguir las siguientes pautas si no se cumplen las horas de servicio:</span></p>
      <ListPoint list={[
        "Los procedimientos que se indican entre 10 y 100 horas de servicio se deben realizar al menos cada 3 meses.",
        "Los procedimientos que se indican entre 250 y 500 horas de servicio se deben realizar al menos cada 6 meses.",
        "Los procedimientos que se indican entre 1.000 y 2.500 horas de servicio se deben realizar al menos una vez por año.",
      ]}/>
    </div>
  );
};

const M5s2 = () => {
  return (
    <div className="space-y-3">
      <h2>Cada 10 hrs </h2>
      <h2>Inspección de la maquina</h2>
      <p>Las inspecciones alrededor de la maquina toman solo unos minutos al comienzo de cada turno y son una de las mejores formas de evitar problemas mecánicos y peligros de seguridad. Cuando encuentra una fuga de aceite, una conexión floja de una manguera o algún otro problema antes de una falla usted ayuda a evitar lesiones y a minimizar el tiempo de reparación es mucho más rápido y económico reemplazar una empaquetadura que la transmisión completa.</p>
      <div className="float-right ml-4 mb-4 w-full max-w-[370px] md:w-1/2 space-y-2">
        <ImageFormat
          src="/img-cursos/10/10m1s17.png"
          text=""
        />
        <ImageFormat
          src="/img-cursos/10/10m1s18.png"
          text=""
        />
          <ImageFormat
          src="/img-cursos/10/10m1s19.png"
          text=""
        />
        <ImageFormat
          src="/img-cursos/10/10m1s20.png"
          text=""
        />
        <ImageFormat
          src="/img-cursos/10/10m1s21.png"
          text=""
        />
        <ImageFormat
          src="/img-cursos/10/10m1s22.png"
          text=""
        />
        <ImageFormat
          src="/img-cursos/10/10m1s23.png"
          text=""
        />
        <ImageFormat
          src="/img-cursos/10/10m1s24.png"
          text=""
        />
        <ImageFormat
          src="/img-cursos/10/10m1s25.png"
          text=""
        />
        <ImageFormat
          src="/img-cursos/10/10m1s26.png"
          text=""
        />
        <ImageFormat
          src="/img-cursos/10/10m1s27.png"
          text=""
        />
      </div>
      <ListPoint list={[
        "Use sus sentidos, vista, olfato, oído y tacto.",
        "En cualquier momento que salga de la máquina y cuando lo haga al final del turno realice una inspección rápida alrededor de la máquina.",
        "Si observa algo diferente de lo observado cuando comenzó a operar la máquina entregue esa información al siguiente operador y asegúrese de que registra esta nueva información del equipo en su informe técnico.",
        "Asegúrese de realizar la inspección siempre de la misma manera sea ordenado dónde empieza ahí debe determinar",
      ]}/>
      <h3>Procedimiento de inspección.</h3>
      <p>Una inspección alrededor de la máquina tiene 3 áreas en el cual revisar:</p>
      <ListNumberedBold list={[
        "Nivel del suelo: Consiste en realizar una inspección en la parte inferior de la máquina como, por ejemplo: llantas, aros de las ruedas, pernos, tren de rodaje herramientas de corte, etc.",
        "En toda la máquina: Esta consiste en realizar una inspección a nivel central de la máquina como por ejemplo niveles de fluidos, filtros, correas, mangueras, daños en el chasis, etc.",
        "En la cabina: Consiste en realizar una inspección de los controles del operador como por ejemplo estado del aire acondicionado (se aplica), interruptores, bocina, asiento, luces de trabajo, etc.",
      ]}/>
      <p>para realizar esta inspección de manera eficiente puede ayudarse de un checklist que es una herramienta que garantiza el orden lógico de la inspección además nos ayuda a mantener un control diario del equipo, el informe de servicio debe ser explícito y lo más claro posible debe ser ordenado y limpio, garantice siempre que exista una introducción del problema, el cuerpo o desarrollo donde explica que revisó o reparo y una conclusión explicando el estado actual.</p>
      <h3>Cuando sea necesario</h3>
      <ListPoint list={[
        "Cámara - Limpiar/ajustar",
        "Cuchillas y cantoneras de extremo - Inspeccionar/reemplazar",
        "Elemento primario o secundario del filtro de aire del motor - Reemplazar",
        "Cilindro del auxiliar de arranque con éter - Reemplazar",
        "Posición de la rueda loca delantera - Revisar",
        "Sistema de combustible - Cebar",
        "Filtro primario/separador de agu del sistema de combustible - Drenar",
        "Núcleo del radiador - Limpiar",
        "Tapa de presión del radiador - Limpiar/reemplazar",
        "Punta del desgarrador - Inspeccionar/reemplazar",
        "Respiradero y aceite de cabrestante - Cmabiar/limpiar",
        "Cable de acero del cabrestante - Instalar",
        "Depósito del lavaparabrisas - Llenar",
        "Limpiaparabrisas - Inspeccionar/reemplazar",
        "Ventanas - LImpiar",
      ]}/>
      <h2>Cada 50 horas de Servicio</h2>
      <ListPoint list={[
        "Cojinetes del bastidor en C - Lubricar",
        "Pasador central de la barra compensadora - Lubricar",
        "Pasadores de extremo de la barra compensadora - Lubricar",
        "Cojinetes del cilindro de levantamiento - Lubricar",
        "Pasadores de inclinación en ángulo mecánica - Lubricar",
        "Cojinetes del cilindro y del varillaje del desgarrador - Lubricar",
        "Rodillos guiacables del cabrestnte - Lubricar",
      ]}/>
      <h2>A las primeras 250 horas de servicio</h2>
      <p>Prolongador de vida útil de refrigerante en el sistema de enfriamiento (ELC)</p>
      <h2>Cada 250 horas de servicio</h2>
      <ListPoint list={[
        "Correa - Inspeccionar/Reemplazar",
        "Muestra de aceite del motor - Obtener",
        "Nivel del aceite del eje pivote - Revisar",
        "Cadena - Revisar/ajustar",
        "Nivel de aceite del cabrestante - Revisar",
      ]}/>
      <h2>Cada 500 horas de servision</h2>
      <ListPoint list={[
        "Filtro de la cabina (recirculación) - Limpiar/inspeccionar/reemplazar",
        "MUestra de refrigerante del sistema de enfriamiento (nivel 1) - Obtener",
        "Aceite y filtro del motor - Cambiar",
        "Muestra de aceite del mando final - Obtener",
        "Filtros primario y secundario del sistema de combustible - Reemplazar",
        "Colador y filtro de la tapa del tanque de combustible - Reemplazar/limpiar",
        "Muestra de aceite del sistema hidráulico - Obtener",
        "Nivel de aceite del compartimiento del resorte tensor - Revisar",
        "Muestra de aceite del sistema de trnsmisión -Obtener",
        "Cojinete de tambor de cabrestante -Lubricar",
        "Muestra de aceite del cabrestante auxiliar - Obtener",
        "Tapón de ventilación del cabrestante - Limpiar",
      ]}/>
      <h2>Cada 750 horas de servicio</h2>
      <ListPoint list={[
        "FIltro de cabina(aire fresco) - LImpiar/inspeccionar/reemplazar",
      ]}/>
      <h2>Cada 1000 horas de servicio</h2>
      <ListPoint list={[
        "Fitro del aire acondicionado (con antefiltro) - Limpiar",
        "Batería - Inspeccionar",
        "Juego de válvulas del motor - Revisar/ajustar",
        "Filtros de aceite del sistema hidráulico - Reemplazar",
        "Respiradero del tanque hidráulico - Reemplazar",
        "EStructura de Protección en Caso de Vuelcos (ROPS) y estructura de protección contra objetos que caen (FOPS) - Inspeccionar",
        "Rejilla de barrido del convertidor de par - Limpiar",
        "Rejilla magnética de la transmisión - Limpir",
        "Aceite de la transmisión - Cambiar",
        "Fltro de aceite de la transmisión - Reemplazar",
      ]}/>
      <h2>Cada 2000 horas de servicio</h2>
      <ListPoint list={[
        "Muestra de refrigerante del sistema de enfriamiento (nivel 2)",
        "Aceite del mando final - Cambiar",
        "Aceite del sistema hidráulico - Cambiar",
        "Secador de refrigerante - Reemplazar",
        "Bastidor de rodillos de la cadena - Inspeccionar",
      ]}/>
      <h2>Cada 3000 horas de servicio</h2>
      <ListPoint list={[ 
        "Correa - Reemplazar",
        "Temostato del agua del sistema de enfriamiento - Reemplazar",
      ]}/>
      <h2>Cada 3 años</h2>
      <ListPoint list={[
        "Cinturon de seguridad",
      ]}/>
      <h2>Cada 6.000 horas de servicio</h2>
      <ListPoint list={[
        "Prolongador de vida útil de refrigerante en el sistema de enfriamiento (ELC) - Agregar",
      ]}/>
      <h2>Cada 12000 horas de servicio</h2>
      <ListPoint list={[
        "Refrigerante de larga duración del sistema de enfriamiento - Cambiar",
      ]}/>
    </div>
  );
};

const M5s3 = () => {
  return (
    <div className="space-y-3">
      <h2>Ajustes y calibraciones</h2>
      <ImageTextForSection
        src="/img-cursos/10/10m1s28.png"
        text="Calibracion "
      />
      <h3>Kidney Loop</h3>
      <p>La filtración del asa renal es un proceso en el que se extrae una cierta cantidad de líquido de un sistema, se filtra y luego se devuelve al sistema. La filtración de bucle renal es diferente a la filtración de flujo completo, que es común en las aplicaciones de filtro de retorno de la máquina. En un proceso de filtración de bucle de riñón:</p>
      <ListPoint list={[
        "El aceite se elimina del sistema.",
        "Filtrado",
        "Devuelto al sistema para mezclar",
      ]}/>
      <p>El nivel de contaminación de todo el sistema se reduce ligeramente durante cada paso delaceite en bucle de riñón. El nivel de contaminación total disminuirá constantemente, con eltiempo. La filtración del asa renal es un proceso lento. Sin embargo, la filtración del circuitode riñón es menos costosa que los cambios de aceite y la mano de obra resultante u otrostipos de limpieza del sistema. El proceso de filtración de bucle de riñón se puedeimplementar durante un intervalo PM programado o después de una falla catastrófica. Lafiltración de asa de riñón es una adición a sus procedimientos normales de mantenimiento.</p>
      <p>A medida que aumenta la viscosidad del aceite, disminuye la facilidad de filtración. Los elementos del filtro no están diseñados para filtrar alrededor o más de 600 partículas.</p>
      <p>El muestreo S·O·S es el mejor método para determinar el nivel de contaminación delsistema. La información S·O·S en el sitio lo guiará con esta decisión. Cuando el nivel decontaminación se haya reducido al objetivo o limpiador ISO recomendado, interrumpa elproceso de filtrado. La información S·O·S in situ se puede obtener fácilmente utilizando uncontador de partículas portátil Caterpillar. La información sobre el uso de un contador departículas portátil durante la filtración de bucle renal se encuentra en varias pautas defiltración de máquinas.</p>
      <p>Una medición de tiempo es otro método para determinar la duración adecuada del filtrado del sistema. La medición del tiempo es un método general, pero puede brindar cierta orientación cuando no se dispone de un contador de partículas portátil.</p>
    </div>
  );
};

const M5s4 = () => {
  return (
    <div className="space-y-3">
      <h2>Pautas de filtración del aceite</h2>
      <div className="float-right ml-4 mb-4 w-full max-w-[370px] md:w-1/2 space-y-2">
        <ImageFormat
          src="/img-cursos/10/10m1s29.png"
          text="filtración del aceite"
        />
        <ImageFormat
          src="/img-cursos/10/10m1s30.png"
          text=""
        />
      </div>
      <ListNumbered list={[
        "El sistema de filtración debe pasar cada unidad de fluido del aceite del compartimento a través del filtro de bucle de riñón. Para lograr la filtración del circuito de riñón, la unidad de filtración debe mover siete veces la capacidad de fluido del compartimiento a través del filtro. La filtración de siete veces el fluido del compartimiento se debe a la mecánica de mezcla y las áreas muertas del compartimiento. Ejemplo: Si un tanque tiene una capacidad de 37,9 L (10 gal EE.UU.), la unidad de filtrado debe mover 265 L (70 gal EE.UU.) de aceite a través del filtro una vez por cada unidad de aceite que pase por la unidad de filtrado.",
        "Para limpiar y reducir la contaminación del sistema a un nivel determinado por el medio filtrante. Todo el aceite filtrado debe pasar por el medio filtrante 5 veces. ejemplo: Un sistema est%C3%A1 siendo filtrado a trav%C3%A9s de un filtro de 10um. Debido a la eficiencia del medio filtrante, todo el aceite debe pasar a trav%C3%A9s del medio filtrante 5 veces (pasadas m%C3%BAltiples). La incorporaci%C3%B3n de una filtraci%C3%B3n de paso m%C3%BAltiple aumenta la cantidad de veces que el filtro ve cada unidad de aceite. El carro del filtro elimina mayores cantidades de contaminantes con cada ciclo adicional.",
      ]}/>
      <p>Dadas las dos pautas anteriores, el tiempo de filtrado se puede resumir en el siguiente ejemplo.</p>
      <ListNumbered list={[
        "La capacidad del sistema es de 113,56 L (30 gal EE. UU.).",
        "7 x 113,56 L (30 gal EE. UU.) = 794,94 L (210 gal EE. UU.) (para pasar cada unidad de aceite por el filtro, una vez).",
        "5 x 794,94 L (210 gal EE. UU.) = 3974,68 L (1050 gal EE. UU.) (para filtrar adecuadamente las partículas del aceite hasta el tamaño nominal del medio filtrante).",
        "La capacidad del carro del filtro de bucle renal del ejemplo es de 15 galones por minuto. El carro del filtro debe funcionar durante 70 minutos (1050/15=70) para cumplir con las pautas de filtración de Caterpillar. Recuerde, el uso de esta fórmula de tiempo no es exacto. Para verificar la limpieza final del fluido, se deben usar métodos aprobados.",
      ]}/>
      <p>La capacidad de la unidad de filtrado debe seleccionarse correctamente para mover la cantidad requerida de aceite 3974,68 L (1050 gal EE.UU.) a través del filtro en el marco de tiempo previsto. Otros parámetros para el funcionamiento y la eficiencia del carro del filtro se discutirán más adelante en este artículo. Los tiempos de filtración específicos del vehículo también se encuentran dentro de las diversas Pautas de control de contaminación de Caterpillar.</p>
      <p>Los niveles de operación de la máquina Caterpillar no dictan un nivel permitido decontaminación del sistema. Las pautas de control de contaminación están disponibles paramejorar la salud del sistema de fluidos durante la vida útil del producto. Las pautas no sonespecificaciones, sino los niveles operativos máximos de contaminación recomendados porCaterpillar. Operar los sistemas de la máquina en o por debajo de estos niveles decontaminación ayudará a lograr la vida útil diseñada de los componentes del sistema.</p>
      <p>Una estrategia de administración del sistema sería difícil de implementar sin estas pautas. Según los datos históricos de S·O·S, la vida útil de los componentes está directamente relacionada con la gestión adecuada de la salud y la limpieza de los fluidos.</p>
      <p>Es posible que la filtración de máquinas más antiguas no sea adecuada para lograr los nuevos niveles de limpieza recomendados. Las máquinas más antiguas se beneficiarán de un mayor nivel de gestión del control de la contaminación del sistema. La vida útil diseñada de cualquier componente se puede lograr eliminando el desgaste y las fallas relacionadas con la contaminación.</p>
    </div>
  );
};

const M5s5 = () => {
  return (
    <div className="space-y-3">
      <h2>ISO 4406</h2>
      <div className="float-right ml-4 mb-4 w-full max-w-[370px] md:w-1/2 space-y-2">
        <ImageFormat
          src="/img-cursos/10/10m1s31.png"
          text=""
        />
        <ImageFormat
          src="/img-cursos/10/10m1s32.png"
          text=""
        />
      </div>
      <p>ISO 4406 método para codificar el nivel de contaminación por partículas sólidas.ISO (Organización Internacional de Normalización) es una federación mundial deorganismos nacionales de normalización (organismos miembros de ISO). ISO 4406: 2017especifica el código que se utilizará para definir la cantidad de partículas sólidas en el fluidoutilizado en un sistema de energía de fluido de compartimiento dado. Un contador departículas automático deriva el tamaño equivalente de una partícula del área de la seccióntransversal de la partícula. Los recuentos de partículas se ven afectados por variosfactores. Estos factores incluyen la obtención de la muestra, la precisión del conteo departículas, el recipiente de la muestra, dónde se usa y la limpieza del fluido. Se debe tenerel debido cuidado durante la obtención de la muestra para asegurarse de que la muestraobtenida sea representativa de la circulación del fluido en el sistema.</p>
      <p>El código para los niveles de contaminación que utilizan contadores automáticos de partículas consta de tres números de escala, por ejemplo, X/Y/Z.</p>
      <ListPoint list={[
        "X - El número de partículas que es igual o mayor a 4 micras.",
        "Y - El número de partículas que es igual o mayor a 6 micras.",
        "Z - El número de partículas que es igual o mayor que 14 micras",
      ]}/>
      <p>Actualmente, Caterpillar no requiere el informe del número de escala (X) ya que las tolerancias hidráulicas exceden el valor de 4 micras, por lo tanto, se usa un (-) en lugar de la (X). Por ejemplo, un conteo de partículas se lee como -/Y/Z, lo que significa que no había ningún requisito para contar partículas iguales o mayores a 4 micrones.</p>
    </div>
  );
};

const M5s6 = () => {
  return (
    <div className="space-y-3">
      <h2>Cuando se debe realizar una intervención del sistema</h2>
      <div className="float-right ml-4 mb-4 w-full max-w-[370px] md:w-1/2 space-y-2">
        <ImageFormat
          src="/img-cursos/10/10m1s33.png"
          text=""
        />
        <ImageFormat
          src="/img-cursos/10/10m1s34.png"
          text=""
        />
      </div>
      <p>¿Cuándo se debe implementar la filtración de fluidos externa? ¿Cuándo se debe tomar acción en un sistema contaminado? Los siguientes son varios síntomas o signos que indican que se requiere una posible intervención del sistema:</p>
      <ListPoint list={[
        "Apertura de cualquier sistema hidráulico para reparación o servicio",
        "Identificación de malas prácticas de mantenimiento",
        "Fugas",
        "Sobrecalentamiento del sistema",
        "Pobre eficiencia del sistema.",
        "Desgaste normal/posiblemente elevado",
        "El análisis S·O·S indica altos niveles de contaminación por cualquier motivo",
      ]}/>
    </div>
  );
};

const M5s7 = () => {
  return (
    <div className="space-y-3">
      <h2>¿Qué intervención es adecuada?</h2>
      <p>Hay varios niveles de intervención a considerar al abordar la contaminación del sistema.</p>
      <ImageTextForSection
        src="/img-cursos/10/10m1s35.png"
        text="Educación del cliente"
      />
      <ListPoint list={[
        "Educación del cliente",
        "Filtros de alta eficiencia",
        "Filtración de asa de riñón",
        "Cambios completos de aceite",
        "Lavado completo del sistema",
      ]}/>
      <p>Cualquiera de las medidas anteriores puede ser apropiada para un nivel y una condición de contaminación del sistema determinados. Incorporar el nivel de intervención adecuado según se requiera.</p>
      <ListPoint list={[
        "Después de una falla catastrófica de un componente de cualquier tipo, el sistema de fluido completo DEBE limpiarse a fondo. La filtración de asa renal como primer o único procedimiento de limpieza del sistema no es una opción. La limpieza manual puede incluir algunos o todos los pasos siguientes:",
        "Lavado de todas las líneas del sistema",
        "Desmontaje y limpieza o cambio de componentes principales",
        "Limpieza a vapor de carcasas o depósitos grandes",
        "Cambio completo de aceite",
      ]}/>
    </div>
  );
};

const M5s8 = () => {
  return (
    <div className="space-y-3">
      <h2>Objetivos de limpieza</h2>
      <ImageTextForSection
        src="/img-cursos/10/10m1s37.png"
        text="Caterpillar recomienda que los objetivos de limpieza se apliquen"
      />
      <p>Los distribuidores Cat deben ayudar a garantizar que las máquinas Cat cumplan con los objetivos de limpieza recomendados por Caterpillar. Caterpillar recomienda que los objetivos de limpieza se apliquen a los equipos nuevos a los que los distribuidores agregan accesorios, agregan herramientas o realizan el ensamblaje final. Los objetivos de limpieza deben abarcar equipos usados, de alquiler o reparados.</p>
      <p>En general, los objetivos de limpieza recomendados para las máquinas Caterpillar queoperan en el campo son los mismos que los niveles mínimos de limpieza de arranque deCaterpillar para equipos nuevos. Estos objetivos se expresan en códigos ISO de dosfactores (X/Y) determinados a partir de los datos de recuento de partículas obtenidos delprograma de muestreo programado de aceite (S·O·S). El primer factor (X) representa elnúmero de partículas mayores de 6 micrones de tamaño. El segundo factor (Y) representael número de partículas mayores de 14 micrones de tamaño. Es posible que las máquinasde tecnología más antigua en el campo no puedan mantener los niveles de limpieza de losmodelos más nuevos. Sin embargo, se deben utilizar los mismos procedimientos demantenimiento y servicio de control de contaminación en todos los equipos Caterpillar.</p>
      <div className="container mx-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border border-gray-300">Sistemas hidráulicos/de transmisión</th>
              <th className="p-2 border border-gray-300">Código ISO</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Sistemas Hidráulicos (Implemento y Dirección)</td>
              <td className="p-2 border border-gray-300">ISO 18/15 o más limpio</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Transmisiones Electrónicas</td>
              <td className="p-2 border border-gray-300">ISO 18/15 o más limpio</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Transmisiones mecánicas</td>
              <td className="p-2 border border-gray-300">ISO 21/17 o más limpio</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Sistemas de tren de potencia</td>
              <td className="p-2 border border-gray-300">ISO 18/15 o más limpio</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const M5s9 = () => {
  return (
    <div className="space-y-3">
      <h2>Prueba de gases de escape Blowby</h2>
      <ImageTextForSection
        src="/img-cursos/10/10m1s38.png"
        text="Los gases de combustión que pasan al cárter son uno de los tres factores que ayudan a determinar el intervalo de reacondicionamiento en el bastidor"
      />
      <p>Mida los gases de combustión que pasan al cárter en los motores nuevos. Registre los datos. Siga midiendo periódicamente los gases de combustión. La comparación de los datos registrados con los datos nuevos proporciona información sobre el estado de los motores. Los gases de combustión que pasan al cárter son uno de los tres factores que ayudan a determinar el intervalo de reacondicionamiento en el bastidor</p>
      <p>Después de usar un nuevo motor durante un tiempo corto, los gases de combustión pueden disminuir al asentarse los anillos de los pistones. Estos gases se desgastarán gradualmente a medida que se desgastarán los siguientes componentes:</p>
      <ListPoint list={[
        "Anillos de pistón",
        "camisas de cilindro",
      ]}/>
      <p>Los problemas de los anillos de los pistones hacen que el aceite se deteriore rápidamente. Se puede obtener información de referencia al estado de combustión de los anillos de los pistones a partir de la medición de los gases de y de los resultados del análisis de aceite.</p>
      <p>La cantidad de gases de combustión que pasan al cárter en un motor desgastado puede ser dos o más veces mayor que en un motor nuevo.</p>
      <p>Un aumento súbito de estos gases puede indicar la rotura de un anillo de pistón. Las siguientes condiciones son otras fuentes posibles de este problema:</p>
      <ListPoint list={[ 
        "Guías de válvulas desgastadas",
        "Fugas en el sello del turbocompresor",
      ]}/>
      <p>Un volumen alto de gases de combustión que pasan al cárter en un motor reconstruido se debe a los siguientes factores:</p>
      <ListPoint list={[
        "Anillos de pistón mal asentados.",
        "Piezas desgastadas tales como guías de válvulas no reemplazadas.",
      ]}/>
      <p>Una cantidad excesiva de gases de combustión en el cárter puede indicar la necesidad de realizar un reacondicionamiento. Manteniendo un registro de los resultados, se observará un aumento gradual de la cantidad de estos gases hasta que la cantidad se haga excesiva.</p>
    </div>
  );
};


const M5s10 = () => {
  return (
    <div className="space-y-3">
      <h2>Procedimiento de prueba</h2>
      <ImageForSection
        src="/img-cursos/10/10m1s39.png"
      />
      <ListNumbered list={[
        "Conecte la manguera de 1,5 m (5 pies) a la ubicación más conveniente del tubo de salida del respiradero del cárter o de la manguera del respiradero. Conecte un buje (3) y una manguera (2) de tamaño adecuado al respiradero del cárter. Fije la manguera con abrazaderas (1).",
        "Conecte el Detector de Escape de Gases 8T-2685 (5) a la manguera deslizando el detector en la manguera (4).Nota: Instale el detector (5) con la flecha (6) apuntando en la dirección del flujo de aire.",
        "Conecte el Cable 8T-5297 al Detector de Escape de Gases 8T-2685 y al Conjunto de Indicador de Escape de Gases 8T-2701",
      ]}/>
    </div>
  );
};
const M5s11 = () => {
  return (
    <div className="space-y-3">
      <h2>Medición de los gases de escape</h2>
      <ImageForSection
        src="/img-cursos/10/10m1s40.png"
      />
      <p>El Detector de Escape de Gases 8T-2685 es sensible al ruido y al movimiento del aire. A fin de evitar lecturas incorrectas, mantenga el detector alejado del ventilador del motor y de cualquier movimiento de aire que pase por el extremo del detector.</p>
      <ListNumbered list={[
        "Arranque y ponga en funcionamiento el motor hasta que alcance la temperatura normal de funcionamiento.",
        "Pulse el botón ON. ",
      ]}/>
      <div className="ml-6"> 
        <ListNumbered list={[
          "Pulse el botón ACTUAL. Podría aparecer en pantalla una flecha por encima de ACTUAL.",
          "Seleccione L/MIN o FT3/HR y pulse el botón. aparecerá una flecha junto a la selección.",
          "Pulse el botón NORM RATE. aparecerá una flecha junto a la selección.",
        ]}/>
      </div>
      <ListNumbered list={[
        "Revolución el motor. Se muestra el valor del escape de gases. La pantalla cambiará siempre que varíe la cantidad de escape de gases.",
        "Pulse el botón MED RATE o SLOW RATE si la pantalla cambia demasiado deprisa. ",
      ]}/>
      <div className="ml-6"> 
        <ListNumbered list={[
          "Después de probar el escape de gases mínimo, pruebe el escape de gases máximo y registre la diferencia que hay entre los dos valores. Pulse los botones para recuperar los valores MIN y MAX o DIFF entre ambas lecturas.",
          "Pulse el botón CLEAR para volver a probar los valores MIN y MAX.",
          "Para conservar los valores MIN, MAX, DIFF o ACTUAL en pantalla, pulse el botón HOLD.",
        ]}/>
      </div>
      <p>Nota: No pulse el botón HOLD hasta que la comprobación haya finalizado. Las lecturas no cambiarán a partir del momento en que se pulse el botón HOLD. La memoria conservará los valores hasta que se pulse el botón HOLD CLEAR o hasta que se apague el indicador de escape de gases del cárter/flujo de air</p>
    </div>
  );
};

const M5s12 = () => {
  return (
    <div className="space-y-3">
      <h2>Análisis de los resultados</h2>
      <ImageForSection
        src="/img-cursos/10/10m1s41.png"
      />
      <p>No utilice los datos por sí solos para determinar si se debe llevar a cabo una reparacióngeneral del motor. Los datos obtenidos a partir del indicador de escape de gases delcárter/flujo de aire deben utilizarse exclusivamente como información adicional. Debetener en cuenta otros indicadores, como un consumo elevado de aceite, poca potencia,arranque difícil o consumo excesivo de combustible. Los datos procedentes del indicador deescape de gases del cárter/flujo de aire deben utilizarse con el propósito de estableceruna tendencia para el motor. Es importante que no tome una decisión acerca de si repararun motor o no en base a los resultados de una prueba única de escape de gases.</p>
      <p>Cuando un motor nuevo se ha utilizado poco tiempo, el escape de gases puede disminuirmientras los anillos se asientan. Debe comprobarse el escape de gases de los nuevosmotores durante todas las revisiones de mantenimiento. A medida que los anillos delpistón y las paredes de los cilindros se desgasten, el escape de gases se producirágradualmente. Otras fuentes de escape de gases pueden ser unas guías de válvuladesgastadas o unas juntas del turboalimentado que tengan fugas. El escape de gases deun motor desgastado puede ser dos o más veces mayor que el escape de gases de unmotor nuevo, y puede indicar la necesidad de llevar a cabo una reparación general.</p>
      <p>Un motor que haya estado sometido a una reparación general puede verse afectado porun índice elevado de escape de gases por varios motivos: anillos incorrectamenteasentados, piezas desgastadas que no se sustituyeron, o guía de válvulas desgastadas. Silleva un registro de los resultados, podrá detectar un aumento gradual de la cantidad deescape de gases hasta que llegue a un punto en el que la cantidad de escape de gasessea excesiva. Cualquier incremento repentino en el escape de gases podría indicar unanillo de pistón roto.</p>
      <p>Utilice siempre el mismo método para comprobar el escape de gases a fin de facilitar la comparación con las pruebas que pueda realizar en un futuro. Consulte el índice de escape de gases con el motor totalmente revolucionado, ya sea sin carga o a plena carga. El escape de gases puede variar hasta un 100% de una situación sin carga a una situación de plena carga. Utilice la lectura más alta como el valor real de escape de gases.</p>
      <p>El medidor de escape de gases es sensible al ruido del motor a una frecuencia elevada. Cuando tome medidas del escape de gases, aleje el detector de escape de gases del motor lo máximo posible. NO coloque el detector cerca de las aspas del turboalimentador o del ventilador, dado que podría originar errores de lectura.</p>
    </div>
  );
};

const M5s13 = () => {
  return (
    <div className="space-y-3">
      <h2>Calibración de válvulas del motor</h2>
      <ImageForSection
        src="/img-cursos/10/10m1s45.png"
      />
      <p>Si es necesario ajustar el juego de válvulas varias veces durante un período corto, es porque hay un desgaste excesivo en una pieza diferente del motor. Localice el problema y haga las reparaciones necesarias para evitar más daños en el motor.</p>
      <p>Un juego de válvulas insuficiente puede ocasionar el desgaste rápido del árbol de levas y del levantaválvulas. La insuficiencia del juego de válvulas puede indicar que los asientos de las válvulas están desgastados.</p>
      <p>Las válvulas se desgastan debido a las siguientes causas:</p>
      <ListPoint list={[ 
        "Boquillas de inyección de combustible que funcionan incorrectamente",
        "Exceso de suciedad y aceite en los filtros del aire de admisión.",
        "Se excede con frecuencia la capacidad de carga del motor.",
      ]}/>
      <p>Demasiado juego de válvulas puede causar que se rompan los vástagos de la válvula, los resortes o los retenedores de resortes. Esto producirá emisiones mayores que la quimioterapia correcta.</p>
      <p>Demasiado juego de válvulas puede indicar los siguientes problemas:</p>
      <ListPoint list={[ 
        "Árbol de levas y levantaválvulas desgastadas",
        "balancines desgastados",
        "Varillas de empuje dobladas",
        "Receptáculo roto en el extremo superior de una varilla de empuje",
        "Tornillo de ajuste del juego de válvulas flojo",
      ]}/>
      <p>Si el árbol de levas y los levantaválvulas muestran un desgaste rápido, busque como posible causa la presencia de combustible en el aceite lubricante o aceite lubricante sucio.</p>
      <h2>EJEMPLO MOTOR C7.1 TRACTOR D5</h2>
      <div className="container mx-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border border-gray-300"></th>
              <th className="p-2 border border-gray-300">Válvulas de admisión</th>
              <th className="p-2 border border-gray-300">Válvulas de escape</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Juego de válvulas</td>
              <td className="p-2 border border-gray-300">0,35 ± 0,05 mm (0,0138 ± 0,0020 pulgadas)</td>
              <td className="p-2 border border-gray-300">0,35 ± 0,05 mm (0,0138 ± 0,0020 pulgadas)</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Orden de encendido</td>
              <td className="p-2 border border-gray-300" colSpan="2">1-5-3-6-2-4</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="float-center ml-4 mb-4 w-full max-w-[370px] md:w-1/2 space-y-2">
        <ImageFormat
          src="/img-cursos/10/10m1s44.png"
          text=""
        />
      </div>
      <p>El procedimiento para ajustar el juego de válvulas del motor para el motor es diferente del de los motores convencionales, debido a los sucesos alterados de apertura y cierre de la válvula.</p>
      <p><span className="font-bold text-primary">Nota: </span>Para motores nuevos, el juego de válvulas debe revisarse y reajustarse después de las primeras 500 horas y después de las 500 horas siguientes. El juego de válvulas debe revisarse después a intervalos de servicio de 1.000 horas.</p>
      <p><span className="font-bold text-primary">Nota: </span>Por ejemplo, si las varillas de empuje en un motor remanufacturado se reemplazan con piezas nuevas, ajuste el juego de válvulas a 0,25 ± 0,05 mm (0,0098 ± 0,0020 pulgadas) para la reconstrucción inicial. Los botones se deben reajustar a 0,35 ± 0,05 mm (0,0138 ± 0,0020 pulgadas) en los intervalos de servicio normales a partir de entonces.</p>
      <div className="container mx-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border border-gray-300" rowSpan="2">
                Gire el cigüeñal hasta que las válvulas de admisión estén completamente abiertas.
              </th>
              <th className="p-2 border border-gray-300" colSpan="2">
                Ajuste el juego de válvulas para lo siguiente:
              </th>
            </tr>
            <tr className="bg-gray-200">
              <th className="p-2 border border-gray-300">Válvulas de admisión<br/>(Número del cilindro)</th>
              <th className="p-2 border border-gray-300">Válvula de escape<br/>(Número del cilindro)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">11</td>
              <td className="p-2 border border-gray-300">9 (5)</td>
              <td className="p-2 border border-gray-300">10 (5)</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">3</td>
              <td className="p-2 border border-gray-300">5 (3)</td>
              <td className="p-2 border border-gray-300"></td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">7</td>
              <td className="p-2 border border-gray-300">11 (6)</td>
              <td className="p-2 border border-gray-300">12 (6)</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">1</td>
              <td className="p-2 border border-gray-300">3 (2)</td>
              <td className="p-2 border border-gray-300"></td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">9</td>
              <td className="p-2 border border-gray-300">7 (4)</td>
              <td className="p-2 border border-gray-300">8 (4)</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">5</td>
              <td className="p-2 border border-gray-300">1 (1)</td>
              <td className="p-2 border border-gray-300">2 (1)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ListPoint list={[
        "Quite la tapa del mecanismo de válvulas. Consulte el procedimiento de remoción en Desarmado y Armado, Tapa del mecanismo de válvulas - Quitar.",
        "Nota: Cuando se haya quitado o instalado la tapa del mecanismo de válvulas, hay que revisar el mazo de cables eléctricos. No atrape el mazo de cables del inyector cuando se instale la tapa del mecanismo de válvulas. No deje que el mazo de cables esté en contacto con la tapa del mecanismo de válvulas. Renueve el mazo de cables si está dañado.",
        "Vea la ilustración 3. Gire el cigüeñal hacia la derecha hasta que el par de válvulas de admisión (11) esté completamente abierto. Mida el juego de válvulas en las válvulas de admisión (9) y las válvulas de escape (10). Si es necesario, fije el juego de válvulas en los ajustes de la Tabla 2. Complete la secuencia de revisiones según la Tabla 3 hasta que se hayan revisado o ajustado todos los cilindros.",
        "Afloje la contratuerca del tornillo de ajuste de válvula que está sobre el tornillo de ajuste (1).",
        "Coloque la herramienta (A) entre el balancín y la válvula. Gire el tornillo de ajuste (1) mientras se mantiene sujeta la contratuerca del tornillo de ajuste de la válvula (2) para impedir que gire. Ajuste el juego de válvulas hasta que se logre la selección correcta.",
        "Después de cada ajuste, apriete la contratuerca del tornillo de ajuste de la válvula mientras sujeta el tornillo de ajuste de válvula (1) para que no gire. Esto impedirá que el tornillo de ajuste de válvula (1) gire. Apriete la contratuerca a un par de 27 N·m (239 lb in).",
        "Complete la secuencia de revisiones según la Tabla 3 hasta que se hayan revisado o ajustado todos los cilindros. Vuelva a instalar la tapa del mecanismo de válvulas.",
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
          src="https://www.youtube.com/embed/ne4hNVlBhXo"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo5 = [M5s1, M5s2, M5s3, M5s4, M5s5, M5s6, M5s7, M5s8, M5s9, M5s10, M5s11, M5s12, M5s13, Video];

export default Modulo5;