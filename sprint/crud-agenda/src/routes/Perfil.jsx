import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../components/firebaseConfig';
import Logout from '../components/Logout';

import '../App.css';
import '../components/CSS/Perfil.css';

const Perfil = () => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            const uid = localStorage.getItem('userUid');
            if (!uid) {
                setError('Primeiro faça login.');
                return;
            }

            try {
                const docRef = doc(db, 'Cadastro', uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setUserData(docSnap.data());
                } else {
                    setError('Nenhum documento encontrado.');
                }
            } catch (error) {
                console.error('Erro ao buscar dados do usuário:', error);
                setError('Erro ao buscar dados do usuário.');
            }
        };

        fetchUserData();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    if (!userData) {
        return <div>Carregando...</div>;
    }

    return (
        <section className='section-Perfil'>
        <div className='div-perfil'>
            <h2>Perfil</h2>
            <p>Nome: {userData.name}</p>
            <p>Sobrenome: {userData.surname}</p>
            <p>Idade: {userData.age}</p>
            <p>País: {userData.pais}</p>
            <p>Email: {userData.email}</p>
            <p>CPF: {userData.cpf}</p>

        </div>
        <div className='Logout'>
            <Logout/>
            </div>
        </section>

        
    );
};

export default Perfil;











// // ReviewsList.js // ela vai exibir os dados inseridos
// import React, { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";

// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../components/firebaseConfig';
// import '../App.css';

// import logo from '../assets/logoSF.png'; 

// const Perfil = () => {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       const querySnapshot = await getDocs(collection(db, 'Cadastro'));
//       const reviewsList = querySnapshot.docs.map(doc => doc.data());
//       setReviews(reviewsList);
//     };

//     fetchReviews();
//   }, []);

//   return (
//     <div className='oo'>
//         <div>
//             <p><Link to="/">voltar</Link></p>
//             <img src={logo} alt="Logo" className=""/>
//         </div>
//       {reviews.map((review, index) => (
//         <div key={index} className='oo'>
//             <p>Nome: {review.name}</p>
//             <p>Sobrenome: {review.surname}</p>
//             <p>Idade: {review.age}</p>
//             <p>Pais: {review.pais}</p>
//             <p>Email: {review.email}</p>
//             <p>Senha: {review.password}</p>

//         </div>
//       ))}
//     </div>
//   );
// };

// export default Perfil;