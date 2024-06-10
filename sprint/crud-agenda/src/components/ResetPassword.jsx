// ResetPassword.js
import React, { useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../components/firebaseConfig';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleResetPassword = async (e) => {
        e.preventDefault();

        try {
            // Verificar se o email e o CPF estão no banco de dados
            const userDoc = await getDoc(doc(db, 'Cadastro', email));
            const userData = userDoc.data();
            if (userData && userData.cpf === cpf) {
                // Implementar a lógica para redefinir a senha
                // Isso pode envolver o envio de um email com um link para redefinição de senha
                // Ou fornecer um novo campo para inserir a nova senha
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
        <div className='oo'>
            <h2 className='oo'>Redefinir Senha</h2>
            <form onSubmit={handleResetPassword} className='oo'>
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
                    <label>CPF:</label>
                    <input
                        type="text"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Redefinir Senha</button>
                {error && <p className="error">{error}</p>}
                {successMessage && <p className="success">{successMessage}</p>}
            </form>
        </div>
    );
};

export default ResetPassword;