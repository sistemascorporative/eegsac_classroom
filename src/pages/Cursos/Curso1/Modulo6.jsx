import { ImageForSection } from "../../../components/ui/Imagen";


const M6s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 6: FÓRMULAS PARA EVITAR ACCIDENTES</h2>
      <ImageForSection
        src="/img-cursos/1/1m6s1-1.png"
      />
      <p>La fórmula para evitar accidentes de tránsito incluye tres elementos clave: reconocer el peligro, entender la defensa y actuar a tiempo.</p>
      <h3>Componentes de la Fórmula</h3>
      <p><strong>Reconocer el Peligro:</strong> Este primer paso implica estar consciente de las situaciones que pueden representar un riesgo en la carretera. Esto puede incluir condiciones climáticas adversas, comportamiento imprudente de otros conductores, o la presencia de peatones y ciclistas. La capacitación y la experiencia son fundamentales para desarrollar esta habilidad.</p>
      <p><strong>Entender la Defensa:</strong> Una vez que se ha identificado un peligro, es crucial conocer las estrategias adecuadas para enfrentarlo. Esto puede incluir técnicas de conducción defensiva, como mantener una distancia segura, usar las señales de giro correctamente, y estar preparado para reaccionar ante situaciones inesperadas.</p>
      <p><strong>Actuar a Tiempo:</strong> El último componente es la acción. Esto significa que, tras reconocer un peligro y entender cómo defenderse, el conductor debe actuar de manera rápida y efectiva para evitar un accidente. Esto puede incluir frenar, cambiar de carril o tomar otras medidas preventivas.</p>
      <h3>Importancia de la Fórmula</h3>
      <p>Implementar esta fórmula no solo ayuda a reducir la probabilidad de accidentes, sino que también promueve una cultura de seguridad vial. La educación continua y la práctica de estas habilidades son esenciales para todos los conductores, independientemente de su nivel de experiencia. Al seguir estos principios, se puede contribuir a un entorno de conducción más seguro para todos. Esta fórmula es aplicable tanto a conductores individuales como a empresas que buscan mejorar la seguridad en sus operaciones de transporte.</p>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 6: FÓRMULAS PARA EVITAR ACCIDENTES</h2>
      <h3>Video</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/IsBwFxUfxXo"
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
      <h2 className="uppercase text-center text-secondary">MÓDULO 6: FÓRMULAS PARA EVITAR ACCIDENTES</h2>
      <h3>Video: PILARES DEL MANEJO DEFENSIVO</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/H1GXoIRvIxg"
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
      <h2 className="uppercase text-center text-secondary">MÓDULO 6: FÓRMULAS PARA EVITAR ACCIDENTES</h2>
      <h3>Video: COMO PREVENIR ACCIDENTES Y LOS PILARES QUE NOS AYUDAN</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/lHLhwWIQrBU"
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
      <h2 className="uppercase text-center text-secondary">MÓDULO 6: FÓRMULAS PARA EVITAR ACCIDENTES</h2>
      <h3>Video: CONDUCCIÓN SEGURA PREVINIENDO ACCIDENTES DE TRÁNSITO</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/LEWOEUqoUqo"
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
      <h2 className="uppercase text-center text-secondary">MÓDULO 6: FÓRMULAS PARA EVITAR ACCIDENTES</h2>
      <h3>Video: EXCESOS DE VELOCIDAD Y LOS LÍMITES</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/_GvYK-uTnOI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Modulo6 = [M6s1, Video, Video2, Video3, Video4, Video5];

export default Modulo6;