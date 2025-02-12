import React, { useEffect, useState } from "react";
import { useTable, useGlobalFilter, useFilters } from "react-table";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
import * as S from "./styles";

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
        width: "80%",
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
    <S.Container>
      <S.Title>Lista de Motoristas, Veículos e Empresas</S.Title>
      <S.Table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <S.Th key={column.id} {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </S.Th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <S.TrHover
                {...row.getRowProps()}
                key={row.id}
                style={{
                  background: row.index % 2 === 0 ? "#fafafa" : "white",
                }}
              >
                {row.cells.map((cell) => (
                  <S.Td key={cell.column.id} {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </S.Td>
                ))}
              </S.TrHover>
            );
          })}
        </tbody>
      </S.Table>
    </S.Container>
  );
};

export default Home;