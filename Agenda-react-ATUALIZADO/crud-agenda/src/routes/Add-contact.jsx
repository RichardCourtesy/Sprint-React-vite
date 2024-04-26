import React, { useEffect, useState } from 'react'

import { Link } from "react-router-dom";

// app é usado para importar o DB para o projeto
import { initializeApp } from "firebase/app";

// firestore é usado para se comunicar com o DB
import { collection, getDocs, getFirestore, addDoc, doc, deleteDoc, } from "firebase/firestore";

const Add_contact = () => {
    const firebaseApp = initializeApp ({
        apiKey: "AIzaSyC7x2BVIWt8_RmH4H2zYKgccr48XcNHQGY",
        authDomain: "agenda-react-5cf22.firebaseapp.com",
        projectId: "agenda-react-5cf22",
    });

    // iniciar variável para interagir com o banco de dados passando as informações da variável firebaseApp (chave e o krl do banco de dados)
    const db = getFirestore(firebaseApp)

    // usado para saber a tabela a qual se conectar no DB
    const userCollectionRef = collection(db, "Contatos");

    const [users, setUsers] = useState([])
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [tell, setTell] = useState("")
    const [obs, setObs] = useState("")

    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Adiciona os dados do usuário no Firestore
          await addDoc(userCollectionRef, {
            nome, 
            email, 
            tell,
            obs,
          });
    
          // Limpa os campos do formulário após a inserção
          window.location.href='/'
        } catch (error) {
          console.error('Erro ao adicionar usuário:', error);
        }
      };
    
      return (
        <div className='Div-add-users'>
            <Link to="/" className='botao-voltar'>Voltar</Link>

            <h1>Adicionar contato</h1>

            <form onSubmit={handleFormSubmit} className="form-add-user">
                <div className="form-floating mb-3">
                    <input 
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)} 
                    />
                    <label htmlFor="floatingInput">Nome</label>
                </div>
                <div className="form-floating mb-3">
                    <input 
                        type="email" 
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="Telefone" 
                        value={tell}
                        onChange={(e) => setTell(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Telefone</label>
                </div>
                <div className="form-floating">
                    <textarea 
                        className="form-control" 
                        id="floatingTextarea2" 
                        placeholder="Observações..." 
                        value={obs}
                        onChange={(e) => setObs(e.target.value)}
                    /> {/* colocar o a altura como 100px no css do textarea */}
                    <label htmlFor="floatingInput">Observações...</label>
                </div>

                <button type="submit" id='button-register-user'>Cadastrar</button>
            </form>
            </div>
        );
}

export default Add_contact;