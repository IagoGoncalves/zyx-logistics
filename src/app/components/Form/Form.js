import React, { useState, useEffect } from 'react';
import './Form.scss';

const Form = ({ onSubmit, initialData = {}, buttonLabel, showDateField = false }) => {
  const [descricao, setDescricao] = useState(initialData.descricao || '');
  const [status, setStatus] = useState(initialData.status || '');
  const [dataRecebimento, setDataRecebimento] = useState(initialData.dataRecebimento || '');

  useEffect(() => {
    if (initialData) {
      setDescricao(initialData.descricao || '');
      setStatus(initialData.status || '');
      setDataRecebimento(initialData.dataRecebimento || '');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ descricao, status, dataRecebimento });
    setDescricao('');
    setStatus('');
    setDataRecebimento('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        required
      />
      {showDateField && (
        <input
          type="date"
          value={dataRecebimento}
          onChange={(e) => setDataRecebimento(e.target.value)}
          required
        />
      )}
      <input
        type="text"
        placeholder="Status da carga"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        required
      />
      <button type="submit" className='btnDefault'>{buttonLabel}</button>
    </form>
  );
};

export default Form;
