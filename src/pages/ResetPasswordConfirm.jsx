import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../api/auth.api';

import TopBar from '../components/TopBar';
import { InputFieldLabel } from '../components/ui/InputField';
import { Button } from '../components/ui/Buttons';


const ResetPasswordConfirm = ({ reset_password_confirm }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [message, setMessage] = useState(''); // Estado para almacenar mensajes de error

  const { uid, token } = useParams();

  const { /* Estado de los registros del formulario */
    register, 
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await reset_password_confirm(uid, token, data.new_password, data.re_new_password);
      setRequestSent(true);
    } catch (error) {
      setMessage(`${error}`);
    }
  };

  if (requestSent) {
    return <Navigate to='/' />
  }

  return (
    <div className="bg-[#f3f9fb] min-h-screen">
      <TopBar />
      {/* Formulario */}
      <section className="my-10">
        <form className="mx-auto flex flex-col gap-4 bg-white min-w-lg w-lg max-w-lg p-6 border border-gray-200 rounded-lg" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-center mb-4">Restablecer contraseña</h2>
          {/* Campo nueva contraseña */}
          <InputFieldLabel
            id="new_password"
            name="new_password"
            type="password"
            placeholder="Nueva contraseña"
            register={register}
            validation={{ required: true }}
            errors={errors}
          />
          {/* Campo confirmar nueva contraseña */}
          <InputFieldLabel
            id="re_new_password"
            name="re_new_password"
            type="password"
            placeholder="Confirmar nueva contraseña"
            register={register}
            validation={{ required: true }}
            errors={errors}
          />
          <div className="mt-4">
            <Button className={"font-bold"}>
              Restablecer contraseña
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);