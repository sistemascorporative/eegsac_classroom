import { ImageForSection } from "../../../components/ui/Imagen";
import { ListPoint } from "../../../components/ui/List";


const M12s1 = () => {
  return (
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 12: EVALUANDO PELIGROS Y GESTIONANDO LOS RIESGOS EN LA CONDUCCIÓN</h2>
      <ImageForSection
        src="/img-cursos/1/1m12s1-1.jpeg"
      />
      <p>La mejor manera de lidear con los riesgos es eliminando los peligros o evitándolos con pasos básicos y fundamentales:</p>
      <h3>Mantén una distancia prudente al conducir</h3>
      <p>Uno de los pilares fundamentales para evitar accidentes en carretera es mantener una distancia adecuada con el vehículo que se encuentra delante. Según la velocidad a la que te desplaces, la distancia segura varía :</p>
      <ListPoint list={[
        "A 90 km/h : 50 metros.",
        "A 100 km/h : 55 metros.",
        "A 120 km/h : 66 metros.",
        "A 130 km/h : 72 metros."
      ]}/>
      <p>Esta distancia es crucial porque ofrece el tiempo necesario para reaccionar ante cualquier imprevisto en la vía.</p>
      <h3>Evita a toda costa el consumo de bebidas alcohólicas y estupefacientes</h3>
      <p>El alcohol y las drogas alteran las funciones psicomotoras y la percepción sensorial, lo que resulta en reflejos más lentos y una falsa sensación de seguridad. Conducir bajo los efectos de estas sustancias multiplica las posibilidades de sufrir un accidente de tránsito.</p>
      <h3>Protégete a ti y a quienes más quieres</h3>
      <p>Utilizar el cinturón de seguridad es fundamental para prevenir lesiones graves o incluso fatales en caso de colisión. Además, para los más pequeños, usar un sistema de retención infantil adecuado según su edad es indispensable. Como un apasionado de los vehículos, sé que estas medidas son simples pero increíblemente efectivas.</p>
      <h3>Deja a un lado los dispositivos móviles</h3>
      <p>El uso de dispositivos móviles mientras se conduce es una de las principales causas de distracción. Apartar la vista del camino, aunque sea por unos segundos, puede tener consecuencias devastadoras.</p>
      <p>Enviar mensajes de texto incrementa la posibilidad de accidente en un 400%.</p>
      <p>Hablar por teléfono, incluso con manos libres, reduce la atención al entorno vial.</p>
      <p>No excedas los limites de velocidad:</p>
      <p>Si estas en carretera considera mantener una velocidad prudente en el que puedas maniobrar el vehículo teniendo las 2 manos siempre en el volante.</p>
      <p>No excedas las horas de conducción si el viaje es largo debes descansar cada 4 horas de noche y 5 horas de dia.</p>
      <p>Antes de hablar sobre estos riesgos, es importante destacar que los operadores son una pieza clave en el desarrollo económico. Son ellos quienes transportan la mercancía que necesitamos, y mantienen en movimiento al país. Es por eso que debemos valorar y reconocer su trabajo.</p>
      <p>Sin embargo, también es cierto que hay ciertos hábitos de conducción que ponen en peligro la seguridad de todos en la carretera. Estos hábitos incluyen fumar, comer o beber mientras se conduce, usar el celular, conducir distraído y no usar el cinturón de seguridad. Pero conozcamos por qué estos hábitos de conducción afectan directamente la conducción segura de los operadores y ponen en riesgo su vida, y la de las personas que transitan por las mismas vías de comunicación.</p>
      <p className="font-bold">1. Fumar mientras se conduce:</p>
      <p>Mientras se conduce puede distraer al operador, lo que aumenta el riesgo de un accidente. Además, el humo del cigarrillo puede afectar la visibilidad dentro del vehículo de carga, lo que puede resultar peligroso en situaciones de poca luz o en condiciones climáticas adversas.</p>
      <p className="font-bold">2. Comer o beber mientras se conduce:</p>
      <p>Comer o beber mientras se conduce puede hacer que el operador pierda la atención en la carretera, lo que puede provocar accidentes. Además, derramar alimentos o bebidas puede distraer al operador, lo que puede provocar accidentes o desastres.</p>
      <p className="font-bold">3. Ver el celular:</p>
      <p>En estos días, la mayoría de las personas tiene un teléfono móvil, y es muy común que los operadores lo usen mientras conducen. Revisar correos electrónicos o enviar mensajes de texto, el uso del teléfono móvil mientras se conduce es un gran peligro. El operador distraído puede perder el control del vehículo en un instante, lo que aumenta el riesgo de accidentes.</p>
      <p className="font-bold">4. Conducir distraído:</p>
      <p>Hay muchos factores que pueden distraer a un operador mientras está en la carretera. Desde mirar hacia fuera del vehículo hasta ajustar la radio, cualquier cosa que distraiga al operador de la carretera aumenta el riesgo de accidentes. Es importante que estén conscientes de su entorno y mantengan su atención en la carretera en todo momento.</p>
      <p className="font-bold">5. Operador sin cinturón:</p>
      <p>Aunque parezca obvio, es importante mencionar que no usar el cinturón de seguridad mientras se conduce es una práctica peligrosa. El cinturón de seguridad es un dispositivo de seguridad fundamental que reduce significativamente el riesgo de lesiones graves o mortales en caso de accidentes.</p>
    </div>
  );
};

const Video = () => {
  return(
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 12: EVALUANDO PELIGROS Y GESTIONANDO LOS RIESGOS EN LA CONDUCCIÓN</h2>
      <h3>Video</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/PJJhG0J_azM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Video2 = () => {
  return(
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 12: EVALUANDO PELIGROS Y GESTIONANDO LOS RIESGOS EN LA CONDUCCIÓN</h2>
      <h3>Video: FACTORES DE RIESGO Y PREVENCIÓN DE ACCIDENTES</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/FWho3_OLXIA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Video3 = () => {
  return(
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 12: EVALUANDO PELIGROS Y GESTIONANDO LOS RIESGOS EN LA CONDUCCIÓN</h2>
      <h3>Video: ERRORES QUE CAUSAN ACCIDENTES</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/QHSY60WHsbc"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Video4 = () => {
  return(
    <div className="space-y-3">
      <h2 className="uppercase text-center text-secondary">MÓDULO 12: EVALUANDO PELIGROS Y GESTIONANDO LOS RIESGOS EN LA CONDUCCIÓN</h2>
      <h3>Video: PREVINIENDO RIESGOS Y EVITANDO ACCIDENTES</h3>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/GXFOVQJ1mUM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Modulo12 = [M12s1, Video, Video2, Video3, Video4];

export default Modulo12;