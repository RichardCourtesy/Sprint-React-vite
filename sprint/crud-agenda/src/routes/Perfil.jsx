import React, { useEffect, useState } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth, db, storage } from '../components/firebaseConfig';
import Logout from '../components/Logout';

import '../App.css';
import '../components/CSS/Perfil.css';

import ImagemPadrao from '../assets/FotoPadrao.png';

const Perfil = () => {
    //userData: Armazena os dados do usuário.
    const [userData, setUserData] = useState(null);
    //error: Armazena mensagens de erro.
    const [error, setError] = useState('');
    //uploading: Indica se uma imagem está sendo enviada.
    const [uploading, setUploading] = useState(false);
    //uploadError: Armazena erros relacionados ao upload da imagem.
    const [uploadError, setUploadError] = useState('');
    //fileInputKey: Utilizado para resetar o input de arquivo após um upload.
    const [fileInputKey, setFileInputKey] = useState(Date.now());

    //useEffect busca os dados do usuário do Firestore.
    useEffect(() => {
        const fetchUserData = async () => {
            const uid = localStorage.getItem('userUid');
            if (!uid) {
                setError('Primeiro faça login.');
                return;
            }

            try {
                const docRef = doc(db, 'Cadastro', uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setUserData(docSnap.data());
                } else {
                    setError('Nenhum documento encontrado.');
                }
            } catch (error) {
                console.error('Erro ao buscar dados do usuário:', error);
                setError('Erro ao buscar dados do usuário.');
            }
        };

        fetchUserData();
    }, []);

    //Manipuladores de Eventos

    //Este manipulador é chamado quando um usuário seleciona uma imagem para upload.
    //Envia a imagem para o Firebase Storage e atualiza a URL da imagem no Firestore.
    //Atualiza o estado userData com a nova URL da imagem e reseta o input de arquivo.
    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setUploading(true);
        setUploadError('');

        try {
            const user = auth.currentUser;
            const storageRef = ref(storage, `profileImages/${user.uid}`);
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);

            await updateDoc(doc(db, 'Cadastro', user.uid), {
                profileImageUrl: downloadURL,
            });

            setUserData((prevData) => ({
                ...prevData,
                profileImageUrl: downloadURL,
            }));
            
            setFileInputKey(Date.now());
        } catch (error) {
            console.error('Erro ao fazer upload da imagem: ', error);
            setUploadError('Erro ao fazer upload da imagem. Tente novamente.');
        }

        setUploading(false);
    };

    //Este manipulador é usado para remover a imagem de perfil.
    //Remove a URL da imagem do Firestore e atualiza o estado userData.
    const handleImageRemove = async () => {
        setUploading(true);
        setUploadError('');

        try {
            const user = auth.currentUser;

            await updateDoc(doc(db, 'Cadastro', user.uid), {
                profileImageUrl: '',
            });

            setUserData((prevData) => ({
                ...prevData,
                profileImageUrl: '',
            }));

            setFileInputKey(Date.now());
        } catch (error) {
            console.error('Erro ao remover a imagem: ', error);
            setUploadError('Erro ao remover a imagem. Tente novamente.');
        }

        setUploading(false);
    };

    if (error) {
        return <div>{error}</div>;
    }

    if (!userData) {
        return <div>Carregando...</div>;
    }

    return (
        <section className='section-Perfil'>
            <div className='div-perfil'>
                <div className="TitleImagem">
                    <h2>Perfil</h2>
                    <div className="ImagemPerfil">
                        {userData.profileImageUrl ? (
                            <img src={userData.profileImageUrl} alt="Profile" className='profile-image' />
                        ) : (
                            <img src={ImagemPadrao} alt="Profile" className='profile-image' />
                        )}
                    </div>
                    <label
                        htmlFor="file-upload"
                        className={`file-upload-label ${uploading ? 'disabled' : ''}`}
                    >
                        <i className="bi bi-pencil-square"></i> Mudar Imagem de Perfil
                    </label>
                    <input
                        key={fileInputKey}
                        id="file-upload"
                        type="file"
                        onChange={handleImageUpload}
                        disabled={uploading}
                        className='EnviaFoto'
                    />
                    {userData.profileImageUrl && (
                        <button onClick={handleImageRemove} disabled={uploading} className='remove-image-button'>
                            Remover imagem
                        </button>
                    )}
                </div>
                <div className='Identidade'>
                    <div className='Icon-pessoa'>
                        <i className="bi bi-person"></i>
                        <p>Nome: {userData.name}</p>
                    </div>
                    <p>Sobrenome: {userData.surname}</p>
                    <p>Idade: {userData.age}</p>
                </div>
                <div className='Text-icon'>
                    <i className="bi bi-globe-americas"></i>
                    <p>País: {userData.pais}</p>
                </div>
                <div className='Text-icon'>
                    <i className="bi bi-at"></i>
                    <p>Email: {userData.email}</p>
                </div>
                <div className='Text-icon'>
                    <i className="bi bi-person-vcard"></i>
                    <p>CPF: {userData.cpf}</p>
                </div>
                <div>
                    {uploadError && <p className="error">{uploadError}</p>}
                </div>
            </div>
            <div className='Logout'>
                <Logout />
            </div>
        </section>
    );
};

export default Perfil;
