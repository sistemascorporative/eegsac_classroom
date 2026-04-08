import { ListNumbered, ListPoint, ListPointBold } from "../../../components/ui/List";
import { ImageForSection, ImageTextForSection } from "../../../components/ui/Imagen";


const M6s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Módulo 6: Quemaduras</h2>
      <ImageForSection
        src="/img-cursos/53/53m6s1-1.jpg"
      />
      <h4>La piel</h4>
      <p>La piel es el órgano encargado de proteger al organismo de heridas e infecciones y de mantenerlo con una temperatura constante.</p>
      <p>Consta de varias capas, la exterior o epidermis y la interior o dermis. Las dos están situadas sobre una capa de tejido graso (tejido adiposo).</p>
      <p>La epidermis está protegida por una sustancia grasa denominada sebo, secretado por las glándulas sebáceas, que conservan la piel elástica e impermeable.</p>
      <p>La dermis contiene los vasos sanguíneos, músculos, nervios, glándulas sebáceas y sudoriparas, junto con las raíces de los pelos. Las terminaciones nerviosas situadas en esta capa registran las sensaciones del exterior, como el calor, frio y dolor.</p>
      <p>La capa más profunda de la piel es la capa subcutánea denominada hipodermis. Está constituida por tejido conectivo que es la continuación en profundidad de la dermis.</p>
      
      <h4>Quemadura</h4>
      <p>La quemadura es una lesión anatómica producida por agentes externos térmicos.</p>
      <p>Puede producirse por una exposición prolongada al sol, llamas, electricidad, agentes químicos, liquidos calientes o radioactividad.</p>
      <p>La actuación inicial puede condicionar el pronóstico y el resultado final del accidentado que ha sufrido una quemadura.</p>
      <p>Si la piel está dañada por una quemadura no podrá seguir ejerciendo su función de barrera ante agentes externos, por lo que existirá un gran riesgo de infección. Además habrá una pérdida de líquidos corporales debido a que los finos vasos de la piel pueden dejar salir suero al exterior del organismo.</p>
      <p>Los agentes causantes de las quemaduras pueden clasificarse en:</p>
      <ListPoint list={[
        "Agentes físicos",
        "Térmicos (calor o frio): sólidos, liquidos, vapores o fuego directo.",
        "Eléctricos: electricidad doméstica, atmosférica o industrial.",
        "Radiantes: sol, energía atómica, rayos X.",
        "Agentes químicos: ácidos, álcalis.",
        "Agentes biológicos: determinados insectos, medusas, sapos, etc."
      ]}/>
      <p>La gravedad de la quemadura viene determinada por varios factores. Los más importantes son los siguientes:</p>
      <ListPoint list={[
        "Profundidad",
        "Extensión",
        "Localización",
        "Otros factores (edad....)"
      ]}/>

      <h3>Clasificación de las quemaduras</h3>
      <h4>Profundidad</h4>
      <p>Según la profundidad de la piel afectada, las quemaduras se clasifican en tres niveles. Una misma persona puede verse afectada por diferentes grados de quemadura.</p>
      <p>Grado 1: Quemaduras que afectan a la epidermis y causan dolor y enrojecimiento.</p>
      <p>Grado 2: Quemaduras que afectan a la epidermis y a la dermis se clasifican como quemaduras de 2o grado. Producen dolor moderado o intenso y ampollas.</p>
      <p>Grado 3: Quemaduras que afectan a la dermis, a la epidermis y al tejido celular. No causan dolor pero pueden producir necrosis celular conflictenas y eritema.</p>
      <h4>Extensión</h4>
      <p>Una quemadura es tanto más grave cuanta más superficie de la piel esté afectada.</p>
      <p>Si una quemadura supera el 25% de la superficie, se considerará como grave. En los niños será grave a partir del 15%.</p>
      <p>Para calcular la superficie quemada utilizaremos la regla de los nueve de Wallace.</p>
      <h4>Localización</h4>
      <p>Hay ciertas zonas consideradas zonas especiales por su peligrosidad:</p>
      <ListPoint list={[
        "Cara",
        "Manos y pies",
        "Genitales y periné",
        "Orificios naturales",
        "Articulaciones y zonas de flexión",
        "Quemaduras circunferenciales (afectan a la totalidad del perimetro de una extremidad o de una articulación)"
      ]}/>
      <p>Otros factores que influyen en la mayor o menor gravedad de las quemaduras pueden ser los siguientes:</p>
      <ListPoint list={[
        "Edad",
        "Agente causal de la quemadura",
        "Lesiones asociadas a la quemadura",
        "Estado de salud previo de la persona"
      ]}/>

      <h3>Modo de actuación ante una quemadura</h3>
      <h4>Medidas generales</h4>
      <ListNumbered list={[
        "Autoprotección del propio socorrista.",
        "Evacuar a la persona del lugar del siniestro, trasladándole a un espacio con buena ventilación",
        "Apagar las llamas de las ropas, si existen todavía, con un mecanismo de sofocación. Se puede utilizar para ello una manta o un abrigo, que no sean de material sintético.",
        "Rociar la zona quemada con agua fria, nunca agua helada.",
        "Retirar la ropa de la persona, siempre y cuando no esté adherida a la piel. También retirar anillos y pulseras que puedan comprimir las extremidades",
        "Valorar las constantes vitales de la persona de forma continuada. Si deja de respirar, iniciar las maniobras de RCP.",
        "Valorar la gravedad de las quemaduras según los factores.",
        "Evitar la infección de la zona afectada mediante el uso de material estéril."
      ]}/>
      En quemaduras leves
      <ListNumbered list={[
        "Aplicar las medidas generales.",
        "Refrescar la zona quemada con agua fria, sin presionar ni friccionar.",
        "Tapar con gasas esterilizadas la zona afectada.",
        "Nunca aplicar pomadas o unguentos sin una valoración médica previa.",
        "No reventar las ampollas porque podríamos provocar la infección de la quemadura.",
        "Trasladar a la persona a un centro hospitalario para valoración por parte de un facultativo"
      ]}/>

      <h4>En quemaduras graves</h4>
      <ListNumbered list={[
        "Aplicar las medidas generales de todas las quemaduras",
        "Refrescar y limpiar la zona con agua fria.",
        "Tapar la quemadura con gasas estériles.",
        "No retirar la piel muerta de la zona quemada de un color oscuro.",
        "No puncionar las ampollas porque podríamos provocar una infección importante.",
        "Controlar las constantes vitales de la persona en todo momento. En caso de que deje de respirar, iniciar las maniobras de RCP.",
        "Trasladar a la persona a un centro hospitalario urgentemente."
      ]}/>
      <h4>Quemaduras químicas</h4>
      <p>El hombre está expuesto constantemente al contacto con agentes químicos cuyos efectos en el organismo pueden llegar a producir lesiones de grados variables, desde simples inflaciones de carácter leve hasta lesiones tan graves que pueden llegar a producir la muerte de la persona.</p>
      <p>Algunos productos químicos pueden irritar, quemar o atravesar la piel, causando lesiones extensas en ésta. A diferencia de otras quemaduras, las quemaduras quimicas evolucionan lentamente. El aspecto inicial es el de una lesión superficial, por el que se subestima la severidad del daño, pero el efecto corrosivo de algunos compuestos puede continuar hasta una semana más tarde de la exposición, generando una grave y profunda lesión final.</p>
      <p>Varias causas por las que una persona puede sufrir una quemadura quimica pueden ser las siguientes:</p>
      <ListPoint list={[
        "El derrame o ruptura de un contenedor, generalmente inadecuado.",
        "La transferencia de un agente caustico desde su envase original a otro inadecuado.",
        "La dilución inadecuada.",
        "Uso inadecuado de productos químicos."
      ]}/>

      <h4>Modo de actuación ante una quemadura química</h4>
      <ListPoint list={[
        "Autoprotección del propio socorrista evitando cualquier contacto de la piel con el producto químico. Si se dispone de ellos, siempre utilizar guantes.",
        "Si el agente quimico es un alcalino o un ácido en estado líquido, iniciar rápidamente un lavado con agua abundante.",
        "En caso de que sea una sustancia en polvo como la cal viva debemos eliminar el polvo que esté en contacto con la piel pero nunca rociar con agua. En este caso provocariamos una quemadura al entrar en contacto la sustancia con el agua.",
        "Si la superficie afectada es muy extensa, duchar a la persona mientras se va quitando toda la ropa que está impregnada del agente quimico. El tiempo aconsejado de ducha es de 20 minutos.",
        "Si es posible, recoger información del producto, consultando la ficha de seguridad.",
        "Una vez eliminada completamente la sustancia química de la piel, tapar las lesiones con gasas estériles.",
        "Trasladar urgentemente a la persona a un centro hospitalario."
      ]}/>
      <h3>Quemaduras eléctricas</h3>
      <p>Las quemaduras eléctricas se producen por el paso de la corriente eléctrica a través del organismo. La mayoría de las heridas que se ven están en los puntos por donde la corriente entra o sale del cuerpo, pero pueden existir lesiones internas que no se observan visualmente y que pueden afectar gravemente a los órganos internos como el corazón, los pulmones y el cerebro.</p>
      <p>Las lesiones de entrada son pequeñas, blancas e indoloras.</p>
      <p>Las lesiones de salida son grandes, oscuras, deprimidas. Puede haber múltiples.</p>
      <p>Estas quemaduras pueden estar producidas por un rayo, o por corriente de baja o alta tensión.</p>
      <h4>Modo de actuación</h4>
      <ListPoint list={[
        "Antes de tocar a la persona, asegurarse de que ya no está en contacto con la corriente eléctrica. Si aún estuviera en contacto, apartarla utilizando materiales que no sean conductores de la electricidad como por ejemplo la madera. Nunca utilizar objetos metálicos.",
        "Empapar las zonas de entrada y salida de las heridas con agua fresca abundante para enfriar las quemaduras.",
        "Si se dispone, utilizar guantes desechables y colocar un apósito estéril sobre las lesiones.",
        "Controlar en todo momento las constantes vitales. Si la persona deja de respirar, iniciar las maniobras de RCP.",
        "Trasladar urgentemente a la persona a un centro hospitalario para valoración médica."
      ]}/>
      <h3>Quemaduras por inhalación</h3>
      <p>Las quemaduras por inhalación son aquellas que afectan a la vía aérea por inhalación de humos y gases calientes o tóxicos, a consecuencia principalmente de un incendio.</p>
      <p>Son quemaduras muy graves porque la vía aérea se inflama muy rápido y hay un alto riesgo de asfixia al verse bloqueado el paso de aire.</p>
      <h4>Modo de actuación</h4>
      <ListNumbered list={[
        "Trasladar rápidamente a la persona afectada a una zona ventilada.",
        "Aflojar la ropa alrededor del cuello, para facilitar la respiración.",
        "Tranquilizar y calmar a la persona.",
        "Controlar en todo momento las constantes vitales. Si deja de respirar, iniciar las maniobras de RCP.",
        "Trasladar urgentemente a la persona a un centro hospitalario."
      ]}/>
    </div>
  );
};

const M6s2 = () => {
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

const M6s3 = () => {
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

const Modulo6 = [M6s1, M6s2, M6s3, Video];

export default Modulo6;