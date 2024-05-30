import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
    width: 600px;
    margin: 30px auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border: 1px solid grey;
`;

export const TableSections = styled.th`
    background-color: #499a9a;
    padding: 10px 0;
    color: white;

`;

export const TableBody = styled.tbody`
    background-color: lightgrey;

    & tr:nth-child(2n) {
        background-color: #aaa9a9;
    }
`;

export const Value = styled.td`
    text-align: center;
    padding: 8px 0;
`;