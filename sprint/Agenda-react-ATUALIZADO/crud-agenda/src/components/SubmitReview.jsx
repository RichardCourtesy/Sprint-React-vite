// SubmitReview.js //ele envia os dados para o banco
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import "../App.css"

import Estrelas from '../components/Estrelas'

const SubmitReview = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [name, setName] =  useState('');
  const [email, setEmail] =  useState('');


  const handleSubmit = async (e) => {

    e.preventDefault();
    if (rating === 0 || !comment || !name || !email) {
      alert("Todos os campos são obrigatórios!");
      return;
    }   //torna obrigatório enviar todos os campos

    e.preventDefault();
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

  return (
    <form onSubmit={handleSubmit}>
      <h2>Deixe sua Avaliação</h2>
        <label>
            Nome:
            <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required
            />
        </label>
        <br />
        <label>
            Email:
            <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
            />
        </label>
        <br />
        <label>
            <p>Avaliação: {rating} Estrelas</p>
            <Estrelas rating={rating} setRating={setRating} />     
        </label>


      <br />
      <label>
        Comentário:
        <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)} 
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default SubmitReview;

