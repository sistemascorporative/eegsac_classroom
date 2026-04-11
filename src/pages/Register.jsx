import React, {useState} from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { signup } from '../api/auth.api';
import TopBar from '../components/TopBar';
import { InputField } from '../components/ui/InputField';
import { Button } from '../components/ui/Buttons';



const Register = ({ signup, isAuthenticated }) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [errorsBackend, setErrorsBackend] = useState({});
  
  /* Estado de los registros del formulario */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.password !== data.re_password) {
      setErrorMessage("Las contraseñas no coinciden");
      return;
    }
    
    setErrorMessage("");
    setErrorsBackend({});
    
    const result = await signup(
      data.email,
      data.nombres,
      data.apellidos,
      data.docId,
      data.pais,
      data.ciudad,
      data.direccion,
      data.password,
      data.re_password
    );
    
    if (result.success) {
      toast.success("Registrado correctamente");
      navigate('/login');
    } else {
      setErrorMessage("Error al registrar usuario");
      if (result.errors) {
        setErrorsBackend(result.errors);
      }
    }
  };
  if (isAuthenticated) {
    return <Navigate to='aula/dashboard/' />
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#f3f9fb]">
      <TopBar />
      {/* Formulario */}
      <section className="my-10">
        <form className="mx-auto bg-white min-w-lg w-lg max-w-lg p-6 border border-gray-200 rounded-lg" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-center mb-4 uppercase">Crear cuenta</h2>
          {errorMessage && <p className="text-[14px] bg-red-100 p-3 rounded-lg text-red-600 text-center mb-5">{errorMessage}</p>}
          {/* Campo Correo */}
          <InputField
            id="email"
            name="email"
            type="email"
            placeholder="Correo"
            register={register}
            validation={{ required: true }}
            errors={errors}
          />
          {errorsBackend.email && <p className="text-[12px] text-red-500">*{errorsBackend.email}</p>}
          {/* Campo Nombres */}
          <InputField
            id="nombres"
            name="nombres"
            type="text"
            placeholder="Nombres"
            register={register}
            validation={{ required: true }}
            errors={errors}
          />
          {/* Campo Apellidos */}
          <InputField
            id="apellidos"
            name="apellidos"
            type="text"
            placeholder="Apellidos"
            register={register}
            validation={{ required: true }}
            errors={errors}
          />
          {/* Campo docuemnto de identidad */}
          <InputField
            id="docId"
            name="docId"
            type="text"
            placeholder="Documento de identidad"
            register={register}
            validation={{ required: true }}
            errors={errors}
          />
          {errorsBackend.userdocide && <p className="text-[12px] text-red-500">*{errorsBackend.userdocide}</p>}
          {/* Campo Pais */}
          <InputField
            id="pais"
            name="pais"
            type="text"
            placeholder="Pais"
            register={register}
            validation={{ required: false }}
            errors={errors}
          />
          {/* Campo Ciudad */}
          <InputField
            id="ciudad"
            name="ciudad"
            type="text"
            placeholder="Ciudad"
            register={register}
            validation={{ required: false }}
            errors={errors}
          />
          {/* Campo Direccion */}
          <InputField
            id="direccion"
            name="direccion"
            type="text"
            placeholder="Direccion"
            register={register}
            validation={{ required: false }}
            errors={errors}
          />
          {/* Campo Contraseña */}
          <InputField
            id="password"
            name="password"
            type="password"
            placeholder="Contraseña"
            register={register}
            validation={{ required: true }}
            errors={errors}
          />
          {/* Campo Contraseña */}
          <InputField
            id="re_password"
            name="re_password"
            type="password"
            placeholder="Confirmar Contraseña"
            register={register}
            validation={{ required: true }}
            errors={errors}
          />
          <Button className={"mt-6 font-bold"}>
            Crear cuenta
          </Button>
          <p className="mt-3 text-[14px] text-center text-gray-600">
            ¿Ya tienes una cuenta? <Link to='/login' className="text-sky-600 hover:text-sky-700 hover:underline">Iniciar sesión</Link>
          </p>
        </form>
      </section>
    </div>
  );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Register);