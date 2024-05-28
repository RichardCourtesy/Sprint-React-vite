import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import "../App.css"

import Estrelas from '../components/Estrelas'

const SubmitReview = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [remainingChars, setRemainingChars] = useState(250);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0 || !comment || !name || !email) {
      alert("Todos os campos são obrigatórios!");
      return;
    }


    await addDoc(collection(db, 'reviews'), {
      rating: rating,
      comment: comment,
      name: name,
      email: email,
      timestamp: new Date()
    });

    setRating(0);
    setComment('');
    setName('');
    setEmail('');
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
            required
          />
        </label>
        <label>
          <p>Email:</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
            className='comentario'
          />
          <p>{remainingChars} caracteres restantes</p>
        </label>
        <div className='caixa-enviar'>
          <button type="submit" className='enviar'>Enviar</button>
        </div>
      </div>

    </form>
  );
};

export default SubmitReview;
