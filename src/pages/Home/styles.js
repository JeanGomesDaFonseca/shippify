import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin-top: 20px;
  padding: 20px;
`;

export const Table = styled.table`
  width: 80%;
  margin: auto;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Th = styled.th`
  background: #f4f4f4;
  padding: 12px;
  text-align: center;
  border-bottom: 2px solid #ddd;
  font-weight: bold;
`;

export const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

export const TrHover = styled.tr`
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: #f0f0f0;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;