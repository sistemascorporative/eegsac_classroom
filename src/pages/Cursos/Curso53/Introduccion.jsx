import { ImageWithInnerBorder, ImageCenterSection } from "../../../components/ui/Imagen";
import { ListNumbered } from "../../../components/ui/List";


const Introduccion = () => {
  return (
    <section className="p-5 bg-white rounded-lg shadow-lg space-y-3">
      <h2 className="font-semibold mb-4 uppercase text-center">Primeros Auxilios</h2>
      <div className="mx-auto my-5 max-w-[500px]">
        <ImageWithInnerBorder 
          src={"/img-cursos/53/53i.jpg"}
          alt={"curso "}
        />
      </div>
      <h2>Introducción</h2>
      <p>Por EMERGENCIA MÉDICA entendemos aquella situación en la que la falta de asistencia médica producirá la muerte del accidentado en muy pocos minutos.</p>
      <p>Cualquier parada cardiorrespiratoria (fracaso de las funciones cardiaca y respiratoria, con la consiguiente incapacidad para hacer llegar sangre oxigenada a las células) es una situación de máxima emergencia ya que del tratamiento inmediato dependerá la vida del paciente.</p>
      <p>A partir de los 10 minutos sin ningún tipo de riego cerebral aparece la muerte cerebral y entre los 12 y los 14 minutos la muerte biológica. Es por este motivo que es muy importante iniciar lo antes posible las maniobras de reanimación cardiopulmonar, que tratan de sustituir las funciones cardiaca y respiratoria que se han vista alteradas hasta que lleguen los servicios sanitarios de Soporte Vital Avanzado.</p>
      <p>Para proceder correctamente el socorrista tiene que seguir los principales principios básicos de actuación que son los siguientes:</p>
      <ListNumbered
        list={[
          "No agravar el estado de la persona accidentada",
          "Usar en todo momento el sentido común",
          "Facilitar en todo momento el acceso de la persona accidentada, en las mejores condiciones posibles, a la atención especializada sanitaria"
        ]}
      />
      <p className="text-center text-orange-500 uppercase">PORCENTAJE DE SUPERVIVENCIA, EN FUNCIÓN DEL TIEMPO DE ACTUACIÓN</p>
      <ImageCenterSection
        src={"/img-cursos/53/53i-2.jpeg"}
      />
    </section>
  );
};

export default Introduccion;