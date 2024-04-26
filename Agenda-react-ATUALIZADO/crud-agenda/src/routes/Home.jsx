import React, { useEffect, useState } from 'react'

import { Link } from "react-router-dom";

// app é usado para importar o DB para o projeto
import { initializeApp } from "firebase/app";

// firestore é usado para se comunicar com o DB
import { collection, getDocs, getFirestore, addDoc, doc, deleteDoc, } from "firebase/firestore";

const Home = () => {
    const [users, setUsers] = useState([])
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [tell, setTell] = useState("")
    const [obs, setObs] = useState("")

    // informações para se conectar com o banco de dados
    const firebaseApp = initializeApp ({
        apiKey: "AIzaSyC7x2BVIWt8_RmH4H2zYKgccr48XcNHQGY",
        authDomain: "agenda-react-5cf22.firebaseapp.com",
        projectId: "agenda-react-5cf22",
    });

    // iniciar variável para interagir com o banco de dados passando as informações da variável firebaseApp (chave e o krl do banco de dados)
    const db = getFirestore(firebaseApp)

    // usado para saber a tabela a qual se conectar no DB
    const userCollectionRef = collection(db, "Contatos");

    useEffect(() => {
        const getUsers = async () => {
          // data = listagem de usuários buscado no DB
          const data = await getDocs(userCollectionRef)
          setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getUsers();
    }, [])

    async function deleteUser(id) {
        const userDoc = doc(db, 'Contatos', id);
        await deleteDoc(userDoc);
        window.location.reload();
    }

    return (
        <main className='Home-page'>
            <h1>🌸 Agenda 🌸</h1>

            <div className="table-container">
                <table className="Tabela-contatos">
                    <thead>
                        <tr>
                            <th scope='col'>Nome</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // verifica a quantidade de linhas que retorna, caso for 0 (vazio) retorna uma msg falando que não tem nenhum contato
                            users.length === 0 ? (
                                <tr colSpan='3' className='msg-none-contacts'>
                                    <td>Você ainda não adicionou nenhum contato...</td>
                                </tr>
                            ) : (
                                // aqui é executado quando retorna mais que 0 linhas (ou seja, tem contatos adicionados)
                                users.map(user => {
                                    return(
                                    <tr key={user.id}>
                                        <td>{user.nome}</td>
                                        <td>{user.email}</td>
                                        <td className="actions">
                                            <button className='action-button delete' onClick={() => deleteUser(user.id)}>
                                                Deletar
                                            </button>
                                            {/* chama o link da página de edição de contato e logo após chama o id do mesmo */}
                                            <Link className="action-button edit" to={`Edit-contact/${user.id}`}>
                                                Editar
                                            </Link>
                                        </td>
                                    </tr>
                                    )
                                })
                            )
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </main>
    );
}

export default Home;