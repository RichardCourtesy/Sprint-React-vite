import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { collection, query, where, getDocs } from 'firebase/firestore';
import { sendPasswordResetEmail } from 'firebase/auth';
import { db, auth } from '../components/firebaseConfig';

import '../App.css'
import './CSS/ResetPassword.css'

import logo from '../assets/logoSF.png';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        // Verifica se os campos de email e senha correspondentes são iguais
        if (email !== '' && cpf !== '') {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    });

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        try {
            // Procurar o documento onde o campo email é igual ao fornecido
            const q = query(collection(db, 'Cadastro'), where('email', '==', email));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                setError('Email ou CPF incorretos.');
                return;
            }

            const userDoc = querySnapshot.docs[0];
            const userData = userDoc.data();

            if (userData.cpf === cpf) {
                // Enviar o email de redefinição de senha
                await sendPasswordResetEmail(auth, email);
                setSuccessMessage('Um link para redefinição de senha foi enviado para o seu email.');
            } else {
                setError('Email ou CPF incorretos.');
            }
        } catch (error) {
            console.error('Erro ao redefinir senha:', error);
            setError('Ocorreu um erro ao redefinir a senha. Tente novamente.');
        }
    };

    return (
        <section className='section-Resetpass'>
            
            <div className="logo-titulo-ResetPass">
            <h2 className='oo'>Redefinir Senha</h2>
            
            <img src={logo} alt="Logo" className="logo-Login"/>
        </div>
            <form onSubmit={handleResetPassword} className='form-Resetpass'>
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
                <p>CPF:</p>
                    <input
                        type="text"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        required
                    />
                </label>
                {error && <p className="error">{error}</p>}
                {successMessage && <p className="success">{successMessage}</p>}
                <button type="submit" className='ResetPass' disabled={isButtonDisabled}>Redefinir Senha</button>
                
                
            </form>

            <div className="Reset-entrar">
        <p>Já possui conta? <Link to="/Login" className='hovercu'>Entrar</Link></p> 
            </div>
                <div className="Reset-IRcadastro">
                <p>Não possui conta? <Link to="/Cadastro" className='hovercu'>Cadastre-se</Link> </p> 
            </div>

        </section>
    );
};

export default ResetPassword;
