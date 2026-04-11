import { ImageForSection } from "../../../components/ui/Imagen";


const M4s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 4: TÉCNICAS PREVENTIVAS Y PUNTOS CIEGOS</h2>
      <h3>¿QUÉ SON LOS PUNTOS CIEGOS?</h3>
      <ImageForSection
        src="/img-cursos/1/1m4s1-1.png"
      />
      <p>Los puntos ciegos se refieren a las áreas del campo de visión del conductor que no son visibles ni con el apoyo de los retrovisores y espejos laterales. Por más que el conductor quiera tener control de todo lo que está alrededor no lo consigue.</p>
      <p>Estos puntos ciegos generan en muchos casos accidentes y algunos se preguntarán ¿Dónde se encuentran? Se ubican en la parte trasera y a los costados del vehículo y van a depender mucho de la forma que tenga el auto, además de la manera en como estén acomodados los retrovisores.</p>
      <h3>¿Cómo se provoca un accidente por los puntos ciegos?</h3>
      <p>Se da por ejemplo cuando queremos hacer un giro y no vemos qué tenemos al lado debido al punto ciego o no estamos seguros de una maniobra, pero lo hacemos aunque no veamos qué hay alrededor por esa misma situación.</p>
      <p>Hay autos que por el tipo de carrocería se vuelve complicado el manejo por los puntos ciegos.</p>
      <p>Incluso cuando vamos en reversa chocamos a otro vehículo por no tener la visibilidad necesaria y calcular bien la distancia.</p>
      <p>Ahora con la tecnología los vehículos modernos vienen con cámara atrás y facilitan un poco más la maniobra. Le da más seguridad al conductor.</p>
      <p>¿Cuál es quizás el punto ciego más riesgoso?</p>
      <p>Todos son de cuidado, sea el de atrás o los costados del vehículo, pero sin duda que el lado derecho suele ser más complicado, es como el punto más vulnerable para el conductor porque no contamos con un acceso directo de nuestra vista.</p>
      <h3>¿Cómo evitar los puntos ciegos?</h3>
      <p>Una de las primeras recomendaciones es saber acomodar los espejos del vehículo para una mayor seguridad en la conducción:</p>
      <p>Espejo del lado izquierdo: debe ponerse hacia la parte lateral del auto tratando de que se pueda ver la carrocería sin tener que hacer un movimiento brusco de cabeza.</p>
      <p>Espejo del lado derecho: tiene que ubicarse de tal forma que el conductor vea una parte del lado trasero del auto y que tenga una buena visibilidad del largo del carril.</p>
      <p>Espejo del lado trasero: Lo que se debe buscar es tener buena visibilidad en la parte de atrás, que pueda identificar los vehículos que le persiguen.</p>
      <h4>Otras recomendaciones</h4>
      <p>Hay que evitar movimientos o giros bruscos con el vehículo y si no estamos seguros es mejor no hacerlos. Es importante utilizar siempre las direccionales para advertir a los otros conductores que vienen en carretera.</p>
      <p>Es bueno chequear antes de salir de un lugar que estén en buena posición los espejos laterales.</p>
      <p>Por más tranquilo que se vea el camino no está de más pegarle una ojeadita al retrovisor para saber qué tenemos atrás o al lado, porque también nos debería preocupar los puntos ciegos de los otros conductores.</p>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 4: TÉCNICAS PREVENTIVAS Y PUNTOS CIEGOS</h2>
      <h3>Video</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/_Fs2mri_c9I"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Video2 = () => {
  return(
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 4: TÉCNICAS PREVENTIVAS Y PUNTOS CIEGOS</h2>
      <h3>Video: CONDUCCIÓN SEGURA Y PUNTOS CIEGOS</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/COs2IZeRCXc"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Video3 = () => {
  return(
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 4: TÉCNICAS PREVENTIVAS Y PUNTOS CIEGOS</h2>
      <h3>Video: CULTURA DE SEGURIDAD EN LA CONDUCCIÓN</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/AcqR2CmB6GA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Modulo4 = [M4s1, Video, Video2, Video3];

export default Modulo4;