import { ListNumbered, ListPoint, ListPointBold } from "../../../components/ui/List";
import { ImageForSection, ImageTextForSection } from "../../../components/ui/Imagen";


const M5s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Módulo 5: Lesiones Traumatológicas</h2>
      <ImageForSection
        src="/img-cursos/53/53m5s1-1.jpg"
      />
      <p>El cuerpo humano está construido sobre un armazón constituido por 206 huesos y los tejidos conjuntivos que los mantienen unidos llamado esqueleto. Esta estructura sostiene los músculos, vasos sanguíneos y nervios.</p>
      <p>Los huesos pueden ser largos, cortos o planos y crecen constantemente desde el nacimiento hasta el inicio de la edad adulta. Están conectados entre sí mediante articulaciones, sujetas por los ligamentos.Se mueven mediante los músculos, unidos a los huesos a través de los tendones.</p>
      <p>La funciones de todo este sistema esquelético son las siguientes:</p>
      <p><span className="font-bold">Sostén mecánico</span> del cuerpo y de todas sus partes blandas. Funciona como un armazón que mantiene la morfología postural.</p>
      <p><span className="font-bold">Mantenimiento postural.</span> Ayuda a mantener posturas como la bipedestación.</p>
      <p><span className="font-bold">Soporte dinámico.</span> Colabora en la marcha, locomoción y movimientos corporales, funcionando como palancas y anclajes para los músculos.</p>
      <p><span className="font-bold">Contención y protección de las vísceras,</span> ante cualquier presión o traumatismo del exterior, como por ejemplo las costillas al albergar los pulmones, órganos que son frágiles porque precisan de un espacio para ensancharse.</p>
      <p><span className="font-bold">Almacén metabólico,</span> funcionando como modulador de la concentración e intercambio de sales de calcio y fosfatos.</p>
      <h3>Transmisión de vibraciones</h3>
      <p><span className="font-bold">Formación de células sanguíneas.</span> En la corteza esponjosa de algunos huesos se localiza la médula ósea, donde se lleva a cabo la hematopoyesis o formación y diferenciación de las células sanguíneas.</p>
      <p>El esqueleto humano representa el 12% del peso total de todo el cuerpo.</p>
    </div>
  );
};

const M5s2 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Módulo 5: Lesiones Traumatológicas</h2>
      <ImageForSection
        src="/img-cursos/53/53m5s2.jpg"
      />
      <p>La Columna vertebral es un órgano situado en la parte media y posterior del tronco y va desde la cabeza, pasando por el cuello y la espalda, hasta la pelvis a la cual le da soporte. Está formada por 33 huesos llamados vértebras, conectadas entre sí por articulaciones. Estas vértebras están localizadas en 5 regiones diferentes:</p>
      <p><span className="font-bold">Región cervical</span>  7 vértebras, C1-C7</p>
      <p><span className="font-bold">Región dorsal</span>  12 vértebras, D1-D12, también denominadas T1-T12</p>
      <p><span className="font-bold">Región lumbar</span>  5 vértebras, L1-L5</p>
      <p><span className="font-bold">Región sacra</span>  5 vértebras, S1-S5</p>
      <p><span className="font-bold">Región coxigea</span>  4 vértebras, inconstantes</p>
      <p>Entre una vertebra y otra hay un disco de tejido cartilaginoso, el disco intervertebral, que favorece la flexibilidad de la columna y amortigua las sacudidas. Una serie de músculos y ligamentos adosados a las nervio vértebras estabilizan la columna y controlan el movimiento de la espalda.</p>
      <p>La columna vertebral cumple múltiples funciones:</p>
      <ListPoint list={[
        "Sostiene la cabeza",
        "Aporta flexibilidad al tronco",
        "Ayuda a soportar el peso del cuerpo",
        "Protege a la médula espinal"
      ]}/>
      <p>El cráneo es la estructura ósea que protege al cerebro y la parte superior de la columna. Está formado por la articulación de 8 huesos, 4 impares y dos pares:</p>
      <ListPoint list={[
        "Frontal",
        "Parietal",
        "Temporal",
        "Occipital",
        "Esfenoides",
        "Etmoides",
        "Huesos wormianos (variable)"
      ]}/>
    </div>
  );
};

const M5s3 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">Módulo 5: Lesiones Traumatológicas</h2>
      <ImageForSection
        src="/img-cursos/53/53m5s3-1.jpg"
      />
      <h3>Tipos de lesiones traumatológicas</h3>
      <ListPoint list={[
      ]}/>
      Existen varios tipos de lesiones traumatológicas:
      <ListPoint list={[
        "Esguince",
        "Luxación",
        "Fractura"
      ]}/>
      <p>El esguince es la separación momentánea de las superficies articulares, generalmente después de realizar un movimiento forzado, que suele producir un estiramiento muscular y, a veces, su ruptura.</p>
      <p>Puede suceder que el esguince arranque un trozo de hueso. Esto solamente se puede detectar a través de una radiografia, por lo que siempre habrá que llevar a la persona afectada a un centro sanitario.</p>
      <p>Los sintomas que presenta la persona son los siguientes:</p>
      <ListPoint list={[
        "Dolor intenso localizado en el punto de la lesión.",
        "Inflamación de la zona.",
        "Dificultad, más o menos manifiesta, para seguir moviendo la articulación.",
        "La lesión suele ir acompañada de hemorragia en los tejidos circundantes, lo cual produce un hematoma en la zona."
      ]}/>
      <p>El modo de actuación que adoptaremos será el siguiente:</p>
      <ListNumbered list={[
        "Aplicar frío local mediante hielo o una compresa fría.",
        "Compresión sobre la lesión.",
        "Reposo de la zona lesionada, mediante la inmovilización de la articulación si disponemos de vendas y tenemos conocimientos para ello.",
        "Elevación de la extremidad afectada.",
        "Acudir a un centro hospitalario."
      ]}/>
      <p>La luxación es la separación mantenida de las superficies articulares, por la cual la articulación queda totalmente desmontada. Las principales causas son las caidas o los impactos fuertes contra la articulación.</p>
      <p>Los sintomas de una luxación son los siguientes:</p>
      <ListPoint list={[
        "Dolor intenso como consecuencia de la ruptura o tensión que padecen los ligamentos y las fibras musculares.",
        "Inflamación de la zona.",
        "Deformidad de la articulación afectada.",
        "Impotencia funcional total de la articulación porque ha perdido por completo su función."
      ]}/>
      <h3>Modo de actuación ante una luxación:</h3>
      <ListNumbered list={[
        "Aplicar frío local.",
        "Inmovilizar la extremidad afectada (por ej. con un pañuelo grande en cado de una extremidad superior).",
        "No reducir nunca la luxación, intentando poner los huesos en su sitio. Podriamos dañar los nervios y vasos sanguíneos situados justo al lado de la articulación afectada.",
        "Trasladar urgentemente a un centro sanitario."
      ]}/>
      <p>Una fractura es una ruptura o fisura en un hueso. La mayoría de fracturas están causadas por traumatismos, contracturas musculares bruscas o distensión de los ligamentos.</p>
      <p>Existen dos tipos de fracturas según si la superficie de la piel que está alrededor del hueso afectado está afectada o no:</p>
      <ListPointBold list={[
        "Fractura abierta: uno de los extremos del hueso roto puede perforar la superficie de la piel o puede haber una herida en el lugar de la fractura. Esta situación puede provocar un alto riesgo de infección por la introducción de gérmenes en el lugar de la fractura.",
        "Fractura cerrada: la piel sobre la fractura está intacta y no existe herida."
      ]}/>
      <p>Los sintomas que manifiesta una persona que ha sufrido una fractura son los siguientes:</p>
      <ListPoint list={[
        "Dolor intenso en la zona de fractura que aumenta con el movimiento.",
        "Inflamación en el punto de fractura y que aumenta a medida que está pasando el tiempo.",
        "Impotencia funcional (imposibilidad de realizar movimiento).",
        "Crepitación del punto de fractura. En el roce de los fragmentos de hueso afectados se produce un ruido caracteristico.",
        "Deformidad de la extremidad afectada."
      ]}/>
      <h3>Modo de actuación</h3>
      <ListNumbered list={[
        "Tranquilizar a la persona afectada y explicarle lo que realizaremos.",
        "Aplicar frío local en la zona afectada.",
        "Evitar movimientos innecesarios de la zona afectada porque podríamos agravar la lesión.",
        "Retirar objetos personales como anillos, relojes, porque debido a la inflamación se podrían comprimir vasos sanguíneos y dificultar la circulación.",
        "Inmovilizar la extremidad donde se sitúe la fractura.",
        "Si la fractura es abierta, antes de inmovilizar debemos cubrir la fractura con gasas estériles y humedecidas. Nunca hay que reintroducir el hueso para evitar posibles infecciones.",
        "Trasladar a la persona a un centro hospitalario para recibir atención especializada."
      ]}/>
      <h3>Traumatismos de la columna vertebral</h3>
      <p>Las lesiones o fracturas de la columna pueden aquejar a una o más partes de la espalda y/o cuello afectando a las vértebras, los discos intervertebrales, los músculos y ligamentos que las rodean o la médula espinal y los nervios que se ramifican desde ella.</p>
      <p>Las fracturas de la columna vertebral son delicadas y requieren un especial cuidado porque el principal problema reside en la lesión medular. La médula o las raíces nerviosas pueden ser dañadas temporalmente al ser pellizcadas por los discos desplazados o por fragmentos de hueso roto. Si la médula se rompe parcial o totalmente el daño puede ser permanente.</p>
      <p>Las causas más frecuentes son las siguientes:</p>
      <ListPoint list={[
        "Caídas sobre pies o nalgas.",
        "Golpes directos sobre la columna y/o cabeza.",
        "Movimientos violentos o forzados.",
        "Aplastamiento en aglomeraciones de personas.",
        "Frenazo súbito de un vehículo de motor.",
        "Lesión en la cabeza o en la cara."
      ]}/>
      <p>Los sintomas que presenta la persona pueden ser:</p>
      <ListPoint list={[
        "Dolor de cuello o espalda; que puede ser enmascarado por otra lesión más dolorosa. Deformidad o irregularidad en la curva normal de la columna.",
        "Piel sensible sobre la columna.",
        "Rigidez muscular."
      ]}/>
      <p>Si la médula está dañada:</p>
      <ListPoint list={[
        "Pérdida de control sobre los miembros. Puede debilitarse o perderse el movimiento de las extremidades.",
        "Pérdida o anomalía en la sensibilidad, como ardor u hormigueo. La persona puede sentir las extremidades rígidas, pesadas o torpes.",
        "Pérdida del control de los esfinteres.",
        "Dificultades respiratorias."
      ]}/>
      <h4>Modo de actuación</h4>
      <ListNumbered list={[
        "Inmovilización rigurosa del paciente En caso necesario Inmovilización rigurosa del paciente. En caso necesario, mantener en bloque el eje cabeza-cuello-tronco (esta maniobra requiere muchísima experiencia y debe realizarse en varias personas).",
        "Trasladar a la persona sobre una superficie rigida y plana urgentemente a un centro hospitalario. 3. Controlar las constantes vitales en todo momento. Si deja de respirar, iniciar las maniobras de RCP."
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

const Modulo5 = [M5s1, M5s2, M5s3, Video];

export default Modulo5;