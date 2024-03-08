import React, { useState } from 'react';
import JsonData from 'C:\\Users\\dlamaral\\Desktop\\Automatizações\\compras\\src\\Life Empresarial.json'; // Import JsonData
import Navbar from "C:\\Users\\dlamaral\\Desktop\\Automatizações\\compras\\src\\components\\navbar"
import logo from "C:\\Users\\dlamaral\\Desktop\\Automatizações\\compras\\src\\assets\\images\\marca.webp"
import "./styles/Global.css"


function Life() {
  const [searchInput, setSearchInput] = useState("");

  const filterData = (data, searchText) => {
    return data.filter(
      (info) =>
        info.Produto.toLowerCase().includes(searchText) ||
        info.Classificacao.toLowerCase().includes(searchText.toLowerCase()) ||
        info.Abrangencia.toLowerCase().includes(searchText.toLowerCase()) ||
        info.acomodacao.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const DisplayData = filterData(JsonData, searchInput).map((info) => {
    return (

      <tr>
        <td>{info.Produto}</td>
        <td className='nivel'>{info.Classificacao}</td>
        <td className='prod'>{info.Abrangencia}</td>
        <td className='acom'>{info.acomodacao}</td>
      </tr>
    );
  });

  return (
    <div>

        <Navbar 
          image={logo}
        />

        <h1>ATENDEMOS TODOS OS PRODUTOS ABAIXO</h1>

      <div className="search" >
        <input
          type="text"
          placeholder="Pesquise o convênio..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Classificação</th>
            <th>Abrangência geográfica</th>
            <th>Padrão de acomodação</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default Life;
