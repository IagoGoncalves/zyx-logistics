import React, { useState, useEffect } from 'react';

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
    // Envia os dados para o onSubmit com o campo de data (se necessário)
    onSubmit({ descricao, status, dataRecebimento });
    setDescricao('');
    setStatus('');
    setDataRecebimento('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        required
      />
      {/* Campo de data só aparece se showDateField for true */}
      {showDateField && (
        <input
          type="date"
          value={dataRecebimento}
          onChange={(e) => setDataRecebimento(e.target.value)}
        />
      )}
      <input
        type="text"
        placeholder="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        required
      />
      <button type="submit">{buttonLabel}</button>
    </form>
  );
};

export default Form;
