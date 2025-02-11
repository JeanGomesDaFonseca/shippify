import React, { useEffect, useState } from "react";
import { useTable, useGlobalFilter } from "react-table";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { searchTerm } = useOutletContext() || { searchTerm: "" }; 
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/data")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  const columns = React.useMemo(
    () => [
      { Header: "Nome do Motorista", accessor: "driver_first_name" },
      { Header: "Sobrenome do Motorista", accessor: "driver_last_name" },
      { Header: "Modelo do Veículo", accessor: "vehicle_model" },
      { Header: "Placa", accessor: "vehicle_plate" },
      { Header: "Empresa", accessor: "company_name" }
    ],
    []
  );
  

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter);

  useEffect(() => {
    setGlobalFilter(searchTerm);
  }, [searchTerm, setGlobalFilter]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Lista de Motoristas, Veículos e Empresas</h1>
      <table
        {...getTableProps()}
        style={{ width: "80%", margin: "auto", borderCollapse: "collapse" }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th key={column.id}
                  {...column.getHeaderProps()}
                  style={{ borderBottom: "2px solid black", padding: "10px" }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr{...row.getRowProps()} key={row.id} style={{ borderBottom: "1px solid gray" }}>
                {row.cells.map((cell) => (
                  <td key={cell.id} {...cell.getCellProps()} style={{ padding: "10px" }}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
