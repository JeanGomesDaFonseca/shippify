import React, { useEffect, useState } from "react";
import { useTable, useGlobalFilter, useFilters } from "react-table";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
import styles from "./styles";

const DefaultColumnFilter = ({
  column: { filterValue, preFilteredRows, setFilter },
}) => {
  return (
    <input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined); 
      }}
      placeholder={`Buscar...`}
      style={{
        width: "100%",
        padding: "5px",
        borderRadius: "4px",
        border: "1px solid #ddd",
      }}
    />
  );
};

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
      { Header: "Nome do Motorista", accessor: "driver_first_name", Filter: DefaultColumnFilter },
      { Header: "Sobrenome do Motorista", accessor: "driver_last_name", Filter: DefaultColumnFilter },
      { Header: "Modelo do Veículo", accessor: "vehicle_model", Filter: DefaultColumnFilter },
      { Header: "Placa", accessor: "vehicle_plate", Filter: DefaultColumnFilter },
      { Header: "Empresa", accessor: "company_name", Filter: DefaultColumnFilter }
    ],
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
  } = useTable(
    { columns, data, defaultColumn },
    useFilters,
    useGlobalFilter
  );

  useEffect(() => {
    setGlobalFilter(searchTerm);
  }, [searchTerm, setGlobalFilter]);

  return (
    <div style={styles.container}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        Lista de Motoristas, Veículos e Empresas
      </h1>
      <table {...getTableProps()} style={styles.table}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th key={column.id} {...column.getHeaderProps()} style={styles.th}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                key={row.id}
                style={{
                  ...styles.trHover,
                  background: row.index % 2 === 0 ? "#fafafa" : "white",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#f0f0f0")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = row.index % 2 === 0 ? "#fafafa" : "white")
                }
              >
                {row.cells.map((cell) => (
                  <td key={cell.column.id} {...cell.getCellProps()} style={styles.td}>
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