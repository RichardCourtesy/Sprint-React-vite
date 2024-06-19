//createContext: O createContext é usado para passar dados que podem 
//ser considerados "globais" para toda a árvore de componentes,sem a 
//necessidade de passar props manualmente em cada nível.

//useContext: É um hook do React usado para acessar o contexto 
//AuthContext dentro de outros componentes.

//AuthProvider: Fornece o contexto de autenticação para toda a 
//aplicação. Utiliza useState para gerenciar o estado do usuário 
//atual (currentUser) e useEffect para escutar mudanças no estado
//de autenticação através de onAuthStateChanged.

//useAuth: Hook personalizado que retorna o contexto AuthContext utilizando
//useContext, permitindo que outros componentes acessem o estado currentUser.

import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../components/firebaseConfig';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);