import { ListNumbered, ListPoint, ListPointBold } from "../../../components/ui/List";
import { ImageForSection, ImageTextForSection } from "../../../components/ui/Imagen";


const M4s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Módulo 4: Hemorragias</h2>
      <ImageForSection
        src="/img-cursos/53/53m4s1-1.jpg"
      />
      <p>Las hemorragias son básicamente la salida de sangre a través de los vasos sanguineos.</p>
      <p>Según el tipo de vaso sanguineo roto por donde salga la sangre se pueden clasificar en:</p>
      <p><span className="font-bold">Arteriales:</span> en las hemorragias arteriales el vaso que se secciona es una arteria. Debido al calibre de las arterias y a su procedencia, la sangre sale a borbotones coincidiendo con los latidos del corazón. El color de la sangre es rojo intenso porque contiene gran cantidad de oxigeno y sale con mucha fuerza.</p>
      <p>Son un tipo de hemorragia grave a causa de la gran cantidad de sangre que se pierde y casi siempre son las que presentan más problemas.</p>
      <p><span className="font-bold">Venosas:</span> en este caso, el vaso sanguíneo que se secciona es una vena y la sangre sale de forma continua, pero sin fuerza. Su color es granate porque es sangre de retorno y como tal, poco oxigenada.</p>
      <p><span className="font-bold">Capilares:</span> Por lo general, son hemorragias en las que la sangre que se pierde es de poca cuantía debido al fino calibre de estos vasos sanguíneos. La sangre sale de muchos puntos a la vez, pero sin presión.</p>
      <p>Según el lugar al que llega la sangre, las hemorragias también se pueden clasificar en:</p>
      <p><span className="font-bold">Externas:</span> la sangre sale a través de una herida en dirección al exterior del organismo de la persona.</p>
      <p><span className="font-bold">Internas:</span> en este caso la hemorragia se produce en el interior del organismo y la sangre no sale al exterior, sino que se queda en el interior. Debido a sus características son las más graves porque no se puede visualizar la sangre que se pierde.</p>
      <p><span className="font-bold">Exteriorizadas:</span> la hemorragia se produce en el organismo, pero la sangre sale al exterior a través de un orificio natural como pueden ser las orejas o la nariz.</p>
    </div>
  );
};

const M4s2 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Módulo 4: Hemorragias</h2>
      <ImageForSection
        src="/img-cursos/53/53m4s2-1.jpg"
      />
      <h3>Modo de actuación en las hemorragias externas</h3>
      <ListNumbered list={[
        "Tranquilizar a la persona y sentarla o estirarla en el suelo para evitar posibles caidas.",
        "En todo momento controlar los signos vitales.",
        "Controlar y parar la hemorragia realizando una compresión directa o compresión arterial en caso de que no cese con la primera maniobra."
      ]}/>
      <p>Para realizar una compresión directa se deben efectuar los siguientes pasos:</p>
      <ListNumbered list={[
        "Realizar una presión en el punto que sangra utilizando un apósito lo más limpio posible, a poder ser gasas estériles. Con ello evitaremos el riesgo de infección posterior.",
        "Si hace falta, colocar otro apósito encima, pero sin quitar el primero para no arrancar el coágulo que se está formando de forma natural.",
        "Si la hemorragia se ha producido en alguna de las extremidades, se elevará la extremidad por encima de la altura del corazón (siempre que no haya ninguna fractura en la extremidad que sangra)",
        "Si la hemorragia ha parado, se procederá a tapar la herida y se trasladará a la persona a un centro sanitario"
      ]}/>
      <p>Compresión arterial: consiste en encontrar la arterial principal que riega la extremidad que está sangrando: la arteria humeral en los brazos o la arteria femoral en el caso de las piernas, y realizar una presión con la mano, lo más fuerte que se puede, para detener la circulación sanguinea de esa extremidad y así poder detener la hemorragia.</p>
      <p>En ningún caso está indicado la realización de un torniquete por personal no sanitario por los problemas que conlleva.</p>
    </div>
  );
};

const M4s3 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Módulo 4: Hemorragias</h2>
      <ImageForSection
        src="/img-cursos/53/53m4s3-1.jpg"
      />
      <ListPoint list={[
      ]}/>
      <h3>Modo de actuación en el caso de las hemorragias internas</h3>
      <ListPoint list={[
        "Controlar los signos vitales. En caso de que la víctima no respire, iniciar las maniobras de RCP.",
        "Tranquilizar en todo momento a la persona.",
        "Colocarla estirada y con las piernas elevadas, siempre y cuando no se sospeche un traumatismo craneal.",
        "Aflojar la ropa para mejorar la circulación sanguinea.",
        "Evitar la pérdida de calor corporal de la persona tapándola con ropa de abrigo.",
        "Trasladar urgentemente a la persona a un centro hospitalario."
      ]}/>
      <h3>Modo de actuación en las hemorragias exteriorizadas</h3>
      <h4>Otorragia</h4>
      <p>En este caso la sangre sale al exterior a través del conducto auditivo. La hemorragia puede ser causada, como ejemplos, por un traumatismo craneal o por una perforación del timpano.</p>
      <p>Las actuaciones a realizar por parte del socorrista son las siguientes:</p>
      <ListNumbered list={[
        "No realizar ningún taponamiento.",
        "Facilitar la salida de la sangre para evitar la compresión de la masa encefálica por la acumulación de sangre que podría provocar lesiones irreversibles.",
        "Controlar en todo momento las constantes vitales.",
        "Trasladar urgentemente la persona a un centro hospitalario."
      ]}/>
      <h4>Epistaxis</h4>
      <p>La sangre sale a través de las fosas nasales, principalmente a causa de traumatismos en la nariz o también por otras causas como pueden ser: resfriados comunes, rinitis, enfermedades cardiovasculares como la hipertensión arterial, etc.</p>
      <p>El modo de actuación será el siguiente:</p>
      <ListNumbered list={[
        "Se efectuará una presión directa sobre las aletas de la nariz contra el tabique nasal. Esta presión se mantendrá como mínimo durante unos 5 minutos.",
        "Inclinar la cabeza de la persona hacia delante para evitar la posible aspiración de los coágulos que se forman.",
        "Aplicar frio local en la nuca porque produce una vasoconstricción de la zona y facilita que la hemorragia cese.",
        "Pasados 5 minutos se aflojará la presión que estamos realizando sobre el tabique nasal para poder comprobar que la hemorragia ha cesado. Si no ha cesado se realizará un taponamiento introduciendo dentro de la nariz una gasa impregnada de agua oxigenada, pero tomando la precaución de dejar el extremo de la gasa en el exterior para facilitar su extracción posteriormente.",
        "Si la hemorragia no cesa pasado un tiempo, trasladar a la persona a un centro hospitalario para valoración médica y, en su caso, cauterización de los vasos sanguíneos."
      ]}/>
      <h4>Hemoptsisis</h4>
      <p>La persona expulsa sangre al toser procedente del aparato respiratorio. La sangre suele ser de un rojo brillante y puede estar mezclada con esputo. Las causas pueden ser muy variadas como: bronquitis, tumores en el aparato respiratorio, tuberculosis, traumatismos en el tórax, hemorragias internas.....</p>
      <p>Modo de actuación</p>
      <ListNumbered list={[
        "Colocar a la persona en decúbito supino semisentada.",
        "Controlar en todo momento las constantes vitales. Si deja de respirar, iniciar las maniobras de RCP.",
        "Debemos tomar precaución de protegernos de la posible sangre que se encuentre en la boca de la persona, cuando practiquemos la respiración artificial.",
        "Trasladar urgentemente a la persona a un centro hospitalario."
      ]}/>
      <h4>Hematemesis</h4>
      <p>Expulsión de sangre por la boca en forma de vómito procedente del aparato digestivo. Una de las causas más frecuentes es la hemorragia de una úlcera en el estómago o sangrado de varices esofágicas.</p>
      <p>Modo de actuación</p>
      <ListNumbered list={[
        "Colocar a la persona en posición de decúbito supino con las rodillas flexionadas y la cabeza inclinada hacia un lado para evitar la aspiración del vómito hacia el aparato respiratorio.",
        "Controlar en todo momento las constantes vitales. Si la persona deja de respirar, iniciar las maniobras de RCP.",
        "Trasladar urgentemente a un centro hospitalario."
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

const Modulo4 = [M4s1, M4s2, M4s3, Video];

export default Modulo4;