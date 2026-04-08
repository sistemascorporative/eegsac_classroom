import { ListPoint, ListPointBold } from "../../../components/ui/List";
import { ImageTextForSection, ImageForSection } from "../../../components/ui/Imagen";


const M2s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Módulo 2: Reconocimiento de signos vitales y reanimación</h2>
      <ImageForSection
        src="/img-cursos/53/53m2s1-1.jpg"
      />
      <p>Si se comprueba que la persona respira pero sigue inconsciente se colocará en la Posición Lateral de Seguridad, si no hay ningún antecedente de traumatismo o es una víctima traumática. Esta posición reduce el riesgo de bronco aspiración, o lo que es lo mismo, que la persona accidentada se ahogue con su propio vómito. Regularmente tenemos que seguir controlando que sigue respirando.</p>
      <p>Separar el brazo de la persona accidentada más próximo a nosotros de su cuerpo. Doblarlo 90° por el hombro y por el codo.</p>
      <p>Doblar la pierna opuesta por la rodilla y apoyar ese pie en el suelo. Coja por debajo de esa rodilla y, con la otra mano, por el hombro del mismo lado. Girarlos hacia nosotros.</p>
      <p>Abrir la vía aérea y apoyar el dorso de la mano del brazo que queda arriba</p>
      <p>Si la víctima respira pero es traumática: No lo moveremos. En ambos casos seguiremos a su lado vigilando sus signos vitales.</p>
      <p>Si la victima no respira: Colocar al accidentado, sea traumático o no, en posición de decúbito supino (estirado mirando hacia arriba) pero respetando la alineación del eje cervical e iniciaremos las maniobras de reanimación cardiopulmonar, empezando con 30 compresiones torácicas.</p>
    </div>
  );
};

const M2s2 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Módulo 2: Reconocimiento de signos vitales y reanimación</h2>
      <ImageForSection
        src="/img-cursos/53/53m2s2-1.jpg"
      />
      <h3>Secuencia de actuación</h3>
      <p>La secuencia de actuación de las maniobras de RCP que marcan las nuevas recomendaciones del 2010 son las siguientes:</p>
      <p>C: compresiones torácicas</p>
      <p>A: comprobar la vía aérea</p>
      <p>B: respiración artificial</p>
      <p>Realizar las compresiones torácicas</p>
      <h2>Colocar al paciente sobre una superficie dura.</h2>
      <p>Localizar el punto medio del pecho y colocar el talón de nuestra mano sobre él, entrelazando la otra mano. Como es muy importante no perder tiempo, se colocarán las manos de esta forma y no se empleará tiempo en el método de seguir el borde de las costillas.</p>
      <p>Mantener los dedos estirados y los brazos perpendiculares al punto de contacto con el esternón para ejercer la compresión directa sobre el tórax, y conseguir que se deprima unos 5 cm. y a un ritmo de compresión de aproximadamente 100 compresiones por minuto.</p>
      
      <h3>Comprobar la vía aérea</h3>
      <p>Realizar la maniobra frente-mentón: colocaremos una mano en la barbilla y otra en la frente. Inclinaremos la cabeza de la persona accidentada cuidadosamente hacia atrás y con los dedos de la mano que tenemos en la barbilla abriremos el mentón. Con esta maniobra facilitaremos la apertura de la vía aérea.</p>
      <p>Esta maniobra nunca la realizaremos si sospechamos que la persona accidentada pueda sufrir una lesión cervical. Al realizarla podríamos provocar una lesión medular.</p>
      <p>Posteriormente, comprobaremos visualmente que no haya ningún cuerpo extraño que nos pueda dificultar el paso del aire a través de la vía aérea. En caso de que exista alguno y sea fácilmente extraible, lo sacaremos. En caso de que sea de difícil extracción, no realizaremos ninguna acción e iniciaremos las maniobras de ventilación artificial. Podriamos perder un tiempo de vital importancia para conservar la vida de la persona intentando extraer el cuerpo extraño de la vía aérea.</p>
      
      <h3>Respiración artificial</h3>
      <p>Primero, colocar los labios alrededor de la boca de la victima de manera que quede bien sellada y llenar los pulmones de aire.</p>
      <p>Seguidamente, con los dedos indice y pulgar comprimir las alas de la nariz de la víctima.</p>
      <p>Introducir el aire en la boca de la persona de manera continuada y suave, observando al mismo tiempo que el tórax se eleva. Esta insuflación debe durar alrededor de 1 segundo.</p>
      <p>Manteniendo la extensión de la cabeza y el mentón levantado, retirar la boca de la víctima y dejar que el aire salga. Se observará cómo el pecho de la víctima desciende.</p>
      
      <h3>Realizar reanimación cardiopulmonar: secuencia de actuación</h3>
      <p>Consiste en proporcionar un soporte vital básico caracterizado por estos puntos:</p>
      <ListPoint list={[
        "Se realizan 30 compresiones.",
        "Después de las compresiones, se realizan 2 insuflaciones de 1 segundo cada una.",
        "La relación entre compresiones e insuflaciones es 30:2 (30 compresiones: 2 insuflaciones) a un ritmo de 100 compresiones por minuto."
      ]}/>
      <p>No se parará hasta que:</p>
      <ListPoint list={[
        "La víctima recupere la consciencia.",
        "Llegue los servicios de Soporte Vital avanzado.",
        "Por propio agotamiento del socorrista."
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
          src="https://www.youtube.com/embed/"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
};

const Video2 = () => {
  return(
    <div className="space-y-3">
      <h2>Video: Reconocimiento y reanimación de la victima</h2>
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
};

const Video3 = () => {
  return(
    <div className="space-y-3">
      <h2>Video: Reanimación cardiopulmonar</h2>
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
};

const Modulo2 = [M2s1, M2s2, Video, Video2, Video3];

export default Modulo2;