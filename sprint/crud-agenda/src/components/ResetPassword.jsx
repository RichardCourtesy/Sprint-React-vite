import React, { useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { sendPasswordResetEmail } from 'firebase/auth';
import { db, auth } from '../components/firebaseConfig';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

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
