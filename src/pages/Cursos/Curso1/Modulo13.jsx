import { ImageForSection } from "../../../components/ui/Imagen";


const M13s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 13: CONDUCCIÓN EN CONDICIONES ADVERSAS</h2>
      <ImageForSection
        src="/img-cursos/1/1m13s1-1.jpeg"
      />
      <h3>Tips para conducir de forma segura en condiciones adversas</h3>
      <p>Conducir en condiciones adversas puede ser un desafío, pero con las técnicas adecuadas, es posible mantener la seguridad y el control del vehículo. Aquí hay algunos consejos esenciales para manejar de manera segura en estas circunstancias:</p>
      <p><strong>Reducir la velocidad:</strong> Conducir más lento te permite tener un mayor control sobre el vehículo y una mayor capacidad de reacción ante imprevistos.</p>
      <p><strong>Mantener una mayor distancia de seguridad:</strong> Ante cualquier situación climática adversa, es fundamental aumentar la distancia de frenado entre tu vehículo y el que va delante de ti.</p>
      <p><strong>Encender las luces del coche:</strong> Si se trata de una situación de lluvia, nieve o niebla, es importante tener encendidas las luces del coche para ser más visibles a otros conductores y tener una mejor visibilidad.</p>
      <p><strong>Evitar maniobras bruscas:</strong> En situaciones climáticas adversas, es importante mantener una conducción suave y evitar maniobras bruscas como frenazos o acelerones.</p>
      <p><strong>Ten cuidado al conducir en pendientes o curvas:</strong> En situaciones de lluvia o nieve, las pendientes o curvas pueden convertirse en peligrosas. Por eso, es importante reducir la velocidad y mantener una conducción suave.</p>
      <p>Estos consejos son fundamentales para garantizar la seguridad de todos los ocupantes del vehículo y de los demás usuarios de la vía.</p>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 13: CONDUCCIÓN EN CONDICIONES ADVERSAS</h2>
      <h3>Video</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/n4wOsw9WZhk"
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
      <h2 className="uppercase text-center text-secondary">MÓDULO 13: CONDUCCIÓN EN CONDICIONES ADVERSAS</h2>
      <h3>Video: CONDUCCIÓN EN LLUVIA</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/0af2rLDAQcU"
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
      <h2 className="uppercase text-center text-secondary">MÓDULO 13: CONDUCCIÓN EN CONDICIONES ADVERSAS</h2>
      <h3>Video: SEGURIDAD EN CLIMAS EXTREMOS</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/jCDl9xwo1rA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Video4 = () => {
  return(
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 13: CONDUCCIÓN EN CONDICIONES ADVERSAS</h2>
      <h3>Video: CONDUCCIÓN CON NIEBLA O NEBLINA</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/t2KGMArCuv0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Video5 = () => {
  return(
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 13: CONDUCCIÓN EN CONDICIONES ADVERSAS</h2>
      <h3>Video: CONDUCCIÓN EN NIEVE O HIELO</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/e3Tw3c3a2AY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Video6 = () => {
  return(
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 13: CONDUCCIÓN EN CONDICIONES ADVERSAS</h2>
      <h3>Video: CONDUCIR CON CALOR</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/t124RW5JXJ0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Modulo13 = [M13s1, Video, Video2, Video3, Video4, Video5, Video6];

export default Modulo13;