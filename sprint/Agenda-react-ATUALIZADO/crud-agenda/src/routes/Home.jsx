import React, { useEffect, useState } from 'react'

import { Link } from "react-router-dom";

// app é usado para importar o DB para o projeto
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

const Home = () => {
    // informações para se conectar com o banco de dados
    const firebaseApp = initializeApp ({

        apiKey: "AIzaSyA7AJxQS42BeLbfD1XQp2HGvKljGM5CodE",
        authDomain: "sprint-4a63c.firebaseapp.com",
        projectId: "sprint-4a63c",
        // storageBucket: "sprint-4a63c.appspot.com",
        // messagingSenderId: "768478611056",
        // appId: "1:768478611056:web:21bab2a24eb71b78be16b5",
        // measurementId: "G-T3B95EZG9L"
    });

    return (
        <main className='Home-page'>
            <h1>🌸 Agenda 🌸</h1>
        </main>
    );
}

export default Home;