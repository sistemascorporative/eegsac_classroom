import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { login } from '../api/auth.api';
import TopBar from '../components/TopBar';
import { TfiEmail } from "react-icons/tfi";
import { PiLockKeyLight } from "react-icons/pi";


function Login({ login, isAuthenticated }) {
  const navigate = useNavigate();
  const [message, setMessage] = useState(''); // Estado para almacenar mensajes de error

  const { /* Estado de los registros del formulario */
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setMessage('');
    try {
      await login(data.email, data.password);
    } catch (error) {
      setMessage(`${error}`);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/aula/dashboard');
    }
  }, [isAuthenticated, navigate]);
  
  return (
    <div className="flex flex-col h-screen justify-between bg-grisFondo">
      <TopBar />
      { /* Formulario - imagen */}
      <section className="h-full my-auto flex flex-col md:flex-row justify-center items-center mt-5 sm:mt-10 gap-10">
        {/* Formulario */}
        <div className="mx-auto sm:mx-0 py-10 px-5 flex flex-col justify-center">
          <div className="relative py-3 sm:max-w-2xl sm:mx-auto">
            <div
              className="absolute inset-0 bg-gradient-to-r from-primary to-orange-300 shadow-lg transform -skew-y-6 sm:skew-y-0 -rotate-6 rounded-2xl">
            </div>
            <div className="relative sm:min-w-[350px] px-5 py-10 sm:p-10 bg-white shadow-lg rounded-2xl">
              <div className="flex flex-col gap-5">
                <h2 className="text-primary text-center text-2xl font-bold tracking-tight">
                  Expert Engineers Group SAC
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

                  {/* Campo Correo */}
                  <div>
                    <label htmlFor="email" className="block text-[16px] text-gray-500">
                      Correo :
                    </label>
                    <div className="flex items-center mt-2">
                      <TfiEmail className="absolute ml-3 text-primary w-5 h-5"/>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder='Correo'
                        className="w-full rounded-md border border-[#e0e0e0] bg-white pl-12 py-3 pr-4 text-gray-400 text-sm outline-none focus:border-azulMedio focus:shadow-md"
                        {...register('email', { required: true,})}
                      />
                    </div>
                    {errors.email?.type === 'required' && 
                      <p className="mt-2 text-xs text-red-500">*El campo correo es requerido</p>
                    }
                  </div>

                  {/* Campo contraseña */}
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-[16px] text-gray-500">
                        Contraseña :
                      </label>
                    </div>
                    <div className="flex items-center mt-2">
                      <PiLockKeyLight className="absolute ml-3 text-primary w-5 h-5"/>
                      <input
                        id="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder='Contraseña'
                        className="w-full rounded-md border border-[#e0e0e0] bg-white pl-12 py-3 pr-4 text-gray-400 text-sm outline-none focus:border-azulMedio focus:shadow-md"
                        {...register('password', { required: true,})}
                      />
                    </div>
                    {errors.password?.type === 'required' &&
                      <p className="mt-2 text-xs text-red-500">*El campo contraseña es requerido</p>
                    }
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Iniciar sesión
                    </button>
                  </div>
                </form>
              </div>
              {message && (
                <p className="my-3 text-[13px] text-red-400">{message}</p>
              )}
              {/*<p className='mt-3 text-[13px] text-center text-gray-600 hover:text-sky-600 hover:underline'>
                <Link to='/reset-password'>¿Has olvidado tu contraseña?</Link>
              </p>*/}
            </div>
          </div>
        </div>
        {/* Imagen */}
        <div className='items-center flex'>
          <span className='hidden sm:block'>
            <img className='item-center max-w-[300px]' src="/logo/logoEegsac.png" alt="eegsac"/>
          </span>
        </div>
      </section>
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);