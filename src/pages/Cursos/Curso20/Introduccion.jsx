import { ImageWithInnerBorder } from "../../../components/ui/Imagen";


const Introduccion = () => {
  return (
    <section className="p-5 bg-white rounded-lg shadow-lg space-y-3">
      <h2 className="font-semibold mb-4 uppercase text-center">SEGURIDAD EN LA OPERACIÓN DE EQUIPOS PESADOS CATERPILLAR
      </h2>
      <div className="mx-auto my-5 max-w-[500px]">
        <ImageWithInnerBorder 
          src={"/img-cursos/20/20m1s1-62.jpg"}
          alt={"curso 20"}
        />
      </div>
      <h2>Introducción</h2>
      <p>La seguridad en la operación de equipos pesados es un aspecto fundamental en la industria de la construcción, minería, y otros sectores donde se emplean maquinaria pesada. Los equipos Caterpillar, conocidos por su durabilidad, fiabilidad y potencia, son ampliamente utilizados en diversos campos. Sin embargo, su tamaño, peso y complejidad exigen un manejo especializado y medidas de seguridad estrictas para garantizar la protección de los operadores, los trabajadores cercanos, y la integridad de las máquinas.</p>
      <p>La seguridad en la operación de equipos Caterpillar no solo involucra la correcta capacitación de los operarios, sino también la implementación de protocolos de mantenimiento preventivo, el uso adecuado de la maquinaria, la comprensión de las características del equipo y la importancia de la supervisión constante. Además, la adopción de nuevas tecnologías y sistemas de monitoreo, como sensores de seguridad y cámaras de reversa, ha mejorado significativamente los estándares de seguridad en el manejo de estos equipos.</p>
      <p>Este enfoque integral de seguridad no solo previene accidentes y lesiones, sino que también contribuye a aumentar la eficiencia operativa, reducir costos a largo plazo, y fomentar un ambiente de trabajo más seguro y productivo. A lo largo de esta introducción, exploraremos las mejores prácticas y estrategias clave que se deben seguir para operar los equipos Caterpillar de manera segura y eficiente.</p>
    </section>
  );
};

export default Introduccion;