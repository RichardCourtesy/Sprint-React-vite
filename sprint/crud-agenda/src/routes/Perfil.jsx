// ReviewsList.js // ela vai exibir os dados inseridos
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../components/firebaseConfig';
import '../App.css';

import logo from '../assets/logoSF.png'; 

const Perfil = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const querySnapshot = await getDocs(collection(db, 'Cadastro'));
      const reviewsList = querySnapshot.docs.map(doc => doc.data());
      setReviews(reviewsList);
    };

    fetchReviews();
  }, []);

  return (
    <div className='oo'>
        <div>
            <p><Link to="/">voltar</Link></p>
            <img src={logo} alt="Logo" className=""/>
        </div>
      {reviews.map((review, index) => (
        <div key={index} className='oo'>
            <p>Nome: {review.name}</p>
            <p>Sobrenome: {review.surname}</p>
            <p>Idade: {review.age}</p>
            <p>Pais: {review.pais}</p>
            <p>Email: {review.email}</p>
            <p>Senha: {review.password}</p>

        </div>
      ))}
    </div>
  );
};

export default Perfil;