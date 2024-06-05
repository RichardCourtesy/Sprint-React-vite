import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import '../App.css';

import Estrelas from '../components/Estrelas';

const SubmitReview = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [remainingChars, setRemainingChars] = useState(250);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // // Validação dos campos obrigatórios
    // if (rating === 0 || !comment || !name || !email) {
    //   alert('Todos os campos são obrigatórios!');
    //   return;
    // }

    try {
      // Adicionando a avaliação ao Firestore
      await addDoc(collection(db, 'reviews'), {
        rating,
        comment,
        name,
        email,
        timestamp: new Date()
      });

      // Resetando os campos após o envio
      setRating(0);
      setComment('');
      setName('');
      setEmail('');
      setRemainingChars(250);
    } catch (error) {
      console.error('Erro ao enviar a avaliação: ', error);
    }
  };

  const handleCommentChange = (e) => {
    const value = e.target.value;
    setComment(value);
    setRemainingChars(250 - value.length);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container-form-enviar">
        <h2>Deixe sua Avaliação</h2>
        <label>
          <p>Nome:</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            // required
          />
        </label>
        <label>
          <p>Email:</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // required
          />
        </label>
        <label>
          <p>Avaliação: {rating} Estrelas</p>
          <Estrelas rating={rating} setRating={setRating} />
        </label>
        <label>
          <p>Comentário:</p>
          <textarea
            name="comentario"
            placeholder="Digite seu comentário..."
            maxLength={250}
            value={comment}
            onChange={handleCommentChange}
            className="comentario"
            // required
          />
          <p>{remainingChars} caracteres restantes</p>
        </label>
        <div className="caixa-enviar">
          <button type="submit" className="enviar">Enviar</button>
        </div>
      </div>
    </form>
  );
};

export default SubmitReview;
