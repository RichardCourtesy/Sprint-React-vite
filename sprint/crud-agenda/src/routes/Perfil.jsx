// ReviewsList.js // ela vai exibir os dados inseridos
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../components/firebaseConfig';
import '../App.css';

const Perfil = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const querySnapshot = await getDocs(collection(db, 'reviews'));
      const reviewsList = querySnapshot.docs.map(doc => doc.data());
      setReviews(reviewsList);
    };

    fetchReviews();
  }, []);

  return (
    <div className='ler'>
      <h2 className='Comment-exibir'>Avaliações</h2>
      {reviews.map((review, index) => (
        <div key={index} className='form-ler'>
            <p>Nome: {review.name}</p>
            <p>Email: {review.email}</p>
          <p>Nota: {review.rating} estrelas</p>
          <p className='ler-comentario'>Comentário: {review.comment} </p>
        
          

        </div>
      ))}
    </div>
  );
};

export default Perfil;