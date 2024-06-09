import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/firebaseConfig';
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
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Armazene o UID do usuário logado no localStorage
            localStorage.setItem('userUid', user.uid);

            // Redireciona para a página de perfil
            navigate('/Perfil');
        } catch (error) {
          console.error('Erro ao fazer login:', error);
          setError('Email ou senha incorretos.');
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