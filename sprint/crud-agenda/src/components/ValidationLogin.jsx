import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../components/firebaseConfig';

const UserProfile = () => {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (currentUser) {
      const docRef = doc(db, 'users', currentUser.uid);
      
      getDoc(docRef).then((doc) => {
        if (doc.exists()) {
          setUserData(doc.data());
        } else {
          console.log('Nenhum documento encontrado!');
        }
      }).catch((error) => {
        console.error('Erro ao obter documento:', error);
      });
    }
  }, [currentUser]);

  return (
    <div>
      <h1>Informações do Usuário</h1>
      {userData && (
        <div>
          <p>Nome: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Exibir outras informações do usuário conforme necessário */}
        </div>
      )}
    </div>
  );
};

export default UserProfile;







// import React, { useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../components/firebaseConfig';
// import { useNavigate } from 'react-router-dom';
// import '../App.css';


// const ValidationLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
    

//     try {
//       const querySnapshot = await getDocs(collection(db, 'Cadastro'));
//       const users = querySnapshot.docs.map(doc => doc.data());
//       const user = users.find(user => user.email === email && user.password === password);
      
//       if (user) {
//         navigate('/');
//       } else {
//         setError('Email ou senha incorretos.');
//       }
//     } catch (error) {
//       console.error('Erro ao buscar usuários:', error);
//       setError('Erro ao tentar fazer login. Tente novamente mais tarde.');
//     }
//   };

//   return (
//     <div className='oo'>
//       <h2 className='oo'>Login</h2>
//       <form onSubmit={handleLogin} className='oo'>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Senha:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//         {error && <p className="error">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default ValidationLogin;