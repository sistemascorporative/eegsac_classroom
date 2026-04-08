import { ImageWithInnerBorder } from "../../../components/ui/Imagen";


const Introduccion = () => {
  return (
    <section className="p-5 bg-white rounded-lg shadow-lg space-y-3">
      <h2 className="font-semibold mb-4 uppercase text-center"></h2>
      <div className="mx-auto my-5 max-w-[500px]">
        <ImageWithInnerBorder 
          src={"/img-cursos/10/10p.jpg"}
          alt={"curso "}
        />
      </div>
      <h2>Introducción</h2>
      <p></p>
    </section>
  );
};

export default Introduccion;