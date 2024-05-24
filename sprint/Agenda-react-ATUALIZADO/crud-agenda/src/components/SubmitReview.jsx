// SubmitReview.js //ele envia os dados para o banco
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

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
        Nota:
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
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

