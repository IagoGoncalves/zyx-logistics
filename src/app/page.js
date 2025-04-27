import React from 'react';
import Link from 'next/link';
import './globals.scss';

const HomePage = () => {
  return (
    <div className='container'>
      <h1 className='pageTitle'>Bem-vindo ao Sistema ZYX Logistics</h1>
      <p className='pageDescription'>Gerencie o controle de cargas e expedição de forma mais eficiente.</p>
      <Link href="/control" className='btnDefault'>
        Ir para Controle de Cargas Recebidas
      </Link>
    </div>
  );
};

export default HomePage;
