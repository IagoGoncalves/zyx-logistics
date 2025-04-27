import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Bem-vindo ao Sistema ZYX Logistics</h1>
      <p>Gerencie o controle de cargas e expedição de forma mais eficiente.</p>
      <Link href="/home">
        Ir para Controle de Cargas Recebidas
      </Link>
    </div>
  );
};

export default HomePage;
