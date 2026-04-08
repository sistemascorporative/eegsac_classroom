import { ListPoint, ListPointBold } from "../../../components/ui/List";
import { ImageTextForSection } from "../../../components/ui/Imagen";


const M15s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 15: TÉCNICAS DE DESCENSO EN PENDIENTES</h2>
      <ImageTextForSection
        src="/img-cursos/10/10mt.jpg"
        text=""
      />
      Consejos para conducir de forma correcta en pendientes 
      Aunque parezca fácil, un gran número de accidentes de autos ocurren por errores de conducción en curvas, bajadas y pendientes. En ocasiones puede ser por exceso de velocidad o por no tomar las precauciones en el auto. Por ello, es importante seguir varios consejos para evitar cometer estos errores.
      Conducción en subidas y bajadas 
      Una de las situaciones que pueden ser algo complicadas es subir o bajar caminos bastante pronunciados. Estas pueden generar accidentes o daños al vehículo si no se tiene el cuidado para este tipo de trayectos. 
      Conducción en pendientes
      En el caso de subir una pendiente, el motor del auto necesita más potencia sin llegar a sobrepasar las revoluciones por minutos. Se recomienda usar las primeras marchas para poder subir con mayor facilidad.
      En el caso de un auto con transmisión manual, se debe apretar el embrague a fondo, bajar a las primeras velocidades, acelerar y soltar el embrague rápidamente. Esto evitará que el auto vibre y se apague, lo más aconsejable es que si la pendiente es bastante pronunciada, usar la primera marcha, esta es la que responderá de forma óptima. Trate de no acelerar a fondo, sino vaya siguiendo las RPM para que el motor no se esfuerce mucho.
      Conducción en descenso
      Cuando estamos en descenso, se debe hacer una situación parecida. Para un descenso controlado, se debe usar la primera o segunda marcha y usar el freno con precaución. En una bajada, se puede frenar con el motor, usando la primera velocidad, así no usa el freno y desgasta.
      Un consejo práctico es que si estamos en un descenso y luego viene una pendiente, se puede aprovechar la velocidad por inercia de la bajada para lograr una mayor velocidad al momento de subir. Esto hará que no aceleremos a fondo y ahorraremos algo de combustible.
    </div>
  );
};

const Modulo15 = [M15s1];

export default Modulo15;