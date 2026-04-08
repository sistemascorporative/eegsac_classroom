import { ListPointBold } from "../../../components/ui/List";
import { ImageTextForSection } from "../../../components/ui/Imagen";


const M1s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Presión óptima del neumático en la arena</h2>
      <ImageTextForSection
        src="/img-cursos/30/30m1.11.jpg"
        text="La presión óptima del neumático en la arena es el ajuste de la presión de aire en las llantas "
      />
      <p>La presión óptima del neumático en la arena es el ajuste de la presión de aire en las llantas para mejorar la tracción y evitar que el vehículo se atasque en terrenos arenosos. Reducir la presión aumenta la superficie de contacto del neumático con el suelo, mejorando el agarre y la flotación sobre la arena.</p>
      <p>Recomendaciones de presión en arena:</p>
      <ListPointBold list={[
        "Presión reducida: Entre 10 y 18 PSI, dependiendo del peso del vehículo y el tipo de arena.",
        "Mejora de tracción: Una mayor superficie de contacto evita que las ruedas se hundan.",
        "Conducción suave: Se debe acelerar progresivamente y evitar giros bruscos para mantener estabilidad.",
        "Reinflado después del uso: Al salir de la arena, se debe volver a la presión normal para evitar daños en los neumáticos en carretera.",
      ]}/>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2>Presión óptima del neumático en la arena</h2>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/n4DOd-jvmAM?list=PL3V8LJJXiM6Tn7sk54FE-VG0oPHn65StL"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo10 = [M1s1,  Video];

export default Modulo10;