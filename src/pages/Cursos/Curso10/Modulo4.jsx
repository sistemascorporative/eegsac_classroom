import { ListPoint } from "../../../components/ui/List";
import {  ImageFormat, ImageForSection } from "../../../components/ui/Imagen";


const M4s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Filtros</h2>
      <div className="float-right ml-4 mb-4 w-full max-w-[370px] md:w-1/2 space-y-2">
        <ImageFormat
          src="/img-cursos/10/10m1s1.42.png"
          text=""
        />
        <ImageFormat
          src="/img-cursos/10/10m1s1.43.png"
          text=""
        />
      </div>
      <p>Los filtros de fluidos, también llamados filtros de líquidos son responsables de la limpieza continua de los fluidos (también conocidos como lubricantes) en los compartimientos de un motor o máquina al eliminar o filtrar la contaminación de partículas de estos fluidos. Cuando se utilizan los filtros recomendados y se siguen los intervalos de mantenimiento recomendados, se reduce la contaminación por partículas en el fluido, lo que da como resultado lo siguiente:</p>
      <ListPoint list={[
        "Reducción del desgaste de los componentes",
        "Protección de componentes móviles y baja interferencia con espacios libres",
        "Menor tiempo de inactividad del motor o de la máquina",
        "Rendimiento mejorado",
        "Preservación de la confiabilidad y la vida útil de los motores o componentes de la máquina",
      ]}/>
      <p><span className="font-bold text-primary">Filtros giratorios:</span>una sola pieza de filtro que se usa una vez girando sobre la base del filtro. Todo el filtro se desecha al final de su vida útil. Los filtros giratorios son comunes y fáciles de mantener. En general, los motores Cat pequeños usan filtros de lubricante y combustible enroscables. Algunos motores pequeños nuevos se han movido a diseños de filtro de cartucho.</p>
      <p><span className="font-bold text-primary">Filtros cartucho:</span> Los filtros decartucho se componen de elementos de filtro separados y unaunidad de alojamiento. La carcasa se conserva y se utiliza durantela vida útil del vehículo y el cartucho del elemento de filtro se cambiaal final de cada vida útil del filtro. Los filtros de cartucho eliminan losdesechos ya que solo se desecha el elemento filtrante y la carcasametálica se retiene y reutiliza durante el mantenimiento del filtro. Engeneral, los motores Cat grandes usan filtros de cartucho paraaplicaciones de combustible y lubricante.</p>
    </div>
  );
};

const M4s2 = () => {
  return (
    <div className="space-y-3">
      <h2>Eficiencia de los filtros Caterpillar</h2>
      <p>Los filtros de fluidos Cat están diseñados con capacidad y clasificación optimizadas para equipos Cat. Cat ofrece filtros de fluidos de tres niveles de eficiencia:</p>
      <ImageForSection
        src="/img-cursos/10/10m1s1.44.png"
      />
      <ListPoint list={[
        "Eficiencia estándar",
        "Alta eficiencia avanzada",
        "Ultra Alta Eficiencia",
      ]}/>
      <p>Caterpillar ha introducido una designación Plus (+) para algunos filtros. La designación Plus indica una característica de rendimiento mejorada. Cualquiera de los tres niveles de eficiencia del filtro también se puede designar como Plus si el filtro tiene una característica mejorada.</p>
      <p>La clasificación del filtro es una medida de la eficiencia del filtro para eliminar y retener partículas de cierto tamaño. Se deben especificar dos factores al describir la calificación del filtro:</p>
      <p>Tamaño de las partículas: el tamaño de las partículas se mide en micras (μm). Esta medida también se llama clasificación de micras.</p>
      <p>Eficiencia: la eficiencia es la cantidad de partículas de un tamaño específico o mayor (también llamado tamaño nominal) que se capturan en el filtro, en comparación con la cantidad de partículas nominales que pasaron a través del filtro. Esta medida también se expresa como relación beta.</p>
      <div className="container mx-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border border-gray-300" colSpan="6" align="center">Ejemplo de relación beta en filtro</th>
            </tr>
            <tr className="bg-gray-200">
              <th className="p-2 border border-gray-300">Calificación de filtro</th>
              <th className="p-2 border border-gray-300">Tamaño de partícula</th>
              <th className="p-2 border border-gray-300">Filtro de entrada de partículas</th>
              <th className="p-2 border border-gray-300">Partículas que pasan a través del filtro</th>
              <th className="p-2 border border-gray-300">Relación beta</th>
              <th className="p-2 border border-gray-300">Representación</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">5 micras</td>
              <td className="p-2 border border-gray-300">≥ 5 micras</td>
              <td className="p-2 border border-gray-300">200</td>
              <td className="p-2 border border-gray-300">1</td>
              <td className="p-2 border border-gray-300">200/1=200</td>
              <td className="p-2 border border-gray-300">β₅ = 200</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">5 micras</td>
              <td className="p-2 border border-gray-300">≥ 5 micras</td>
              <td className="p-2 border border-gray-300">200</td>
              <td className="p-2 border border-gray-300">4</td>
              <td className="p-2 border border-gray-300">200/4=50</td>
              <td className="p-2 border border-gray-300">β₅ = 50</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">10 micras</td>
              <td className="p-2 border border-gray-300">≥ 10 micras</td>
              <td className="p-2 border border-gray-300">200</td>
              <td className="p-2 border border-gray-300">1</td>
              <td className="p-2 border border-gray-300">200/1=200</td>
              <td className="p-2 border border-gray-300">β₁₀ = 200</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">10 micras</td>
              <td className="p-2 border border-gray-300">≥ 10 µm</td>
              <td className="p-2 border border-gray-300">200</td>
              <td className="p-2 border border-gray-300">4</td>
              <td className="p-2 border border-gray-300">200/4=50</td>
              <td className="p-2 border border-gray-300">β₁₀ = 50</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>La capacidad del filtro es una medida de la masa de contaminantes que pueden seratrapados por el medio filtrante. La capacidad del filtro depende del tipo de medio y lacantidad de medio. Los filtros Cat son filtros de alta calidad y, por lo tanto, ofrecen un áreade medios filtrantes optimizada para atrapar los contaminantes que se espera que segeneren en un compartimento específico. La capacidad del filtro se expresa en un gráficode presión delta a través del filtro frente a la masa de contaminantes en el fluido.</p>
      <p>Cuando los filtros alcanzan su capacidad, los filtros comienzan a taparse. Algunos sistemasde filtración están diseñados con una señal de advertencia para indicarle al operador queel filtro está obstruido. La señal de advertencia opera midiendo la diferencia de presión através del filtro. Si se excede la presión designada, se activa la señal. Los sistemas defiltración que no están equipados con una señal de advertencia están diseñados parareemplazarse en intervalos de mantenimiento específicos.</p>
      <div className="container mx-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border border-gray-300" colSpan="4" align="center">Opciones de filtro de fluido Cat</th>
            </tr>
            <tr className="bg-gray-200">
              <th className="p-2 border border-gray-300">Tipo de filtración</th>
              <th className="p-2 border border-gray-300">Eficiencia estándar</th>
              <th className="p-2 border border-gray-300">Eficiencia avanzada</th>
              <th className="p-2 border border-gray-300">Ultra Alta Eficiencia</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Filtros de aceite de motor</td>
              <td className="p-2 border border-gray-300">27 - 40 µm (absoluto)</td>
              <td className="p-2 border border-gray-300">10 - 27 µm (absoluto)</td>
              <td className="p-2 border border-gray-300">6 - 12 µm (absoluto)</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Filtros Hidráulicos</td>
              <td className="p-2 border border-gray-300">27 - 40 µm (absoluto)</td>
              <td className="p-2 border border-gray-300">10 - 27 µm (absoluto)</td>
              <td className="p-2 border border-gray-300">5 - 10 µm (absoluto)</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Filtros de tren motriz</td>
              <td className="p-2 border border-gray-300">27 - 40 µm (absoluto)</td>
              <td className="p-2 border border-gray-300">10 - 27 µm (absoluto)</td>
              <td className="p-2 border border-gray-300">5 - 10 µm (absoluto)</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Filtros de combustible</td>
              <td className="p-2 border border-gray-300">5 - 10 µm (absoluto)</td>
              <td className="p-2 border border-gray-300">5 - 10 µm (absoluto)</td>
              <td className="p-2 border border-gray-300">&lt; 4 micras</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Separadores de agua/combustible</td>
              <td className="p-2 border border-gray-300">&gt; 20 µm (absoluto)</td>
              <td className="p-2 border border-gray-300">10 - 20 µm (absoluto)</td>
              <td className="p-2 border border-gray-300">5 - 10 µm (absoluto)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Utilice el programa de intervalos de mantenimiento del Manual de Operación yMantenimiento de la máquina para determinar los intervalos de servicio. Use el horómetrode servicio para determinar los intervalos de servicio. Los intervalos de calendario que semuestran (diaria, semanal o mensualmente, etc.) en lugar de los intervalos del horómetrode servicio se pueden utilizar si proporcionan programas de servicio más adecuados y seaproximan a la lectura del horómetro de servicio indicada. El servicio recomendado siempredebe realizarse en el intervalo que ocurra primero.</p>
      <p>En condiciones de operación muy rigurosas, polvorientas o húmedas, tal vez sea necesario realizar una lubricación o cambios de filtros más frecuente que lo especificado en la tabla de intervalos de mantenimiento.Al seguir los intervalos de mantenimiento recomendados, se reduce el riesgo de desgaste excesivo y de las fallas potenciales de los componentes.</p>
    </div>
  );
};

const M4s3 = () => {
  return (
    <div className="space-y-3">
      <h2>Inspección de filtros</h2>
      <ImageForSection
        src="/img-cursos/10/10m1s1.47.png"
      />
      <h3>Inspección de filtros de aceite y combustible.</h3>
      <p>Use un corta filtros para cortar y abrir el elemento del filtro. Separe los pliegues e inspeccione el elemento para ver si hay residuos metálicos o de otro tipo. Una cantidad excesiva de residuos en el elemento del filtro puede indicar una posible avería. Si se descubren metales en el elemento de filtro, se puede utilizar un imán para diferenciar entre metales ferrosos y no ferrosos.</p>
      <p>Los metales ferrosos pueden indicar desgaste en las piezas de acero y de hierro fundido. Los metales no ferrosos pueden indicar desgaste de piezas de aluminio en el motor, como los cojinetes de bancada, cojinetes de biela o cojinetes del turbocompresor.</p>
      <p>Se pueden encontrar pequeñas cantidades de residuos en el elemento de filtro. Esto sepuede deber a fricción y a desgaste normal. Consulte a su distribuidor Caterpillar pararealizar un análisis adicional si se encuentra una cantidad excesiva de residuos. Si se usaun elemento de filtro no recomendado por Caterpillar puede resultar en daños serios a loscojinetes del motor, al cigüeñal y a otras piezas del motor. Esto puede resultar en partículasmás grandes en el aceite no filtrado. Estas partículas pueden entrar en el sistema delubricación y causar daños adicionales.</p>
    </div>
  );
};

const M4s4 = () => {
  return (
    <div className="space-y-3">
      <h2>Inspección de filtros de admisión de aire.</h2>
      <ImageForSection
        src="/img-cursos/10/10m1s15.png"
      />
      <p>La capacidad y restricción de los filtros de aire están cuidadosamente diseñadas para el volumen de aire de admisión óptimo y la limpieza del motor. El mantenimiento y la gestión adecuados del filtro de aire protegen el motor de la suciedad y el polvo, reducen el tiempo de inactividad del motor, aumentan la vida útil del filtro, mejoran la eficiencia y reducen los costes de mantenimiento.</p>
      <ListPoint list={[
        "Tenga cuidado al manipular un elemento de filtro nuevo durante el mantenimiento. Mantenga el elemento del filtro limpio y en el empaque apropiado del filtro hasta que esté listo para instalarlo en la carcasa. Mantenga la exposición del elemento filtrante al aire libre al mínimo para limitar la entrada de suciedad o daños en el elemento.",
        "Inspeccione el nuevo elemento del filtro antes de instalarlo en la carcasa para asegurarse de que el elemento esté libre de daños. Asegúrese de que el elemento del filtro esté bien asentado y sellado contra la carcasa.",
        "No retire el elemento del filtro de la carcasa para inspeccionar visualmente elelemento antes del intervalo de servicio. La inspección visual del elemento del filtropara determinar la vida útil de los filtros no es útil y no se recomienda. Retirar elelemento del filtro de la carcasa antes del intervalo de servicio recomendado ydiseñado puede introducir suciedad en el lado limpio del elemento del filtro. Estasuciedad puede luego ser absorbida por el motor causando daños y disminuyendoel rendimiento.",
        "Un elemento de filtro parecería sucio durante la observación visual, pero el filtro aún puede tener una vida útil significativa. Los elementos del filtro desarrollan una torta de suciedad o una capa de suciedad durante el funcionamiento normal. La capa de suciedad aumenta la eficiencia del elemento filtrante. La eficiencia del elemento filtrante es más baja cuando el filtro es nuevo y la capa de suciedad aún no se ha formado",
        "No golpee un elemento de filtro, como una superficie dura, para quitar el polvo. Golpear el elemento del filtro contra una superficie para eliminar el polvo puede dañar el elemento del filtro. La suciedad profundamente incrustada no se puede eliminar golpeando ligeramente el elemento del filtro. Este proceso también eliminará la capa de suciedad que aumenta la eficiencia del elemento filtrante.",
        "La apertura frecuente de la carcasa para una inspección visual puede provocar daños en el motor al exponer potencialmente el lado limpio del filtro al polvo y la suciedad.",
        "Cambie siempre los elementos del filtro de aire basándose en el indicador de servicio del filtro de aire, no en la apariencia del filtro. Cambie el elemento del filtro primario cuando la restricción esté en el nivel indicado en el Manual de operación y mantenimiento.",
        "Cambiar el elemento del filtro de aire en función de un indicador de restricción permite una vida útil y una eficiencia óptimas del filtro de aire. Cambiar el elemento del filtro de aire antes de la vida útil diseñada aumenta el tiempo de servicio y el costo innecesariamente. Cambiar un elemento del filtro de aire tarde puede dañar el motor debido a una falla potencial del elemento del filtro.",
        "Es posible que sea necesario restablecer el indicador de servicio del filtro de aire después de instalar un nuevo elemento de filtro. Consulte el Manual de operación y mantenimiento para obtener instrucciones.",
        "Por lo general, los elementos secundarios no necesitan mantenimiento en cada intervalo de servicio del elemento de filtro primario. Consulte el Manual de operación y mantenimiento para conocer los intervalos de mantenimiento recomendados.",
        "Se prefiere el uso de cubiertas de filtro y tapas para lluvia para proteger el filtro delagua y los desechos grandes.",
        "Inspeccione periódicamente la válvula de descarga de polvo para eliminar el polvo acumulado del ante filtro o del filtro de aire de dos etapas.",
        "Para el mantenimiento del prefiltros (si es necesario), consulte el Manual de operación y mantenimiento.",
        "Al realizar el mantenimiento del filtro de aire, inspeccione las conexiones, las abrazaderas y los componentes de montaje en busca de daños aparentes. Inspeccione también el sello de la cubierta de servicio del elemento del filtro (si se incluye) y los pestillos para detectar daños aparentes. Reemplace según sea necesario.",
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
          src="https://www.youtube.com/embed/bZ-VB14SYsM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo4 = [M4s1, M4s2, M4s3, M4s4, Video];

export default Modulo4;