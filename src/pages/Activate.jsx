import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../api/auth.api';
import TopBar from '../components/TopBar';
import { Button } from '../components/ui/Buttons';


const Activate = ({ verify, match }) => {
  const [verified, setVerified] = useState(false);

  const verify_account = e => {
    const uid = match.params.uid;
    const token = match.params.token;

    verify(uid, token);
    setVerified(true);
  };

  if (verified) {
    return <Navigate to='/' />
  }

  return (
    <div className="bg-[#f3f9fb] min-h-screen">
      <TopBar />
      { /* Formulario */}
      <section className="my-10">
        <div className="mx-auto bg-white min-w-lg w-lg max-w-lg p-6 border border-gray-200 rounded-lg">
          <h2 className="text-center">Verifica tu cuenta:</h2>
          <div className="mt-6">
            <Button onClick={verify_account} className={"font-bold"}>
              Verificar
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default connect(null, { verify })(Activate);