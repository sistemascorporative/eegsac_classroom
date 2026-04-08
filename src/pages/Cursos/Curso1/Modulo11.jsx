import { ListPoint, ListPointBold } from "../../../components/ui/List";
import { ImageTextForSection } from "../../../components/ui/Imagen";


const M2s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 11: CONDICIONES DEL VEHÍCULO</h2>
      <ImageTextForSection
        src="/img-cursos/5/5mt.jpg"
        text=""
      />
      La inspección del vehículo antes de un viaje es crucial para garantizar la seguridad y el buen funcionamiento del mismo. Aquí hay una lista de verificación esencial que debe realizarse antes de salir:
      Iluminación exterior: Verifica que todas las luces funcionen correctamente.
      Neumáticos: Asegúrate de que la presión de aire esté dentro del rango recomendado y que no haya daños visibles.
      Fluidos del vehículo: Revisa los niveles de aceite del motor, líquido refrigerante, líquido de frenos y líquido de dirección asistida.
      Sistema de frenos: Prueba los frenos para asegurarte de que respondan correctamente y no haya ruidos extraños.
      Documentación: Verifica que todos los documentos requeridos estén presentes y sean válidos.
      Realizar esta inspección ayuda a prevenir accidentes y garantiza un viaje seguro y placentero.

    </div>
  );
};

const M2s2 = () => {
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

const Modulo11 = [M2s1, M2s2, Video];

export default Modulo11;