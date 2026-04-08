import { ListPoint, ListPointBold } from "../../../components/ui/List";
import { ImageForSection } from "../../../components/ui/Imagen";


const M2s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Modulo 2: Conociendo los residuos peligrosos</h2>
      <ImageForSection
        src="/img-cursos/84/84m2s1-1.jpeg"
      />
      <h3>¿Qué son los Residuos Peligrosos?</h3>
      <p>Un residuo peligroso es cualquier material desechado que, debido a sus propiedades físicas, químicas o biológicas, representa un riesgo significativo para:</p>
      <ListPoint
        list={[
          "La salud humana",
          "La seguridad pública",
          "La propiedad",
          "El medio ambiente"
        ]}
      />
      <p>A diferencia de los MATPEL en uso, los residuos peligrosos son materiales que ya no cumplen una función útil y deben ser gestionados adecuadamente.</p>
      <p>Ejemplos:</p>
      <ListPoint
        list={[
          "Aceites usados contaminados",
          "Baterías y pilas agotadas",
          "Envases contaminados con químicos",
          "Residuos hospitalarios",
          "Solventes industriales usados"
        ]}
      />
      <h3>Diferencia entre Material Peligroso y Residuo Peligroso</h3>
      <table>
        <thead>
          <tr>
            <th className="border p-2">Material Peligroso</th>
            <th className="border p-2">Residuo Peligroso</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Está en uso o transporte</td>
            <td className="border p-2">Ya fue utilizado o descartado</td>
          </tr>
          <tr>
            <td className="border p-2">Tiene una función productiva</td>
            <td className="border p-2">Es un desecho</td>
          </tr>
          <tr>
            <td className="border p-2">Puede convertirse en residuo</td>
            <td className="border p-2">Requiere gestión especial</td>
          </tr>
        </tbody>
      </table>
      <p>Un material peligroso puede convertirse en residuo peligroso cuando pierde su utilidad o se contamina.</p>
    </div>
  );
};

const M2s2 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Modulo 2: Conociendo los residuos peligrosos</h2>
      <h3>Características de Peligrosidad</h3>
      <ImageForSection
        src="/img-cursos/84/84m2s2-1.png"
      />
      <p>Los residuos peligrosos se identifican por presentar una o más de las siguientes características:</p>
      <ListPointBold
        list={[
          "Inflamabilidad: Se enciende fácilmente.",
          "Reactividad: Puede reaccionar violentamente o generar gases peligrosos.",
          "Toxicidad: Puede causar intoxicación o enfermedades graves.",
          "Corrosividad: Daña tejidos vivos y materiales.",
          "Infecciosidad: Contiene microorganismos que pueden causar enfermedades (ejemplo: residuos hospitalarios).",
        ]}
      />
      <h3>Clasificación de los Residuos Peligrosos</h3>
      <p>Los residuos peligrosos pueden clasificarse según su origen:</p>
      <ListPointBold
        list={[
          "Industriales: Provenientes de procesos productivos.",
          "Hospitalarios o Biocontaminados: Residuos médicos, sangre, material quirúrgico.",
          "Domésticos Peligrosos: Pilas, pinturas, insecticidas, medicamentos vencidos.",
          "Automotrices: Aceites usados, baterías, filtros contaminados.",
        ]}
      />
      <ImageForSection
        src="/img-cursos/84/84m2s2-2.jpeg"
      />
      <h3>Riesgos Asociados</h3>
      <p>El manejo inadecuado de residuos peligrosos puede provocar:</p>
      <ListPoint
        list={[
          "Contaminación del suelo y agua.",
          "Incendios y explosiones.",
          "Enfermedades respiratorias o dérmicas.",
          "Intoxicaciones.",
          "Daños irreversibles al ecosistema.",
        ]}
      />
      <p>Una mala disposición puede generar impactos a largo plazo en comunidades enteras.</p>
    </div>
  );
};

const M2s3 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Modulo 2: Conociendo los residuos peligrosos</h2>
      <h3>Manejo Básico de Residuos Peligrosos (Nivel 1)</h3>
      <ImageForSection
        src="/img-cursos/84/84m2s3-1.jpg"
      />
      <p>El personal de Nivel 1 debe:</p>
      <ListPoint
        list={[
          "Identificar correctamente el residuo.",
          "No mezclar residuos incompatibles.",
          "Utilizar recipientes adecuados y rotulados.",
          "Usar Equipos de Protección Personal (EPP).",
          "Informar a los responsables del área.",
          "No manipular sin autorización."
        ]}
      />
      <p>Nunca se deben desechar residuos peligrosos junto con basura común.</p>
      <h3>Principios de Gestión de Residuos Peligrosos</h3>
      <p>La gestión adecuada se basa en:</p>
      <ListPoint
        list={[
          "Minimización (reducir generación).",
          "Segregación (separar correctamente).",
          "Almacenamiento seguro.",
          "Transporte autorizado.",
          "Disposición final controlada.",
        ]}
      />
    </div>
  )
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2>Video</h2>
      <h3>Conociendo los residuos peligrosos</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/Yv1AecKGEkA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Modulo2 = [M2s1, M2s2, M2s3, Video];

export default Modulo2;