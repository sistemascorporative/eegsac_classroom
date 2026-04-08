import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { reset_password } from '../api/auth.api';
import TopBar from '../components/TopBar';
import { InputFieldLabel } from '../components/ui/InputField';
import { Button } from '../components/ui/Buttons';



const ResetPassword = ({ reset_password }) => {
  const [message, setMessage] = useState('');
  /* Estado de los registros del formulario */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await reset_password(data.email);
    } catch (error) {
      setMessage(`${error}`);
    }
  };

  return (
    <div className="bg-[#f3f9fb] min-h-screen">
      <TopBar />
      {/* Formulario */}
      <section className="my-10">
        <form className="mx-auto bg-white min-w-lg w-lg max-w-lg p-6 border border-gray-200 rounded-lg" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-center mb-4">Restablecer contraseña</h2>
          {/* Campo Correo */}
          <InputFieldLabel
            id="email"
            name="email"
            type="email"
            placeholder="Correo"
            register={register}
            validation={{ required: true }}
            errors={errors}
          />
          <div className="mt-6">
            <Button className={"font-bold"}>
              Restablecer contraseña
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default connect(null, { reset_password })(ResetPassword);