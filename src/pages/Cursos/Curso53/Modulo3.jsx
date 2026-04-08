import { ListNumbered, ListPoint, ListPointBold } from "../../../components/ui/List";
import { ImageTextForSection } from "../../../components/ui/Imagen";


const M3s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Módulo 3: Obstrucción de las vias aereas</h2>
      <ImageTextForSection
        src="/img-cursos/53/53m3s1-1.jpg"
        text=""
      />
      <p>Una obstrucción de la via aérea impide que el oxigeno que hay en el aire que respiramos llegue a los pulmones y de aquí al cerebro. Por tanto, esta falta de oxigeno en el cerebro provocará una pérdida de la consciencia de la persona que lo sufre y si no se restablece en un tiempo prudencial, pueden llegar a comprometer la vida de la persona.</p>
      <p>Esta obstrucción suele aparecer de forma brusca y está causada normalmente por las siguientes situaciones:</p>
      <ListPoint list={[
        "Atragantamiento",
        "Ahogamiento",
        "Electrocución"
      ]}/>
      <h3>Atragantamiento</h3>
      <p>Consiste en la entrada en las vías aéreas de la persona que lo sufre de algún objeto extraño, como puede ser comida, prótesis dentales, hueso, etc.</p>
      <p>Dependiendo del grado de obstrucción de la vía aérea, la obstrucción puede ser:</p>
      <ListPoint list={[
        "Incompleta",
        "Completa"
      ]}/>
      <h3>Obstrucción incompleta</h3>
      <p>En este caso la presencia del cuerpo extraño en la vía aérea sólo dificulta de forma parcial la entrada de aire en los pulmones. La persona suele mostrarse agitada y con una tos enérgica y continuada. El estado de consciencia no suele estar alterado en ningún momento.</p>
      <p>En este caso la manera como debemos actuar es la siguiente:</p>
      <ListPoint list={[
        "Lo mejor es que la persona continúe tosiendo y no hacer ninguna actuación sobre ella porque, normalmente, la misma tos provocará la expulsión del cuerpo extraño.",
        "No hay que dar golpes en la espalda como muchas personas acostumbran a realizar, porque en este caso puede provocar que el objeto penetre más en la via aérea y producir una obstrucción completa.",
      ]}/>
      <h3>Obstrucción completa</h3>
      <p>Se produce cuando la vía aérea de la persona está completamente obstruida por un cuerpo extraño. Debido a ello no puede entrar ni salir aire de los pulmones y la persona afectada no puede hablar.</p>
      <p>Generalmente se pone las manos alrededor del cuello compulsivamente para indicarlo.</p>
      <p>Inicialmente la persona está consciente, pero si no se restablece la respiración en poco tiempo, pierde la consciencia.</p>
      <p>En estos casos, el socorrista procederá a realizar la Maniobra de Heimlich que consiste en aplicar una presión fuerte a nivel del epigastrio (boca del estómago) con la finalidad de desplazar el diafragma hacia arriba. Esto provocará un aumento de la presión dentro del tórax y obligará a salir el aire que está contenido dentro de los pulmones, arrastrando el cuerpo extraño.</p>
      <p>Modo de actuación en la maniobra de Heimlich:</p>
      <ListNumbered list={[
        "Situarse de pie detrás de la victima y rodearle con ambos brazos.",
        "Inicialmente se pueden realizar 5 golpes en la zona dorsal.",
        "Posteriormente, cerrar el puño de una mano y entrelazar las manos a la altura de la boca del estómago (en la zona epigastrica).",
        "Realizar una presión brusca hacia dentro y arriba, en dirección a los pulmones. El movimiento debe recordar a la forma de la letra J.",
        "Aflojar la presión y volver a repetir la misma maniobra hasta que la persona logre expulsar el cuerpo extraño."
      ]}/>
      <p>En caso de que la persona pierda la consciencia, iniciar las maniobras de RCP con compresiones torácicas.</p>
      <p>Existen unas situaciones especiales en que la presión se realizará a nivel del punto medio del tórax:</p>
      a) Mujeres embarazadas a partir del segundo trimestre.
      b) Personas obesas: debido a la imposibilidad de coger a la persona por la cintura.
    </div>
  );
};

const M3s2 = () => {
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

const Modulo3 = [M3s1, M3s2, Video];

export default Modulo3;