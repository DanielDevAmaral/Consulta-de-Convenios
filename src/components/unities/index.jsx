import React from 'react';
import "./unities.css"
import { Link } from 'react-router-dom';

const unities = (props) => {

    return (
      <>

      <h1>SELECIONE A SUA UNIDADE</h1>

      <div className="main-container">

        <Link to="/Convenios" className='link-barao'> 
            <section className="card">
                <div className="image">
                    <img src='https://redeprimavera.com.br/wp-content/uploads/2022/10/Hospital-Primavera-1200x675.jpg' alt="" />

                </div>
                <div className="content">
                    <p>HOSPITAL PRIMAVERA</p>
                </div>
            </section>
        </Link>

        <a href="google.com.br" className='link-barao'>
            <section className="card">
                <div className="image">
                    <img src='https://redeprimavera.com.br/wp-content/uploads/2022/12/UNIDADE_DIAGNOSE_BARAO-1200x749.jpg' alt="" />

                </div>
                <div className="content">
                    <p>HOSPITAL DO CORAÇÃO</p>
                </div>
            </section>
        </a>

        <a href="google.com.br" className='link-barao'>
            <section className="card">
                <div className="image">
                    <img src='https://redeprimavera.com.br/wp-content/uploads/2022/10/Diagnose-Rua-Campos-1200x900.jpg' alt="" />
                </div>
                <div className="content">
                    <p>CLINICA BARÃO</p>
                </div>
            </section>
        </a>

        <a href="google.com.br" className='link-barao'>
            <section className="card">
                <div className="image">
                <img src='https://redeprimavera.com.br/wp-content/uploads/2022/12/Policlin-Augusto-Franco-1200x798.jpg' alt="" />

                </div>
                <div className="content">
                    <p>CLINICA AUGUSTO FRANCO</p>
                </div>
            </section>
        </a>

        <a href="google.com.br" className='link-barao'>
            <section className="card">
                <div className="image">
                    <img src='https://redeprimavera.com.br/wp-content/uploads/2022/10/Policlin-Siqueira-Campos-1200x1044.jpg' alt="" />

                </div>
                <div className="content">
                    <p>CLINICA SIQUEIRA CAMPOS</p>
                </div>
            </section>
        </a>

        <a href="google.com.br" className='link-barao'>
            <section className="card">
                <div className="image">
                    <img src='https://redeprimavera.com.br/wp-content/uploads/2022/10/Clinica-Primavera-Alameda-das-Arvores-1200x801.jpg' alt="" />

                </div>
                <div className="content">
                    <p>CLINICA ALAMEDA</p>
                </div>
            </section>
        </a>

        <a href="google.com.br" className='link-barao'>
            <section className="card">
                <div className="image">
                    <img src='https://redeprimavera.com.br/wp-content/uploads/2022/12/Policlin-Itabaiana.jpg' alt="" />

                </div>
                <div className="content">
                    <p>CLINICA ITABAIANA</p>
                </div>
            </section>
        </a>
    
      </div>
      </>
    );
  };
  
  export default unities;