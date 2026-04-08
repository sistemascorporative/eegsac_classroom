import { ListPointBold } from "../../../components/ui/List";
import { ImageTextForSection } from "../../../components/ui/Imagen";


const M1s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Auxilio en el barro con camionetas 4x4</h2>
      <ImageTextForSection
        src="/img-cursos/30/30m1.6.jpg"
        text="Aplicar técnicas para liberar una camioneta 4x4 atascada en terreno fangoso, utilizando estrategias de tracción, aceleración controlada y elementos de recuperación."
      />
      <p>El auxilio en el barro consiste en aplicar técnicas para liberar una camioneta 4x4 atascada en terreno fangoso, utilizando estrategias de tracción, aceleración controlada y elementos de recuperación.</p>
      <p>Técnicas de auxilio en barro:</p>
      <ListPointBold list={[
        "Evaluar la situación: Determinar el nivel de hundimiento y la mejor dirección para salir sin empeorar el atasco.",
        "Usar la tracción adecuada: Cambiar a 4L (baja) para mayor torque y control.",
        "Acelerar suavemente: Evitar patinar las ruedas, ya que esto puede profundizar el atasco.",
        "Liberar neumáticos:Reducir la presión de los neumáticos para aumentar la superficie de contacto.Colocar ramas, piedras o alfombrillas bajo las ruedas para mejorar la adherencia.",
        "Balanceo del vehículo: Hacer pequeños movimientos adelante y atrás para ganar impulso.",
        "Uso de eslingas o winch: Si el vehículo no puede salir por sí solo, usar una eslinga de rescate o un winch anclado a un punto fijo o a otro vehículo 4x4.",
        "Evitar hundimientos mayores: No acelerar bruscamente ni girar el volante de manera agresiva.",
      ]}/>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2>Auxilio en el barro con camionetas 4x4</h2>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/0XnQy9YnXD0?list=PL3V8LJJXiM6Tn7sk54FE-VG0oPHn65StL"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo5 = [M1s1,  Video];

export default Modulo5;