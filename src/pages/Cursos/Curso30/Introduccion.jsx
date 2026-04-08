import { ImageWithInnerBorder } from "../../../components/ui/Imagen";


const Introduccion = () => {
  return (
    <section className="p-5 bg-white rounded-lg shadow-lg space-y-3">
      <h2 className="font-semibold mb-4 uppercase text-center">Manejo Defensivo 4x4</h2>
      <div className="mx-auto my-5 max-w-[500px]">
        <ImageWithInnerBorder 
          src={"/img-cursos/30/30m1.jpg"}
          alt={"curso30"}
        />
      </div>
      <h2>Introducción</h2>
      <p>El manejo defensivo 4x4 combina los principios de conducción segura con las habilidades específicas para operar vehículos todo terreno en condiciones adversas. Ya sea en terrenos difíciles como lodo, arena, nieve o caminos irregulares, aplicar técnicas defensivas al conducir un 4x4 es esencial para minimizar riesgos y garantizar la seguridad del conductor, pasajeros y otros usuarios de la vía.</p>
      <p>El manejo defensivo en vehículos 4x4 se basa en cuatro principios fundamentales:</p>
      <p><span className="font-bold text-primary">1.Anticipación:</span> Identificar posibles riesgos con anticipación, observando el entorno, el estado del camino y las condiciones climáticas.</p>
      <p><span className="font-bold text-primary">2.Control del vehículo:</span> Ajustar la velocidad, elegir la tracción adecuada y mantener el control en superficies resbaladizas o irregulares.</p>
      <p><span className="font-bold text-primary">3.Distancia y espacio de seguridad: </span>Mantener una distancia prudente con otros vehículos y obstáculos, considerando que los frenos pueden responder de manera diferente en terrenos difíciles.</p>
      <p><span className="font-bold text-primary">4.Actitud preventiva:</span> Evitar maniobras bruscas, conducir con precaución y estar siempre preparado para reaccionar ante imprevistos.</p>
      <p>Además, el conductor debe conocer las características de su vehículo, incluyendo el uso adecuado de la tracción 4x4 (4H y 4L), la presión de los neumáticos según el terreno y las técnicas de ascenso, descenso y recuperación en situaciones complicadas.</p>
      <p>Adoptar una conducción defensiva en un 4x4 no solo mejora la seguridad, sino que también optimiza el rendimiento del vehículo y reduce el desgaste mecánico, garantizando una conducción más eficiente y responsable en cualquier tipo de terreno.</p>
    </section>
  );
};

export default Introduccion;