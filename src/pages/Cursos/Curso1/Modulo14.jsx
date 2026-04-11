import { ImageForSection } from "../../../components/ui/Imagen";


const M14s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 14: TÉCNICAS DE DESCENSO EN PENDIENTES</h2>
      <ImageForSection
        src="/img-cursos/1/1m14s1-1.jpeg"
      />
      <h3>Consejos para conducir de forma correcta en pendientes</h3>
      <p>Aunque parezca fácil, un gran número de accidentes de autos ocurren por errores de conducción en curvas, bajadas y pendientes. En ocasiones puede ser por exceso de velocidad o por no tomar las precauciones en el auto. Por ello, es importante seguir varios consejos para evitar cometer estos errores.</p>
      <h3>Conducción en subidas y bajadas</h3>
      <p>Una de las situaciones que pueden ser algo complicadas es subir o bajar caminos bastante pronunciados. Estas pueden generar accidentes o daños al vehículo si no se tiene el cuidado para este tipo de trayectos.</p>
      <h3>Conducción en pendientes</h3>
      <p>En el caso de subir una pendiente, el motor del auto necesita más potencia sin llegar a sobrepasar las revoluciones por minutos. Se recomienda usar las primeras marchas para poder subir con mayor facilidad.</p>
      <p>En el caso de un auto con transmisión manual, se debe apretar el embrague a fondo, bajar a las primeras velocidades, acelerar y soltar el embrague rápidamente. Esto evitará que el auto vibre y se apague, lo más aconsejable es que si la pendiente es bastante pronunciada, usar la primera marcha, esta es la que responderá de forma óptima. Trate de no acelerar a fondo, sino vaya siguiendo las RPM para que el motor no se esfuerce mucho.</p>
      <h3>Conducción en descenso</h3>
      <p>Cuando estamos en descenso, se debe hacer una situación parecida. Para un descenso controlado, se debe usar la primera o segunda marcha y usar el freno con precaución. En una bajada, se puede frenar con el motor, usando la primera velocidad, así no usa el freno y desgasta.</p>
      <p>Un consejo práctico es que si estamos en un descenso y luego viene una pendiente, se puede aprovechar la velocidad por inercia de la bajada para lograr una mayor velocidad al momento de subir. Esto hará que no aceleremos a fondo y ahorraremos algo de combustible.</p>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 14: TÉCNICAS DE DESCENSO EN PENDIENTES</h2>
      <h3>Video</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/Ccth7ijDL8s"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Modulo14 = [M14s1, Video];

export default Modulo14;