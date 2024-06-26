import React from "react";
import "../components/CSS/Cursos.css"
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";

const Cursos = () => {
    return (
        <main className="Curso_container">
            <h1>Cursos</h1>

            <section className="Seus_cursos">

                <div className="Title">
                    <h2>Cursos já adquiridos:</h2>
                

                    <div className="Search">
                        <p>Procurando algo especifico?</p>
                            <form action="/Search" method="GET">
                                <input type="text" name="busca" placeholder="Pesquisar..."></input>
                                    <button type="submit">Buscar</button>
                            </form> 
                    </div>
                </div>
                     <Carousel />
            </section>

            <section className="Recomend_cursos">

                     <div className="Title">
                    <h2>Tecnologia:</h2>

                     <div className="Search">
                        <p>Procurando algo especifico?</p>
                            <form action="/Search" method="GET">
                                <input type="text" name="busca" placeholder="Pesquisar..."></input>
                                    <button type="submit">Buscar</button>
                            </form> 
                    </div>
                </div>
                <div className="carousel2">
                     <Carousel />
                     </div>
            </section>

            <section className="Recomend_cursos">

                     <div className="Title">
                    <h2>Design:</h2>

                     <div className="Search">
                        <p>Procurando algo especifico?</p>
                            <form action="/Search" method="GET">
                                <input type="text" name="busca" placeholder="Pesquisar..."></input>
                                    <button type="submit">Buscar</button>
                            </form> 
                    </div>
                </div>
                <div className="carousel2">
                     <Carousel />
                     </div>
            </section>

            <section className="Recomend_cursos">

                     <div className="Title">
                    <h2>Mais vendidos:</h2>

                     <div className="Search">
                        <p>Procurando algo especifico?</p>
                            <form action="/Search" method="GET">
                                <input type="text" name="busca" placeholder="Pesquisar..."></input>
                                    <button type="submit">Buscar</button>
                            </form> 
                    </div>
                </div>
                <div className="carousel2">
                     <Carousel />
                     </div>
            </section>
        </main>
    );
}

export default Cursos;