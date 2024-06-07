import React, { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../components/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import '../App.css';


const ValidationLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    

    try {
      const querySnapshot = await getDocs(collection(db, 'Cadastro'));
      const users = querySnapshot.docs.map(doc => doc.data());
      const user = users.find(user => user.email === email && user.password === password);
      
      if (user) {
        navigate('/');
      } else {
        setError('Email ou senha incorretos.');
      }
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      setError('Erro ao tentar fazer login. Tente novamente mais tarde.');
    }
  };

  return (
    <div className='oo'>
      <h2 className='oo'>Login</h2>
      <form onSubmit={handleLogin} className='oo'>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default ValidationLogin;