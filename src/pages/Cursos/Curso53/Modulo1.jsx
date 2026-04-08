import { ListPoint, ListPointBold } from "../../../components/ui/List";
import { ImageForSection } from "../../../components/ui/Imagen";


const M1s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Módulo 1: Conducta PAS</h2>
      <ImageForSection
        src="/img-cursos/53/53m1s1-1.jpg"
      />
      <h3>Normas de actuación</h3>
      <p>En cualquier accidente debemos ACTIVAR EL SISTEMA DE EMERGENCIA. Para ello recordaremos la palabra PAS., que está formada por las iniciales de tres actuaciones secuenciales para empezar a atender al accidentado.</p>
      <p className="text-green-600">P: Proteger</p>
      <p className="text-green-600">A: Avisar</p>
      <p className="text-green-600">S: Socorrer</p>
      <h4>La P de PROTEGER</h4>
      <p>Antes de actuar, tenemos que tener la seguridad de que tanto el accidentado como nosotros mismos estamos fuera de todo peligro.</p>
      <p>Por ejemplo, no atenderemos a un electrocutado sin antes desconectar la corriente causante del accidente, pues de lo contrario nos accidentaríamos nosotros también.</p>
      <h4>La A de AVISAR</h4>
      <p>Siempre daremos aviso a los servicios sanitarios (médico, ambulancia...) de la existencia del accidente, y así activaremos el Sistema de Emergencia, para inmediatamente empezar a socorrer en espera de ayuda. Debemos informar indicando el tipo de accidente, la localización, el no de personas accidentadas y la gravedad de éstas.</p>
      <p>Si somos más de un socorrista, uno de nosotros empezará a socorrer al accidentado y el otro será quien activará el Sistema de Emergencia.</p>
      <p>El teléfono de urgencia establecido para todos los ciudadanos en todos los países de la Unión Europea es 112. Es una numeración gratuita y prefijada. Los teléfonos móviles pueden llamar al 112 siempre que haya cobertura de algún operador, sea éste o no quien presta el servicio al llamante, porque todas las redes atienden este tipo de llamadas gratuitamente.</p>
      <h4>La S de SOCORRER</h4>
      <p>Una vez hemos PROTEGIDO Y AVISADO, procederemos a actuar sobre el accidentado, efectuando el reconocimiento de sus signos vitales:</p>
      <p>a) consciencia</p>
      <p>b) respiración</p>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2>Módulo 1: Conducta PAS</h2>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/3auMPzTIebE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Video2 = () => {
  return(
    <div className="space-y-3">
      <h2>Módulo 1: Conducta PAS</h2>
      <p>En este video se explica la conducta PAS en primeros auxilios.</p>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/f0jT1Dqo8Hw"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo1 = [M1s1, Video, Video2];

export default Modulo1;