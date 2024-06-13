import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { confirmPasswordReset, verifyPasswordResetCode } from 'firebase/auth';
import { auth } from '../components/firebaseConfig';

import logo from '../assets/logoSF.png';

const ActionHandler = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const mode = queryParams.get('mode');
    const oobCode = queryParams.get('oobCode');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [actionMode, setActionMode] = useState(null);
    const [email, setEmail] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        if (mode && oobCode) {
            setActionMode(mode);
            if (mode === 'resetPassword') {
                handleVerifyPasswordResetCode(oobCode);
            }
        }
    }, [mode, oobCode]);

    const handleVerifyPasswordResetCode = async (code) => {
        try {
            const email = await verifyPasswordResetCode(auth, code);
            setEmail(email);
        } catch (error) {
            console.error('Erro ao verificar o código de redefinição de senha:', error);
            setError('Código de ação inválido ou expirado. Por favor, tente novamente.');
        }
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
        return passwordRegex.test(password);
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');
        setPasswordError('');

        if (password !== confirmPassword) {
            setError('As senhas não coincidem.');
            return;
        }

        if (!validatePassword(password)) {
            setPasswordError('A senha deve ter no mínimo 8 caracteres, incluindo pelo menos um dígito e uma letra maiúscula.');
            return;
        }

        try {
            await confirmPasswordReset(auth, oobCode, password);
            setSuccessMessage('Senha redefinida com sucesso. Agora você pode fazer login com sua nova senha.');
        } catch (error) {
            console.error('Erro ao redefinir a senha:', error);
            setError('Erro ao redefinir a senha. Por favor, tente novamente.');
        }
    };

    useEffect(() => {
        if (password === confirmPassword && password !== '') {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [password, confirmPassword]);

    return (
        <div className='reset-password'>
            {actionMode === 'resetPassword' ? (
                <form onSubmit={handleResetPassword} className='form-muda'>

                <div className="logo-titulo-Muda">
                    <h2>Redefinir Senha</h2>
            
                    <img src={logo} alt="Logo" className="logo-Login"/>
                </div>
                    
                    {email && <p className='email-Muda'>Email: {email}</p>}
                    <form className='form-resetpass'>
                    <div className='new-pass'>
                        <label>Nova Senha:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setPasswordError('');
                            }}
                            required
                        />
                    </div>
                    <div className='new-pass'>
                        <label>Confirme a Nova Senha:</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                                setPasswordError('');
                            }}
                            required
                        />
                    </div>
                </form>

                    {passwordError && <p className="error">{passwordError}</p>}
                    {successMessage && <p className="success">{successMessage}</p>}
                    {error && <p className="error">{error}</p>}
                    
                    <button type="submit" disabled={isButtonDisabled} className='Mudar'>Redefinir Senha</button>
                    
                    
                </form>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
};

export default ActionHandler;
