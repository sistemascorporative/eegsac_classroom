import { ListPoint } from "../../../components/ui/List";
import {ImageFormat, ImageForSection } from "../../../components/ui/Imagen";


const M3s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Fluidos</h2>
      <h2>Lubricantes</h2>
      <p>Un lubricante es una sustancia que colocada entre 2 piezas móviles forma una capa que impide su contacto permitiendo su movimiento incluso a elevadas temperaturas y presiones. El lubricante es una sustancia gaseosa líquida o sólida que reemplaza una fricción entre 2 piezas en movimiento relativo por la fricción interna de sus moléculas que es mucho menor.</p>
      <div className="float-right ml-4 mb-4 w-full max-w-[370px] md:w-1/2 space-y-2">
        <ImageFormat
          src="/img-cursos/10/10m1s1.35.png"
          text=""
        />
        <ImageFormat
          src="/img-cursos/10/10m1s1.34.png"
          text=""
        />
      </div>
      <p>Un lubricante se compone de una base que puede ser mineral o sintética y un conjunto de aditivos que le confieren sus propiedades y determinan sus características cuanto mejor sea la base, menos aditivos necesitaran sin embargo se necesita una perfecta comunión entre estos aditivos y la base pues sin ellos la base tendría condiciones de lubricación mínimas, los lubricantes se clasifican según su base como minerales, vegetales o sintéticos.</p>
      <h2>Función</h2>
      <p>el lubricante es una sustancia que introducida entre 2 superficies móviles reduce la fricción entre ellas facilitando el movimiento y reduciendo el desgaste. Además, el lubricante cumple varias otras funciones dentro de una máquina o motor, entre ellas disuelve y transporta al filtro las partículas fruto de la combustión y el desgaste, disminuye la temperatura desde la parte inferior a la superior actuando como un refrigerante, evita la corrosión por óxido en las partes del motor o máquina, evita la condensación de vapor de agua y sella como una Junta en determinados componentes.</p>
      <ListPoint list={[
        "Limpia",
        "Protege",
        "Sella",
        "Enfría",
        "Transmite potencia. (sistema hidráulico, frenos)",
      ]}/>
      <p>Los fluidos Caterpillar han sido aprobados y desarrollados por CAT para optimizar el rendimiento y la vida útil de los motores y las máquinas Caterpillar. La calidad del aceite final depende de la calidad del componente de base, de la calidad de los aditivos y de la compatibilidad entre el componente de base y los aditivos. Los fluidos CAT están hechos con una fórmula de componentes de base de aceite refinado de alta calidad y aditivos de alta calidad química y cantidad óptima para proporcionar un alto rendimiento en los motores y los componentes de la máquina, los fluidos CAT se usan para el llenado en fabrica de los motores y los componentes CAT.</p>
    </div>
  );
};

const M3s2 = () => {
  return (
    <div className="space-y-3">
      <h2>Cat recomienda el uso de los siguientes fluidos CAT:</h2>
      <div className="float-right ml-4 mb-4 w-full max-w-[370px] md:w-1/2 space-y-2">
        <ImageFormat
          src="/img-cursos/10/10m1s1.36 (2).png"
          text="Fluidos CAT"
        />
      </div>
      <p>El programa de análisis de fluidos se creó para ayudar a los propietarios de máquinas a reducir el coste de funcionamiento y mantenimiento de su maquinaria ofreciéndoles soluciones completas de muestreo, análisis y pruebas de fluidos y aceites. Las muestras de aceite y fluidos permiten conocer de cerca el estado general de una máquina y detectar posibles problemas mucho antes de que se produzcan.</p>
      <h2>Lubricantes Gato</h2>   
      <div className="container mx-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border border-gray-300">Lubricantes Gato</th>
              <th className="p-2 border border-gray-300">Producto</th>
              <th className="p-2 border border-gray-300">Grado de Viscosidad</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-gray-300">
              <td rowSpan="4" className="p-2 border border-gray-300 font-semibold bg-gray-100 align-top">
                Aceite ultrabajo en azufre para motor diésel (API CK-4)
              </td>
              <td className="p-2 border border-gray-300">Gato DEO-ULS</td>
              <td className="p-2 border border-gray-300">SAE 15W-40</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Gato DEO-ULS SYN</td>
              <td className="p-2 border border-gray-300">SAE 10W-30</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Gato DEO clima frío</td>
              <td className="p-2 border border-gray-300">SAE 0W-40</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Gato DEO</td>
              <td className="p-2 border border-gray-300">SAE 5W-40</td>
            </tr>
            <tr className="border border-gray-300">
              <td rowSpan="2" className="p-2 border border-gray-300 font-semibold bg-gray-100 align-top">
                Aceite de motor para múltiples aplicaciones
              </td>
              <td className="p-2 border border-gray-300">Cat MAEO Plus (flotas mixtas que no sean Cat)</td>
              <td className="p-2 border border-gray-300">SAE 10W-40</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Gato PCO</td>
              <td className="p-2 border border-gray-300">SAE 40</td>
            </tr>
            <tr className="border border-gray-300">
              <td rowSpan="3" className="p-2 border border-gray-300 font-semibold bg-gray-100 align-top">
                Aceite para transmisión/tren de impulsión
              </td>
              <td className="p-2 border border-gray-300">Gato TDTO</td>
              <td className="p-2 border border-gray-300">SAE 10W</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Cat TDTO-TMS</td>
              <td className="p-2 border border-gray-300">Multigrado</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Gato TDTO clima frío</td>
              <td className="p-2 border border-gray-300">SAE 0W-20</td>
            </tr>
            <tr className="border border-gray-300">
              <td rowSpan="2" className="p-2 border border-gray-300 font-semibold bg-gray-100 align-top">
                Aceite para transmisión de aplicación especial
              </td>
              <td className="p-2 border border-gray-300">Gato SATO</td>
              <td className="p-2 border border-gray-300">SAE 30</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Gato ATF-HD2</td>
              <td className="p-2 border border-gray-300">Multigrado sintético</td>
            </tr>
            <tr className="border border-gray-300">
              <td rowSpan="3" className="p-2 border border-gray-300 font-semibold bg-gray-100 align-top">
                Aceite para engranajes
              </td>
              <td className="p-2 border border-gray-300">Gato sintético GO</td>
              <td className="p-2 border border-gray-300">SAE 80W-90</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Gato Marino POD GO</td>
              <td className="p-2 border border-gray-300">SAE 75W-140</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Aceite de compactador Cat</td>
              <td className="p-2 border border-gray-300">ISO 220</td>
            </tr>
            <tr className="border border-gray-300">
              <td rowSpan="2" className="p-2 border border-gray-300 font-semibold bg-gray-100 align-top">
                Aceite Hidráulico
              </td>
              <td className="p-2 border border-gray-300">Cat HYDO Avanzado</td>
              <td className="p-2 border border-gray-300">ISO 100</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Cat Bio HYDO Avanzado (HEES)</td>
              <td className="p-2 border border-gray-300">ISO 46 multigrado</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300 font-semibold bg-gray-100">Aceite de uso múltiple para tractores</td>
              <td className="p-2 border border-gray-300">Cat MTO</td>
              <td className="p-2 border border-gray-300">SAE 10W-30</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>PRODUCTOS DE GRASA CAT</h2>
      <div className="container mx-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th colSpan="2" className="p-2 border border-gray-300 text-center">PRODUCTOS DE GRASA CAT</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-gray-300">
              <td rowSpan="8" className="p-3 border border-gray-300 font-semibold bg-gray-100">GRASA</td>
              <td className="p-2 border border-gray-300">Grasa de servicio general Cat</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Grasa para aplicaciones principales Cat</td>
            </tr>
              <td className="p-2 border border-gray-300">Grasa para aplicaciones extremas Cat</td>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Grasa para aplicaciones extremas Cat - Desert</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Grasa Cat Arctic para aplicaciones extremas (semisintética)</td>
            </tr>
              <td className="p-2 border border-gray-300">Grasa para cojinetes de bolas Cat </td>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Grasa blanca para armado Cat</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Pasta para martillo gato</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>Productos de refrigerante del motor Cat</h2>
      <div className="container mx-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th colSpan="2" className="p-2 border border-gray-300 text-center">Productos de refrigerante del motor Cat</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-gray-300">
              <td rowSpan="3" className="p-3 border border-gray-300 font-semibold bg-gray-100">Refrigerantes de larga duración y prolongadores de vida útil Cat</td>
              <td className="p-2 border border-gray-300">Refrigerante de larga duración Cat (Cat ELC)</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Inhibidor de larga duración Cat (Cat ELI)</td>
            </tr>
            <td className="p-2 border border-gray-300">Prolongador de vida util de larga duracion Cat (Prolongador de vida util Cat ELI)</td>
          <tr className="border border-gray-300">
            <td rowSpan="2" className="p-2 border border-gray-300 font-semibold bg-gray-100">Refrigerantes convencionales y aditivos de refrigerantes complementarios Cat</td>
            <td className="p-2 border border-gray-300">Refrigerante anticongelante para motores diesel Cat</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="p-2 border border-gray-300">Aditivo de refrigerante suplementario (SCA) Cat</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

const M3s3 = () => {
  return (
    <div className="space-y-3">
      <h2>Aceite de motor</h2>
      <ImageForSection
        src="/img-cursos/10/10m1s1.37.png"
      />
      <p>Los lubricantes de motor desempeñan diversos roles en los motores los lubricantes apropiados ofrecen los siguiente:</p>
      <ListPoint list={[ 
        "Proporcionan lubricación a los componentes móviles del motor en una amplia gama de temperaturas y presiones.",
        "Mantienen limpios los componentes del motor y eliminan la suciedad causada por el desgaste.",
        "Elimina el calor de los componentes lubricados.",
        "Neutraliza los productos acídicos debido al proceso de combustión.",
        "Protegen el motor de la cavitación y la formación de espuma.",
        "Protege al motor de la corrosión y el enmohecimiento.",
        "Controlan el consumo de aceite.",
        "Dispersa/solubilizan los contaminantes (hollín).",
        "Respaldan los límites regulados de emisiones del motor.",
      ]}/>
      <p>Los lubricantes actuales están desarrollados para soportar las tecnologías de motores avanzados, así como aquellos motores con nivel más bajo de emisiones respaldando al mismo tiempo el rendimiento y la durabilidad de estos motores, al mismo tiempo estos aceites son retro compatibles y protegen los motores más antiguos. Los aceites de alto rendimiento CAT se producen y validan mediante el uso de pruebas estándar de la industria, pruebas de propiedad exclusiva, pruebas de campo y con frecuencia experiencia previa con formulaciones similares, los fluidos CAT fueron desarrollados y probados por Caterpillar para que puedan brindar el pleno rendimiento y la máxima vida útil para los que han sido diseñados y fabricados. La aplicación óptima de los lubricantes depende de la calidad del aceite y de las prácticas de mantenimiento, dichas prácticas incluyen el control de la contaminación, el control del tanque de aceite y prácticas de manipulación generales.</p>
    </div>
  );
};

const M3s4 = () => {
  return (
    <div className="space-y-3">
      <h2>Aceite hidráulico</h2>
      <ImageForSection
        src="/img-cursos/10/10m1s1.38.png"
      />
      <p>Los aceites hidráulicos Cat HYDO Advanced están diseñados para proporcionar intervalosprolongados de drenaje del aceite y protección adicional a los componentes del sistemahidráulico y transmisiones hidrostáticas Cat.Los aceites hidráulicos Cat HYDO Advanced son una combinación de aditivos de primeracalidad y componentes de base de primera calidad que supera los requisitos de pruebas decalificación más exigentes, en campo y en laboratorio, para proporcionar una protecciónsuperior para los sistemas hidráulicos Cat.Los aceites hidráulicos Cat HYDO Advanced son los preferidos en la mayoría de lossistemas hidráulicos y en la mayoría de los sistemas hidrostáticos.Los aceites Cat HYDO Advanced permiten intervalos de drenaje del aceite de 6.000 horaso más en la mayoría de las aplicaciones. Se recomienda el análisis de aceite de los serviciosS·O·S cuando se aumenta el intervalo de drenaje del aceite a 6.000 horas o más. Encomparación, los aceites hidráulicos comerciales que no sean de Cat (aceites de segundaopción) permiten un intervalo de drenaje del aceite de 2.000 horas. Caterpillar recomiendaseguir el cronograma de intervalos de mantenimiento para los cambios de los filtros deaceite y para los muestreos de aceite que se encuentran en el Manual de Operación yMantenimiento de la máquina particular.</p>
      <p>Los aceites hidráulicos Cat HYDO Advanced ofrecen los siguientes beneficios:</p>
      <ListPoint list={[
        "Protección anti-desgaste mejorada: protege las superficies con desgaste y reduce el desgaste de los componentes en varias bombas hidráulicas.",
        "Protección contra la oxidación y el desgaste corrosivo.",
        "La dispersión de agua evita que la bomba se dañe debido a la ingestión de agua y evita que el sistema se dañe debido al congelamiento del agua.",
        "Incremento del 250 % en estabilidad de oxidación según ASTM D943.",
        "La liberación rápida del aire protegido contra la cavitación.",
        "Las mejores propiedades de filtración ayudan a mantener la limpieza de los componentes.",
      ]}/>
    </div>
  );
};

const M3s5 = () => {
  return (
    <div className="space-y-3">
      <ImageForSection
        src="/img-cursos/10/10m1s1.39.png"
      />
      <h2>Como seleccionar la viscosidad</h2>
      <p>La temperatura ambiente es la temperatura del aire en la proximidad inmediata a la máquina. Debido a la aplicación de la máquina, esta temperatura puede ser diferente de la temperatura ambiente genérica de una región geográfica. Para seleccionar la viscosidad apropiada del aceite que se va a utilizar en una aplicación dada de la máquina, revise ambas temperaturas ambientes, la de la región y la posible temperatura ambiente.</p>
      <div className="container mx-auto p-4">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border border-gray-300" colSpan="7">Viscosidades de lubricantes para temperaturas ambiente</th>
            </tr>
            <tr className="bg-gray-200">
              <th className="p-2 border border-gray-300">Compartimiento o sistema</th>
              <th className="p-2 border border-gray-300">Tipo de aceite y requisitos de rendimiento</th>
              <th className="p-2 border border-gray-300">Viscosidades del aceite</th>
              <th className="p-2 border border-gray-300" colSpan="2">°C</th>
              <th className="p-2 border border-gray-300" colSpan="2">°F</th>
            </tr>
            <tr className="bg-gray-200">
              <th className="p-2 border border-gray-300">Sistema</th>
              <th className="p-2 border border-gray-300">Requisitos</th>
              <th className="p-2 border border-gray-300">Aceites</th>
              <th className="p-2 border border-gray-300">Min</th>
              <th className="p-2 border border-gray-300">Máx</th>
              <th className="p-2 border border-gray-300">Min</th>
              <th className="p-2 border border-gray-300">Máx</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-gray-300">
              <td rowSpan="3" className="p-2 border border-gray-300 font-semibold bg-gray-100 align-top">Cárter del motor para todas las máquinas</td>
              <td className="p-2 border border-gray-300">Cat DEO-ULS Cold Weather</td>
              <td className="p-2 border border-gray-300">SAE 0W-40</td>
              <td className="p-2 border border-gray-300">-40</td>
              <td className="p-2 border border-gray-300">40</td>
              <td className="p-2 border border-gray-300">-40</td>
              <td className="p-2 border border-gray-300">104</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Cat DEO-ULS<br />Cat DEO</td>
              <td className="p-2 border border-gray-300">SAE 10W-30</td>
              <td className="p-2 border border-gray-300">-18</td>
              <td className="p-2 border border-gray-300">40</td>
              <td className="p-2 border border-gray-300">0</td>
              <td className="p-2 border border-gray-300">104</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Cat DEO-ULS<br />Cat DEO</td>
              <td className="p-2 border border-gray-300">SAE 15W-40</td>
              <td className="p-2 border border-gray-300">-9.5</td>
              <td className="p-2 border border-gray-300">50</td>
              <td className="p-2 border border-gray-300">15</td>
              <td className="p-2 border border-gray-300">122</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Generalmente, considere la temperatura más alta como criterio para la selección de laviscosidad del aceite. Generalmente, considérela viscosidad más alta de aceite permitidapara la temperatura ambiente cuando vaya a arrancar la máquina. Consulte como guía lastablas de “Viscosidades de lubricantes para temperaturas ambiente”. En aplicaciones paratiempo frío, el método recomendado es utilizar calentadores del tamaño apropiado para loscompartimientos de la máquina y un aceite con un grado de viscosidad más alto. Serecomiendan calentadores controlados por termostato que hagan circular el aceite.</p>
      <p>El grado apropiado de viscosidad del aceite se determina según la temperatura ambientemínima (el aire en las mediaciones de la máquina). Ésta es la temperatura de arranque yoperación de la máquina. Para determinar el grado apropiado de viscosidad del aceite,consulte la columna “Mín. “en la siguiente tabla. Esta información muestra la temperaturaambiente más fría para arrancar y operar una máquina fría. Consulte la columna “Max.” dela tabla para seleccionar el grado de viscosidad de aceite para operar la maquina a latemperatura ambiente más alta esperada. A menos que se especifique lo contrario, en lastablas de “Viscosidades de lubricantes para temperaturas ambiente”, use la viscosidad deaceite más alta para la temperatura ambiente a la que se vaya a arrancar la máquina.</p>
      <p>Las máquinas que se operan continuamente deben utilizar, en los mandos finales y en los diferenciales, los aceites que tendrán una viscosidad más alta. Los aceites que tengan la viscosidad más alta mantendrán el máximo espesor posible de la película de aceite.</p>
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
          src="https://www.youtube.com/embed/-DdHrE80ObU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo3 = [M3s1, M3s2, M3s3, M3s4, M3s5, Video];

export default Modulo3;