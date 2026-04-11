import { ListPointBold } from "../../../components/ui/List";
import { ImageForSection } from "../../../components/ui/Imagen";


const M10s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 10: INSPECCIÓN DEL VEHÍCULO</h2>
      <ImageForSection
        src="/img-cursos/1/1m10s1-1.jpeg"
      />
      <p>La inspección del vehículo antes de un viaje es crucial para garantizar la seguridad y el buen funcionamiento del mismo. Aquí hay una lista de verificación esencial que debe realizarse antes de salir:</p>
      <ListPointBold list={[
        "Iluminación exterior: Verifica que todas las luces funcionen correctamente.",
        "Neumáticos: Asegúrate de que la presión de aire esté dentro del rango recomendado y que no haya daños visibles.",
        "Fluidos del vehículo: Revisa los niveles de aceite del motor, líquido refrigerante, líquido de frenos y líquido de dirección asistida.",
        "Sistema de frenos: Prueba los frenos para asegurarte de que respondan correctamente y no haya ruidos extraños.",
        "Documentación: Verifica que todos los documentos requeridos estén presentes y sean válidos."
      ]}/>
      <p>Realizar esta inspección ayuda a prevenir accidentes y garantiza un viaje seguro y placentero.</p>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 10: INSPECCIÓN DEL VEHÍCULO</h2>
      <h3>Video</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/xZH58ckrfFk"
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
      <h2 className="uppercase text-center text-secondary">MÓDULO 10: INSPECCIÓN DEL VEHÍCULO</h2>
      <h3>Video: INSPECCIÓN DEL VEHÍCULO</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/h1i7eE-QfZk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Modulo10 = [M10s1, Video, Video2];

export default Modulo10;