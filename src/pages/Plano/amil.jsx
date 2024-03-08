import React, { useState } from 'react';
import JsonData from 'C:\\Users\\dlamaral\\Desktop\\Automatizações\\compras\\src\\Amil.json'; // Import JsonData
import Navbar from "C:\\Users\\dlamaral\\Desktop\\Automatizações\\compras\\src\\components\\navbar"
import logo from "C:\\Users\\dlamaral\\Desktop\\Automatizações\\compras\\src\\assets\\images\\marca.webp"
import "./styles/Global.css"


function Amil() {
  const [searchInput, setSearchInput] = useState("");

  const filterData = (data, searchText) => {
    return data.filter(
      (info) =>
        info.Rede.toLowerCase().includes(searchText) ||
        info.Nivel.toLowerCase().includes(searchText.toLowerCase()) ||
        info.Produto.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const DisplayData = filterData(JsonData, searchInput).map((info) => {
    return (

      <tr>
        <td>{info.Rede}</td>
        <td className='nivel'>{info.Nivel}</td>
        <td className='prod'>{info.Produto}</td>
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
            <th>Rede</th>
            <th >Nivel</th>
            <th >Produto</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default Amil;
