import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '../components/firebaseConfig';
import '../App.css';

const SubmitCadastro = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState(0);
    const [pais, setPais] = useState('');
    const [email, setEmail] = useState('');
    const [repetemail, setRepetEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repetpassword, setRepetPassword] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        // Verifica se os campos de email e senha correspondentes são iguais
        if (email === repetemail && password === repetpassword && email !== '' && password !== '') {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [email, repetemail, password, repetpassword]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validação dos campos obrigatórios
        if (!name || !surname || !age || !pais || !email || !repetemail || !password || !repetpassword) {
            alert('Todos os campos são obrigatórios!');
            return;
        }

        try {
            // Criar usuário com email e senha no Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Adicionar documento no Firestore com o UID do usuário
            await setDoc(doc(db, 'Cadastro', user.uid), {
                name,
                surname,
                age: parseInt(age),
                pais,
                email,
                timestamp: new Date()
            });

            // Resetar os campos após o envio
            // setName('');
            // setSurname('');
            // setAge(0);
            // setPais('');
            // setEmail('');
            // setRepetEmail('');
            // setPassword('');
            // setRepetPassword('');

            // Navegar para a página de login após o sucesso do cadastro
            navigate('/Login', { replace: true });
        } catch (error) {
            console.error('Erro ao criar usuário: ', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="oo">
                <label>
                    <p>Nome:</p>
                    <input
                        type="text"
                        value={name}
                        placeholder="Digite o seu nome"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>

                <label>
                    <p>Sobrenome:</p>
                    <input
                        type="text"
                        value={surname}
                        placeholder="Digite seu sobrenome"
                        onChange={(e) => setSurname(e.target.value)}
                        required
                    />
                </label>

                <label>
                    <p>Idade:</p>
                    <input
                        type='number'
                        value={age}
                        placeholder="Digite sua idade"
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </label>

                <label>
                    <p>País:</p>
                    <input
                        type="text"
                        value={pais}
                        placeholder="Digite seu pais..."
                        onChange={(e) => setPais(e.target.value)}
                        required
                    />
                </label>

                <label>
                    <p>Email:</p>
                    <input
                        type="email"
                        value={email}
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>

                <label>
                    <p>Repita Seu Email:</p>
                    <input
                        type="email"
                        value={repetemail}
                        placeholder="Digite seu email"
                        onChange={(e) => setRepetEmail(e.target.value)}
                        required
                    />
                </label>

                <label>
                    <p>Senha:</p>
                    <input
                        type="password"
                        value={password}
                        placeholder="Use sua melhor senha"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>

                <label>
                    <p>Repita sua senha:</p>
                    <input
                        type="password"
                        value={repetpassword}
                        placeholder="Digite sua senha"
                        onChange={(e) => setRepetPassword(e.target.value)}
                        required
                    />
                </label>

                <div className="caixa-enviar">
                    <button type="submit" className="oo" disabled={isButtonDisabled}>Cadastrar</button>
                </div>
            </div>
        </form>
    );
};

export default SubmitCadastro;