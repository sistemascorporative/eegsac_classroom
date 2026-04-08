import { ListPoint, ListPointBold } from "../../../components/ui/List";
import { ImageForSection } from "../../../components/ui/Imagen";


const M5s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Modulo 5: Manejo de sustancias químicas, sustancias y residuos peligrosos</h2>
      <ImageForSection
        src="/img-cursos/84/84m5s1-1.jpeg"
      />
      <h3>Principios básicos del manejo seguro</h3>
      <p>El manejo adecuado se basa en tres principios fundamentales:</p>
      <h5>Identificar</h5>
      <ListPoint
        list={[
          "Conocer el producto antes de manipularlo.",
          "Revisar etiquetas y hojas de seguridad.",
          "Verificar compatibilidad con otras sustancias."
        ]}
      />
      <h5>Proteger</h5>
      <ListPoint
        list={[
          "Utilizar el Equipo de Protección Personal (EPP).",
          "Evitar el contacto directo.",
          "Asegurar ventilación adecuada."
        ]}
      />
      <h5>Comunicar</h5>
      <ListPoint
        list={[
          "Reportar riesgos.",
          "Informar derrames.",
          "Seguir protocolos establecidos."
        ]}
      />
      <h3>Manejo seguro de sustancias químicas</h3>
      <h4>Antes de manipular:</h4>
      <ListPoint
        list={[
          "Leer la etiqueta y advertencias.",
          "Verificar que el envase esté en buen estado.",
          "Confirmar que el área esté ventilada."
        ]}
      />
      <h4>Durante la manipulación:</h4>
      <ListPoint
        list={[
          "No comer, beber ni fumar.",
          "Evitar mezclar sustancias sin autorización.",
          "Mantener los recipientes cerrados.",
          "Usar herramientas adecuadas."
        ]}
      />
      <h4>Después de la manipulación:</h4>
      <ListPoint
        list={[
          "Cerrar correctamente los envases.",
          "Lavarse las manos.",
          "Guardar en el lugar asignado."
        ]}
      />
    </div>
  );
};

const M5s2 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Modulo 5: Manejo de sustancias químicas, sustancias y residuos peligrosos</h2>
      <h3>Almacenamiento seguro</h3>
      <ImageForSection
        src="/img-cursos/84/84m5s2-1.jpeg"
      />
      <p>El almacenamiento inadecuado es una causa frecuente de accidentes.</p>
      <h4>Reglas básicas:</h4>
      <ListPoint
        list={[
          "Separar sustancias incompatibles.",
          "Almacenar inflamables lejos de fuentes de calor.",
          "Mantener los productos en sus envases originales.",
          "No retirar etiquetas.",
          "No sobrecargar estanterías.",
          "Señalizar claramente las áreas de almacenamiento."
        ]}
      />
      <h4>Manejo de residuos peligrosos</h4>
      <p>El manejo adecuado de residuos implica:</p>
      <ListPointBold
        list={[
          "Segregación: Separar los residuos según su tipo y nivel de peligrosidad.",
          "Rotulación: Identificar claramente el contenido del recipiente.",
          "Contención: Utilizar recipientes resistentes y adecuados.",
          "Almacenamiento temporal: Ubicar en áreas designadas hasta su disposición final."
        ]}
      />
      <p>Nunca mezclar residuos incompatibles.</p>
      <h3>Equipos de Protección Personal (EPP)</h3>
      <p>El uso del EPP es obligatorio cuando se manipulan sustancias peligrosas.</p>
      <p>Puede incluir:</p>
      <ListPoint
        list={[
          "Guantes resistentes a químicos",
          "Gafas de seguridad",
          "Mascarilla o respirador",
          "Delantal o traje protector",
          "Botas de seguridad"
        ]}
      />
      <p>El EPP debe:</p>
      <ListPoint
        list={[
          "Estar en buen estado.",
          "Ser adecuado al tipo de sustancia.",
          "Utilizarse correctamente."
        ]}
      />
    </div>
  );
};

const M5s3 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Modulo 5: Manejo de sustancias químicas, sustancias y residuos peligrosos</h2>
      <h3>Errores comunes en el manejo</h3>
      <ImageForSection
        src="/img-cursos/84/84m5s3-1.jpeg"
      />
      <p>Algunos errores que deben evitarse:</p>
      <ListPoint
        list={[
          "Trasvasar productos a envases sin etiqueta.",
          "Mezclar residuos por desconocimiento.",
          "Ignorar pequeños derrames.",
          "No reportar envases dañados.",
          "Manipular sin capacitación."
        ]}
      />
      <p>La mayoría de los accidentes se deben a prácticas inseguras.</p>
      <h3>Responsabilidad del personal Nivel 1</h3>
      <p>El personal MATPEL Nivel 1 debe:</p>
      <ListPoint
        list={[
          "Reconocer riesgos.",
          "Seguir procedimientos establecidos.",
          "No realizar acciones fuera de su competencia.",
          "Informar inmediatamente cualquier situación peligrosa.",
          "Participar en capacitaciones periódicas."
        ]}
      />
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2>Video</h2>
      <h3>Manejo de sustancias químicas, sustancias y residuos peligrosos</h3>
      <p>En este video se aborda el manejo adecuado de sustancias químicas y residuos peligrosos.</p>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/YOuGbFjP1ns"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo2 = [M5s1, M5s2, M5s3, Video];

export default Modulo2;