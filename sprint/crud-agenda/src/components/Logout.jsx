import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../components/firebaseConfig';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await auth.signOut();
            localStorage.removeItem('userUid'); // Limpa o UID do usuário do localStorage
            navigate('/login'); // Redireciona para a página de login após o logout
        } catch (error) {
            console.error('Erro ao fazer logout:', error);
        }
    };

    return (
        <div>
            <button onClick={handleLogout} className='Sair'>Sair</button>
        </div>
    );
};

export default Logout;
