import { ListPoint } from "../../../components/ui/List";
import { ImageForSection } from "../../../components/ui/Imagen";


const M11s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 11: LIDIANDO CON CONDUCTORES REACTIVOS</h2>
      <ImageForSection
        src="/img-cursos/1/1m11s1-1.jpeg"
      />
      <h3>Cómo actuar frente a un conductor agresivo</h3>
      <p>Lo primero que debes hacer cuando te encuentras con este tipo de conductores es mantenerte lo más alejado posible. Apártate cuanto sea posible, ya que a mayor cercanía, mayor probabilidad de sufrir un accidente. Si es necesario, para tu coche y deja que se marche.</p>
      <p>Como hemos señalado, es frecuente que estos conductores increpen a otros y les hagan gestos. Si ese es tu caso, es de vital importancia que no respondas a ninguna provocación, que no lo desafíes y que evites cualquier tipo de contacto visual. De hecho, lo mejor es ignorarlo y actuar como si no pasara nada.</p>
      <p>Si vas acompañado por otra persona, y ves que un conductor temerario está poniendo en peligro la vida de los demás, pídele a tu acompañante que llame a la Policía y lo denuncie. Si es posible, grabadlo con el móvil, ya que servirá como prueba gráfica de su comportamiento en carretera. Y si la persona que conduce el coche en el que viajas es quien está enojada o estresada, ofrécete a conducir en su lugar, al menos hasta que se calme.</p>
      <h3>Desencadenantes de ira en la carretera</h3>
      <p>Ten cuidado con la forma en que conduces, incluso si conoces tus derechos: se sabe que los siguientes actos desencadenan incidentes de furia en la carretera, con consecuencias que pueden ser drásticamente desproporcionadas con respecto a la ofensa original:</p>
      <ListPoint list={[
        "Tocar repetidamente la bocina",
        "Conducir muy pegado del otro vehículo.",
        "Gritar o insultar.",
        "Chocar deliberadamente con otro vehículo.",
        "Entrar y salir del tráfico.",
        "Conducir demasiado rápido.",
        "Bloquear otro vehículo dentro de un área cerrada como un estacionamiento."
      ]}/>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 11: LIDIANDO CON CONDUCTORES REACTIVOS</h2>
      <h3>Video</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/UXrGqMkUtDU"
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
      <h2 className="uppercase text-center text-secondary">MÓDULO 11: LIDIANDO CON CONDUCTORES REACTIVOS</h2>
      <h3>Video: CONTROL DE IMPULSOS ANTE CONDUCTORES AGRESIVOS</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/y8pCbP00C9g"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Modulo11 = [M11s1, Video, Video2];

export default Modulo11;