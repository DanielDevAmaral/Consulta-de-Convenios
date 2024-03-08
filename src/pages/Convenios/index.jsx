import React from 'react';
import "./styles/Convenios.css"
import Navbar from '../../components/navbar';
import logo from "../../assets/images/marca.webp";
import { Link } from 'react-router-dom';

const Convenios = (props) => {
    return (
      <>

    <Navbar 
          image={logo}
        />

        <h1>SELECIONE O CONVÊNIO</h1>

      <div className="main-container">
        
        <a href="google.com.br" className='link-barao'>
            <section className="card">
                <div className="image">
                    <img src='https://conteudo.imguol.com.br/c/noticias/09/2018/11/05/bradesco-anuncia-uma-modernizacao-de-sua-marca-1541452912545_v2_1920x1357.jpg' alt="" />

                </div>
                <div className="content">
                    <p>BRADESCO</p>
                </div>
            </section>
        </a>

        <a href="google.com.br" className='link-barao'>
            <section className="card">
                <div className="image">
                    <img src='https://site-adufs.s3.amazonaws.com/uploads/2021/02d92f9526b9b2e6e3e9f4ddc486b215.png' alt="" />

                </div>
                <div className="content">
                    <p>UNIMED SERGIPE</p>
                </div>
            </section>
        </a>

        <Link to="/UnimedNacional" className='link'>
            <section className="card">
                <div className="image">
                    <img src='https://site-adufs.s3.amazonaws.com/uploads/2021/02d92f9526b9b2e6e3e9f4ddc486b215.png' alt="" />

                </div>
                <div className="content">
                    <p>UNIMED NACIONAL</p>
                </div>
            </section>
            </Link>

        <a href="google.com.br" className='link-barao'>
            <section className="card">
                <div className="image">
                    <img src='https://consultvida.com.br/blog/wp-content/uploads/2022/06/sulamerica2-1024x350.jpg' alt="" />
                </div>
                <div className="content">
                    <p>SULAMÉRICA</p>
                </div>
            </section>
        </a>

        <Link to="/Amil" className='link'>
            <section className="card">
                <div className="image">
                <img src='https://play-lh.googleusercontent.com/lcdNm0UDhiEZFBOdscJap7agVIlOadFlVESsxBhTnapD54zg7za1Y0pMotPVpBXU8yE' alt="" />

                </div>
                <div className="content">
                    <p>AMIL</p>
                </div>
            </section>
        </Link>

        <Link to="/Life" className='link'>
            <section className="card">
                <div className="image">
                    <img src='https://www.valordeplanosdesaude.com.br/wp-content/uploads/2017/12/Life-Empresarial-1.png' alt="" />

                </div>
                <div className="content">
                    <p>LIFE SAÚDE</p>
                </div>
            </section>
        </Link>

      </div>
      </>
    );
  };
  
  export default Convenios;