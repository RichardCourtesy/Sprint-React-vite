import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc, getDocs, query, collection, where } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '../components/firebaseConfig';
import '../App.css';

const defaultProfileImageUrl = 'https://firebasestorage.googleapis.com/v0/b/sprint-react-vite.appspot.com/o/fotoStart.png?alt=media&token=df66e3fd-8714-4c6f-8943-6cf3d11152fc';

const SubmitCadastro = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState(0);
    const [pais, setPais] = useState('');
    const [email, setEmail] = useState('');
    const [repetemail, setRepetEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repetpassword, setRepetPassword] = useState('');
    const [cpf, setCpf] = useState('');

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [passwordError, setPasswordError] = useState('');
    const [cpfError, setCpfError] = useState('');
    const [generalError, setGeneralError] = useState('');
    const [ageError, setAgeError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        // Verifica se os campos de email e senha correspondentes são iguais
        if (email === repetemail && password === repetpassword && email !== '' && password !== '') {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [email, repetemail, password, repetpassword]);

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
        return passwordRegex.test(password);
    };

    const checkCpfExists = async (cpf) => {
        const q = query(collection(db, 'Cadastro'), where('cpf', '==', cpf));
        const querySnapshot = await getDocs(q);
        return !querySnapshot.empty;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validação dos campos obrigatórios
        if (!name || !surname || !age || !pais || !email || !repetemail || !password || !repetpassword || !cpf) {
            alert('Todos os campos são obrigatórios!');
            return;
        }

        if (!validatePassword(password)) {
            setPasswordError('A senha deve ter no mínimo 8 caracteres, incluindo pelo menos um dígito e uma letra maiúscula.');
            return;
        }

        if (cpf.length !== 11) {
            setCpfError('O CPF deve ter 11 dígitos.');
            return;
        }

        const cpfExists = await checkCpfExists(cpf);
        if (cpfExists) {
            setCpfError('CPF já cadastrado. Por favor, use um CPF diferente.');
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
                cpf,
                profileImageUrl: defaultProfileImageUrl,
                timestamp: new Date()
            });

            // Resetar os campos após o envio
            setName('');
            setSurname('');
            setAge('');
            setPais('');
            setEmail('');
            setRepetEmail('');
            setPassword('');
            setRepetPassword('');
            setCpf('');

            setPasswordError('');
            setCpfError('');
            setGeneralError('');

// Navegar para a página de login após o sucesso do cadastro
navigate('/Login', { replace: true });
} catch (error) {
    console.error('Erro ao criar usuário: ', error);
    if (error.code === 'auth/email-already-in-use') {
        setGeneralError('O email já está em uso. Por favor, use um email diferente.');
    } else {
        setGeneralError('Erro ao cadastrar usuário. Tente novamente.');
    }
}
};

    return (
        <section>
        <form onSubmit={handleSubmit} >
            <div className='form-cadastro'>
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
                    <p>CPF:</p>
                    <input
                        type="number"
                        value={cpf}
                        placeholder="Digite seu CPF"
                        maxLength={11}
                            onChange={(e) => {
                                const valor = e.target.value;
                                if (valor.length <= 11)  {
                                    setCpf(e.target.value);
                                    setCpfError('');
                                } else {
                                    setAgeError('A idade deve ter no máximo 3 dígitos.');
                                }
                            }}
                        required
                    />
                </label>

                <label>
                    <p>Idade:</p>
                    <input
                        type="number"
                        value={age}
                        placeholder="Digite sua idade"
                        max={999}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (value.length <= 3) {
                                setAge(value);
                                setAgeError('');
                            } else {
                                setAgeError('A idade deve ter no máximo 3 dígitos.');
                            }
                        }}
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
                    <p>Repita seu Email:</p>
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
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setPasswordError('');
                        }}
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

                <label>
                    <button type="submit" className="cadastrar" disabled={isButtonDisabled}>Cadastrar</button>               
                </label>
                


            </div>
        </form>

        <div>
        {passwordError && <p className="error">{passwordError}</p>}
        {cpfError && <p className="error">{cpfError}</p>}
        {generalError && <p className="error">{generalError}</p>}

        </div>
        </section>
        
    );
};

export default SubmitCadastro;
