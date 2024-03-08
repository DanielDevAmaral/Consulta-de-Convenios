import React, { useState } from 'react';
import JsonData from 'C:\\Users\\dlamaral\\Desktop\\Automatizações\\compras\\src\\Unimed Sergipe.json'; // Import JsonData


function JsonDataDisplay() {
  const [searchInput, setSearchInput] = useState("");

  const filterData = (data, searchText) => {
    return data.filter(
      (info) =>
        info.id.toString().includes(searchText) ||
        info.name.toLowerCase().includes(searchText.toLowerCase()) ||
        info.city.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const DisplayData = filterData(JsonData, searchInput).map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>{info.city}</td>
      </tr>
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Pesquisar..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Sr.NO</th>
            <th>Nome</th>
            <th>Cidade</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default JsonDataDisplay;
