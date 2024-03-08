import React, { useState } from 'react';
import JsonData from 'C:\\Users\\dlamaral\\Desktop\\Automatizações\\compras\\src\\Unimed Nacional.json'; // Import JsonData
import Navbar from "C:\\Users\\dlamaral\\Desktop\\Automatizações\\compras\\src\\components\\navbar"
import logo from "C:\\Users\\dlamaral\\Desktop\\Automatizações\\compras\\src\\assets\\images\\marca.webp"
import "./styles/Global.css"


function Unat() {
  const [searchInput, setSearchInput] = useState("");

  const filterData = (data, searchText) => {
    return data.filter(
      (info) =>
        info.Codigo.toLowerCase().includes(searchText) ||
        info.Rede.toLowerCase().includes(searchText.toLowerCase()) ||
        info.Abrangencia.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const DisplayData = filterData(JsonData, searchInput).map((info) => {
    return (

      <tr>
        <td>{info.Codigo}</td>
        <td className='nivel'>{info.Rede}</td>
        <td className='prod'>{info.Abrangencia}</td>
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
            <th>Código</th>
            <th>Rede</th>
            <th>Abrangência</th>

          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default Unat;
