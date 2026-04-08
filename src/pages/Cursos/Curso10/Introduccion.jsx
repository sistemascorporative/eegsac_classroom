import { ImageWithInnerBorder } from "../../../components/ui/Imagen";


const Introduccion = () => {
  return (
    <section className="p-5 bg-white rounded-lg shadow-lg space-y-3">
      <h2 className="font-semibold mb-4 uppercase text-center">GESTIÓN DEL MANTENIMIENTO PREVENTIVO DE MÁQUINAS CATERPILLAR</h2>
      <div className="mx-auto my-5 max-w-[500px]">
        <ImageWithInnerBorder 
          src={"/img-cursos/10/10m1s46.png"}
          alt={"curso "}
        />
      </div>
      <h2>Introducción</h2>
      <p>Desde el inicio de la revolución industrial de las maquinas en el siglo XVlll, cuando existían las maquinas a vapor, estas trabajaban hasta que se dañaran o fallaran entonces se realizaba unmantenimiento correctivo, este se empleaba cuando la maquina fallaba lo que causaba altoscostos de mantenimiento por el largo tiempo de parada de la maquina hasta solucionar el problema.</p>
      <p>Durante el siglo XIX ya las maquinas no eran solo a vapor, fueron evolucionando y volviéndose mas complejas y eficientes, las empresas decidieron asignar a un personal para observar la máquina, esta persona estaba preocupada por conservar la máquina, lo que pasaba es que esta persona sabía que componentes hacían falta cambiar en un determinado lapso de tiempo, por ejemplo cuanto tiempo debería ser cambiada la correa del motor, pero esta estrategia no era eficiente ya que se hacían los cambias en un determinado tiempo, lo que todavía causaba altos costos de mantenimiento.</p>
      <p>En la década del 50 al 60 los ingenieros a cargo de los equipos tomaron decisiones más drásticas,se decidió por emitir manuales que debían seguirse al pie de la letra para poder conservar elequipo, esto es lo que se conoce ahora como mantenimiento preventivo, esto mejoro de manera positiva la vida útil de las maquinas pero todavía no era del todo eficiente, fue a través de muchosestudios que se ha logrado realizar un mantenimiento preventivo de manera eficiente logrando trabajar de manera segura, productiva y de calidad, asegurando alargar la vida útil de una maquina y trabajar sin dañar nuestro ambiente.</p>
    </section>
  );
};

export default Introduccion;