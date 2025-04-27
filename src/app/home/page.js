"use client"; // Ativa o cliente para poder usar hooks no Next.js 13

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../components/Form';

const Home = () => {
  const [cargas, setCargas] = useState([]);
  const [descricao, setDescricao] = useState('');
  const [dataRecebimento, setDataRecebimento] = useState('');
  const [status, setStatus] = useState('');
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    const fetchCargas = async () => {
      const response = await axios.get('http://localhost:5000/cargas');
      setCargas(response.data);
    };
    fetchCargas();
  }, []);

  const addCarga = async (data) => {
    const newCarga = {
      descricao: data.descricao,
      dataRecebimento: data.dataRecebimento,
      status: data.status,
    };

    const response = await axios.post('http://localhost:5000/cargas', newCarga);
    setCargas([...cargas, response.data]);
    setDescricao('');
    setDataRecebimento('');
    setStatus('');
  };

  const updateCarga = async (data) => {
    const updatedCarga = {
      descricao: data.descricao,
      dataRecebimento: data.dataRecebimento,
      status: data.status,
    };

    const response = await axios.put(`http://localhost:5000/cargas/${editing}`, updatedCarga);
    setCargas(cargas.map(carga => carga.id === editing ? response.data : carga));
    setDescricao('');
    setDataRecebimento('');
    setStatus('');
    setEditing(null);
  };

  const deleteCarga = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/cargas/${id}`);
      if (response.status === 200) {
        setCargas(cargas.filter(carga => carga.id !== id));
      }
    } catch (error) {
      console.error('Erro ao excluir carga:', error);
    }
  };
  

  const startEditing = (carga) => {
    setDescricao(carga.descricao);
    setDataRecebimento(carga.dataRecebimento);
    setStatus(carga.status);
    setEditing(carga.id);
  };

  return (
    <div>
      <h1>Controle de Cargas Recebidas</h1>
      <Form
        onSubmit={editing ? updateCarga : addCarga}
        initialData={editing ? cargas.find(carga => carga.id === editing) : {}}
        buttonLabel={editing ? 'Atualizar Carga' : 'Adicionar Carga'}
        showDateField={true} // Exibe o campo de data na Home
      />

      <h2>Cargas Recebidas</h2>
      <ul>
        {cargas.map((carga) => (
          <li key={carga.id}>
            {carga.descricao} - {carga.dataRecebimento} - {carga.status}
            <button onClick={() => startEditing(carga)}>Editar</button>
            <button onClick={() => deleteCarga(carga.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
