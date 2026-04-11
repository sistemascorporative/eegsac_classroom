import { ImageWithInnerBorder } from "../../../components/ui/Imagen";


const Introduccion = () => {
  return (
    <section className="p-5 bg-white rounded-lg shadow-lg space-y-3">
      <h2 className="font-semibold mb-4 uppercase text-center">Manejo defensivo</h2>
      <div className="mx-auto my-5 max-w-[500px]">
        <ImageWithInnerBorder 
          src={"/img-cursos/1/1i.jpeg"}
          alt={"manejo defensivo"}
        />
      </div>
      <h2>Introducción</h2>
      <p>El curso de Manejo Defensivo está diseñado para desarrollar en los conductores una actitud preventiva, responsable y orientada a la seguridad vial. A lo largo del programa, se abordarán las normas vigentes, las condiciones físicas y psicológicas del conductor, así como las principales causas de los accidentes de tránsito, con el fin de comprender los riesgos y reducir su incidencia.</p>
      <p>Asimismo, se brindarán herramientas prácticas como técnicas preventivas, evaluación de peligros, control de puntos ciegos, cálculo del tiempo y distancia de reacción, y conducción en condiciones adversas. El curso también incluye contenidos esenciales como inspección del vehículo, primeros auxilios en carretera y estrategias para interactuar con conductores reactivos.</p>
      <p>Finalmente, se busca fortalecer habilidades de conducción efectiva y promover una cultura de seguridad, motivando a los participantes a adoptar hábitos responsables que contribuyan a prevenir accidentes y proteger la vida propia y la de los demás.</p>
    </section>
  );
};

export default Introduccion;