import React, { useEffect, useState } from 'react'

import { Link, useParams } from "react-router-dom";

// app é usado para importar o DB para o projeto
import { initializeApp } from "firebase/app";

// firestore é usado para se comunicar com o DB
import { collection, getDoc, getFirestore, addDoc, doc, deleteDoc, updateDoc, } from "firebase/firestore";

const Edit_contact = () => {
    // informações para se conectar com o banco de dados
    const firebaseApp = initializeApp ({
        apiKey: "AIzaSyC7x2BVIWt8_RmH4H2zYKgccr48XcNHQGY",
        authDomain: "agenda-react-5cf22.firebaseapp.com",
        projectId: "agenda-react-5cf22",
    });

    // iniciar variável para interagir com o banco de dados passando as informações da variável firebaseApp (chave e o krl do banco de dados)
    const db = getFirestore(firebaseApp)

    // recupera o id do usuário pela URL
    const { id } = useParams();
    const [contact, setContact] = useState({ nome: '', email: '', tell: '', obs: '' });
    
    useEffect(() => {
        async function fetchContact() {
            try {
                // recupera os dados do contato pela id recuperada da URL
                const contactDoc = await getDoc(doc(db, 'Contatos', id));
                if (contactDoc.exists()) {
                    // atualiza o estado do contato com os dados recuperados pelo id
                    setContact(contactDoc.data());
                } else {
                    window.location.href = '/error/'
                }
            } catch (error) {
                console.error('Erro ao buscar contato: ', error);
            }
        }

        fetchContact(); //chama a função
    }, [id]); //executa o efeito sempre que o ID da url muda

    const handleInputChange = (e) => {
        const { name, value } = e.target; //Extrai o nome e o valor do input que foi alterado
        setContact(prevContact => ({
            ...prevContact,
            [name]: value //atualiza o estado do contato com os novos valores alterados
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateDoc(doc(db, "Contatos", id), contact); //atualiza os dados do contato no banco de dados
            window.location.href = '/'
        } catch (error) {
            console.error('Erro ao atualizar contato: ', error);
        }
    };

    return (
        <div className='Div-add-users'>
            <Link to="/" className='botao-voltar'>Voltar</Link>

            <h1>Editar Contato</h1>
            <form onSubmit={handleSubmit} className="form-add-user">
                <div className="form-floating mb-3">
                    <input 
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Nome"
                        value={contact.nome}
                        name='nome'
                        onChange={handleInputChange}
                    />
                    <label htmlFor="floatingInput">Nome</label>
                </div>
                <div className="form-floating mb-3">
                    <input 
                        type="email" 
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="Email" 
                        value={contact.email}
                        name='email'
                        onChange={handleInputChange}
                    />
                    <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="Telefone" 
                        value={contact.tell}
                        name='tell'
                        onChange={handleInputChange}
                    />
                    <label htmlFor="floatingInput">Telefone</label>
                </div>
                <div className="form-floating">
                    <textarea 
                        className="form-control" 
                        id="floatingTextarea2" 
                        placeholder="Observações..." 
                        value={contact.obs}
                        name='obs'
                        onChange={handleInputChange}
                    /> {/* colocar o a altura como 100px no css do textarea */}
                    <label htmlFor="floatingInput">Observações...</label>
                </div>
                <button type="submit" id='button-register-user'>Salvar Alterações</button>
            </form>
        </div>
    );
}

export default Edit_contact