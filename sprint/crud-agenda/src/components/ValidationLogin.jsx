import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const ValidationLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        // Verifica se os campos de email e senha correspondentes são iguais
        if (email !== '' && password !== '') {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    });

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
            
            <form onSubmit={handleLogin} className='form-Login'>
                
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
                    <p>Senha:</p>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit" className='Logar' disabled={isButtonDisabled}>Login</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default ValidationLogin;