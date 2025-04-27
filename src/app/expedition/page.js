"use client"; // Ativa o cliente para poder usar hooks no Next.js 13

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../components/Form';  // Importando o componente de Formulário
import { jsPDF } from 'jspdf';

const Expedition = () => {
  const [checklist, setChecklist] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    const fetchChecklist = async () => {
      const res = await axios.get('http://localhost:5000/checklist');
      setChecklist(res.data);
    };
    fetchChecklist();
  }, []);

  const addItem = async (data) => {
    const response = await axios.post('http://localhost:5000/checklist', data);
    setChecklist([...checklist, response.data]);
  };

  const updateItem = async (data) => {
    const response = await axios.put(`http://localhost:5000/checklist/${editing}`, data);
    setChecklist(checklist.map(item => item.id === editing ? response.data : item));
    setEditing(null);
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:5000/checklist/${id}`);
    setChecklist(checklist.filter(item => item.id !== id));
  };

  const startEditing = (item) => {
    setEditing(item.id);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Checklist de Expedição', 10, 10);
    checklist.forEach((item, index) => {
      doc.text(`${item.descricao} - ${item.status}`, 10, 20 + (index * 10));
    });
    doc.save('checklist_expedição.pdf');
  };

  return (
    <div>
      <h1>Checklist de Expedição</h1>

      {/* Usando o Form para adicionar ou editar um item do checklist */}
      <Form
        onSubmit={editing ? updateItem : addItem}
        initialData={editing ? checklist.find(item => item.id === editing) : {}}
        buttonLabel={editing ? 'Atualizar Item' : 'Adicionar Item'}
      />

      <h2>Itens do Checklist</h2>
      <ul>
        {checklist.map((item) => (
          <li key={item.id}>
            {item.descricao} - {item.status}
            <button onClick={() => startEditing(item)}>Editar</button>
            <button onClick={() => deleteItem(item.id)}>Excluir</button>
          </li>
        ))}
      </ul>

      {/* Botão para gerar o PDF */}
      <button onClick={generatePDF}>Gerar PDF</button>
    </div>
  );
};

export default Expedition;
