import {  ListPointBold } from "../../../components/ui/List";
import { ImageTextForSection } from "../../../components/ui/Imagen";


const M1s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Autorescate con camionetas 4x4</h2>
      <ImageTextForSection
        src="/img-cursos/30/30m1.14.jpg"
        text="Asutorescate en camionetas 4x4 "
      />
      <p>El autorescate en camionetas 4x4 es el conjunto de técnicas y estrategias utilizadas para liberar un vehículo atascado sin la ayuda de otro automóvil, empleando los propios recursos y herramientas disponibles.</p>
      <p>Técnicas de autorescate:</p>
      <ListPointBold list={[
        "Evaluar la situación: Identificar el tipo de terreno (arena, lodo, nieve) y el nivel de hundimiento.",
        "Usar la tracción adecuada:Activar 4L (baja) para mayor torque y control.Evitar aceleraciones bruscas para no profundizar el atasco.",
        "Reducir la presión de los neumáticos: Aumenta la superficie de contacto y mejora la tracción.",
        "Método de balanceo: Mover el vehículo adelante y atrás suavemente para generar impulso.",
        "Colocar material de tracción: Usar ramas, piedras, eslingas de tracción o placas de rescate bajo las ruedas.",
        "Uso de winch o eslinga: Si el vehículo tiene un winch, anclarlo a un punto fijo y traccionar lentamente.",
        "Pala y herramientas: Retirar tierra, lodo o nieve acumulada alrededor de las ruedas para facilitar el escape.",
      ]}/>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2> Autorescate con camionetas 4x4</h2>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/WW8uoJu1FY8?list=PL3V8LJJXiM6Tn7sk54FE-VG0oPHn65StL"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo13 = [M1s1,  Video];

export default Modulo13;